"use client";

import React from "react";
import Link from "next/link";

const MainBannerSix = () => {
  return (
    <>
      <div
        id="home"
        className="main-banner"
        style={{ backgroundImage: `url(/images/main-bg-3.jpg)` }}
      >
        <div className="creative-banner-two"></div>

        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="main-banner-text">
                    <h4
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-once="true"
                      data-aos-duration="1000"
                    >
                      We Are Creative
                    </h4>

                    <h1
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-once="true"
                      data-aos-duration="1000"
                    >
                      The Best <span>Digital</span> Experience
                    </h1>

                    <p
                      data-aos="fade-up"
                      data-aos-delay="300"
                      data-aos-once="true"
                      data-aos-duration="1000"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>

                    <div
                      data-aos="fade-up"
                      data-aos-delay="400"
                      data-aos-once="true"
                      data-aos-duration="1000"
                    >
                      <Link href="#welcome" className="btn btn-primary">
                        Get Started
                      </Link>

                      <Link href="#work" className="btn btn-primary view-work">
                        View Work
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBannerSix;
