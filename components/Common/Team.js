"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const Team = () => {
  return (
    <>
      <section id="team" className="team-area ptb-80">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <h4>Meet Addax</h4>
            <h2>
              Our Creative <span>Team</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="team-slider"
          >
            <SwiperSlide>
              <div className="our-team">
                <div className="pic">
                  <Image
                    src="/images/team-1.jpg"
                    alt="team-img"
                    className="w-100"
                    width={300}
                    height={350}
                  />
                </div>

                <div className="team-content">
                  <h3 className="title">Jisan Smith</h3>
                  <span className="post">CEO</span>
                </div>

                <div className="social">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        className="fa-brands fa-facebook-f"
                        target="_blank"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://www.twitter.com/"
                        className="fa-brands fa-twitter"
                        target="_blank"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        className="fa-brands fa-instagram"
                        target="_blank"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        className="fa-brands fa-linkedin-in"
                        target="_blank"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="our-team">
                <div className="pic">
                  <Image
                    src="/images/team-2.jpg"
                    alt="team-img"
                    className="w-100"
                    width={300}
                    height={350}
                  />
                </div>

                <div className="team-content">
                  <h3 className="title">John Ahmed</h3>
                  <span className="post">Web Developer</span>
                </div>

                <div className="social">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        className="fa-brands fa-facebook-f"
                        target="_blank"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://www.twitter.com/"
                        className="fa-brands fa-twitter"
                        target="_blank"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        className="fa-brands fa-instagram"
                        target="_blank"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        className="fa-brands fa-linkedin-in"
                        target="_blank"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="our-team">
                <div className="pic">
                  <Image
                    src="/images/team-3.jpg"
                    alt="team-img"
                    className="w-100"
                    width={300}
                    height={350}
                  />
                </div>

                <div className="team-content">
                  <h3 className="title">Arif John</h3>
                  <span className="post">Back-End Developer</span>
                </div>

                <div className="social">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        className="fa-brands fa-facebook-f"
                        target="_blank"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://www.twitter.com/"
                        className="fa-brands fa-twitter"
                        target="_blank"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        className="fa-brands fa-instagram"
                        target="_blank"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        className="fa-brands fa-linkedin-in"
                        target="_blank"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="our-team">
                <div className="pic">
                  <Image
                    src="/images/team-4.jpg"
                    alt="team-img"
                    className="w-100"
                    width={300}
                    height={350}
                  />
                </div>

                <div className="team-content">
                  <h3 className="title">Sakib Johan</h3>
                  <span className="post">Front-End Developer</span>
                </div>

                <div className="social">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        className="fa-brands fa-facebook-f"
                        target="_blank"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://www.twitter.com/"
                        className="fa-brands fa-twitter"
                        target="_blank"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        className="fa-brands fa-instagram"
                        target="_blank"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        className="fa-brands fa-linkedin-in"
                        target="_blank"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="our-team">
                <div className="pic">
                  <Image
                    src="/images/team-5.jpg"
                    alt="team-img"
                    className="w-100"
                    width={300}
                    height={350}
                  />
                </div>

                <div className="team-content">
                  <h3 className="title">John Doe</h3>
                  <span className="post">Web Developer</span>
                </div>

                <div className="social">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        className="fa-brands fa-facebook-f"
                        target="_blank"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://www.twitter.com/"
                        className="fa-brands fa-twitter"
                        target="_blank"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        className="fa-brands fa-instagram"
                        target="_blank"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        className="fa-brands fa-linkedin-in"
                        target="_blank"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="our-team">
                <div className="pic">
                  <Image
                    src="/images/team-6.jpg"
                    alt="team-img"
                    className="w-100"
                    width={300}
                    height={350}
                  />
                </div>

                <div className="team-content">
                  <h3 className="title">Olivia Smith</h3>
                  <span className="post">Photographer</span>
                </div>

                <div className="social">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        className="fa-brands fa-facebook-f"
                        target="_blank"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://www.twitter.com/"
                        className="fa-brands fa-twitter"
                        target="_blank"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        className="fa-brands fa-instagram"
                        target="_blank"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        className="fa-brands fa-linkedin-in"
                        target="_blank"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Team;
