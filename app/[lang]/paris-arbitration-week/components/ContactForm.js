import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    Name_First: "",
    Name_Last: "",
    PhoneNumber_countrycode: "",
    Email: "",
    MultiLine: "",
  });
  
  const [errors, setErrors] = useState({
    Name_First: "",
    Name_Last: "",
    PhoneNumber_countrycode: "",
    Email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
  
    if (!formData.Name_First.trim()) {
      newErrors.Name_First = "First Name is required";
    }
  
    if (!formData.Name_Last.trim()) {
      newErrors.Name_Last = "Last Name is required";
    }
  
    if (!formData.Email.trim()) {
      newErrors.Email = "Email is required";
    } else if (
      !/^[\w]([\w-.+&'/]*)@([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,22}$/.test(
        formData.Email
      )
    ) {
      newErrors.Email = "Invalid email";
    }
  
    if (!formData.PhoneNumber_countrycode.trim()) {
      newErrors.PhoneNumber_countrycode = "Phone is required";
    } else if (
      !/^[+]?[(0-9-. )]+$/.test(formData.PhoneNumber_countrycode)
    ) {
      newErrors.PhoneNumber_countrycode = "Invalid phone number";
    } else if (
      formData.PhoneNumber_countrycode.replace(/\D/g, "").length < 5
    ) {
      newErrors.PhoneNumber_countrycode = "Phone number must be at least 5 digits";
    }
    
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const form = e.target;
    form.submit();
  };

  return (
    <>
      <style jsx>{`
        .form-wrapper {
          padding-right: 50px;
          display: flex;
          justify-content: center;
        }
        form {
          background: white;
          border-radius: 2px;
          width: 100%;
          max-width: 800px;
          font-family: Arial, sans-serif;
        }
        h2 {
          background: #494949;
          color: white;
          padding: 10px 25px;
          font-size: 2em;
          margin-bottom: 20px;
        }
        label {
          font-weight: bold;
          display: block;
          margin-bottom: 5px;
        }
        input,
        textarea {
          width: 100%;
          padding: 10px;
          margin-bottom: 10px;
          border: 1px solid #ccc;
          border-radius: 2px;
        }
        .error {
          color: red;
          font-size: 12px;
          margin-bottom: 10px;
        }
        button {
          padding: 10px 20px;
          color: white;
          background: #dab35c;
          border: none;
          border-radius: 2px;
          cursor: pointer;
          font-size: 20px
        }
        button:hover {
          background: #dab35c;
        }
      `}</style>

      <div className="form-wrapper">
        <form
          action="https://forms.zohopublic.com/raalcraalc1gm1/form/TEST1/formperma/nSjtOEd_kReBZebvq_BN-sRSXq9UA0ZwqeZWu66B-Wc/htmlRecords/submit"
          method="POST"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >

          <label htmlFor="Name_First">
          First Name <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="Name_First"
            value={formData.Name_First}
            onChange={handleChange}
          />
          {errors.Name_First && <p className="error">{errors.Name_First}</p>}

          <label htmlFor="Name_Last">
            Last Name <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="Name_Last"
            value={formData.Name_Last}
            onChange={handleChange}
          />
          {errors.Name_Last && <p className="error">{errors.Name_Last}</p>}

          <label htmlFor="PhoneNumber_countrycode">Phone</label>
          <input
            type="text"
            name="PhoneNumber_countrycode"
            value={formData.PhoneNumber_countrycode}
            onChange={handleChange}
          />
          {errors.PhoneNumber_countrycode && (
            <p className="error">{errors.PhoneNumber_countrycode}</p>
          )}

          <label htmlFor="Email">Email</label>
          <input
            type="text"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
          />
          {errors.Email && <p className="error">{errors.Email}</p>}

          <label htmlFor="MultiLine">Message</label>
          <textarea
            name="MultiLine"
            rows="4"
            value={formData.MultiLine}
            onChange={handleChange}
          ></textarea>

          <div style={{display: "flex", justifyContent: "center"}}>
          <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
