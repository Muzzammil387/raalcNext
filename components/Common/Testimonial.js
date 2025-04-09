"use client";

import React from "react";
import Image from "next/image";

const Testimonial = () => {
  return (
    <>
      <section className="testimonials-area ptb-80 bg-f6f6f6">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <h2>
              Our Clients <span>Feedback</span>
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
              <div className="single-feedback">
                <div className="client-info">
                  <div className="client-pic">
                    <Image
                      src="/images/client-avatar1.jpg"
                      alt="client-avatar"
                      width={85}
                      height={85}
                    />
                  </div>

                  <div className="client-title">
                    <h4>James Anderson</h4>
                    <h5>CEO of Facebook</h5>
                  </div>
                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet.
                </p>

                <span>
                  <i className="fa fa-quote-left"></i>
                </span>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-feedback">
                <div className="client-info">
                  <div className="client-pic">
                    <Image
                      src="/images/client-avatar2.jpg"
                      alt="client-avatar"
                      width={85}
                      height={85}
                    />
                  </div>

                  <div className="client-title">
                    <h4>Alex Smith</h4>
                    <h5>CEO of Twitter</h5>
                  </div>
                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet.
                </p>

                <span>
                  <i className="fa fa-quote-right"></i>
                </span>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-feedback">
                <div className="client-info">
                  <div className="client-pic">
                    <Image
                      src="/images/client-avatar3.jpg"
                      alt="client-avatar"
                      width={85}
                      height={85}
                    />
                  </div>

                  <div className="client-title">
                    <h4>Olivia Smith</h4>
                    <h5>CEO of Envytheme</h5>
                  </div>
                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet.
                </p>

                <span>
                  <i className="fa fa-quote-left"></i>
                </span>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-feedback">
                <div className="client-info">
                  <div className="client-pic">
                    <Image
                      src="/images/client-avatar1.jpg"
                      alt="client-avatar"
                      width={85}
                      height={85}
                    />
                  </div>

                  <div className="client-title">
                    <h4>James Anderson</h4>
                    <h5>CEO of Facebook</h5>
                  </div>
                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet.
                </p>

                <span>
                  <i className="fa fa-quote-left"></i>
                </span>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-feedback">
                <div className="client-info">
                  <div className="client-pic">
                    <Image
                      src="/images/client-avatar2.jpg"
                      alt="client-avatar"
                      width={85}
                      height={85}
                    />
                  </div>

                  <div className="client-title">
                    <h4>Alex Smith</h4>
                    <h5>CEO of Twitter</h5>
                  </div>
                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet.
                </p>

                <span>
                  <i className="fa fa-quote-right"></i>
                </span>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-feedback">
                <div className="client-info">
                  <div className="client-pic">
                    <Image
                      src="/images/client-avatar3.jpg"
                      alt="client-avatar"
                      width={85}
                      height={85}
                    />
                  </div>

                  <div className="client-title">
                    <h4>Olivia Smith</h4>
                    <h5>CEO of Envytheme</h5>
                  </div>
                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet.
                </p>

                <span>
                  <i className="fa fa-quote-left"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
