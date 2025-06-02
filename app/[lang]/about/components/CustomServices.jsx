'use client'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules'
import {  arrow2 } from '@/app/untils/imgimport';
import Image from 'next/image';

const CustomServices = ({ data }) => {
    const [about3Active, setAbout3Active] = useState(0)
    const { sec_four } = data
    const handleClick = (index) => {
        setAbout3Active(index)
    }

    return (
        <section className="about3 bg-[#F5F5F5]">
            <div className="about3_ rounded-[5rem] py-28 bg-[#393946]">
                <div className="container mx-auto">
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={1}
                        spaceBetween={0}
                        speed={1000}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            300: { slidesPerView: 1, },
                            768: { slidesPerView: 1, },
                            1024: { slidesPerView: 1, },
                        }}
                        className="about3_Swiper !hidden text-blue-100" >
                        {Array.isArray(sec_four) && sec_four.map((item, index) => {
                            const { description, heading, btn_label, image } = item
                            return (
                                <SwiperSlide key={index}>
                                    <div className="">
                                        <div className="overflow-hidden transition-all duration-700  text-white">
                                            <div className="h3 text-[2.75rem] uppercase  leading-[1] font-bold mb-5 font-Mluvka !block">{heading}  </div>
                                            <p className="mb-8  !block">{description}</p>
                                            <Image className="w-full rounded-full h-[15rem] object-cover  !block" src={image ?? ""} width={10} height={10} alt={heading ?? ""} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                    <div className="about3_Main">
                        <div className="about3_Mainr">
                            <div className="list flex">
                                {Array.isArray(sec_four) && sec_four.map((item, index) => {
                                    const { description, heading, image,btn_label } = item;
                                    return (
                                        <div key={index} className={`about3_MainrB ${(index === about3Active) ? "active" : ""}`}>
                                            <div className="about3_Mainl overflow-hidden transition-all duration-700 text-white max-h-[36rem]">
                                                <div className="h3 text-[2.75rem] uppercase leading-[1] font-bold mb-5 font-Mluvka">{heading}</div>
                                                <p className="mb-8">{description}</p>
                                                <Image className="w-[40rem] h-[15rem] max-[1400px]:h-[10rem] rounded-full object-cover" src={image ?? ""} width={10} height={10} alt={heading ?? ""} />
                                             </div>
                                            <div  onClick={() => handleClick(index)} className={`flex items-center cursor-pointer about3_Mainrbox gap-20 ${(index === about3Active) ? "active" : ""} border-l px-6 border-[#fff]`}>
                                                <span className="text-[#30303D] text-[2.5rem] font-medium">{(index + 1) >= 10 ? (index + 1) : `0${(index + 1)}`}</span>
                                                <div className="about3_Mainrboxt text-[1.75rem] h-[20rem] text-white font-bold font-Mluvka leading-[1]">{heading}</div>
                                                <Image className="brightness-[100] mt-auto w-[3.5rem]" src={arrow2} alt={heading ?? ""} />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CustomServices
