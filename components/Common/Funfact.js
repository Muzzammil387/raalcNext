"use client";

import React from "react";

const Funfact = () => {
  return (
    <>
      <section
        className="funFacts-area ptb-80"
        style={{ backgroundImage: `url(/images/funfact-bg.jpg)` }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="funFact">
                <i className="fa fa-smile-o"></i>
                <h2 className="count">500</h2>
                <p>Happy Clients</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="funFact">
                <i className="fa fa-shield"></i>
                <h2 className="count">980</h2>
                <p>Completed Projects</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="funFact">
                <i className="fa fa-trophy"></i>
                <h2 className="count">46</h2>
                <p>Wining Awards</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="funFact">
                <i className="fa fa-users"></i>
                <h2 className="count">50</h2>
                <p>Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Funfact;
