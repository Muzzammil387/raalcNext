'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules'
import { aboutmember1, aboutmember2, aboutmember3, aboutmember4 } from '@/app/untils/imgimport';
import Image from 'next/image';


const Members = () => {
  return (
    <section className="about4 py-20">
      <div className="container mx-auto">
        <div className="about4heading w-[60%] mx-auto text-center mb-10">
          <div className="h6 text-[1.677rem] font-Mluvka tracking-[2rem] uppercase text-[#4857db] opacity-35 mb-5">
            Memberships
          </div>
          <h2 className="font-MluvkaBold font-bold text-[3.125rem] uppercase leading-10">
            Memberships and <br /> Partnerships
          </h2>
          <p>RAALC strongly accept as true the fact that a business needs constant support and assistance of a corporate lawyer. RAALC has formulated a profile “Your own Corporate Counsel” …This profile is dedicated for complete A to Z legal assistance </p>
        </div>
        <div className="about4Body mt-8 mx-auto max-w-[60%]">
          <Swiper
           modules={[Autoplay]}
            slidesPerView={5}
            spaceBetween={20}
            speed={1000}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              300: { slidesPerView: 3 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="about4BodySwiper"
          >
            {[aboutmember1, aboutmember2, aboutmember3, aboutmember4, aboutmember1, aboutmember2].map((image, index) => (
              <SwiperSlide key={index}>
                <div>
                  <Image className="w-full" src={image} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Members;
