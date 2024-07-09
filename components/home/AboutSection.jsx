import { homeabout } from '@/app/untils/imgimport'
import Image from 'next/image'
import React from 'react'

const AboutSection = () => {
  return (
    <section className="section1 mt-16" id="counterSection">
      <div className="container mx-auto px-4 pb-14 border-b border-secondary">
        <div className="section1_ [&_p]:text-[#393946] w-[55%] max-lg:w-full mx-auto text-center">
          <h1 className="font-MluvkaBold font-bold text-[3.125rem] leading-[1] uppercase max-lg:text-[2rem]">
            The Simple Choice for Complex Problems
          </h1>
          <div className="h2 text-secondary text-[1.2rem]">RAALC – Top Rated Law Firm in Dubai</div>
          <p className="mt-4 mb-3">
            We set the highest standards in ethics and work in a timely and efficient manner to provide you with the best legal advice possible. We strive to deliver effective legal solutions tailored to the client’s requirements and needs within the selected practice area. We aim to expand our services and expertise across the globe while refining our techniques and capabilities with evolving technological advancement.
          </p>

          <div className="flex justify-center items-center gap-2">
            <div className="">
              <Image className="w-[3rem] h-[3rem] object-cover rounded-full" src={homeabout} alt="homeabout" />
            </div>
            <div>
              <div className="h3 font-MrDeHaviland font-medium leading-[1] text-[1.5rem]">Ehab <span className="text-secondary">Essam</span></div>
              <div className="h4 leading-[.8] text-[.8rem]">Co Founder</div>
            </div>
          </div>
         
        </div>
      </div>
    </section>
  )
}

export default AboutSection
