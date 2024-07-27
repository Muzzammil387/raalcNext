
import React from 'react'
import GalleryBox from '@/components/GalleryBox';

const page = ({ params: { lang } }) => {
    console.log(lang)
  return (
   <>
       <div className="InnerPageBox1 absolute w-[22rem] h-[22rem] opacity-5 bg-primary left-0 top-[50%]"></div>
    <div className="InnerPageBox2"></div>
    <section className="innerPage1 relative py-10">
        <div className="container mx-auto px-6 border-b-2 border-[#ddd] pb-6">
            <div className="innerPage1_ w-[70%] mx-auto  text-center">
                    <h1 className="font-Mluvka text-[3.3rem] font-bold leading-[1] uppercase mb-3">media gallery</h1>  
            </div>
        </div>
    </section>
    <section className="gallery relative">
        <div className="container mx-auto">
           <GalleryBox />
        </div>
    </section>
   </>
  )
}

export default page