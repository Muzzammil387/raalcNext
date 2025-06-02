import { banner } from '@/app/untils/imgimport'
import Image from 'next/image'
import React from 'react'
import { StringConvert } from '../StringConvert'

const Banner = ({data}) => {
  const {header_image,header_one} = data
  return (
    <section className="banner relative">
      <div className="bannerImg">
      <div className="bannerImg_ relative">
        <picture>
          <Image
            src={header_image}
            alt="website_main_image"
            className="thumbnail w-full relative h-[calc(100vh+3rem)] object-cover"
            width={10}
            height={10}
            priority
          />
        </picture>
      </div>
    </div>
      <div
        className="bannertxt max-lg:text-[2.438rem] w-[80%] absolute top-[50%] transform translate-y-[-50%] text-center mx-auto left-0 right-0 text-white text-[3.75rem] leading-9">
        <div className="  uppercase leading-[.9]">{StringConvert(header_one)}</div>
      </div>
    </section>
  )
}

export default Banner
