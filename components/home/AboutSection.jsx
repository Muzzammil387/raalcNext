import Image from 'next/image'
import React from 'react'

const AboutSection = ({home}) => {
  const {sec_two_header_one,sec_two_header_two,sec_two_paragraph,sec_two_image,sec_two_name,sec_two_details} = home
  return (
    <section className="section1 mt-16" id="counterSection">
      <div className="container mx-auto px-4 !pb-14 border-b border-secondary">
        <div className="section1_ [&_p]:text-[#393946] w-[55%] max-lg:w-full mx-auto text-center">
          <h1 className="font-MluvkaBold font-bold text-[3.125rem] leading-[1] uppercase max-lg:text-[2rem]">
            {sec_two_header_one}
          </h1>
          <div className="h2 text-secondary text-[1.2rem]">{sec_two_header_two}</div>
          <p className="mt-4 mb-3">{sec_two_paragraph}</p>

          <div className="flex justify-center items-center gap-2">
            <div className="">
              <Image className="w-[3rem] h-[3rem] object-cover rounded-full" src={sec_two_image} width={10} height={10} alt="homeabout" />
            </div>
            <div>
              <div className="h3 font-MrDeHaviland font-medium leading-[1] text-[1.5rem]">{sec_two_name}</div>
              <div className="h4 leading-[.8] text-[.8rem]">{sec_two_details}</div>
            </div>
          </div>
         
        </div>
      </div>
    </section>
  )
}

export default AboutSection
