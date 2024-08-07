"use client"
import { MainBookingStatusContext } from '@/app/context/MainBookingStatusContext';
import useFetch from '@/app/customHooks/useFetch';
import { StringConvert } from '@/components/StringConvert';
import Image from 'next/image';
import React, { useContext } from 'react'

const TeamDetails = ({lang,slug}) => {
  const { handleOpenModel } = useContext(MainBookingStatusContext);
    const { loading, data } = useFetch(`teams/${slug}/${lang}`);
    if(loading) return ''
    const {name,designation,detail,lowyer_image,educations,memberships,practice_areas,skills} = data?.data
  return (
    <div className='teampage py-24 max-lg:py-6'>
    <div className='container mx-auto'>
      <div className='teams grid grid-cols-[2fr,8fr] gap-10 items-center max-lg:grid-cols-1'>
        <div className='teams__left'>
          <Image src={lowyer_image} className='w-full h-[35rem]  object-cover object-left-top rounded-[5rem]' width={10} height={10} alt='' />
        </div>
        <div className='teams__Right'>
         <h1 className='font-MluvkaBold text-[4rem] uppercase leading-[1] max-lg:text-[2rem]'>{name}</h1>
         <h2 className='leading-[1]  text-secondary text-[1.3rem]'>{designation}</h2>
         <div className=' mt-4 w-[90%] max-lg:w-full'>{StringConvert(detail)}</div>
        </div>
      </div>
      <div className='TeamFooter mt-14 mx-auto grid grid-cols-2 gap-5 max-lg:grid-cols-1'>
      <div className="TeamFooterBox">
        <h3 className='text-secondary text-[1.4rem]'>EDUCATION</h3>
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
        <h3 className='text-secondary text-[1.4rem]'>SKILLS</h3>
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
        <h3 className='text-secondary text-[1.4rem]'>MEMBERSHIPS</h3>
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
          <h3 className='text-secondary text-[1.4rem]'>PRACTICE AREA</h3>
          <ul className='list'>
          {Array.isArray(practice_areas) && practice_areas.map((item,index) => {
            return (
              <li className='my-2' key={index}>{item}</li>
            )
          })}
          </ul>
        </div>
      </div>
        <button onClick={() => handleOpenModel(true)} className="mt-10 btn btn-primary w-fit cursor-pointer uppercase bg-primary text-white rounded-md px-4 py-2 bookaconsultation font-Mluvka">Book a Consultation</button>
    </div>
  </div>
  )
}

export default TeamDetails