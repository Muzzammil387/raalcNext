"use client"
import React, { useContext } from 'react'
import { MyHome } from '@/app/context/MyHomeContext';

const Team = () => {
    const { home } = useContext(MyHome);
    const {team} = home
    console.log(home) 
  return (
    <section className="section5 py-12">
    <div className="container mx-auto px-20 max-lg:px-0">
      <div className="section5__heading mb-6 relative text-center">
      <h3 class="leading-[1] font-medium font-Mluvka text-[3.125rem] uppercase pb-3">Our Team</h3>
      </div>
      <div className="section5Main flex justify-center gap-6 overflow-hidden max-lg:grid max-lg:grid-cols-3">
        {
            team.map((item,index) => {
                return (
                    <div key={index} className="section5MainBox max-lg:w-full max-lg:h-[15rem]  transition-all duration-500 cursor-pointer w-[8rem] h-[27rem]  relative">
                    <div className="section5MainBox1 h-full">
                      <img src={item.image}  className="w-full h-full object-cover rounded-[5rem] object-top" alt="" />
                    </div>
                    <div className="section5MainBox2 max-lg:opacity-100 max-lg:bottom-0 left-0 bottom-[-10rem] transition-all duration-500   opacity-0 absolute bg-white py-5 px-3 rounded-[5rem] w-full text-center">
                    <div class="h3 font-bold font-Mluvka uppercase text-[1.438rem] leading-[1] max-lg:text-[.9rem]">Alia Karim</div>
                    <div class="h4 leading-[1] text-[1rem] uppercase text-secondary max-lg:text-[.9rem]">LEGAL CONSULTANT</div>
                    </div>
                  </div>
                )
            })
        }
      

      </div> 
    </div>
  </section>

  )
}

export default Team
