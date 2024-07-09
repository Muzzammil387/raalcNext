'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import SwiperCore, { Autoplay } from 'swiper';
import Image from 'next/image';
import { about6 } from '@/app/untils/imgimport';


SwiperCore.use([Autoplay]);

const TechnologyDrive = () => {
  return (
    <section className="about5 py-14 bg-secondary">
    <div className="container mx-auto">
      <div className="about5Heading text-white text-center">
       <div className="h2 text-[4.375rem] leading-[1] font-bold mb-5 font-MluvkaBold"> TECHNOLOGY <br /> DRIVEN</div>
       <p className="w-[50%] about5Headinggg mx-auto">  In the digital technology era, RAALC believes that it should be accessible to its clientele at a moment’s notice. It is determined to provide personalized customer service built on smart technology.</p>
      </div>
      <div className="about5Body">
      <Swiper
            speed={1000}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
                300: { slidesPerView: 1,  },
                768: { slidesPerView: 3,  },
                1024: { slidesPerView: 5,  },
            }}
            className="about5BodymySwiper " >
                 {["", "", "", "","","",""].map((image, index) => (
                  <SwiperSlide key={index}>
 <div className={`abouttabact font-Mluvka py-4 border cursor-pointer text-[2rem] font-medium leading-[1] border-transparent rounded-full px-8 text-white ${index === 0 && "active"}`}>VIRTUAL MEETINGS</div>
                  </SwiperSlide>
                  ))}
                </Swiper>
        <div className="about5BodyB">
          <div className="about5BodyBox">
            <div className="about5BodyBox_ w-[70%] mx-auto grid grid-cols-2 items-center gap-6">
              <div className="about5BodyBox_img">
                <Image src={about6} className="w-full rounded-full" alt="" />
              </div>
              <div className="about5BodyBox_b text-white">
                <p>Striding into the virtual universe! The world is progressing towards transforming into a virtual business platform. RAALC has taken steps to improve the meeting experience by enhancing the virtual client experience. We practice the online or virtual meeting feature for conducting meetings online on video conferencing with our clients.</p>
                <a className="mt-5 block" href="#">
                  <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M44.3334 2.77484C44.3334 1.40283 43.2212 0.290598 41.8492 0.290598H19.491C18.119 0.290598 17.0067 1.40283 17.0067 2.77484C17.0067 4.14685 18.119 5.25909 19.491 5.25909H39.3649V25.133C39.3649 26.505 40.4772 27.6173 41.8492 27.6173C43.2212 27.6173 44.3334 26.505 44.3334 25.133V2.77484ZM3.52518 44.6121L43.6058 4.53147L40.0926 1.01822L0.0119292 41.0988L3.52518 44.6121Z" fill="white"/>
                    </svg>
                                       
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default TechnologyDrive
