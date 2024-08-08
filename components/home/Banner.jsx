import { banner } from '@/app/untils/imgimport'
import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <section className="banner relative">
      <div className="bannerImg">
      <div className="bannerImg_ relative">
        <picture>
          <Image
            src={banner}
            alt="cloud"
            className="thumbnail w-full relative"
            priority
          />
        </picture>
      </div>
    </div>
      <div
        className="bannertxt max-lg:text-[2.438rem] w-[31rem] absolute top-[45%] transform translate-y-[-50%] text-center mx-auto left-0 right-0 text-white text-[3.75rem] leading-9">
        <span className="  uppercase leading-[.9]">Know  Your  <b>Rights</b></span>
      </div>
    </section>
  )
}

export default Banner
