import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules'
import { about4 } from '@/app/untils/imgimport';
const CompanyHistory = ({data}) => {
    const {sec_three} = data
    return (
        <section className="about2 py-20 bg-[#F5F5F5] overflow-hidden relative">
            <div className="container mx-auto">
                <div className="about2Heading flex justify-between items-center">
                    <div className="about2Headingl flex gap-7">
                        <div className="about2Headinglimg relative">
                            <Image src={data?.sec_three_image} width={10} height={10} className="w-[18rem] h-[8rem] object-cover rounded-full" alt="" />
                        </div>
                        <div className="about2HeadinglText leading-[1] text-[2.75rem] uppercase font-bold font-MluvkaBold">
                            {data?.sec_three_heading_one}
                        </div>
                    </div>
                    <div className="about2HeadingR">
                        <Image src={about4} alt={data?.sec_three_heading_one} />
                    </div>
                </div>
                <div className="about2Body mt-16">
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={1}
                        spaceBetween={0}
                        slidesPerGroupSkip={1}
                        slidesPerGroup={1}
                        speed={1000}
                        pagination={{
                            el: ".swiper-pagination",
                            type: "progressbar",
                          }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            300: { slidesPerView: 1, },
                            768: { slidesPerView: 1, },
                            1024: { slidesPerView: 5, },
                        }}
                        className="about2BodySwiper" >
                        {Array.isArray(sec_three) &&  sec_three.map((item, index) => {
                            const {description,heading_one,year} = item
                            return(
                            <SwiperSlide key={index}>
                                <div className="about2BodyBox">
                                    <div className="relative about2BodyBox_">
                                        <div className="h4 p-2 bg-[#F5F5F5] text-[1.1rem] w-fit block">{year}</div>
                                    </div>
                                    <div className="h2 my-3 text-[1.375rem] capitalize font-bold font-Mluvka">{heading_one}</div>
                                    <p>{description}</p>
                                </div>
                            </SwiperSlide>
)})}
                    </Swiper>

                </div>
            </div>
        </section>
    )
}

export default CompanyHistory