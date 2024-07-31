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
      <div className='teams grid grid-cols-[3fr,7fr] gap-5 items-center max-lg:grid-cols-1'>
        <div className='teams__left'>
          <Image src={lowyer_image} className='w-full h-[30rem] object-cover object-left-top rounded-3xl' width={10} height={10} alt='' />
        </div>
        <div className='teams__Right'>
         <h1 className='font-MluvkaBold text-[4rem] uppercase'>{name}</h1>
         <h2 className='leading-[1]  text-secondary text-[1.3rem]'>{designation}</h2>
         <p className=' mt-4 max-lg:w-full'>{StringConvert(detail)}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TeamDetails