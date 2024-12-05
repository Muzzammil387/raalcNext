import { MainLanguageValueContext } from '@/app/context/MainLanguageValue'
import { accordion1, arrow } from '@/app/untils/imgimport'
import Image from 'next/image'
import Link from 'next/link'
import dayjs from 'dayjs';
import 'dayjs/locale/ar'; // Import Arabic locale
import React, { useContext, useState } from 'react'
import { StringConvert } from '../StringConvert';
import { MainAPiContext } from '@/app/context/MainAPiContext';


const formatDate = (dateString) => {
  const date = dayjs(dateString);
  return {
    day: date.format('DD'), // "02"
    monthYear: date.format('MMM, YYYY') // "Feb 2024"
  };
};

const truncateText = (text, maxLength) => {
  if(text) {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  }
  return text;
};



const NEWS = ({news}) => {
  const [newsActive, setNewsActive] = useState("")
  const {mainData } = useContext(MainAPiContext);
  const elements = mainData?.elements
  const { langValue } = useContext(MainLanguageValueContext);
  const basePath = dayjs.locale(langValue === "en" ? 'en' : 'ar');

  const handleTab = (index) => {
if(index === newsActive) {
  setNewsActive("")
}
else {
  setNewsActive(index)
}
  }




  return (
    <section className="section6 py-10 relative pr-14 max-lg:px-5">
    <div className="section6BOx1 bg-[#ECACAD] absolute left-0 -top-3 w-[11.313rem] h-[11.313rem] opacity-[.6] blur-[5.75rem]"></div>
    <div className="section6BOx2 bg-[#CEAF7F] absolute left-0 -bottom-3 w-[11.313rem] h-[11.313rem] opacity-[.6] blur-[15.438rem]"></div>
    <div className="section6BOx3 bg-[#3D50DF] absolute right-0 -bottom-10 w-[20rem] h-[20rem] opacity-[.6] blur-[15.438rem]"></div>
      <div className="section6Heading max-lg:grid-cols-1  relative grid  grid-cols-[2.5fr,6.5fr] gap-3 items-start ">
        <a href="#" className="font-Mluvka max-lg:hidden text-[#9F865F] py-3 px-4 rounded-[3rem] w-fit ml-auto mr-10 capitalize border border-[#E7E7E7] bg-white">{elements?.["News-and-updates"] || "News and updates"}</a>
        <h3 className="uppercase leading-[1] font-bold text-[3.125rem] font-MluvkaBold max-lg:text-center ">{StringConvert(elements?.["news-and-judgements"] || "News & Judgements")}</h3>
      </div>
      <div className="section6Main mt-14 relative">
        {Array.isArray(news) && news.slice(0, 5).map((item,index) => {
          const {date,title,description,news_images,slug} = item
          const formattedDate = formatDate(date);
          const maxLength = 300;
          const truncatedText = truncateText(description, maxLength);
          return (
            <div key={index} className={`section6MainBox relative grid  grid-cols-[2.5fr,6.5fr] gap-10 items-start max-lg:grid-cols-1 ${newsActive === index ? "active bg-white":""}`}>
            <div className={`section6MainBox_img max-lg:hidden transform scale-y-0 transition-all ease-in-out duration-500 ${newsActive === index ? "scale-y-[1]":"scale-y-0"}`}>
              <Image src={news_images[0]} width={10} height={10} className="w-full rounded-r-3xl absolute left-0 translate-y-[-30%]" alt="" />
            </div>
            <div className="section6MainBox_ border-b py-5 border-[#ddd] grid grid-cols-[auto,1fr] items-start">
              <div className="section6MainBoxl pr-5 border-r border-secondary">
                <div className="h2 text-[2.5rem] font-light uppercase text-secondary font-Mluvka leading-[1] text-center">{formattedDate.day}</div>
                <div className="h3 font-Mluvka capitalize text-[.9rem] font-light leading-[1]">{formattedDate.monthYear}</div>
              </div>
              <div className="section6MainBoxc px-8">
                <div className="h4  cursor-pointer accordions grid grid-cols-[7fr,3fr]" ><span onClick={() => handleTab(index)} className="leading-[1.1] font-MluvkaLight">{title}</span>
                <Link href={`/${basePath}/news/${slug}`}>
                  <Image src={arrow} className={`ml-auto w-[1.438rem] relative chevron transition-all ease-in-out duration-300 ${newsActive === index ? "rotate-180" : ""}`} alt="" />
                </Link>
                </div>
                <div className={`section6MainBoxcDOx overflow-hidden transition-all ease-in-out duration-300 ${newsActive === index ? "max-h-max":"max-h-0"}`}>
                  <div className="text-[#39394680] text-[.8rem] leading-[1.2] capitalize  mx:w-[70%] !font-normal pr-10">{StringConvert(truncatedText)}</div>
                </div>
              </div> 
            </div>
            
          </div>
          )
        })}
      </div>
      <br />
      <Link href={`/${basePath}/news`} className="section6btn px-24 py-3 bg-black rounded-full relative text-white mt-10 ml-auto block w-fit max-lg:mx-auto font-Mluvka">
    {elements?.["view-all"]}
</Link>
  </section>
  )
}

export default NEWS