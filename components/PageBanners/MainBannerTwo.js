"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";

const slideData = [
  {
    heading: "We Are Creative",
    subHeading: "Nice To <span>Meet</span> You",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bgImg: "/images/main-bg-1.jpg",
  },
  {
    heading: "We Are Professional",
    subHeading: "Best <span>Digital</span> Experience",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bgImg: "/images/main-bg-2.jpg",
  },
  {
    heading: "We Are Designer",
    subHeading: "Creativity is  <span>Intelligence</span>",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bgImg: "/images/main-bg-3.jpg",
  },
];

const MainBannerTwo = () => {
  return (
    <>
      <Swiper
        id="home"
        autoHeight={true}
        navigation={true}
        modules={[Navigation]}
        className="home-slides"
      >
        {slideData.map((data, idx) => (
          <SwiperSlide
            className="main-banner"
            style={{ backgroundImage: `url(${data.bgImg})` }}
            key={idx}
          >
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
                          {data.heading}
                        </h4>

                        <h1
                          data-aos="fade-up"
                          data-aos-delay="200"
                          data-aos-once="true"
                          data-aos-duration="1000"
                          dangerouslySetInnerHTML={{
                            __html: data.subHeading,
                          }}
                        />

                        <p
                          data-aos="fade-up"
                          data-aos-delay="300"
                          data-aos-once="true"
                          data-aos-duration="1000"
                        >
                          {data.text}
                        </p>

                        <div
                          data-aos="fade-up"
                          data-aos-delay="400"
                          data-aos-once="true"
                          data-aos-duration="1000"
                        >
                          <Link href="#about" className="btn btn-primary">
                            Get Started
                          </Link>

                          <Link
                            href="#work"
                            className="btn btn-primary view-work"
                          >
                            View Work
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MainBannerTwo;
