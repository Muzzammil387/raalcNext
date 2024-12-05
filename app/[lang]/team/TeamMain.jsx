"use client"
import { MainLanguageValueContext } from '@/app/context/MainLanguageValue';
import useFetch from '@/app/customHooks/useFetch';
import useGet from '@/app/customHooks/useGet';
import { pro } from '@/app/untils/imgimport';
import Loaders from '@/components/Loaders';
import { Pagination } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'

const TeamMain = ({lang}) => {
        const { loading, data } = useFetch(`teams/${lang}/10?page=1`);
        const { langValue } = useContext(MainLanguageValueContext);
        const basePath = langValue === "en" ? '' : `${langValue}/`;
        const [datas, setDatas] = useState("")
    useEffect(() => {
    if(data) {
      setDatas(data?.data)
    }
    }, [data])
        const [resget, apiMethodGet] = useGet()
        useEffect(() => {
          if(resget.data) {
            setDatas(resget?.data?.data)
          }
          }, [resget.data])
        const [currentPage, setCurrentPage] = useState(1);
        const [currentPageSize, setCurrentPageSize] = useState(10);
        const onChange = (current, pageSize) => {
          setCurrentPage(current)
          setCurrentPageSize(pageSize)
          apiMethodGet(`teams/${lang}/${pageSize}?page=${current}`);
        };
    
    if(loading) return <Loaders />
  return (
    <>
    <section className="innerPage1 relative py-10">
    <div className="container mx-auto px-6 border-b-2 border-[#ddd] pb-6">
        <div className="innerPage1_ w-[70%] mx-auto  text-center">
                <h1 className=" text-[3.3rem] font-bold leading-[1] uppercase mb-3 font-MluvkaBold">{datas?.meta?.heading}</h1>  
        </div>
    </div>
</section>

<section className="section5 py-12">
    <div className="container mx-auto px-20 max-lg:px-0">
      <div className="section5Main grid grid-cols-4 gap-6 overflow-hidden max-lg:grid max-lg:grid-cols-2">
        {
            Array.isArray(datas?.teams) && datas?.teams?.map((item,index) => {
              const {id,lowyer_image,name,designation} = item
                return (
                    <Link href={`/${basePath}team/${id}`}  key={index} className="section5MainBox max-lg:w-full   transition-all duration-500 cursor-pointer !w-full   relative">
                    <div className="section5MainBox1">
                      <Image src={lowyer_image ?? ""}  width={10} height={10}  className="w-full max-lg:h-[25rem] object-cover rounded-[5rem] h-[27rem] object-top" priority  alt="" />
                    </div>
                    <div className="section5MainBox2 relative  transition-all duration-500   py-5 px-3 rounded-[5rem] w-full text-center">
                    <div className="h3 font-bold font-Mluvka uppercase text-[1.438rem] leading-[1] max-lg:text-[1.2rem]">{name}</div>
                    <div className="h4 leading-[1] text-[1rem] uppercase text-secondary max-lg:text-[.9rem]">{designation}</div>
                    </div>
                  </Link>
                )
            })
        }
      

      </div> 
      <div className='my-4'>
                <Pagination
                    onChange={onChange}
                    current={currentPage}
                    total={data?.pagination?.total}
                    pageSize={currentPageSize}
                    showSizeChanger={false}
                />
            </div>
    </div>
  </section>
    </>
  )
}

export default TeamMain