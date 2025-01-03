'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules'
import Image from 'next/image';


const Members = ({ data,alldata }) => {
    console.log(data)
  return (
    <section className="about4 pb-20">
      <div className="container mx-auto">
        <div className="about4heading w-[60%] mx-auto text-center mb-10">
          <div className="h6 text-[1.677rem] font-Mluvka tracking-[.7rem] uppercase text-[#4857db] opacity-35 mb-5">
            {alldata?.client_section_title}
          </div>
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
            {Array.isArray(data) && data.map((item, index) => {
              const { image } = item;
              return (
                <SwiperSlide key={index}>
                  <div>
                    <Image className="w-full" src={image ?? ""} width={10} height={10} alt={`image-${index}`} />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Members;
