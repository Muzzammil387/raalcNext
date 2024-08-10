'use client'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules'
import Image from 'next/image';

   
const TechnologyDrive = ({data}) => {
  const { sec_six } = data
  const [sec_sixIndex, setSec_sixIndex] = useState(0)
  const [sec_sixActive, setSec_sixActive] = useState(sec_six[0] ?? [])

  const handleClick = (index) => {
    setSec_sixIndex(index)
    setSec_sixActive(sec_six[index])
  }
  return (
    <section className="about5 py-14 bg-secondary">
    <div className="container mx-auto">
      <div className="about5Heading text-white text-center">
       <div className="h2 text-[4.375rem] leading-[1] font-bold mb-5 font-MluvkaBold"> {data?.sec_six_heading}</div>
       <p className="w-[50%] about5Headinggg mx-auto">{data?.sec_six_discription}</p>
      </div>    
      <div className="about5Body">
      <Swiper
        modules={[Autoplay]}
            speed={1000}
            spaceBetween={10}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
                300: { slidesPerView: 1,  },
                768: { slidesPerView: 3,  }, 
                1024: { slidesPerView: 5,  },
            }}
            className="about5BodymySwiper mt-3 " >
                 {Array.isArray(sec_six) && sec_six.map((item, index) => {
                  const {heading} = item
                  return(
                  <SwiperSlide key={index}>
 <div className={`abouttabact font-Mluvka transition-all duration-500 py-4 border cursor-pointer text-[1.3rem] text-center font-medium leading-[1] border-transparent rounded-full px-8 text-white ${index === sec_sixIndex ? "active" : ""}`} onClick={() => handleClick(index)}>{heading}</div>
                  </SwiperSlide>
                  )})}
                </Swiper>
        <div className="about5BodyB mt-3">
          <div className="about5BodyBox">
            <div className="about5BodyBox_ w-[70%] mx-auto grid grid-cols-2 items-center gap-6">
              <div className="about5BodyBox_img">
                <Image src={sec_sixActive?.image ?? ""} width={10} height={10} className="w-full h-[25rem] max-h-[25rem] object-cover rounded-full" alt="" />
              </div>
              <div className="about5BodyBox_b text-white">
                <p>{sec_sixActive?.description}</p>
                {/* <a className="mt-5 block" href="#">
                  <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M44.3334 2.77484C44.3334 1.40283 43.2212 0.290598 41.8492 0.290598H19.491C18.119 0.290598 17.0067 1.40283 17.0067 2.77484C17.0067 4.14685 18.119 5.25909 19.491 5.25909H39.3649V25.133C39.3649 26.505 40.4772 27.6173 41.8492 27.6173C43.2212 27.6173 44.3334 26.505 44.3334 25.133V2.77484ZM3.52518 44.6121L43.6058 4.53147L40.0926 1.01822L0.0119292 41.0988L3.52518 44.6121Z" fill="white"/>
                    </svg>
                                       
                </a> */}
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
