"use client"
import useFetch from '@/app/customHooks/useFetch';
import Loaders from '@/components/Loaders';
import React from 'react'
import Link from "next/link";

const ContactPage = ({lang}) => {
    const { loading, data } = useFetch(`webContents/contact/${lang}`);

    const saveLogContactPage = async () => {
      try {
        await fetch('https://api.raalc.ae/api/save_log', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: 'Phone button clicked from Website',
            origin: "Website",
            type: "Phone",
            source: "Web",
            page_url: window.location.href
          }),
        });
        console.log('Log sent!');
      } catch (error) {
        console.error('Log failed:', error);
      }
    };

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
          {datas?.branches.map((item,index) => {
             const {branch_heading,branch_location,branch_email,branch_phone,branch_map_url} = item
            return (
              <div className="BRANCHESMainBox border-4 border-[#393946]  relative bg-[#393946] text-white rounded-[4rem] text-center" key={index}>
              <div className="BRANCHESMainBox_top py-6 px-5">
                <div className="h2 text-[2.2rem] font-bold mb-8 font-Mluvka">{branch_heading}</div>
                <p className='min-h-[3rem] w-[80%] max-lg:w-[100%] mx-auto'>{branch_location}</p>
                <Link href={`tel:${branch_phone}`} onClick={() => {
          saveLogContactPage();
        }} className="text-secondary text-[2.3rem] block font-bold mt-3">{branch_phone}</Link>
                <a href={`mailto:${branch_email}`} className="text-[1.5rem] font-bold font-Mluvka">{branch_email}</a>
              </div> 
              <div className="BRANCHESMainBox_bottom">
                <iframe className="w-full h-[15rem] " style={{"borderRadius": "0 0 4rem 4rem"}} src={branch_map_url} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
          </div>
            )
          })}
        </div>
      </div>
    </section>
    </div>
  )
}

export default ContactPage