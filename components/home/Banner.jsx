import { banner } from '@/app/untils/imgimport'
import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <section className="banner relative">
      <p className="bannerpara max-lg:relative max-lg:right-0 max-lg:text-center max-lg:mx-auto absolute right-14 top-5 w-[17.186rem] text-[.8rem]">
        Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus.
        Faucibus purus in massa tempor nec feugiat. Imperdiet massa tincidunt
        nunc pulvinar sapie
      </p>
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
        <span className="font-MrDeHaviland relative top-[-1rem]">your</span>
        <span className="font-semibold font-Mluvka uppercase">Advocate</span>
        <span className="font-Mluvka font-normal uppercase">for Fair</span>
        <span className="font-MrDeHaviland">&</span>
        <span className="font-Mluvka font-normal uppercase"> Just Outcomes</span>
      </div>

      <div className="bannertxt2 absolute bottom-0 left-36 max-lg:relative text-center max-lg:left-0">
        <span className="leading-4 font-bold block relative font-Mluvka">We Will Fight To Get You The Best <br />
          Results Possible!</span>
      </div>
    </section>
  )
}

export default Banner
