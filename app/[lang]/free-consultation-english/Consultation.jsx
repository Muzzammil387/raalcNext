"use client";

import { bannerImage222 } from '@/app/untils/imgimport';
import Image from 'next/image'
import Script from 'next/script';
import React from 'react'

const Consultation = () => {
  return (
    <div>
        <div className='bannerImage relative'>
            {/* <div className='absolute top-[50%] max-w-[35%] mx-auto leading-[1] font-MluvkaBold transform translate-y-[-50%] text-center left-0 right-0 text-white text-[3rem] '>Please fill out the form below with your details and submit your request. </div> */}
            <Image className='w-full h-[40rem] object-cover object-center' src={bannerImage222} width={0} height={0} alt="" />
        </div>



        <div className=' py-10 freeconslutant'>
            <div className="container mx-auto">
            <div className='bookForm p-3 mt-3'>
                <h2 className='relative text-[1.4rem] mb-3 roundd'>Please fill out the form below with your details and submit your request. </h2>
                <Script
        src="//js.hsforms.net/forms/embed/v2.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (window.hbspt) {
            window.hbspt.forms.create({
              portalId: "20189826",
              formId: "904539ab-25a9-4fde-8305-bf76e54912db",
              target: "#hubspotForm",
            });
          }
        }}
      />
      {/* Container for the form */}
      <div id="hubspotForm"></div>
        <br />
      <p className='text-[1.2rem]'>Thank you for your interest in our legal services.</p>
      <p className='text-[1.2rem]'>Please fill out the form below with your details and submit your request. </p>
      <p className='text-[1.2rem]'>One of our team members will contact you shortly to coordinate a convenient time for your free consultation session..</p>
      <p className='text-[1.2rem]'>We look forward to assisting you!</p>
      <br />
      <br />
      <p className='text-[1.2rem]'>感谢您的咨询。</p>
      <p className='text-[1.2rem]'>请填写以下表格，提供您的详细信息并提交请求。</p>
      <p className='text-[1.2rem]'>我们的团队成员将很快与您联系，协调并安排一次免费的咨询。</p>
      <p className='text-[1.2rem]'>期待与您的合作！</p>

                {/* <div className='mb-3'>
                <label htmlFor="" className='text-[.9rem]'>Name</label>
                <input type="text" className='w-full border border-[#cbd6e2] outline-none py-1 px-2 rounded-md' />
                </div>
                <div className='mb-3'>
                <label htmlFor="" className='text-[.9rem]'>Email</label>
                <input type="text" className='w-full border border-[#cbd6e2] outline-none py-1 px-2 rounded-md' />
                </div>
                <div className='mb-3'>
                <label htmlFor="" className='text-[.9rem]'>Phone</label>
                <input type="text" className='w-full border border-[#cbd6e2] outline-none py-1 px-2 rounded-md' />
                </div>
                <div className='mb-3'>
                <label htmlFor="" className='text-[.9rem]'>Country</label>
                <input type="text" className='w-full border border-[#cbd6e2] outline-none py-1 px-2 rounded-md' />
                </div>
                <div className='mb-3'>
                <label htmlFor="" className='text-[.9rem]'>Inquiry</label>
                <textarea name="inquiry" id="" className='w-full border border-[#cbd6e2] outline-none py-1 px-2 rounded-md'></textarea>
                </div> */}

                {/* <button className='bg-secondary text-white py-3 px-6 ml-auto block'>Submit</button> */}
            </div>
            </div>
        </div>
    </div>
  )
}

export default Consultation