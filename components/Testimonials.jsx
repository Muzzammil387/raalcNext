'use client'
import { dot, review1 } from '@/app/untils/imgimport'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import Link from 'next/link'
import { Autoplay } from 'swiper/modules'

const Testimonials = () => {
  return (
    <section className="section7 py-20">
      <div className="container mx-auto">
        <div className="section7Heading max-lg:hidden relative grid grid-cols-[2.5fr,6.5fr] gap-3 items-start">
          <Link href="#" className="font-Mluvka text-[#9F865F] py-3 px-4 rounded-[3rem] w-fit ml-auto mr-10 capitalize border border-[#E7E7E7] bg-white">Testimonials</Link>
          <h3 className="uppercase leading-[1] font-bold text-[3.125rem] font-MluvkaBold">Customer <br /> Reviews</h3>
        </div>
        <div className="section7Main mt-10 w-[60%] mx-auto">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            speed={1000}
            slidesPerView={5}
            centeredSlides={true}
            allowTouchMove={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              300: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 5 },
            }}
            on={{
              click: function () {
                var clickedIndex = this.clickedIndex
                this.slideTo(clickedIndex)
              },
            }}
            className="section7mySwiper"
          >
            {["", "", "", "", "", ""].map((image, index) => (
              <SwiperSlide key={index}>
                <div className="s7BOx">
                  <div className="s7BOxp text-center hidden items-start">
                    <Image src={dot} alt="" />
                    <p className="capitalize leading-[1.3] font-MluvkaRegular">Working with [Lawyer's Name] was an absolute game-changer for me. Their dedication, expertise, and unwavering support throughout my legal journey were unparalleled. From the initial consultation to the courtroom representation, they exhibited professionalism and a deep understanding of my case. Thanks to their strategic approach and tireless advocacy,</p>
                  </div>
                  <div className="s7BOxBottom mt-14">
                    <div className="s7BOxBottom_2 relative w-fit mx-auto cursor-pointer">
                      <Image src={review1} className="rounded-[1.875rem] w-[4.875rem] h-[5.063rem]" alt="" />
                      <div className="s7BOxBottom_ absolute right-[-10rem] top-[3rem] hidden">
                        <div className="h2 uppercase text-[1.1rem] font-Mluvka font-medium">Adnan Karim</div>
                        <div className="h3 capitalize text-[.8rem] font-Mluvka text-secondary">LEGAL CONSULTANT</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
