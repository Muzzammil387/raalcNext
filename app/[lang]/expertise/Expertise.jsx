"use client"
import useFetch from '@/app/customHooks/useFetch';
import { StringConvert } from '@/components/StringConvert';
import React from 'react'

const Expertise = ({lang}) => {
    const { loading, data } = useFetch(`webContents/othertab/expertise/${lang}`);
    if(loading) return '';
  return (
    <div className='diversity'>
    <div className="InnerPageBox1 absolute w-[22rem] h-[22rem] opacity-5 bg-primary left-0 top-[50%]"></div>
<div className="InnerPageBox2"></div>
<section className="innerPage1 relative py-10">
 <div className="container mx-auto px-6 border-b-2 border-[#ddd] pb-6">
     <div className="innerPage1_ w-[70%] mx-auto  text-center">
             <h1 className=" text-[3.3rem] font-bold leading-[1] uppercase mb-3 font-MluvkaBold">{data?.data?.heading}</h1>  
     </div>
 </div>
</section>

<section>
<div className="container mx-auto ">
 <div>{StringConvert(data?.data?.description)}</div>

</div>
</section>
</div>
  )
}

export default Expertise