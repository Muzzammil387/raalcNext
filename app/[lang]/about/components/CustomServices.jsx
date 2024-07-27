'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules'
import { about5, arrow2 } from '@/app/untils/imgimport';
import Image from 'next/image';

const CustomServices = () => {
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
                        {["", "", "", ""].map((image, index) => (
                            <SwiperSlide key={index}>
                                <div className="">
                                    <div className="overflow-hidden transition-all duration-700  text-white">
                                        <div className="h3 text-[2.75rem] uppercase  leading-[1] font-bold mb-5 font-Mluvka !block">TECHNOLOGY DRIVEN CUSTOMER SERVICE  </div>
                                        <p className="mb-8  !block">in the digital technology era, RAALC believes that it should be accessible to its clientele at a moment’s notice. It is determined to provide personalized customer service built on smart technology.</p>
                                        <Image className="w-full rounded-full  !block" src={about5} alt="" />
                                        <a href="#" className="bg-black py-4 px-10 w-fit mt-4 rounded-full font-Mluvka  !block">Read More</a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="about3_Main">
                        <div className="about3_Mainr">
                            <div className="list flex">
                                <div className="about3_MainrB active">
                                    <div className="about3_Mainl overflow-hidden transition-all duration-700  text-white">
                                        <div className="h3 text-[2.75rem] uppercase  leading-[1] font-bold mb-5 font-Mluvka">TECHNOLOGY DRIVEN CUSTOMER SERVICE  </div>
                                        <p className="mb-8">in the digital technology era, RAALC believes that it should be accessible to its clientele at a moment’s notice. It is determined to provide personalized customer service built on smart technology.</p>
                                        <Image className="w-full rounded-full" src={about5} alt="" />
                                        <a href="#" className="bg-black py-4 px-10 block w-fit mt-4 rounded-full font-Mluvka">Read More</a>
                                    </div>
                                    <div className="flex items-center cursor-pointer about3_Mainrbox  gap-20 active border-l px-6 border-[#fff]">
                                        <span className="text-[#30303D] text-[2.5rem] font-medium">01</span>
                                        <div className="about3_Mainrboxt text-[1.75rem] h-[20rem] text-white font-bold font-Mluvka leading-[1]">TECHNOLOGY DRIVEN</div>
                                        <Image className="brightness-[100] mt-auto w-[3.5rem]" src={arrow2} alt="" />
                                    </div>
                                </div>
                                <div className="about3_MainrB">
                                    <div className="about3_Mainl overflow-hidden transition-all duration-700  text-white">
                                        <div className="h3 text-[2.75rem] uppercase  leading-[1] font-bold mb-5 font-Mluvka">TECHNOLOGY DRIVEN CUSTOMER SERVICE  </div>
                                        <p className="mb-8">in the digital technology era, RAALC believes that it should be accessible to its clientele at a moment’s notice. It is determined to provide personalized customer service built on smart technology.</p>
                                        <Image className="w-full rounded-full" src={about5} alt="" />
                                        <a href="#" className="bg-black py-4 px-10 block w-fit mt-4 rounded-full font-Mluvka">Read More</a>
                                    </div>
                                    <div className="flex items-center cursor-pointer about3_Mainrbox  gap-20 border-l px-6 border-[#fff]">
                                        <span className="text-[#30303D] text-[2.5rem] font-medium">02</span>
                                        <div className="about3_Mainrboxt text-[1.75rem] h-[20rem] text-white font-bold font-Mluvka leading-[1]">DIVERSE</div>
                                        <Image className="brightness-[100] mt-auto w-[3.5rem]" src={arrow2} alt="" />
                                    </div>
                                </div>
                                <div className="about3_MainrB">
                                    <div className="about3_Mainl overflow-hidden transition-all duration-700  text-white">
                                        <div className="h3 text-[2.75rem] uppercase  leading-[1] font-bold mb-5 font-Mluvka">TECHNOLOGY DRIVEN CUSTOMER SERVICE  </div>
                                        <p className="mb-8">in the digital technology era, RAALC believes that it should be accessible to its clientele at a moment’s notice. It is determined to provide personalized customer service built on smart technology.</p>
                                        <Image className="w-full rounded-full" src={about5} alt="" />
                                        <a href="#" className="bg-black py-4 px-10 block w-fit mt-4 rounded-full font-Mluvka">Read More</a>
                                    </div>
                                    <div className="flex items-center cursor-pointer about3_Mainrbox  gap-20 border-l px-6 border-[#fff]">
                                        <span className="text-[#30303D] text-[2.5rem] font-medium">03</span>
                                        <div className="about3_Mainrboxt text-[1.75rem] h-[20rem] text-white font-bold font-Mluvka leading-[1]">COMPREHENSIVE APPROACH OF LEGAL SERVICES</div>
                                        <Image className="brightness-[100] mt-auto w-[3.5rem]" src={arrow2} alt="" />
                                    </div>
                                </div>
                                <div className="about3_MainrB">
                                    <div className="about3_Mainl overflow-hidden transition-all duration-700  text-white">
                                        <div className="h3 text-[2.75rem] uppercase  leading-[1] font-bold mb-5 font-Mluvka">TECHNOLOGY DRIVEN CUSTOMER SERVICE  </div>
                                        <p className="mb-8">in the digital technology era, RAALC believes that it should be accessible to its clientele at a moment’s notice. It is determined to provide personalized customer service built on smart technology.</p>
                                        <Image className="w-full rounded-full" src={about5} alt="" />
                                        <a href="#" className="bg-black py-4 px-10 block w-fit mt-4 rounded-full font-Mluvka">Read More</a>
                                    </div>
                                    <div className="flex items-center cursor-pointer about3_Mainrbox  gap-20 border-l px-6 border-[#fff]">
                                        <span className="text-[#30303D] text-[2.5rem] font-medium">04</span>
                                        <div className="about3_Mainrboxt text-[1.75rem] h-[20rem] text-white font-bold font-Mluvka leading-[1]">AGILE AND RESPONSIVENESS</div>
                                        <Image className="brightness-[100] mt-auto w-[3.5rem]" src={arrow2} alt="" />
                                    </div>
                                </div>
                                <div className="about3_MainrB">
                                    <div className="about3_Mainl overflow-hidden transition-all duration-700  text-white">
                                        <div className="h3 text-[2.75rem] uppercase  leading-[1] font-bold mb-5 font-Mluvka">TECHNOLOGY DRIVEN CUSTOMER SERVICE  </div>
                                        <p className="mb-8">in the digital technology era, RAALC believes that it should be accessible to its clientele at a moment’s notice. It is determined to provide personalized customer service built on smart technology.</p>
                                        <Image className="w-full rounded-full" src={about5} alt="" />
                                        <a href="#" className="bg-black py-4 px-10 block w-fit mt-4 rounded-full font-Mluvka">Read More</a>
                                    </div>
                                    <div className="flex items-center cursor-pointer about3_Mainrbox  gap-20 border-l px-6 border-[#fff]">
                                        <span className="text-[#30303D] text-[2.5rem] font-medium">05</span>
                                        <div className="about3_Mainrboxt text-[1.75rem] h-[20rem] text-white font-bold font-Mluvka leading-[1]">VALUE DRIVEN</div>
                                        <Image className="brightness-[100] mt-auto w-[3.5rem]" src={arrow2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CustomServices
