import Image from 'next/image'
import React, { useContext } from 'react'
import dayjs from 'dayjs';
import { StringConvert } from './StringConvert';
import Link from 'next/link';
import { MainLanguageValueContext } from '@/app/context/MainLanguageValue';


const truncateText = (text, maxLength) => {
    if(text) {
      if (text.length <= maxLength) {
        return text;
      }
      return text.slice(0, maxLength) + '...';
    }
    return text;
  };
const RelatedNews = ({data}) => {
    const { langValue } = useContext(MainLanguageValueContext);
    const basePath = langValue === "en" ? '' : `${langValue}/`;
    return (
        <section className="section8">
    <div className="container mx-auto px-32">
      <h3 className="uppercase leading-[1] font-bold text-[3.125rem] font-MluvkaBold mb-8">Related Articles</h3>
      <div className="cardMain3 gap-6 grid grid-cols-3">
        {
            Array.isArray(data) && data.map((item) => {
                const {date,slug,title,author_name,description,news_images} = item
                const formattedDate = dayjs(date).format('MMMM D, YYYY');
                const maxLength = 300;
                const truncatedText = truncateText(description, maxLength);
                return (
                    <div className="cardMain3Box">
                    <div className="cardMain3Box__img">
                      <Image src={news_images[0]} className="rounded-2xl w-full h-[20rem] object-cover" width={10} height={10} alt="" />
                    </div>
                    <div className="cardMain3BoxBody">
                      <ul className="list my-4">
                        <li className="flex justify-between text-[.9rem] font-light capitalize text-secondary"><span className="">{author_name}</span> <span className="font-bold">{formattedDate}</span></li>
                      </ul>
                      <div className="h3 capitalize text-[1.625rem] font-light leading-[1] mb-3 font-Mluvka">{title}</div>
                      <p className="text-[.9rem] text-[#393946]">{StringConvert(truncatedText)}</p>
                      <Link href={`/${basePath}news/${slug}`} className="mt-4 block w-fit border border-secondary rounded-full  font-bold capitalize text-center py-2 px-8 mb-4 font-Mluvka ">Read More</Link>
                    </div>
                  </div>
                )
            })
        }
      </div>
    </div>
  </section>
  )
}

export default RelatedNews