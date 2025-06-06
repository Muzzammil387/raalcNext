"use client"
import React, { useContext } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { MainLanguageValueContext } from '@/app/context/MainLanguageValue';
import { MainAPiContext } from '@/app/context/MainAPiContext';

const Team = ({team,count}) => {
  const {mainData } = useContext(MainAPiContext);
  const elements = mainData?.elements
    const { langValue } = useContext(MainLanguageValueContext);
    const basePath = langValue === "en" ? '' : `${langValue}/`;

    const teamm =  Array.isArray(team) && count ? team.slice(0, count) : team;
    
  return (
    <section className="section5 py-12">
    <div className="container mx-auto px-20 max-lg:px-0">
      <div className="section5__heading mb-6 relative text-center">
      <h3 className="leading-[1] font-bold font-Mluvka text-[3.125rem] uppercase pb-3">{elements?.ourteam}</h3>
      </div>
      
      <div className="section5Main flex justify-center gap-6 overflow-hidden max-lg:grid max-lg:grid-cols-2">
        {
          Array.isArray(teamm) && teamm.map((item,index) => {
              const {slug,lowyer_image,name,designation} = item
                return (
                    <Link href={`/${basePath}team/${slug}`} key={index} className="section5MainBox max-lg:w-full max-lg:h-[25rem]  transition-all duration-500 cursor-pointer w-[8rem] h-[27rem]  relative">
                    <div className="section5MainBox1 h-full">
                      <Image src={lowyer_image} width={10} height={10}  className="w-full h-full object-cover rounded-[5rem] object-top" priority  alt={name ?? ""} />
                    </div>
                    <div className="section5MainBox2 max-lg:opacity-100 max-lg:bottom-0 left-0 bottom-[-10rem] transition-all duration-500   opacity-0 absolute bg-white py-5 px-3 rounded-[5rem] w-full text-center">
                    <div className="h3 font-bold font-Mluvka uppercase text-[1.438rem] leading-[1] max-lg:text-[1.2rem] mb-2">{name}</div>
                    <div className="h4 leading-[1] text-[1rem] uppercase text-secondary max-lg:text-[.9rem]">{designation}</div>
                    </div>
                  </Link>
                )
            })
        }
      </div> 
    </div>
    <Link href={`/${basePath}team`} className='px-12 py-3 bg-primary rounded-full relative text-white mt-10 ml-auto block w-fit max-lg:mx-auto font-Mluvka mx-auto'>{elements?.["view-all"]}</Link>
  </section>

  )
}

export default Team
