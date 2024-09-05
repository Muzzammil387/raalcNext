"use client"
import { MainLanguageValueContext } from '@/app/context/MainLanguageValue';
import { arrow } from '@/app/untils/imgimport';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react'

const Laws = ({data}) => {
    const { langValue } = useContext(MainLanguageValueContext);
    const basePath = langValue === "en" ? '' : `${langValue}/`;
    const [faqActive, setFaqActive] = useState("")
    const handleTab = (index) => {
        if(index === faqActive) {
          setFaqActive("")
        }
        else {
          setFaqActive(index)
        }
          }
  return (
    <section className="section7  py-20 relative pr-14">
    <div className="section6Heading   relative grid  grid-cols-[2fr,6.5fr] gap-3 items-start  ">
      <a href="#" className="font-Mluvka text-[#9F865F] py-3 px-4 rounded-[3rem] w-fit ml-auto mr-10 capitalize border border-[#E7E7E7] bg-white Lawss">{data?.laws_short_heading}</a>
      <div className="grid  grid-cols-[1fr,auto] items-start">
        <h3 className="uppercase leading-[1] font-bold text-[3.125rem] font-MluvkaBold">{data?.laws_heading}</h3>
        {/* <Link href={`/${basePath}laws`} className="block border border-secondary rounded-full font-cormorant font-bold capitalize text-center py-2 mb-4 px-20">View All</Link> */}
      </div>
    </div>
    <div className="section6Main mt-4 relative">
    {Array.isArray(data?.laws) && data?.laws.map((item,index) => {
      const {answer,question} = item
        return (
          <div className="section6MainBox relative grid  grid-cols-[1fr,6.5fr] gap-10 items-start" key={index}>
          <div></div>
          <div className="section6MainBox_ !bg-transparent border-b py-2 border-[#ddd]">
            <div className="section6MainBoxc w-full">
              <div className="h4  cursor-pointer accordions py-2  grid grid-cols-[7fr,3fr] "  onClick={() => handleTab(index)}><span className="leading-[1.1] font-Mluvka">{question}</span>
                <Image src={arrow} className={`ml-auto  w-[1.438rem] relative chevron transition-all ease-in-out duration-300 ${faqActive === index ? "rotate-180":""}`} width={10} height={10} alt="" />
              </div>
              <div className={`section6MainBoxcDOx overflow-hidden transition-all ease-in-out duration-300 ${faqActive === index ? "max-h-max":"max-h-0"}`}>
                <p className="text-[#39394680] text-[.8rem] leading-[1.2] capitalize  ">{answer}</p>
              </div>
            </div>
          </div>
        </div>
        )
    })}
    </div>
  </section>
  )
}

export default Laws