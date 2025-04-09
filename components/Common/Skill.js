"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

const Skill = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={[
          "https://www.youtube.com/embed/bk7McNUjWgw?si=Uvfs8-tbqBgZvDwR",
        ]}
      />

      <section className="skill-area ptb-80 bg-f6f6f6">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="about-skill">
                <div className="section-title">
                  <h2>
                    Some of Our <span>Skills</span>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>

                <h3 className="progress-title">Branding</h3>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "92%" }}>
                    <div className="progress-value">92%</div>
                  </div>
                </div>

                <h3 className="progress-title">Marketing</h3>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "97%" }}>
                    <div className="progress-value">97%</div>
                  </div>
                </div>

                <h3 className="progress-title">Design</h3>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "90%" }}>
                    <div className="progress-value">90%</div>
                  </div>
                </div>

                <h3 className="progress-title">Development</h3>
                <div className="progress mb-0">
                  <div className="progress-bar" style={{ width: "95%" }}>
                    <div className="progress-value">95%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="skill-video"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-once="true"
                data-aos-duration="1000"
              >
                <Image
                  src="/images/video-img.jpg"
                  alt="video-img"
                  width={580}
                  height={450}
                />

                <div className="video-btn" onClick={() => setToggler(!toggler)}>
                  <i className="fa fa-play"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
