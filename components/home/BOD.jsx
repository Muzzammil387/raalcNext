import { bof1, bof2 } from '@/app/untils/imgimport'
import Image from 'next/image'
import React from 'react'

const BOD = () => {
  return (
    <section className="section4 rounded-3xl bg-[#CFBC9F] pt-40 pb-16 -mt-24 relative z-[1]">
      <div className="container mx-auto">
        <h2 className="uppercase text-white text-center text-[3.125rem] font-bold leading-[1] mb-5 font-MluvkaBold">Board of Directors</h2>
        <div className="section4Main overflow-hidden w-[40%] max-lg:w-[96%] mx-auto grid grid-cols-2 gap-2">
          <div className="section4MainBOx relative">
            <div className="section4MainBOx_img">
              <Image className="w-full rounded-[5rem]" src={bof1} alt="1" />
            </div>
            <div className="section4MainBOx_body left-0 bottom-[-10rem] transition-all duration-700 opacity-0 absolute bg-white py-5 px-3 rounded-[5rem] w-full text-center max-lg:opacity-100 max-lg:bottom-0">
              <div className="h3 font-bold font-Mluvka uppercase text-[1.438rem] leading-[1]">Kaz Akra</div>
              <div className="h4 leading-[1] text-[1rem] uppercase text-secondary">Director</div>
            </div>
          </div>
          {/* <!-- close section4MainBOx  --> */}
          <div className="section4MainBOx relative">
            <div className="section4MainBOx_img">
              <Image className="w-full rounded-[5rem]" src={bof2} alt="2" />
            </div>
            <div className="section4MainBOx_body left-0 bottom-[-10rem] transition-all duration-700 opacity-0 absolute bg-white py-5 px-3 rounded-[5rem] w-full text-center max-lg:opacity-100 max-lg:bottom-0">
              <div className="h3 font-bold font-Mluvka uppercase text-[1.438rem] leading-[1]">Kaz Akra</div>
              <div className="h4 leading-[1] text-[1rem] uppercase text-secondary">Director</div>
            </div>
          </div>
          {/* <!-- close section4MainBOx  --> */}
        
        </div>
      </div>
    </section>
  )
}

export default BOD
