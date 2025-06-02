'use client'
import React, { useContext, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import Link from 'next/link';
import { MainLanguageValueContext } from '@/app/context/MainLanguageValue';
import { StringConvert } from '../StringConvert';


const ServicesSection = ({department,home}) => {
  const {sec_three_header_one,sec_three_header_two,sec_three_paragraph} = home
  const { langValue } = useContext(MainLanguageValueContext);
  const basePath = langValue === "en" ? '' : `${langValue}/`;





  
  return (
    <section className="section2 overflow-hidden py-10 z-[2]">
      <div className="section2_heading w-[40%] max-[1200px]:w-[90%] mx-auto text-center">
        <div className="h6 text-[1.677rem] font-Mluvka tracking-[2rem] uppercase text-[#C3C8F3] opacity-35 mb-5">
          {sec_three_header_one}
        </div>
        <h2 className="font-MluvkaBold font-bold text-[3.125rem] max-[1400px]:text-[2.5rem] uppercase leading-10 mb-5">
         {sec_three_header_two}
        </h2>
        <p>
         {sec_three_paragraph}
        </p>
      </div>
      <div className="section2__bottom relative -right-24 mt-10 mb-5">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            200: { slidesPerView: "auto", },
            465: { slidesPerView: "auto", },
            768: { slidesPerView: 3, },
            1200: { slidesPerView: 4, },
            1624: { slidesPerView: 5, },
          }}
          className="sample-slider">
          {department.map((item, index) => {
            const {department_id,department_image,title,description} = item
            return(
            <SwiperSlide key={index}>
               <div  className="card1 cursor-pointer relative">
                <div className="card1_ py-10 overflow-hidden relative">
                  <div className="card1Box relative p-[.2rem]">
                    <Image className="h-[16rem] rounded-[5rem] object-cover w-full" src={department_image} width={0} height={0} alt={title ?? ""} />
                    <span className="absolute   left-0 right-0 mx-auto top-[50%] transform translate-y-[-50%] text-center uppercase text-white font-bold text-[1.25rem] w-[80%] leading-[1]"  >
                      {title}
                    </span>
                  </div>
                  <div className="card1Box2 px-5 py-6 flex flex-col items-center justify-center text-center absolute top-[25rem] transition-all ease-in-out duration-700 w-full h-[16rem] border border-[#D4D4D4]" >
                    <span className="font-Mluvka font-bold text-[1.2rem] uppercase leading-[1] block mb-2">{title}</span>
                    <div className="text-[#393946] text-[.8rem] capitalize  leading-[1.1]">{StringConvert(description)}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            )
})}
        </Swiper>
      </div>
    </section>
  )
}

export default ServicesSection


// `${basePath}/departments/${department_id}` 