"use client"
import useFetch from '@/app/customHooks/useFetch';
import Image from 'next/image';
import React from 'react'
import dayjs from 'dayjs';
import { StringConvert } from '@/components/StringConvert';
import Link from 'next/link';

const NewPage = ({lang}) => {
    const { loading, data } = useFetch(`news/index/${lang}`);
    if (loading) return ''  
    return (
        <>
        <div class="InnerPageBox1 absolute w-[22rem] h-[22rem] opacity-5 bg-primary left-0 top-[50%]"></div>
        <div class="InnerPageBox2"></div>
        <section class="innerPage1 relative py-10">
            <div class="container mx-auto px-6">
                <div class="innerPage1_ w-[70%] mx-auto  text-center">
                        <h1 class="font-Mluvka text-[3.3rem] font-bold leading-[1] uppercase mb-3">Articles and <br /> legal Updates</h1>  
                </div>
            </div>
        </section>
    
        <section class="section8 relative">
            <div class="container mx-auto">
              <div class="cardMain3 gap-6 grid grid-cols-3">
                {  Array.isArray(data?.data) && data?.data.map((item,index) => {
              const {id,news_images,title,author_name,author_details,date,description} = item
              const formattedDate = dayjs(date).format('MMMM D, YYYY');
              return (
              <div class="cardMain3Box ">
                <div class="cardMain3Box__img">
                  <Image src={news_images[0]} class="rounded-2xl w-full" width={10} height={10} alt="" />
                </div>
                <div class="cardMain3BoxBody bg-[#FFFDFA] p-4">
                  <ul class="list my-4">
                    <li class="flex justify-between text-[.9rem] font-light capitalize text-secondary"><span class="">{author_name}</span> <span class="font-bold">{formattedDate}</span></li>
                  </ul>
                  <div class="h3 capitalize text-[1.625rem] font-light leading-[1] mb-3 font-Mluvka">{title}</div>
                  <p class="text-[.9rem] text-[#393946]">{StringConvert(description)}</p>
                  <Link href={`news/${id}`} class="mt-4 block w-fit border border-secondary rounded-full  font-bold capitalize text-center py-2 px-8 mb-4 font-Mluvka ">Read More</Link>
                </div>
            </div>
            )
            })}
              </div>
    
    
    
    
            
            </div>
          </section>
      {/* <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={setPageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        containerClassName={'pagination'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        activeClassName={'active'} /> */}
          </>
    )
}

export default NewPage