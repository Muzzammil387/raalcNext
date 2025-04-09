"use client";

import React from "react";
import Link from "next/link";

const Welcome = () => {
  return (
    <>
      <section id="welcome" className="welcome-area ptb-80">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <h4>We are creative</h4>
            <h2>
              Welcome to <span>Addax</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-box">
                <i className="fa-regular fa-pen-to-square icon"></i>
                <h3>Creative Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
                <Link href="#" title="Read More" className="link-btn">
                  <i className="fa fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-box">
                <i className="fa fa-laptop icon"></i>
                <h3>Friendly Codes</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
                <Link href="#" title="Read More" className="link-btn">
                  <i className="fa fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-box">
                <i className="fa fa-life-ring icon"></i>
                <h3>Fast Support</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
                <Link href="#" title="Read More" className="link-btn">
                  <i className="fa fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
