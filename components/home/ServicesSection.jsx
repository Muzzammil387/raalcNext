'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const ServicesSection = () => {
  return (
    <section className="section2 overflow-hidden py-10 z-[2]">
     <div class="section2_heading w-[40%] mx-auto text-center">
        <div class="h6 text-[1.677rem] font-Mluvka tracking-[2rem] uppercase text-[#4857db] opacity-35 mb-5">
          Department
        </div>
        <h2 class="font-MluvkaBold font-bold text-[3.125rem] uppercase leading-10 mb-5">
          Community Service Department
        </h2>
        <p>
          Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus.
          Faucibus purus in massa tempor nec feugiat. Imperdiet massa
        </p>
      </div>
    <div className="section2__bottom relative -right-24 mt-10 mb-5">
    <Swiper
        slidesPerView={3}
        spaceBetween={20}
        autoplay= {{
        delay: 2500,
        disableOnInteraction: false,
        }}
        breakpoints= {{
          300: { slidesPerView: 1,  },
          768: { slidesPerView: 3,  },
          1024: { slidesPerView: 5,  },
        }}
        className="sample-slider">
      {['1.webp', '2.webp', '3.webp', '2.webp', '1.webp', '2.webp'].map((image, index) => (
            <SwiperSlide key={index}>
              <div className="card1 cursor-pointer relative">
                <div className="card1_ py-10 overflow-hidden relative">
                  <div className="card1Box relative p-[.2rem]">
                    <img className="h-[16rem] rounded-[5rem] object-cover w-full" src={`webImages/community/${image}`} alt="" />
                    <span className="absolute left-0 right-0 mx-auto top-[50%] transform translate-y-[-50%] text-center uppercase text-white font-bold text-[1.25rem] w-[80%] leading-[1]"  >
                      Corporate Department
                    </span>
                  </div>
                  <div className="card1Box2 px-5 py-6 flex flex-col items-center justify-center text-center absolute top-[25rem] transition-all ease-in-out duration-700 w-full h-[16rem] border border-[#D4D4D4]" >
                   <span class="font-Mluvka font-bold text-[1.2rem] uppercase leading-[1] block mb-2">Pleading Department</span>
                    <p className="text-[#393946] text-[.8rem] capitalize leading-[1.1]">
                      RAALC’s Corporate Department involves a wide scope
                      inclusive of structuring, restructuring companies by
                      means of advising on the exit strategy, liquidation,
                      bankruptcy. The Department devises a blueprint for
                      entities who wish to form a new company
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  </section>
  )
}

export default ServicesSection
