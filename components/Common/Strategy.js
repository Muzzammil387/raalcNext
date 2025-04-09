"use client";

import React from "react";
import Link from "next/link";

const Strategy = () => {
  return (
    <>
      <section className="strategy-area">
        <div className="container-fluid p-0">
          <div className="row ">
            <div
              className="col-lg-6 col-md-5"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div
                className="image"
                style={{ backgroundImage: `url(/images/about-strategy.jpg)` }}
              ></div>
            </div>

            <div
              className="col-lg-6 col-md-7"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="about-strategy ptb-80">
                <div className="section-title">
                  <h4>Highly Creative Solutions</h4>
                  <h2>
                    About <span>Strategy</span>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>

                <ul>
                  <li>
                    <i className="fa fa-check"></i>Creative Design
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Retina Ready
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Responsive Design
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Modern Design
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Awesome Design
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Digital Marketing & Branding
                  </li>
                </ul>

                <Link href="#" className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Strategy;
