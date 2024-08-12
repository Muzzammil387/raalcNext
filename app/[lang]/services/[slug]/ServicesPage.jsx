"use client"
import { MainBookingStatusContext } from '@/app/context/MainBookingStatusContext';
import { MainLanguageValueContext } from '@/app/context/MainLanguageValue';
import useFetch from '@/app/customHooks/useFetch';
import Team from '@/components/Team';
import Image from 'next/image'
import Link from 'next/link';
import React, { useContext } from 'react'

const ServicesPage = ({ lang, slug }) => {
  const { handleOpenModel, bookingModel } = useContext(MainBookingStatusContext);
  const { langValue } = useContext(MainLanguageValueContext);
  const basePath = langValue === "en" ? '' : `${langValue}/`;
  const { loading, data } = useFetch(`services/fetchPageContent/${slug}/${lang}`);
  if (loading) return ''
  const alldata = data.data
  const { sec_two,sec_three,sec_four,teams } = alldata
  return (
    <>    <section className="innerPage1 py-10">
      <div className="container mx-auto px-6">
        <div className="innerPage1_ grid grid-cols-2 gap-6">
          <div className="innerPage1_img">
            <h1 className="font-Mluvka text-[3.3rem] font-bold leading-[1] uppercase mb-3">{alldata?.sec_one_heading_one}</h1>
            <div className="h3 text-[1.625rem] text-secondary leading-[1] mb-2">{alldata?.sec_one_heading_two}</div>
            <p className="text-[#393946]">{alldata?.sec_one_description}</p>
          </div>
          <div className="innerPage1_Right">
            <Image src={alldata?.sec_one_image} className="w-full max-h-[30rem] object-cover rounded-[2rem]" width={10} height={10} alt="1.webp" />
          </div>
        </div>
      </div>
    </section>
      <section className="productM py-14 bg-[#F5F5F5] rounded-[5rem]">
        <div className="container mx-auto px-6">
          <div className="productM_ grid grid-cols-3 gap-5">
            {Array.isArray(sec_two) && sec_two.map((item, index) => {
              const { description, heading, image } = item
              return (
                <div className="card2" key={index}>
                  <div className="card2_img sadsad">
                    <Image className="w-full object-cover h-[13.438rem] rounded-3xl   " src={image} width={10} height={10} alt="" />
                  </div>
                  <div className="card2_Body text-center">
                    <div className="h4 capitalize font-bold font-Mluvka text-[2rem]">{heading}</div>
                    <p className="text-[#393946] leading-[1.1]">{description}</p>

                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {Array.isArray(sec_three) && sec_three.map((item,index) => {
        const {image,heading_one,heading_two,description} = item
        return (
          <section className="innerPage1 py-10" key={index}>
          <div className="container mx-auto px-6">
            <div className="innerPage1_ grid grid-cols-2 gap-6">
              <div className={`innerPage1_Right ${index%2 !== 0 ? "order-2": "max-lg:order-1"}`}>
                <Image src={image} className="w-full h-[30rem] object-cover rounded-[2rem]" width={10} height={10} alt="1.webp" />
              </div>
              <div className={`innerPage1_img ${index%2 !== 0 ? "order-1 max-lg:order-2": "max-lg:order-2"}`}>
                <h3 className="font-Mluvka text-[3.3rem] font-bold leading-[1] uppercase mb-3">{heading_one}</h3>
                <div className="h3 text-[1.625rem] text-secondary leading-[1] mb-2">{heading_two}</div>
                <p className="text-[#393946]">{description}</p>
              </div>
  
            </div>
          </div>
        </section>
        )
      })}





      <section className="innerPage3 bg-[#FFF9F0] relative rounded-[5rem] text-center py-16">
        <div className="container mx-auto px-24">
          <div className="innerPage3_heading">
            <div className="h3 uppercase text-[3.125rem]  font-bold leading-[1] font-MluvkaBold">{alldata?.sec_four_heading}</div>
            <p className="w-[90%] mx-auto mt-4">{alldata?.sec_four_description}</p>
          </div>
          <div className="innerPage3Body mt-12">
            <ul className="list flex justify-center gap-10 text-center">
              {
                Array.isArray(sec_four) && sec_four.map((item,index) => {
                  const {image} = item
                  return(
                    <li key={index}>
                    <Image className="h-[5.438rem] mx-auto object-contain w-full" src={image} width={10} height={10} alt="" />
                    <span className="uppercase font-bold  font-Mluvka mt-3 block">CREDIBILITY</span>
                  </li>
                  )
                })
              }
            </ul>
          </div>
          <Link onClick={() => handleOpenModel(true)} href="#" className="btn btn-primary uppercase bg-primary text-white rounded-md px-4 py-2 bookaconsultation font-Mluvka mt-5 block w-fit mx-auto">Book a Consultation</Link>
        </div>
      </section>
     <Team team={teams} />

      <section className="section7 rounded-[5rem] bg-[#F5F5F5] py-20 relative pr-14">
        <div className="section6Heading   relative grid  grid-cols-[2.5fr,6.5fr] gap-3 items-start  ">
          <a href="#" className="font-Mluvka text-[#9F865F] py-3 px-4 rounded-[3rem] w-fit ml-auto mr-10 capitalize border border-[#E7E7E7] bg-white faqss">FAQs</a>
          <div className="grid  grid-cols-[1fr,auto] items-start">
            <h3 className="uppercase leading-[1] font-bold text-[3.125rem] font-MluvkaBold">frequently asked <br /> questions</h3>
            <Link href={`/${basePath}faq`} className="block border border-secondary rounded-full font-cormorant font-bold capitalize text-center py-2 mb-4 px-20">View All</Link>
          </div>
        </div>
        <div className="section6Main mt-4 relative">
        {/* {Array.isArray(news) && news.slice(0, 5).map((item,index) => {
            return (
              <div className="section6MainBox relative grid  grid-cols-[1.5fr,6.5fr] gap-10 items-start" key={index}>
              <div></div>
              <div className="section6MainBox_ !bg-transparent border-b py-2 border-[#ddd] grid grid-cols-[auto,1fr] items-start">
                <div className="section6MainBoxc">
                  <div className="h4  cursor-pointer accordions py-2  grid grid-cols-[7fr,3fr] "><span className="leading-[1.1] font-Mluvka">What types of cases does your firm handle?</span>
                    <Image src="webImages/arrow.svg" className="ml-auto  w-[1.438rem] relative chevron transition-all ease-in-out duration-300" width={10} height={10} alt="" />
                  </div>
                  <div className="section6MainBoxcDOx overflow-hidden max-h-0 transition-all ease-in-out duration-300">
                    <p className="text-[#39394680] text-[.8rem] leading-[1.2] capitalize  ">Our firm specializes in a variety of practice areas including personal injury, family law, criminal defense, business law, employment law, real estate law, and estate planning.</p>
                  </div>
                </div>
              </div>
            </div>
            )
        })} */}
        </div>
      </section>
      <section className="section7 py-20 relative pr-14">
        <div className="section6Heading relative grid  grid-cols-[1.5fr,6.5fr] gap-3 items-start ">
          <a href="#" className="font-Mluvka text-[#9F865F] py-3 px-4 rounded-[3rem] w-fit ml-auto mr-10 capitalize border border-[#E7E7E7] bg-white faqss">Laws</a>
          <div className="grid  grid-cols-[1fr,auto] items-start">
            <h3 className="uppercase leading-[1] font-bold text-[3.125rem] font-MluvkaBold">Laws</h3>
            <a href="#" className="block border border-secondary rounded-full font-cormorant font-bold capitalize text-center py-2 mb-4 px-20">View All</a>
          </div>
        </div>
        <div className="section6Main mt-4 relative">
          <div className="section6MainBox relative grid  grid-cols-[1.5fr,6.5fr] gap-10 items-start">
            <div></div>
            <div className="section6MainBox_ !bg-transparent border-b py-2 border-[#ddd] grid grid-cols-[auto,1fr] items-start">
              <div className="section6MainBoxc">
                <div className="h4  cursor-pointer accordions py-2  grid grid-cols-[7fr,3fr] "><span className="leading-[1.1] font-Mluvka">Federal Decree Law No. 9 of 2016 Concerning Bankruptcy in the UAE</span>
                  <Image src="webImages/arrow.svg" className="ml-auto  w-[1.438rem] relative chevron transition-all ease-in-out duration-300" width={10} height={10} alt="" />
                </div>
                <div className="section6MainBoxcDOx overflow-hidden max-h-0 transition-all ease-in-out duration-300">
                  <p className="text-[#39394680] text-[.8rem] leading-[1.2] capitalize  ">Our firm specializes in a variety of practice areas including personal injury, family law, criminal defense, business law, employment law, real estate law, and estate planning.</p>
                </div>
              </div>
            </div>

          </div>
          <div className="section6MainBox relative grid  grid-cols-[1.5fr,6.5fr] gap-10 items-start">
            <div></div>
            <div className="section6MainBox_ !bg-transparent border-b py-2 border-[#ddd] grid grid-cols-[auto,1fr] items-start">
              <div className="section6MainBoxc">
                <div className="h4  cursor-pointer accordions py-2  grid grid-cols-[7fr,3fr] "><span className="leading-[1.1] font-Mluvka">Federal Decree No. 26 of 2020 amending certain provisions of the Commercial Companies Law</span>
                  <Image src="webImages/arrow.svg" className="ml-auto  w-[1.438rem] relative chevron transition-all ease-in-out duration-300" width={10} height={10} alt="" />
                </div>
                <div className="section6MainBoxcDOx overflow-hidden max-h-0 transition-all ease-in-out duration-300">
                  <p className="text-[#39394680] text-[.8rem] leading-[1.2] capitalize  ">Our firm specializes in a variety of practice areas including personal injury, family law, criminal defense, business law, employment law, real estate law, and estate planning.</p>
                </div>
              </div>
            </div>

          </div>
          <div className="section6MainBox relative grid  grid-cols-[1.5fr,6.5fr] gap-10 items-start">
            <div></div>
            <div className="section6MainBox_ !bg-transparent border-b py-2 border-[#ddd] grid grid-cols-[auto,1fr] items-start">
              <div className="section6MainBoxc">
                <div className="h4  cursor-pointer accordions py-2  grid grid-cols-[7fr,3fr] "><span className="leading-[1.1] font-Mluvka">Federal Law No. 2 of 2015 on Commercial Companies</span>
                  <Image src="webImages/arrow.svg" className="ml-auto  w-[1.438rem] relative chevron transition-all ease-in-out duration-300" width={10} height={10} alt="" />
                </div>
                <div className="section6MainBoxcDOx overflow-hidden max-h-0 transition-all ease-in-out duration-300">
                  <p className="text-[#39394680] text-[.8rem] leading-[1.2] capitalize  ">Our firm specializes in a variety of practice areas including personal injury, family law, criminal defense, business law, employment law, real estate law, and estate planning.</p>
                </div>
              </div>
            </div>

          </div>
          <div className="section6MainBox relative grid  grid-cols-[1.5fr,6.5fr] gap-10 items-start">
            <div></div>
            <div className="section6MainBox_ !bg-transparent border-b py-2 border-[#ddd] grid grid-cols-[auto,1fr] items-start">
              <div className="section6MainBoxc">
                <div className="h4  cursor-pointer accordions py-2  grid grid-cols-[7fr,3fr] "><span className="leading-[1.1] font-Mluvka">Federal Law No. 24 of 2006 on Consumer Protection</span>
                  <Image src="webImages/arrow.svg" className="ml-auto  w-[1.438rem] relative chevron transition-all ease-in-out duration-300" width={10} height={10} alt="" />
                </div>
                <div className="section6MainBoxcDOx overflow-hidden max-h-0 transition-all ease-in-out duration-300">
                  <p className="text-[#39394680] text-[.8rem] leading-[1.2] capitalize  ">Our firm specializes in a variety of practice areas including personal injury, family law, criminal defense, business law, employment law, real estate law, and estate planning.</p>
                </div>
              </div>
            </div>

          </div>
          <div className="section6MainBox relative grid  grid-cols-[1.5fr,6.5fr] gap-10 items-start">
            <div></div>
            <div className="section6MainBox_ !bg-transparent border-b py-2 border-[#ddd] grid grid-cols-[auto,1fr] items-start">
              <div className="section6MainBoxc">
                <div className="h4  cursor-pointer accordions py-2  grid grid-cols-[7fr,3fr] "><span className="leading-[1.1] font-Mluvka">Federal Law No. 18 of 1993 Commercial Transactions Law</span>
                  <Image src="webImages/arrow.svg" className="ml-auto  w-[1.438rem] relative chevron transition-all ease-in-out duration-300" width={10} height={10} alt="" />
                </div>
                <div className="section6MainBoxcDOx overflow-hidden max-h-0 transition-all ease-in-out duration-300">
                  <p className="text-[#39394680] text-[.8rem] leading-[1.2] capitalize  ">Our firm specializes in a variety of practice areas including personal injury, family law, criminal defense, business law, employment law, real estate law, and estate planning.</p>
                </div>
              </div>
            </div>

          </div>
          <div className="section6MainBox relative grid  grid-cols-[1.5fr,6.5fr] gap-10 items-start">
            <div></div>
            <div className="section6MainBox_ !bg-transparent border-b py-2 border-[#ddd] grid grid-cols-[auto,1fr] items-start">
              <div className="section6MainBoxc">
                <div className="h4  cursor-pointer accordions py-2  grid grid-cols-[7fr,3fr] "><span className="leading-[1.1] font-Mluvka">Federal Law No. 37 of 1992 concerning Trademarks in the UAE</span>
                  <Image src="webImages/arrow.svg" className="ml-auto  w-[1.438rem] relative chevron transition-all ease-in-out duration-300" width={10} height={10} alt="" />
                </div>
                <div className="section6MainBoxcDOx overflow-hidden max-h-0 transition-all ease-in-out duration-300">
                  <p className="text-[#39394680] text-[.8rem] leading-[1.2] capitalize  ">Our firm specializes in a variety of practice areas including personal injury, family law, criminal defense, business law, employment law, real estate law, and estate planning.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="section8">
        <div className="container mx-auto px-32">
          <h3 className="uppercase leading-[1] font-bold text-[3.125rem] font-MluvkaBold mb-8">Related Articles</h3>
          <div className="cardMain3 gap-6 grid grid-cols-3">
            <div className="cardMain3Box">
              <div className="cardMain3Box__img">
                <Image src="webImages/services2/1.webp" className="rounded-2xl w-full" width={10} height={10} alt="" />
              </div>
              <div className="cardMain3BoxBody">
                <ul className="list my-4">
                  <li className="flex justify-between text-[.9rem] font-light capitalize text-secondary"><span className="">Ahmed K.</span> <span className="font-bold">April 29,2024</span></li>
                </ul>
                <div className="h3 capitalize text-[1.625rem] font-light leading-[1] mb-3 font-Mluvka">ICCA 2024 Hong Kong: The Global Arena for Arbitration</div>
                <p className="text-[.9rem] text-[#393946]">The International Council for Commercial Arbitration (ICCA) stands as a beacon of excellence in the realm of dispute resolution, fostering ...</p>
                <a href="#" className="mt-4 block w-fit border border-secondary rounded-full  font-bold capitalize text-center py-2 px-8 mb-4 font-Mluvka ">Read More</a>
              </div>
            </div>
            <div className="cardMain3Box">
              <div className="cardMain3Box__img">
                <Image src="webImages/services2/1.webp" className="rounded-2xl w-full" width={10} height={10} alt="" />
              </div>
              <div className="cardMain3BoxBody">
                <ul className="list my-4">
                  <li className="flex justify-between text-[.9rem] font-light capitalize text-secondary"><span className="">Ahmed K.</span> <span className="font-bold">April 29,2024</span></li>
                </ul>
                <div className="h3 capitalize text-[1.625rem] font-light leading-[1] mb-3 font-Mluvka">ICCA 2024 Hong Kong: The Global Arena for Arbitration</div>
                <p className="text-[.9rem] text-[#393946]">The International Council for Commercial Arbitration (ICCA) stands as a beacon of excellence in the realm of dispute resolution, fostering ...</p>
                <a href="#" className="mt-4 block w-fit border border-secondary rounded-full  font-bold capitalize text-center py-2 px-8 mb-4 font-Mluvka ">Read More</a>
              </div>
            </div>
            <div className="cardMain3Box">
              <div className="cardMain3Box__img">
                <Image src="webImages/services2/1.webp" className="rounded-2xl w-full" width={10} height={10} alt="" />
              </div>
              <div className="cardMain3BoxBody">
                <ul className="list my-4">
                  <li className="flex justify-between text-[.9rem] font-light capitalize text-secondary"><span className="">Ahmed K.</span> <span className="font-bold">April 29,2024</span></li>
                </ul>
                <div className="h3 capitalize text-[1.625rem] font-light leading-[1] mb-3 font-Mluvka">ICCA 2024 Hong Kong: The Global Arena for Arbitration</div>
                <p className="text-[.9rem] text-[#393946]">The International Council for Commercial Arbitration (ICCA) stands as a beacon of excellence in the realm of dispute resolution, fostering ...</p>
                <a href="#" className="mt-4 block w-fit border border-secondary rounded-full  font-bold capitalize text-center py-2 px-8 mb-4 font-Mluvka ">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesPage