'use client'
import React, { useContext, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { MainLanguageValueContext } from '@/app/context/MainLanguageValue';
import { StringConvert } from '../StringConvert';
import { MainAPiContext } from '@/app/context/MainAPiContext';


const EventSlider = ({events,home}) => {
  const {sec_three_header_one,sec_three_header_two,sec_three_paragraph} = home
  const { langValue } = useContext(MainLanguageValueContext);
  const basePath = langValue === "en" ? '' : `${langValue}/`;
  const {mainData } = useContext(MainAPiContext);
  const elements = mainData?.elements





  
  return (
    <section className="section2 overflow-hidden py-10 z-[2]">
      <div className="section2_heading w-[40%] max-[1200px]:w-[90%] mx-auto text-center">
        {/* <div className="h6 text-[1.677rem] font-Mluvka tracking-[2rem] uppercase text-[#C3C8F3] opacity-35 mb-5">Events</div> */}
        <h2 className="font-MluvkaBold font-bold text-[3.125rem] max-[1400px]:text-[2.5rem] uppercase leading-10 mb-5">{elements?.eventupdate}</h2>
        </div>
        
      <div className="section2__bottom relative -right-24 mt-10 mb-5">
        <Swiper
          loop={true}
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            reverseDirection:langValue === "ar" ? true : false,
            disableOnInteraction: false,
          }}
          breakpoints={{
            200: { slidesPerView: "auto", },
            465: { slidesPerView: "auto", },
            768: { slidesPerView: 3, },
            1200: { slidesPerView: 4, },
            1624: { slidesPerView: 4, },
          }}
          className="sample-slider">
         {events.map((item, index) => {
  const { events_id, event_images, title, description, slug } = item;
  return (
    <SwiperSlide key={index}> {/* Only assign key here */}
      <div className="card1 cursor-pointer relative">
        <div className="card1_ py-10 overflow-hidden relative">
          <div className="card1Box relative p-[.2rem]">
            <Link href={`/${basePath}events/${slug}`}>
              <Image
                className="h-[16rem] rounded-[5rem] object-cover w-full"
                src={event_images}
                width={0}
                height={0}
                alt={title ?? ""}
              />
            <span className="absolute z-[1] left-0 right-0 mx-auto top-[50%] transform translate-y-[-50%] text-center uppercase text-white font-bold text-[1.25rem] w-[80%] leading-[1]">
              {title}
            </span>
            </Link>
          </div>

          <div className="overlay absolute top-11 left-[2px] w-[99%] h-3/4 bg-[rgba(0, 0, 0, 0.5) rounded-[5rem]"></div>
        </div>
      </div>
    </SwiperSlide>
  );
})}

        </Swiper>
      </div>
    </section>
  )
}

export default EventSlider


// `${basePath}/departments/${department_id}` 