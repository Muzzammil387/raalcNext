"use client"
import useFetch from '@/app/customHooks/useFetch';
import Image from 'next/image';
import React from 'react'

const TeamDetails = ({lang,slug}) => {
    const { loading, data } = useFetch(`teams/${slug}/${lang}`);
  return (
    <div className='teampage py-24'>
    <div className='container mx-auto'>
      <div className='teams grid grid-cols-[3fr,7fr] gap-5 items-center max-lg:grid-cols-1'>
        <div className='teams__left'>
          <Image src={"https://testingdigitaldmcc.com/raalc/webImages/team/2.png"} className='w-full h-[30rem] object-cover object-left-top rounded-3xl' width={10} height={10} alt='' />
        </div>
        <div className='teams__Right'>
         <h1 className='font-MluvkaBold text-[4rem] uppercase'>Mahmoud Kamal</h1>
         <h2 className='leading-[1]  text-secondary text-[1.3rem]'>LEGAL ASSOCIATE</h2>
         <p className=' mt-4 max-lg:w-full'>Mahmoud holds a bachelor’s degree as well as a master’s degree in law and a diploma in Private Law from the University of Helwan in 2010. He has a long history of dealing with legal disputes and in using competent databases for many disputes, which developed his skills and experience in the field.</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TeamDetails