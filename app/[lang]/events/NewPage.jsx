"use client"
import useFetch from '@/app/customHooks/useFetch';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs';
import { StringConvert } from '@/components/StringConvert';
import Link from 'next/link';
import { Pagination } from 'antd';
import useGet from '@/app/customHooks/useGet';
import Loaders from '@/components/Loaders';



const truncateText = (text, maxLength) => {
  if(text) {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  }
  return text;
};


const NewPage = ({lang}) => {
    const { loading, data } = useFetch(`events/index/${lang}/6?page=1`);
    const [datas, setDatas] = useState("")
    useEffect(() => {
    if(data) {
      setDatas(data?.data)
    }
    }, [data])

    const basePath = lang === "en" ? '' : `${lang}/`;
    const [resget, apiMethodGet] = useGet()
    useEffect(() => {
      if(resget.data) {
        setDatas(resget?.data?.data)
      }
      }, [resget.data])
    const [currentPage, setCurrentPage] = useState(1);
    const onChange = (current, pageSize) => {
      setCurrentPage(current)
      apiMethodGet(`events/index/${lang}/6?page=${current}`);
    };

    
    if (loading) return <Loaders />  
    return (
        <>
        <div className="InnerPageBox1 absolute w-[22rem] h-[22rem] opacity-5 bg-primary left-0 top-[50%]"></div>
        <div className="InnerPageBox2"></div>
        <section className="innerPage1 relative py-10">
            <div className="container mx-auto px-6">
                <div className="innerPage1_ w-[70%] mx-auto  text-center">
                        <h1 className="font-Mluvka text-[3.3rem] font-bold leading-[1] uppercase mb-3">Articles and <br /> legal Updates</h1>  
                </div>
            </div>
        </section>
    
        <section className="section8 relative">
            <div className="container mx-auto">
              <div className="cardMain3 gap-6 grid grid-cols-3">
                {  Array.isArray(datas) && datas.map((item,index) => {
              const {id,slug,event_images,title,author_name,date,description} = item
              const formattedDate = dayjs(date).format('MMMM D, YYYY');
              const maxLength = 300;
              const truncatedText = truncateText(description, maxLength);
              return (
              <div className="cardMain3Box " key={index}>
                <div className="cardMain3Box__img">
                  <Image src={event_images[0]} className="rounded-2xl w-full h-[20rem] object-cover" width={10} height={10} alt="" />
                </div>
                <div className="cardMain3BoxBody bg-[#FFFDFA] p-4">
                  <ul className="list my-4">
                    <li className="flex justify-between text-[.9rem] font-light capitalize text-secondary"><span className="">{author_name}</span> <span className="font-bold">{formattedDate}</span></li>
                  </ul>
                  <div className="h3 capitalize text-[1.625rem] font-light leading-[1] mb-3 font-Mluvka">{title}</div>
                  <div className="text-[.9rem] text-[#393946]">{StringConvert(truncatedText)}</div>
                  <Link href={`/${basePath}events/${slug}`} className="mt-4 block w-fit border border-secondary rounded-full  font-bold capitalize text-center py-2 px-8 mb-4 font-Mluvka ">Read More</Link>
                </div>
            </div>
            )
            })}
              </div>
    
    
              <div className='my-4'>
                <Pagination
                    onChange={onChange}
                    defaultCurrent={currentPage}
                    total={data?.pagination?.total}
                    pageSize={6}
                />
            </div>
    
            
            </div>
          </section>
          </>
    )
}

export default NewPage