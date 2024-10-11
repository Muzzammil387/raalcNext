"use client"
import { MainBookingStatusContext } from '@/app/context/MainBookingStatusContext';
import useFetch from '@/app/customHooks/useFetch';
import { StringConvert } from '@/components/StringConvert';
import Team from '@/components/Team';
import Image from 'next/image';
import React, { useContext } from 'react'

const DepartmentsDetails = ({lang,slug}) => {
    const { handleOpenModel } = useContext(MainBookingStatusContext);
    const { loading, data } = useFetch(`departments/${slug}/${lang}`);
    if(loading) return ''
    const {title,teams,description,department_image} = data?.data
  return (
    <div className='teampage py-24'>
    <div className='container mx-auto'>
      <div className='teams grid grid-cols-[3fr,7fr] gap-5 items-center max-lg:grid-cols-1'>
        <div className='teams__left'>
          <Image src={department_image} className='w-full h-[30rem] object-cover object-left-top rounded-3xl' width={10} height={10} alt='' />
        </div>
        <div className='teams__Right'>
         <h1 className='font-MluvkaBold text-[4rem] uppercase'>{title}</h1>
         <div className=' mt-4 max-lg:w-full'>{StringConvert(description)}</div>
         <br />
         <button onClick={() => handleOpenModel(true)} className="btn btn-primary cursor-pointer uppercase bg-primary text-white rounded-md px-4 py-2 bookaconsultation font-Mluvka">Book a Consultation</button>
        </div>
      </div>
      { <Team team={teams} count={false} />}
    </div>
  </div>
  )
}

export default DepartmentsDetails