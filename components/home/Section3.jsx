"use client"
import React, { useEffect, useRef } from 'react'
import { Section3Image1 } from '@/app/untils/imgimport'
import Image from 'next/image'

const Section3 = ({home}) => {

  const {sec_four_image,sec_four_fact_one,sec_four_fact_one_title,sec_four_fact_two,sec_four_fact_two_title,sec_four_fact_three,sec_four_fact_three_title,sec_four_header_one,sec_four_paragraph} = home
  const counterSectionRef = useRef(null);

  useEffect(() => {
    const counters = document.querySelectorAll(".counter");
    const speeds = 2000; // Speeds of animation in milliseconds
  
    function startCounterAnimation() {
      counters.forEach((counter) => {
        const target = +counter.getAttribute("data-target");
        const postfix = counter.getAttribute("data-postfix") || "";
        const increment = Math.ceil(target / (speeds / 20));
  
        let currentCount = 0;
  
        const counterInterval = setInterval(() => {
          if (currentCount < target) {
            currentCount += increment;
            if (currentCount > target) {
              currentCount = target;
            }
            counter.textContent = currentCount + postfix;
          } else {
            clearInterval(counterInterval);
          }
        }, 30);
      });
    }
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounterAnimation();
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );
  
    const currentCounterSectionRef = counterSectionRef.current; // Copy ref to a variable
  
    if (currentCounterSectionRef) {
      observer.observe(currentCounterSectionRef);
    }
  
    return () => {
      if (currentCounterSectionRef) {
        observer.unobserve(currentCounterSectionRef);
      }
    };
  }, []);
  return (
    <section className="section3 relative bg-[#FFF9F0] rounded-[5rem] z-[2]">
    <div className="container mx-auto">
      <div className="section2_ gap-16 py-32 max-lg:py-10 max-lg:gap-3 w-[85%] max-[1200px]:w-full max-lg:text-center mx-auto grid justify-center items-center grid-cols-2">
        <div className="section2_left">
          <h2 className="font-Mluvka font-bold text-[2.313rem] uppercase leading-[1]">{sec_four_header_one}</h2>
          <div className="section2_leftB mt-4">
         
           <p className="text-[.9rem] text-[#393946]">{sec_four_paragraph}</p>
          </div>

          <ul ref={counterSectionRef} className="flex justify-center max-lg:flex-col max-lg:items-center gap-14 mt-10">
            <li>
              <div className="h-[5.638rem] w-[8.75rem] max-[1400px]:w-full text-center h2 font-OoohBaby text-[4rem] text-secondary">
                <span className="counter transition-all ease-in-out duration-700" data-target={sec_four_fact_one} data-postfix="k+">{sec_four_fact_one}k+</span>
                <span></span>
              </div>
              <div className="h4 font-medium leading-4">
               {sec_four_fact_one_title}
              </div>
            </li>
            <li>
              <div className="h-[5.638rem] w-[8.75rem] max-[1400px]:w-full text-center h2 font-OoohBaby text-[4rem] text-secondary">
                <span className="counter transition-all ease-in-out duration-700" data-target={sec_four_fact_two} data-postfix="">{sec_four_fact_two}</span>
              </div>
              <div className="h4 font-medium leading-4">
               {sec_four_fact_two_title}
              </div>
            </li>
            <li>
              <div className="h-[5.638rem] w-[8.75rem] max-[1400px]:w-full text-center h2 font-OoohBaby text-[4rem] text-secondary">
                <span className="counter transition-all ease-in-out duration-700" data-target={sec_four_fact_three} data-postfix="+">{sec_four_fact_three}+</span>
                <span></span>
              </div>
              <div className="h4 font-medium leading-4">
               {sec_four_fact_three_title}
              </div>
            </li>
          </ul>
         </div>
        <div className="section2_right  relative">
          <div className="section2_right_  absolute border border-white rounded-[5rem] w-[17rem] h-[13rem] top-[-1rem] left-[-2rem]"></div>
          <Image className="relative max-lg:mx-auto w-full rounded-[10rem]" src={sec_four_image} width={10} height={10} alt="section2_right" />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Section3
