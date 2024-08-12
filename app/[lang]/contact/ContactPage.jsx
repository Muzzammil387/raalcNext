"use client"
import useFetch from '@/app/customHooks/useFetch';
import React from 'react'

const ContactPage = ({lang}) => {
    const { loading, data } = useFetch(`webContents/contact/${lang}`);

      if(loading) return ''
      let datas = data?.data
  return (
    <div>
         <div class="InnerPageBox1 absolute w-[22rem] h-[22rem] opacity-5 bg-primary left-0 top-[50%]"></div>
    <div class="InnerPageBox2"></div>
    <section class="innerPage1 relative py-10">
        <div class="container mx-auto px-6 border-b-2 border-[#ddd] pb-6">
            <div class="innerPage1_ w-[70%] mx-auto  text-center">
                    <h1 class="font-Mluvka text-[3.3rem] font-bold leading-[1] uppercase mb-3">{datas?.sec_one_heading}</h1>  
            </div>
        </div>
    </section>
    <section class="BRANCHES py-10">
      <div class="container mx-auto">
        <div class="BRANCHESheading text-center mb-10 relative">
          <h2 class="font-bold text-[3.125rem] uppercase">{datas?.sec_two_heading}</h2>
          <div class="h3 text-[#F5F5F5] uppercase text-[12.5rem] font-light absolute top-[100%] transform translate-y-[-50%] z-[-1]">{datas?.sec_two_heading}</div>
        </div>
        <div class="BRANCHESMain grid grid-cols-3 gap-6">
          <div class="BRANCHESMainBox border-4 border-[#393946]  relative bg-[#393946] text-white rounded-3xl text-center">
              <div class="BRANCHESMainBox_top py-6 px-5">
                <div class="h2 text-[2.2rem] font-medium font-Mluvka">{datas?.sec_two_sub_head_one}</div>
                <p>{datas?.sec_two_location_one}</p>
                <a href={`tel:${datas?.sec_two_phone_one}`} class="text-secondary text-[2.3rem] block font-Mluvka">{datas?.sec_two_phone_one}</a>
                <a href={`mailto:${datas?.sec_two_email_one}`} class="text-[1.5rem] font-bold font-Mluvka">{datas?.sec_two_email_one}</a>
              </div> 
              <div class="BRANCHESMainBox_bottom">
                <iframe class="w-full h-[15rem] " style={{"borderRadius": "0 0 1.5rem 1.5rem"}} src={datas?.sec_two_url_one} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
          </div>
          <div class="BRANCHESMainBox border-4 border-[#393946]  relative bg-[#393946] text-white rounded-3xl text-center">
              <div class="BRANCHESMainBox_top py-6 px-5">
                <div class="h2 text-[2.2rem] font-medium font-Mluvka">{datas?.sec_two_sub_head_two}</div>
                <p>{datas?.sec_two_location_two}</p>
                <a href={`tel:${datas?.sec_two_phone_two}`} class="text-secondary text-[2.3rem] block font-Mluvka">{datas?.sec_two_phone_two}</a>
                <a href={`mailto:${datas?.sec_two_email_two}`} class="text-[1.5rem] font-bold font-Mluvka">{datas?.sec_two_email_two}</a>
              </div> 
              <div class="BRANCHESMainBox_bottom">
                <iframe class="w-full h-[15rem] " style={{"borderRadius": "0 0 1.5rem 1.5rem"}} src={datas?.sec_two_url_two} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
          </div>
          <div class="BRANCHESMainBox border-4 border-[#393946]  relative bg-[#393946] text-white rounded-3xl text-center">
              <div class="BRANCHESMainBox_top py-6 px-5">
                <div class="h2 text-[2.2rem] font-medium font-Mluvka">{datas?.sec_two_sub_head_three}</div>
                <p>{datas?.sec_two_location_three}</p>
                <a href={`tel:${datas?.sec_two_phone_three}`} class="text-secondary text-[2.3rem] block font-Mluvka">{datas?.sec_two_phone_three}</a>
                <a href={`mailto:${datas?.sec_two_email_three}`} class="text-[1.5rem] font-bold font-Mluvka">{datas?.sec_two_email_three}</a>
              </div> 
              <div class="BRANCHESMainBox_bottom">
                <iframe class="w-full h-[15rem] " style={{"borderRadius": "0 0 1.5rem 1.5rem"}} src={datas?.sec_two_url_three} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default ContactPage