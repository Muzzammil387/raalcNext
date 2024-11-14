"use client"
import { MainAPiContext } from '@/app/context/MainAPiContext';
import { MainBookingStatusContext } from '@/app/context/MainBookingStatusContext';
import useFetch from '@/app/customHooks/useFetch';
import Loaders from '@/components/Loaders';
import { StringConvert } from '@/components/StringConvert';
import Image from 'next/image';
import React, { useContext } from 'react'

const TeamDetails = ({lang,slug}) => {
  const { handleOpenModel } = useContext(MainBookingStatusContext);
  const {mainData } = useContext(MainAPiContext);
  const elements = mainData?.elements
    const { loading, data } = useFetch(`teams/singleDetail/${slug}/${lang}`);
    if(loading) return <Loaders />;
    const {name,designation,detail,lowyer_image,educations,memberships,practice_areas,skills,qr_code_image} = data?.data
  return (
    <div className='teampage py-24 max-lg:py-6'>
    <div className='container mx-auto'>
      <div className='teams grid grid-cols-[2fr,8fr] max-[1400px]:grid-cols-[3fr,8fr] gap-10 items-center max-lg:grid-cols-1'>
        <div className='teams__left'>
          <Image src={lowyer_image} className='w-full h-[35rem]  object-cover rounded-[5rem]' width={10} height={10} alt='' />
        </div>
        <div className='teams__Right'>
         <h1 className='font-MluvkaBold text-[4rem] uppercase leading-[1] max-lg:text-[2rem]'>{name}</h1>
         <h2 className='leading-[1]  text-secondary text-[1.3rem]'>{designation}</h2>
         <div className=' mt-4  max-[1400px]:text-[.9rem]  max-lg:w-full'>{StringConvert(detail)}</div>
        </div>
      </div>
      
      <div className='TeamFooter mt-14  mx-auto grid grid-cols-2 gap-5 max-lg:grid-cols-1'>
      <div className="TeamFooterBox">
        <h3 className='text-secondary text-[1.4rem]'>{elements?.education}</h3>
        <ul className='list'>
          {educations && educations.map((item,index) => {
            return (
              <li className='my-2' key={index}>{item}</li>
            )
          })}
        </ul>
      </div>
      {/* close TeamFooterBox  */}
      <div className="TeamFooterBox">
        <h3 className='text-secondary text-[1.4rem]'>{elements?.skills}</h3>
        <ul className='list'>
        {Array.isArray(skills) && skills.map((item,index) => {
            return (
              <li className='my-2' key={index}>{item}</li>
            )
          })}
        </ul>
      </div>
      {/* close TeamFooterBox  */}
      <div className="TeamFooterBox">
        <h3 className='text-secondary text-[1.4rem]'>{elements?.members}</h3>
        <ul className='list'>
        {Array.isArray(memberships) && memberships.map((item,index) => {
            return (
              <li className='my-2' key={index}>{item}</li>
            )
          })}
        </ul>
      </div>
      {/* close TeamFooterBox  */}
        <div className="TeamFooterBox">
          <h3 className='text-secondary text-[1.4rem]'>{elements?.["practice_area"]}</h3>
          <ul className='list'>
          {Array.isArray(practice_areas) && practice_areas.map((item,index) => {
            return (
              <li className='my-2' key={index}>{item}</li>
            )
          })}
          </ul>
        </div>
      </div>
      <br />
      <hr />
     {qr_code_image && <div className='  pt-5'>
        <Image className='w-[10rem]' src={qr_code_image ?? ""} alt='dfg' width={0} height={0} />
      </div>}
        <button onClick={() => handleOpenModel(true,slug)} className="mt-10 btn btn-primary w-fit cursor-pointer uppercase bg-primary text-white rounded-md px-4 py-2 bookaconsultation font-Mluvka">{elements?.["book-a-consultation"]}</button>
    </div>
  </div>
  )
}

export default TeamDetails