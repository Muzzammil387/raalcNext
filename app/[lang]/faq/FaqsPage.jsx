"use client"
import useFetch from '@/app/customHooks/useFetch';
import React, { useState } from 'react'
import { arrow } from '@/app/untils/imgimport';
import Image from 'next/image';

const FaqsPage = ({ lang }) => {
    const { loading, data } = useFetch(`faqlaw/faq/${lang}`);
    const [faqActive, setFaqActive] = useState("")
    const handleTab = (index) => {
        if (index === faqActive) {
            setFaqActive("")
        }
        else {
            setFaqActive(index)
        }
    }
    if (loading) return '';
    return (
        <div>
            <div className="InnerPageBox1 absolute w-[22rem] h-[22rem] opacity-5 bg-primary left-0 top-[50%]"></div>
            <div className="InnerPageBox2"></div>
            <section className="innerPage1 relative py-10">
                <div className="container mx-auto px-6 border-b-2 border-[#ddd] pb-6">
                    <div className="innerPage1_ w-[70%] mx-auto  text-center">
                        <h1 className=" text-[3.3rem] font-bold leading-[1] uppercase mb-3 font-MluvkaBold">{data?.data?.heading}</h1>
                    </div>



                </div>
            </section>
            <section className=''>
                <div className="container mx-auto  px-6">
                    <div className="section6Main mt-6 relative">
                        {Array.isArray(data?.data?.sec_two) && data?.data?.sec_two.map((item, index) => {
                            const { answers, question } = item
                            return (
                                <div className="section6MainBox relative  gap-10 items-start" key={index}>
                                    <div className="section6MainBox_ !bg-transparent border-b py-2 border-[#ddd]">
                                        <div className="section6MainBoxc w-full">
                                            <div className="h4  cursor-pointer accordions py-2  grid grid-cols-[7fr,3fr] " onClick={() => handleTab(index)}><span className="leading-[1.1] font-Mluvka">{question}</span>
                                                <Image src={arrow} className={`ml-auto  w-[1.438rem] relative chevron transition-all ease-in-out duration-300 ${faqActive === index ? "rotate-180" : ""}`} width={10} height={10} alt="" />
                                            </div>
                                            <div className={`section6MainBoxcDOx overflow-hidden transition-all ease-in-out duration-300 ${faqActive === index ? "max-h-max" : "max-h-0"}`}>
                                                <p className="text-[#39394680] text-[.8rem] leading-[1.2] capitalize  ">{answers}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FaqsPage