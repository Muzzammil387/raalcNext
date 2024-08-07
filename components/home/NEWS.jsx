import { MainLanguageValueContext } from '@/app/context/MainLanguageValue'
import { accordion1, arrow } from '@/app/untils/imgimport'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useContext } from 'react'

const NEWS = ({data3}) => {
  const { langValue } = useContext(MainLanguageValueContext);
  const basePath = langValue === "en" ? '' : `${langValue}/`;
  return (
    <section className="section6 py-10 relative pr-14 max-lg:px-5">
    <div className="section6BOx1 bg-[#ECACAD] absolute left-0 -top-3 w-[11.313rem] h-[11.313rem] opacity-[.6] blur-[5.75rem]"></div>
    <div className="section6BOx2 bg-[#CEAF7F] absolute left-0 -bottom-3 w-[11.313rem] h-[11.313rem] opacity-[.6] blur-[15.438rem]"></div>
    <div className="section6BOx3 bg-[#3D50DF] absolute right-0 -bottom-10 w-[20rem] h-[20rem] opacity-[.6] blur-[15.438rem]"></div>
      <div className="section6Heading max-lg:grid-cols-1  relative grid  grid-cols-[2.5fr,6.5fr] gap-3 items-start ">
        <a href="#" className="font-Mluvka max-lg:hidden text-[#9F865F] py-3 px-4 rounded-[3rem] w-fit ml-auto mr-10 capitalize border border-[#E7E7E7] bg-white">News and updates</a>
        <h3 className="uppercase leading-[1] font-bold text-[3.125rem] font-MluvkaBold max-lg:text-center ">News & <br /> Judgements</h3>
      </div>
      <div className="section6Main mt-14 relative">
        <div className="section6MainBox relative grid  grid-cols-[2.5fr,6.5fr] gap-10 items-start max-lg:grid-cols-1 active">
          <div className="section6MainBox_img max-lg:hidden transform    transition-all ease-in-out duration-500 scale-y-[0]" style={{"transform": "scaleY(1)"}}>
            <Image src={accordion1} className="w-100 absolute left-0 translate-y-[-30%]" alt="" />
          </div>
          <div className="section6MainBox_ border-b py-5 border-[#ddd] grid grid-cols-[auto,1fr] items-start bg-white">
            <div className="section6MainBoxl pr-5 border-r border-secondary">
              <div className="h2 text-[2.5rem] font-light uppercase text-secondary font-Mluvka leading-[1]">02</div>
              <div className="h3 font-Mluvka capitalize text-[.9rem] font-light leading-[1]">Feb 2024</div>
            </div>
            <div className="section6MainBoxc px-8 ">
              <div className="h4  cursor-pointer accordions  grid grid-cols-[7fr,3fr] active"> <span className="leading-[1.1] font-MluvkaLight">Character References and Support Letters for the References and Support Letters for the Criminal Court</span>
                 <Image src={arrow} className="ml-auto  w-[1.438rem] relative chevron transition-all ease-in-out duration-300" alt="" />
              </div>
              <div className="section6MainBoxcDOx overflow-hidden max-h-0 transition-all ease-in-out duration-300" style={{"maxHeight": "max-content"}}>
                <p className="text-[#39394680] text-[.8rem] leading-[1.2] capitalize  mx:w-[70%]">Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Faucibus purus in massa tempor nec feugiat. Imperdiet massa tincidunt nunc pulvinar sapieSemper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Faucibus purusSemper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Faucibus purus in massa tempor</p>
              </div>
            </div> 
          </div>
          
        </div>
        {/* <!-- close section6MainBox  --> */}
        <div className="section6MainBox relative grid  grid-cols-[2.5fr,6.5fr] gap-10 items-start max-lg:grid-cols-1">
          <div className="section6MainBox_img max-lg:hidden transform scale-y-0    transition-all ease-in-out duration-500">
            <Image src={accordion1} className="w-100 absolute left-0 translate-y-[-30%]" alt="" />
          </div>
          <div className="section6MainBox_ border-b py-5 border-[#ddd] grid grid-cols-[auto,1fr] items-start">
            <div className="section6MainBoxl pr-5 border-r border-secondary">
              <div className="h2 text-[2.5rem] font-light uppercase text-secondary font-Mluvka leading-[1]">02</div>
              <div className="h3 font-Mluvka capitalize text-[.9rem] font-light leading-[1]">Feb 2024</div>
            </div>
            <div className="section6MainBoxc px-8">
              <div className="h4  cursor-pointer accordions  grid grid-cols-[7fr,3fr]"><span className="leading-[1.1] font-MluvkaLight">Character References and Support Letters for the References and Support Letters for the Criminal Court</span>
                 <Image src={arrow} className="ml-auto  w-[1.438rem] relative chevron transition-all ease-in-out duration-300" alt="" />
              </div>
              <div className="section6MainBoxcDOx overflow-hidden max-h-0 transition-all ease-in-out duration-300">
                <p className="text-[#39394680] text-[.8rem] leading-[1.2] capitalize  mx:w-[70%]">Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Faucibus purus in massa tempor nec feugiat. Imperdiet massa tincidunt nunc pulvinar sapieSemper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Faucibus purusSemper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Faucibus purus in massa tempor</p>
              </div>
            </div> 
          </div>
          
        </div>
        {/* <!-- close section6MainBox  --> */}
        <div className="section6MainBox relative grid  grid-cols-[2.5fr,6.5fr] gap-10 items-start max-lg:grid-cols-1">
          <div className="section6MainBox_img max-lg:hidden transform scale-y-0    transition-all ease-in-out duration-500">
            <Image src={accordion1} className="w-100 absolute left-0 translate-y-[-30%]" alt="" />
          </div>
          <div className="section6MainBox_ border-b py-5 border-[#ddd] grid grid-cols-[auto,1fr] items-start">
            <div className="section6MainBoxl pr-5 border-r border-secondary">
              <div className="h2 text-[2.5rem] font-light uppercase text-secondary font-Mluvka leading-[1]">02</div>
              <div className="h3 font-Mluvka capitalize text-[.9rem] font-light leading-[1]">Feb 2024</div>
            </div>
            <div className="section6MainBoxc px-8">
              <div className="h4  cursor-pointer accordions  grid grid-cols-[7fr,3fr]"><span className="leading-[1.1] font-MluvkaLight">Character References and Support Letters for the References and Support Letters for the Criminal Court</span>
                 <Image src={arrow} className="ml-auto  w-[1.438rem] relative chevron transition-all ease-in-out duration-300" alt="" />
              </div>
              <div className="section6MainBoxcDOx overflow-hidden max-h-0 transition-all ease-in-out duration-300">
                <p className="text-[#39394680] text-[.8rem] leading-[1.2] capitalize  mx:w-[70%]">Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Faucibus purus in massa tempor nec feugiat. Imperdiet massa tincidunt nunc pulvinar sapieSemper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Faucibus purusSemper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Faucibus purus in massa tempor</p>
              </div>
            </div> 
          </div>
          
        </div>
        {/* <!-- close section6MainBox  --> */}
        <div className="section6MainBox relative grid  grid-cols-[2.5fr,6.5fr] gap-10 items-start max-lg:grid-cols-1">
          <div className="section6MainBox_img max-lg:hidden transform scale-y-0    transition-all ease-in-out duration-500">
            <Image src={accordion1} className="w-100 absolute left-0 translate-y-[-30%]" alt="" />
          </div>
          <div className="section6MainBox_ border-b py-5 border-[#ddd] grid grid-cols-[auto,1fr] items-start">
            <div className="section6MainBoxl pr-5 border-r border-secondary">
              <div className="h2 text-[2.5rem] font-light uppercase text-secondary font-Mluvka leading-[1]">02</div>
              <div className="h3 font-Mluvka capitalize text-[.9rem] font-light leading-[1]">Feb 2024</div>
            </div>
            <div className="section6MainBoxc px-8">
              <div className="h4  cursor-pointer accordions  grid grid-cols-[7fr,3fr]"><span className="leading-[1.1] font-MluvkaLight">Character References and Support Letters for the References and Support Letters for the Criminal Court</span>
                 <Image src={arrow} className="ml-auto  w-[1.438rem] relative chevron transition-all ease-in-out duration-300" alt="" />
              </div>
              <div className="section6MainBoxcDOx overflow-hidden max-h-0 transition-all ease-in-out duration-300">
                <p className="text-[#39394680] text-[.8rem] leading-[1.2] capitalize  mx:w-[70%]">Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Faucibus purus in massa tempor nec feugiat. Imperdiet massa tincidunt nunc pulvinar sapieSemper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Faucibus purusSemper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Faucibus purus in massa tempor</p>
              </div>
            </div> 
          </div>
          
        </div>
        {/* <!-- close section6MainBox  --> */}
      </div>
      <div className="container">
        <Link href={`/${basePath}news`} className="section6btn px-24 py-3 bg-black rounded-full relative text-white mt-10 ml-auto block w-fit max-lg:mx-auto font-Mluvka">View All</Link>
      </div>
  </section>
  )
}

export default NEWS