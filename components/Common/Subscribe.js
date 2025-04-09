"use client";

import React from "react";

const Subscribe = () => {
  return (
    <>
      <section
        className="subscribe-area ptb-80"
        style={{ backgroundImage: `url(/images/pattern.png)` }}
      >
        <div className="container">
          <div className="newsletter">
            <h4>Join Our Newsletter</h4>

            <form className="newsletter-form">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email Address"
                name="EMAIL"
              />
              <button className="btn btn-primary" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
