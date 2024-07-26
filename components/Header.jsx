"use client"
import { useContext, useEffect, useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { burgerMenu, logo, model1, svgrepo } from '@/app/untils/imgimport'
import Lenis from 'lenis';
import { MainBookingStatusContext } from "@/app/context/MainBookingStatusContext";
import {  Field, Form, Formik } from "formik";
import { main } from "@/app/data/main";
// import HeaderLanguage from "@/app/about/components/HeaderLanguage";

const Header = ({ data, language }) => {
  
  const {booking} = main
  const {BeverageList,TimeSlot} = booking
  const { handleOpenModel, bookingModel } = useContext(MainBookingStatusContext);
  const [beverage, setBeverage] = useState(1)
const [datas, setData] = useState({
  "disableSlot": [2,10,15,16]
})
const {disableSlot} = datas
  const initialValues = {
    department: "",
    slot: "",
    date: ""
  }

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();  // Assuming Lenis has a destroy method
    };
  }, []);
  const handleBeverage = (id) => {
    console.log(id)
    setBeverage(id)
  }
  const handleSubmit = async (values) => {
    console.log(values)
  }

  return (
    <>
      <div onClick={() => handleOpenModel(false)} className={`fixedback ${bookingModel ? "active" : ""}`}></div>
      <div className={`consModel  w-[60rem] fixed top-[50%] transform translate-y-[-50%] scale-x-0 transition-all duration-300 mx-auto left-0 right-0 z-[999] ${bookingModel ? "active" : ""}`} >
        <div className="consModelMain grid grid-cols-2">
          <div className="consModelMainl">
            <Image src={model1} className="w-full h-full object-cover" alt="" />
          </div>
          <div className="consModelMainr bg-white py-14 px-8">
            <Link href="#" onClick={() => handleOpenModel(false)} className="close  mb-3">
              <svg className="ml-auto" width="30" height="30" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.1992 3.24219L3.19922 40.2422" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.19922 3.24219L40.1992 40.2422" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <div className="h4 relative text-[2rem] font-medium leading-[1] pl-4 mb-6">Book a <br /> Consultation</div>
            <Formik initialValues={initialValues}  onSubmit={handleSubmit}>
              <Form>
              <div className="inputBox my-4">
                <Field as="select" name="department" className="w-full border border-[#ddd] py-3 px-4 rounded-3xl  outline-0 capitalize">
                  <option value="">Select Department</option>
                  <option value="red">Red</option>
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
                </Field>
              </div>

              <div className="inputBox my-4">
              <Field as="select" name="consultant" className="w-full border border-[#ddd] py-3 px-4 rounded-3xl  outline-0 capitalize">
                  <option value="">choose consultant</option>
                  <option value="Office">Office</option>
                  <option value="Online">Online</option>
                </Field>
              </div>
              <div className="inputBox my-4">
                <Field name={"date"} type="date" className="w-full border border-[#ddd] py-3 px-4 rounded-3xl  outline-0" />
              </div>
              <div className="inputBox my-4">
              <Field as="select" className="w-full border border-[#ddd] py-3 px-4 rounded-3xl  outline-0 capitalize" name="slot" id="">
                  <option value="">Time Slot</option>
                  {
                    TimeSlot.map((item) => {
                      const {id,label} = item
                      return (
                        <option key={id} value={id} disabled={disableSlot.includes(id)}>{label}</option>
                      )
                    })
                  }
                </Field>
              </div>
              <div className="flex items-center gap-3 mt-6   teamm">
                <span>Beverage</span>
                <ul className="list flex gap-2 items-center w-full">
                  {
                    BeverageList.map((item) => {
                      const {id,label}= item
                      return (
                        <li key={id} className={`py-2 px-4  w-full text-center capitalize rounded-full cursor-pointer ${beverage === id ? "bg-primary text-white border border-primary": "bg-[#FFF5E5] border border-[#CEAF7F]"}`} onClick={() => handleBeverage(id)}>{label}</li>
                      )
                    })
                  }
                </ul>
              </div>

              <button type="submit" className="py-3 px-20 mt-10 block bg-primary w-fit text-white rounded-2xl transition-all duration-300 hover:bg-secondary">Book Now</button>
              </Form>
              </Formik>
          </div>
        </div>
      </div>



      <header className="header relative py-4">
        <div className="px-10 mx-auto flex justify-between items-center">
          <div className="header__logo">
            <Link href="/">
              <Image src={logo} className="w-[10.313rem]" alt="" />
            </Link>
          </div>
          <nav className="max-lg:hidden header__center  max-lg:order-4 max-lg:w-fit">
            <div className="hidden close">X</div>
            <ul className="  flex gap-6 [&_a]:font-cormorant [&_a]:font-bold [&_a]:text-lg [&_a]:capitalize">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">about</Link></li>
              <li><Link href="services.html">services</Link></li>
              <li><Link href="news.html">News & Updates </Link></li>
              <li><Link href="events.html">Events</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="contact.html">Contact Us</Link></li>
            </ul>
            <div className="relative hidden header__centereng">
            {/* <HeaderLanguage /> */}
            </div>

          </nav>
          <div className="header__right flex gap-3 items-center max-lg:ml-auto">
            <button onClick={() => handleOpenModel(true)} className="btn btn-primary cursor-pointer uppercase bg-primary text-white rounded-md px-4 py-2 bookaconsultation font-Mluvka">Book a Consultation</button>
            <div className="relative header__righeng">
            {/* <HeaderLanguage /> */}
            </div>
            <div className="header__centernav hidden max-lg:block">
              <Image src={burgerMenu} className="w-full" alt="" />
            </div>
          </div>
        </div>
      </header>


    </>
  )
}

export default Header
