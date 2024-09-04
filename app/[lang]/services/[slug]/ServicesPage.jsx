"use client"
import { MainAPiContext } from '@/app/context/MainAPiContext';
import { MainBookingStatusContext } from '@/app/context/MainBookingStatusContext';
import useFetch from '@/app/customHooks/useFetch';
import Faqs from '@/components/Faqs';
import Laws from '@/components/Laws';
import Loaders from '@/components/Loaders';
import RelatedNews from '@/components/RelatedNews';
import Team from '@/components/Team';
import Image from 'next/image'
import Link from 'next/link';
import React, { useContext } from 'react'

const ServicesPage = ({ lang, slug }) => {
  const { handleOpenModel } = useContext(MainBookingStatusContext);
  const { loading, data } = useFetch(`services/fetchPageContent/${slug}/${lang}`);
  const { mainData } = useContext(MainAPiContext);
  const elements = mainData?.elements
  

  if (loading) return <Loaders />;
  const alldata = data.data
  const { sec_two,sec_three,sec_four,teams,faqs,laws,news,faqs_heading,faqs_short_heading,laws_short_heading,laws_heading } = alldata
  const faqsData = {
    "faqs_heading":faqs_heading,
    "faqs_short_heading":faqs_short_heading,
    "faqs":faqs,
  }
  const lawsData = {
    "laws_heading":laws_heading,
    "laws_short_heading":laws_short_heading,
    "laws":laws,
  }
  return (
    <>    <section className="innerPage1 py-20 max-lg:py-7">
      <div className="container mx-auto px-6">
        <div className="innerPage1_ grid grid-cols-2 gap-6">
          <div className="innerPage1_img max-lg:order-2">
            <h1 className="font-Mluvka text-[3.3rem] font-bold leading-[1] uppercase mb-3">{alldata?.sec_one_heading_one}</h1>
            <div className="h3 text-[1.625rem] text-secondary leading-[1] mb-2">{alldata?.sec_one_heading_two}</div>
            <p className="text-[#393946]">{alldata?.sec_one_description}</p>
          </div>
          <div className="innerPage1_Right max-lg:order-1">
            <Image src={alldata?.sec_one_image ?? ""} className="w-full max-h-[30rem] object-cover rounded-[2rem]" width={10} height={10} alt="1.webp" />
          </div>
        </div>
      </div>
    </section>
    {sec_two[0].heading &&  <section className="productM py-14 bg-[#F5F5F5] rounded-[5rem] max-lg:rounded-xl">
        <div className="container mx-auto px-6">
          <div className="productM_ grid grid-cols-3 gap-5 max-lg:gap-[3rem]">
            {Array.isArray(sec_two) && sec_two.map((item, index) => {
              const { description, heading, image } = item
              return (
                <div className="card2" key={index}>
                  <div className="card2_img sadsad">
                    <Image className="w-full object-cover h-[13.438rem] rounded-3xl   " src={image ?? ""} width={10} height={10} alt="" />
                  </div>
                  <div className="card2_Body mt-3">
                    <div className="h4 capitalize font-bold font-Mluvka leading-[1] text-[2rem]">{heading}</div>
                    <p className="text-[#393946] leading-[1.3] mt-2">{description}</p>

                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>}

      {sec_three[0].heading_one && Array.isArray(sec_three) && sec_three.map((item,index) => {
        const {image,heading_one,heading_two,description} = item
        return (
          <section className="innerPage1 py-10" key={index}>
          <div className="container mx-auto px-6">
            {
              image ? 
              <div className="innerPage1_ grid items-center grid-cols-2 max-lg:grid-cols-1 gap-6">
              { <div className={`innerPage1_Right relative h-full ${index%2 !== 0 ? "order-2": "max-lg:order-1"}`}>
              {image &&  <Image src={image ?? ""} className="w-full  absolute max-lg:relative h-full object-cover rounded-[2rem]" width={10} height={10} alt="1.webp" />}
              </div> }
              <div className={`innerPage1_img   ${index%2 !== 0 ? "order-1 max-lg:order-2": "max-lg:order-2"}`}>
                <h3 className="font-Mluvka text-[3.3rem] max-lg:text-[2.6rem] font-bold leading-[1] uppercase mb-3">{heading_one}</h3>
                <div className="h3 text-[1.625rem] text-secondary leading-[1] mb-2">{heading_two}</div>
                <p className="text-[#393946]">{description}</p>
              </div>
  
            </div>
            :
            <div className="innerPage1_  text-center max-lg:grid-cols-1 gap-6">
             
              <div className={`innerPage1_img   ${index%2 !== 0 ? "order-1 max-lg:order-2": "max-lg:order-2"}`}>
                <h3 className="font-Mluvka text-[3.3rem] max-lg:text-[2.6rem] font-bold leading-[1] uppercase mb-3">{heading_one}</h3>
                <div className="h3 text-[1.625rem] text-secondary leading-[1] mb-2">{heading_two}</div>
                <p className="text-[#393946]">{description}</p>
              </div>
  
            </div>
            }
          
          </div>
        </section>
        )
      })}

    {alldata?.sec_four_heading &&  <section className="innerPage3 bg-[#FFF9F0] relative rounded-[5rem] text-center py-16">
        <div className="container mx-auto px-24">
          <div className="innerPage3_heading">
            <div className="h3 uppercase text-[3.125rem]  font-bold leading-[1] font-MluvkaBold">{alldata?.sec_four_heading}</div>
            <p className="w-[90%] mx-auto mt-4">{alldata?.sec_four_description}</p>
          </div>
          <div className="innerPage3Body mt-12">
            <ul className="list flex justify-center gap-10 text-center">
              {
                Array.isArray(sec_four) && sec_four.map((item,index) => {
                  const {image,title} = item
                  return(
                    <li key={index}>
                    <Image className="h-[5.438rem] mx-auto object-contain w-full" src={image ?? ""} width={10} height={10} alt="" />
                    <span className="uppercase font-bold  font-Mluvka mt-3 block">{title}</span>
                  </li>
                  )
                })
              }
            </ul>
          </div>
          <Link onClick={() => handleOpenModel(true)} href="#" className="btn btn-primary uppercase bg-primary text-white rounded-md px-4 py-2 bookaconsultation font-Mluvka mt-5 block w-fit mx-auto">{elements?.["book-a-consultation"]}</Link>
        </div>
      </section>}
     <Team team={teams?.teams} />
    {faqsData?.faqs_heading && <Faqs data={faqsData} />}
{lawsData?.laws_heading &&    <Laws data={lawsData} />}
    <RelatedNews data={news?.news} />
    </>
  )
}

export default ServicesPage