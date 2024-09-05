"use client"
import useFetch from '@/app/customHooks/useFetch';
import Loaders from '@/components/Loaders';
import React from 'react'

const ContactPage = ({lang}) => {
    const { loading, data } = useFetch(`webContents/contact/${lang}`);

      if(loading) return <Loaders />;
      let datas = data?.data
  return (
    <div>
         <div className="InnerPageBox1 absolute w-[22rem] h-[22rem] opacity-5 bg-primary left-0 top-[50%]"></div>
    <div className="InnerPageBox2"></div>
    <section className="innerPage1 relative py-10">
        <div className="container mx-auto px-6 border-b-2 border-[#ddd] pb-6">
            <div className="innerPage1_ w-[70%] mx-auto  text-center">
                    <h1 className="font-Mluvka text-[3.3rem] font-bold leading-[1] uppercase mb-3">{datas?.sec_one_heading}</h1>  
            </div>
        </div>
    </section>
    <section className="BRANCHES py-10">
      <div className="container mx-auto">
        <div className="BRANCHESheading text-center mb-10 relative">
          <h2 className="font-bold text-[3.125rem] uppercase">{datas?.sec_two_heading}</h2>
          <div className="h3 text-[#F5F5F5] uppercase text-[10rem] font-light absolute left-0 right-0 mx-auto top-[100%] transform translate-y-[-50%] z-[-1]">{datas?.sec_two_heading}</div>
        </div>
        <div className="BRANCHESMain grid grid-cols-3 gap-6">
          <div className="BRANCHESMainBox border-4 border-[#393946]  relative bg-[#393946] text-white rounded-[4rem] text-center">
              <div className="BRANCHESMainBox_top py-6 px-5">
                <div className="h2 text-[2.2rem] font-bold mb-8 font-Mluvka">{datas?.sec_two_sub_head_one}</div>
                <p className='min-h-[3rem] w-[80%] max-lg:w-[100%] mx-auto'>{datas?.sec_two_location_one}</p>
                <a href={`tel:${datas?.sec_two_phone_one}`} className="text-secondary text-[2.3rem] block font-bold mt-3">{datas?.sec_two_phone_one}</a>
                <a href={`mailto:${datas?.sec_two_email_one}`} className="text-[1.5rem] font-bold font-Mluvka">{datas?.sec_two_email_one}</a>
              </div> 
              <div className="BRANCHESMainBox_bottom">
                <iframe className="w-full h-[15rem] " style={{"borderRadius": "0 0 4rem 4rem"}} src={datas?.sec_two_url_one} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
          </div>
          <div className="BRANCHESMainBox border-4 border-[#393946]  relative bg-[#393946] text-white rounded-[4rem] text-center">
              <div className="BRANCHESMainBox_top py-6 px-5">
                <div className="h2 text-[2.2rem] font-bold mb-8 font-Mluvka">{datas?.sec_two_sub_head_two}</div>
                <p className='min-h-[3rem] w-[80%] max-lg:w-[100%] mx-auto'>{datas?.sec_two_location_two}</p>
                <a href={`tel:${datas?.sec_two_phone_two}`} className="text-secondary text-[2.3rem] block font-bold mt-3">{datas?.sec_two_phone_two}</a>
                <a href={`mailto:${datas?.sec_two_email_two}`} className="text-[1.5rem] font-bold font-Mluvka">{datas?.sec_two_email_two}</a>
              </div> 
              <div className="BRANCHESMainBox_bottom">
                <iframe className="w-full h-[15rem] " style={{"borderRadius": "0 0 4rem 4rem"}} src={datas?.sec_two_url_two} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
          </div>
          <div className="BRANCHESMainBox border-4 border-[#393946]  relative bg-[#393946] text-white rounded-[4rem] text-center">
              <div className="BRANCHESMainBox_top py-6 px-5">
                <div className="h2 text-[2.2rem] font-bold mb-8 font-Mluvka">{datas?.sec_two_sub_head_three}</div>
                <p className='min-h-[3rem] w-[80%] max-lg:w-[100%] mx-auto'>{datas?.sec_two_location_three}</p>
                <a href={`tel:${datas?.sec_two_phone_three}`} className="text-secondary text-[2.3rem] block font-bold mt-3">{datas?.sec_two_phone_three}</a>
                <a href={`mailto:${datas?.sec_two_email_three}`} className="text-[1.5rem] font-bold font-Mluvka">{datas?.sec_two_email_three}</a>
              </div> 
              <div className="BRANCHESMainBox_bottom">
                <iframe className="w-full h-[15rem] " style={{"borderRadius": "0 0 4rem 4rem"}} src={datas?.sec_two_url_three} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default ContactPage