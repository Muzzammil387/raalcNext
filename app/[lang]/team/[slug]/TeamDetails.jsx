"use client"
import useFetch from '@/app/customHooks/useFetch';
import { StringConvert } from '@/components/StringConvert';
import Image from 'next/image';
import React from 'react'

const TeamDetails = ({lang,slug}) => {
    const { loading, data } = useFetch(`teams/${slug}/${lang}`);
    if(loading) return ''
    const {name,designation,detail,lowyer_image} = data?.data
  return (
    <div className='teampage py-24'>
    <div className='container mx-auto'>
      <div className='teams grid grid-cols-[2fr,8fr] gap-10 items-center max-lg:grid-cols-1'>
        <div className='teams__left'>
          <Image src={lowyer_image} className='w-full h-[35rem]  object-cover object-left-top rounded-[5rem]' width={10} height={10} alt='' />
        </div>
        <div className='teams__Right'>
         <h1 className='font-MluvkaBold text-[4rem] uppercase'>{name}</h1>
         <h2 className='leading-[1]  text-secondary text-[1.3rem]'>{designation}</h2>
         <p className=' mt-4 w-[90%] max-lg:w-full'>{StringConvert(detail)}</p>
        </div>
      </div>
      <div className='TeamFooter mt-14 mx-auto grid grid-cols-2 gap-5'>
      <div className="TeamFooterBox">
        <h3 className='text-secondary text-[1.4rem]'>EDUCATION</h3>
        <ul className='list'>
          <li className='my-2'>Bachelors in Law from the University of Helwan</li>
          <li className='my-2'>Masters in Law from the University of Helwan</li>
          <li className='my-2'>Diploma in Private Law from the University of Helwan</li>
          <li className='my-2'>Course qualification in Legal Training of the Trial Procedures</li>
        </ul>
      </div>
      {/* close TeamFooterBox  */}
      <div className="TeamFooterBox">
        <h3 className='text-secondary text-[1.4rem]'>SKILLS</h3>
        <ul className='list'>
          <li className='my-2'>Communication skills</li>
          <li className='my-2'>Teamwork skills</li>
          <li className='my-2'>Ability to work under pressure</li>
          <li className='my-2'>Time management</li>
        </ul>
      </div>
      {/* close TeamFooterBox  */}
      <div className="TeamFooterBox">
        <h3 className='text-secondary text-[1.4rem]'>MEMBERSHIPS</h3>
        <ul className='list'>
          <li className='my-2'>Egyptian Bar Association</li>
          <li className='my-2'>Ras Al Khaimah Centre of Reconciliation & Commercial Arbitration</li>
          <li className='my-2'>Member of Faculty of Law at Dubai International Arbitration Center</li>
          <li className='my-2'>Dubai International Financial Center</li>
        </ul>
      </div>
      {/* close TeamFooterBox  */}
        <div className="TeamFooterBox">
          <h3 className='text-secondary text-[1.4rem]'>PRACTICE AREA</h3>
          <ul className='list'>
            <li className='my-2'>Civil and Criminal Law</li>
            <li className='my-2'>Arbitration Law</li>
            <li className='my-2'>UAE Public Prosecution</li>
            <li className='my-2'>Banking and Finance</li>
          </ul>
        </div>
        {/* close TeamFooterBox  */}
      </div>
    </div>
  </div>
  )
}

export default TeamDetails