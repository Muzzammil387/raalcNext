import Image from 'next/image'
import React from 'react'

const Consultation = () => {
  return (
    <div>
        <div className='bannerImage relative'>
            {/* <div className='absolute top-[50%] max-w-[35%] mx-auto leading-[1] font-MluvkaBold transform translate-y-[-50%] text-center left-0 right-0 text-white text-[3rem] '>Please fill out the form below with your details and submit your request. </div> */}
            <Image className='w-full h-[40rem] object-cover object-center' src="https://api.raalc.ae/storage/web_content_images/ddMo6EVCMA3XWvm8SJP1PznKWGTDYBQj89ZnOLKl.webp" width={0} height={0} alt="" />
        </div>



        <div className=' py-10 freeconslutant'>
            <div className="container mx-auto">
            <div className='bookForm p-3 mt-3'>
                <h2 className='relative text-[1.4rem] mb-3 roundd'>Please fill out the form below with your details and submit your request. </h2>

                <div className='mb-3'>
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
                </div>

                <button className='bg-secondary text-white py-3 px-6 ml-auto block'>Submit</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Consultation