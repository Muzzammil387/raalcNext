import React from 'react'
import { about1 } from '../untils/imgimport'
import Image from 'next/image'
import Members from './components/Members'
import CustomServices from './components/CustomServices'
import TechnologyDrive from './components/TechnologyDrive'

const page = () => {
  return (
   <>
     <div className="InnerPageBox1 absolute w-[22rem] h-[22rem] opacity-5 bg-primary left-0 top-[50%]"></div>
    <div className="InnerPageBox2"></div>
    <section className="innerPage1 relative py-10">
        <div className="container mx-auto px-6 border-b-2 border-[#ddd] pb-6">
            <div className="innerPage1_ w-[70%] mx-auto  text-center">
                    <h1 className=" text-[3.3rem] font-bold leading-[1] uppercase mb-3 font-MluvkaBold">Putting Justice in <br /> Your Hands</h1>  
            </div>
        </div>
    </section>

    <section className="about relative">
        <div className="container mx-auto">
            <div className="aboutMain grid grid-cols-[4fr,2fr,4fr] items-center gap-20">
                <div className="aboutMain__left">
                    <h2 className="text-[2.75rem] font-bold leading-[1] mb-6 uppercase font-MluvkaBold">RAALC Tradition Of Excellence</h2>
                    <p>RAALC’s journey began in 2013, when it was co-founded in the Emirate of Sharjah. Our success continued through years and we opened our two newbranches in Ras Al Khaimah and Dubai, which in 2018, became our headquarter.

                       </p>
                       <p> The tradition of excellence recognised and intended by the founders continues to this very day. RAALC has cultivated a fantastic reputation for excellence over a collective experience of 30 years. Our core determination is creating partnerships that engross the clients in a peaceful mind where we take care of the zealous representation and expert advice.</p>
                       <div className="h3 capitalize text-[1.4rem] text-secondary mt-4">We seek to become UAE’s first smart-law firm!</div>
                </div>
                <div className="aboutMain__center h-full">
                    <Image src={about1} className="w-full h-full rounded-full object-cover object-left" alt="" />
                </div>
                <div className="aboutMain__right">
                 <p>   RAALC’s journey began in 2013, when it was co-founded in the Emirate of Sharjah. Our success continued through years and we opened our two newbranches in Ras Al Khaimah and Dubai, which in 2018, became our headquarter.</p>
                    <p>
                        The tradition of excellence recognised and intended by the founders continues to this very day. RAALC has cultivated a fantastic reputation for excellence over a collective experience of 30 years. Our core determination is creating partnerships that engross the clients in a peaceful mind where we take care of the zealous representation and expert advice.</p>
                </div>
            </div>
        </div>
        <div className="js--marque-a">
            <div className="b--marque-a__content ">
              <div className="marquee-container scroller_ourWork flex w-max" data-speed="fast">
              <div className="h5 text-[#F4EEE4] uppercase text-[9rem]  text-center font-MluvkaLight">Integrity. Advocacy. Success</div>
              <div className="h5 text-[#F4EEE4] uppercase text-[9rem]  text-center font-MluvkaLight ">Integrity. Advocacy. Success</div>
            </div>
            </div>
          </div>
    </section>

   <CustomServices />
   <Members />
<TechnologyDrive />
   
   </>
  )
}

export default page
