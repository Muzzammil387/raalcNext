"use client";

import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "@/utils/baseUrl";

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  message: "",
};

const Contact = () => {
  const [contact, setContact] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${baseUrl}/api/contact`;
      const { name, email, number, message } = contact;
      const payload = { name, email, number, message };
      const response = await axios.post(url, payload);
      console.log(response.data);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section id="contact" className="contact-area ptb-80 bg-f6f6f6">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <h4>Get in Touch</h4>
            <h2>
              Let&apos;s <span>Contact</span> Us
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-12">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d699.1289800297188!2d18.077942675805485!3d59.32663213203372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d5641a77669%3A0xe02744b36aab9f53!2sExercisplan%204%2C%20111%2049%20Stockholm%2C%20Sweden!5e0!3m2!1sen!2sbd!4v1635073543164!5m2!1sen!2sbd"
                width="100%"
                height="392"
                loading="lazy"
              ></iframe>

              <div className="contact-info">
                <ul>
                  <li>
                    <i className="fa fa-map-marker"></i> Exercisplan 4, 111 49
                    Stockholm, Sweden
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i>
                    <a href="mailto:addax@gmail.com">addax@gmail.com</a>
                  </li>
                  <li>
                    <i className="fa fa-phone"></i>
                    <a href="tel:124412-2445515">(+124)412-2445515</a>
                  </li>
                  <li>
                    <i className="fa fa-fax"></i>
                    <a href="tel:617-241-60055">617-241-60055</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="contact-form">
                <h4>Stay Connected</h4>

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          className="form-control"
                          value={contact.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="text"
                          name="email"
                          placeholder="Email"
                          className="form-control"
                          value={contact.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label htmlFor="number">Phone Number</label>
                        <input
                          type="text"
                          name="number"
                          placeholder="Phone number"
                          className="form-control"
                          value={contact.number}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                          type="text"
                          name="message"
                          placeholder="Message"
                          className="form-control"
                          cols="30"
                          rows="4"
                          value={contact.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <button type="submit" className="btn btn-primary">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
