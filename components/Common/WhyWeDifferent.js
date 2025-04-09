"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const WhyWeDifferent = () => {
  const openTabSection = (evt, tabName) => {
    const tabcontent = document.getElementsByClassName("tab-panel");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" checked", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " checked";
  };

  return (
    <>
      <section className="why-we-different ptb-80 bg-f6f6f6">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <h2>
              Why We <span>Are Different</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="tabset">
                <label
                  onClick={(e) => openTabSection(e, "speed-flexibility")}
                  className="tablinks checked"
                  name="tabset"
                  id="tab1"
                  aria-controls="speed-flexibility"
                  htmlFor="tab1"
                >
                  Speed, flexibility
                </label>

                <label
                  onClick={(e) => openTabSection(e, "professional-work")}
                  className="tablinks"
                  name="tabset"
                  id="tab2"
                  aria-controls="professional-work"
                  htmlFor="tab2"
                >
                  Professional work
                </label>

                <label
                  onClick={(e) => openTabSection(e, "experienced-staff")}
                  className="tablinks"
                  name="tabset"
                  id="tab3"
                  aria-controls="experienced-staff"
                  htmlFor="tab3"
                >
                  Experienced Staff
                </label>

                <label
                  onClick={(e) => openTabSection(e, "custom-support")}
                  className="tablinks"
                  name="tabset"
                  id="tab4"
                  aria-controls="custom-support"
                  htmlFor="tab4"
                >
                  Custom Support
                </label>

                <div className="tab-panels">
                  <section
                    id="speed-flexibility"
                    className="tab-panel"
                    style={{ display: "block" }}
                  >
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="why-we-different-text">
                          <h4>Speed, flexibility</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco.
                          </p>
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
                              <i className="fa fa-check"></i>Digital Marketing &
                              Branding
                            </li>
                          </ul>

                          <Link href="#" className="btn btn-primary">
                            Read More
                          </Link>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="why-we-different-img">
                          <Image
                            src="/images/different-img1.jpg"
                            alt="img"
                            width={570}
                            height={450}
                          />
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="professional-work" className="tab-panel">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="why-we-different-text">
                          <h4>Professional work</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco.
                          </p>
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
                              <i className="fa fa-check"></i>Digital Marketing &
                              Branding
                            </li>
                          </ul>

                          <Link href="#" className="btn btn-primary">
                            Read More
                          </Link>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="why-we-different-img">
                          <Image
                            src="/images/different-img2.jpg"
                            alt="img"
                            width={570}
                            height={450}
                          />
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="experienced-staff" className="tab-panel">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="why-we-different-text">
                          <h4>Experienced staff</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco.
                          </p>
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
                              <i className="fa fa-check"></i>Digital Marketing &
                              Branding
                            </li>
                          </ul>

                          <Link href="#" className="btn btn-primary">
                            Read More
                          </Link>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="why-we-different-img">
                          <Image
                            src="/images/different-img3.jpg"
                            alt="img"
                            width={570}
                            height={450}
                          />
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="custom-support" className="tab-panel">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="why-we-different-text">
                          <h4>24/7 support</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco.
                          </p>
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
                              <i className="fa fa-check"></i>Digital Marketing &
                              Branding
                            </li>
                          </ul>

                          <Link href="#" className="btn btn-primary">
                            Read More
                          </Link>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="why-we-different-img">
                          <Image
                            src="/images/different-img4.jpg"
                            alt="img"
                            width={570}
                            height={450}
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyWeDifferent;
