"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const Partner = () => {
  return (
    <>
      <div className="partner-area ptb-80 bg-f6f6f6">
        <div className="container">
          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 6,
              },
            }}
            modules={[Autoplay]}
            className="partner-slider"
          >
            <SwiperSlide>
              <div className="item">
                <Image
                  src="/images/partner-1.png"
                  alt="partner"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                  src="/images/partner-2.png"
                  alt="partner"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                  src="/images/partner-3.png"
                  alt="partner"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                  src="/images/partner-4.png"
                  alt="partner"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                  src="/images/partner-5.png"
                  alt="partner"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                  src="/images/partner-6.png"
                  alt="partner"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                  src="/images/partner-1.png"
                  alt="partner"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                  src="/images/partner-2.png"
                  alt="partner"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                  src="/images/partner-3.png"
                  alt="partner"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                  src="/images/partner-4.png"
                  alt="partner"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                  src="/images/partner-5.png"
                  alt="partner"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                  src="/images/partner-6.png"
                  alt="partner"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Partner;
