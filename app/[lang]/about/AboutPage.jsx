"use client"
import React from 'react'
import Image from 'next/image'
import Members from './components/Members'
import CustomServices from './components/CustomServices'
import TechnologyDrive from './components/TechnologyDrive'
import useFetch from '@/app/customHooks/useFetch'
import CompanyHistory from './components/CompanyHistory'

const AboutPage = ({lang}) => {
    const { loading, data } = useFetch(`webContents/aboutUs/${lang}`);
    if(loading) return ''
  return (
    <div className='AboutPage'>
           <div className="InnerPageBox1 absolute w-[22rem] h-[22rem] opacity-5 bg-primary left-0 top-[50%]"></div>
    <div className="InnerPageBox2"></div>
    <section className="innerPage1 relative py-10">
        <div className="container mx-auto px-6 border-b-2 border-[#ddd] pb-6">
            <div className="innerPage1_ w-[70%] mx-auto  text-center">
                    <h1 className=" text-[3.3rem] font-bold leading-[1] uppercase mb-3 font-MluvkaBold">{data?.data?.main_heading}</h1>  
            </div>
        </div>
    </section>

    <section className="about relative">
        <div className="container mx-auto">
            <div className="aboutMain grid grid-cols-[4fr,2fr,4fr] items-center gap-20">
                <div className="aboutMain__left">
                    <h2 className="text-[2.75rem] font-bold leading-[1] mb-6 uppercase font-MluvkaBold">{data?.data?.sec_two_heading_one}</h2>
                    <p>{data?.data?.sec_two_para_left}</p>
                        <div className="h3 capitalize text-[1.4rem] text-secondary mt-4">{data?.data?.sec_two_heading_two}</div>
                </div>
                <div className="aboutMain__center h-full">
                    <Image src={data?.data?.sec_two_image} width={10} height={10} className="w-full h-full rounded-full object-cover object-left" alt="" />
                </div>
                <div className="aboutMain__right">
                 <p>{data?.data?.sec_two_para_right}</p>
                </div>
            </div>
        </div>
        <div className="js--marque-a">
            <div className="b--marque-a__content overflow-hidden ">
              <div className="marquee-container scroller_ourWork flex w-max" data-speed="fast">
              <div className="h5 text-[#F4EEE4] uppercase text-[9rem]  text-center font-MluvkaLight">Integrity. Advocacy. Success</div>
              <div className="h5 text-[#F4EEE4] uppercase text-[9rem]  text-center font-MluvkaLight ">Integrity. Advocacy. Success</div>
            </div>
            </div>
          </div>
    </section>
    <CompanyHistory data={data?.data} />
   <CustomServices data={data?.data} />
   <Members data={data?.data} />
    <TechnologyDrive data={data?.data} />
    </div>
  )
}

export default AboutPage