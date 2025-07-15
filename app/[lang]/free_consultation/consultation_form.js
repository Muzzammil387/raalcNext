'use client';

import { useState, useEffect } from 'react';

export default function CustomForm() {
  const ADMINS = ['Salma', 'Courage', 'Hisham', 'Abie', 'Rey', 'Abdul', 'Sahana'];

  async function getNextAdmin() {
    try {
      const res = await fetch('https://api.raalc.ae/api/landing_pages_counter');
      const data = await res.json();
      const index = typeof data.counter === 'number' ? data.counter % ADMINS.length : 0;
      return ADMINS[index];
    } catch (e) {
      console.warn('Failed to fetch counter from API, defaulting to first admin');
      return ADMINS[0];
    }
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredMode: '',
    preferredDate: '',
    assignedAdmin: '',
    origin: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [admin, setAdmin] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  useEffect(() => {
    setSubmitted(false);

    const getAdNumberFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      return (
        params.get('utm_campaign') ||
        params.get('hsa_cam') ||
        params.get('campaignid') ||
        null
      );
    };

    const adNumber = getAdNumberFromUrl();

    if (adNumber && adNumber.trim() !== '') {
      fetch('https://api.raalc.ae/api/get_ad_name', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ad_number: adNumber })
      })
        .then(res => res.json())
        .then(data => {
          setFormData(prev => ({ ...prev, origin: data.data || 'Organic' }));
        })
        .catch(() => {
          setFormData(prev => ({ ...prev, origin: 'Organic' }));
        });
    } else {
      setFormData(prev => ({ ...prev, origin: 'Organic' }));
    }
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!emailPattern.test(formData.email)) newErrors.email = 'Enter a valid email.';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    if (!formData.preferredMode) newErrors.preferredMode = 'Please select a mode.';
    if (!formData.preferredDate) newErrors.preferredDate = 'Please select a date.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      console.log("❌ Validation failed", formData);
      return;
    }

    const selectedAdmin = await getNextAdmin();
    console.log("✅ Selected Admin:", selectedAdmin);

    const payload = {
      ...formData,
      assignedAdmin: selectedAdmin,
      pageUrl: typeof window !== 'undefined' ? window.location.href : '',
      timestamp: new Date().toISOString()
    };

    console.log("📤 Sending data to server:", payload);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await res.json();
      console.log("📬 Server response:", result);

      if (!res.ok || result.ok === false) {
        throw new Error(result.message || `Status ${res.status}`);
      }

      setAdmin(selectedAdmin);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        preferredMode: '',
        preferredDate: '',
        assignedAdmin: '',
        origin: ''
      });
      setErrors({});

      setTimeout(() => {
        setSubmitted(false);
        setAdmin('');
      }, 5000);

    } catch (error) {
      console.error('❌ Submission error:', error);
    }
  };

  const fieldStyle = (field) => ({
    width: '100%',
    border: 'none',
    borderBottom: `2px solid ${errors[field] ? 'red' : '#cfd8e3'}`,
    padding: '0.75rem 0',
    outline: 'none',
    fontSize: '1rem',
    color: '#333',
    backgroundColor: 'transparent'
  });

  const fieldWrapper = {
    marginBottom: '1.5rem',
    textAlign: 'left'
  };

  const labelStyle = {
    display: 'block',
    fontWeight: '600',
    marginBottom: '0.5rem',
    fontSize: '1.05rem'
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      {['name', 'email', 'phone'].map((field) => (
        <div key={field} style={fieldWrapper}>
          <label style={labelStyle} htmlFor={field}>
            {field.charAt(0).toUpperCase() + field.slice(1)}*
          </label>
          <input
            id={field}
            name={field}
            type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
            value={formData[field]}
            onChange={handleChange}
            style={fieldStyle(field)}
          />
          {errors[field] && <span style={{ color: 'red' }}>{errors[field]}</span>}
        </div>
      ))}

      {/* Preferred Mode */}
      <div style={fieldWrapper}>
        <label style={labelStyle} htmlFor="preferredMode">Preferred Consultation Mode*</label>
        <select
          id="preferredMode"
          name="preferredMode"
          value={formData.preferredMode}
          onChange={handleChange}
          style={{
            ...fieldStyle('preferredMode'),
            appearance: 'none',
            WebkitAppearance: 'none',
            MozAppearance: 'none',
            backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='gray' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 0.5rem center'
          }}
        >
          <option value="">Please Select</option>
          <option value="In-person">In-person</option>
          <option value="Phone call">Phone call</option>
          <option value="Online meeting">Online meeting</option>
        </select>
        {errors.preferredMode && <span style={{ color: 'red' }}>{errors.preferredMode}</span>}
      </div>

      {/* Preferred Date */}
      <div style={fieldWrapper}>
        <label style={labelStyle} htmlFor="preferredDate">Preferred Time for Consultation*</label>
        <input
          id="preferredDate"
          name="preferredDate"
          type="date"
          value={formData.preferredDate}
          onChange={handleChange}
          style={fieldStyle('preferredDate')}
        />
        {errors.preferredDate && <span style={{ color: 'red' }}>{errors.preferredDate}</span>}
      </div>

      {/* Message */}
      <div style={fieldWrapper}>
        <label style={labelStyle} htmlFor="message">Brief Description of the Legal Issue*</label>
        <textarea
          id="message"
          name="message"
          rows={1}
          value={formData.message}
          onChange={handleChange}
          style={fieldStyle('message')}
        />
        {errors.message && <span style={{ color: 'red' }}>{errors.message}</span>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={submitted}
        style={{
          background: submitted ? '#ccc' : '#d4af37',
          cursor: submitted ? 'not-allowed' : 'pointer',
          width: '100%',
          color: '#fff',
          border: 'none',
          padding: '0.75rem',
          fontSize: '1rem',
          fontWeight: '600',
          borderRadius: '4px',
          transition: 'background 0.3s'
        }}
      >
        {submitted ? 'Submitted' : 'Submit'}
      </button>

      {/* ✅ Success Message */}
      {submitted && admin && (
        <div
          style={{
            marginTop: "2rem",
            padding: "1rem",
            backgroundColor: "#D4AF37",
            border: "1px solid #FFFFFFFF",
            borderRadius: "6px",
            color: "#FFFFFF",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <span style={{ fontSize: "1.5rem" }}></span>
          <span>Thank you! We will contact you shortly.</span>
        </div>
      )}
    </form>
  );
}
