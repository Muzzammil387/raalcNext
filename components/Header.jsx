"use client"
import { useContext, useEffect } from "react";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { burgerMenu, logo, model1, svgrepo } from '@/app/untils/imgimport'
import Lenis from 'lenis';
import { MyLanguage } from "@/app/context/MyLanguageContext";
import Dropdown2 from "./Dropdown2";


const Header = ({ data, language }) => {
  const { lang } = useContext(MyLanguage);
  const { nav } = data

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


  return (
    <>
      <div className="fixedback"></div>
      <div className="consModel  w-[60rem] fixed top-[50%] transform translate-y-[-50%] scale-x-0 transition-all duration-300 mx-auto left-0 right-0 z-[999]">
        <div className="consModelMain grid grid-cols-2">
          <div className="consModelMainl">
            <Image src={model1} className="w-full h-full object-cover" alt="" />
          </div>
          <div className="consModelMainr bg-white py-14 px-8">
            <Link href="#" className="close  mb-3">
            <svg className="ml-auto" width="30" height="30" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.1992 3.24219L3.19922 40.2422" stroke="#000" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3.19922 3.24219L40.1992 40.2422" stroke="#000" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </Link>
            <div className="h4 relative text-[2rem] font-medium leading-[1] pl-4 mb-6">Book a <br /> Consultation</div>
            <form action="">
              <div className="inputBox my-4">
                <select className="w-full border border-[#ddd] py-3 px-4 rounded-3xl  outline-0 capitalize" name="department" id="">
                  <option value="">Select Department</option>
                </select>
              </div>
              <div className="inputBox my-4">
                <select className="w-full border border-[#ddd] py-3 px-4 rounded-3xl  outline-0 capitalize" name="department" id="">
                  <option value="">choose consultant</option>
                </select>
              </div>
              <div className="inputBox my-4">
                <input type="date" className="w-full border border-[#ddd] py-3 px-4 rounded-3xl  outline-0" />
              </div>
              <div className="inputBox my-4">
                <select className="w-full border border-[#ddd] py-3 px-4 rounded-3xl  outline-0 capitalize" name="department" id="">
                  <option value="">Time Slot</option>
                </select>
              </div>
              <div className="flex items-center gap-3 mt-6   teamm">
                <span>Beverage</span>
                <ul className="list flex gap-2 items-center w-full">
                  <li className="py-2 px-4 bg-[#FFF5E5] border border-[#CEAF7F] w-full text-center capitalize rounded-full">Coffee</li>
                  <li className="py-2 px-4 bg-[#FFF5E5] border border-[#CEAF7F] w-full text-center capitalize rounded-full">Tea</li>
                  <li className="py-2 px-4 bg-[#FFF5E5] border border-[#CEAF7F] w-full text-center capitalize rounded-full">Juice</li>
                </ul>
              </div>

              <Link href="#" className="py-3 px-20 mt-10 block bg-primary w-fit text-white rounded-2xl transition-all duration-300 hover:bg-secondary">Book Now</Link>
            </form>
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
              <li><Link href="gallery.html">Gallery</Link></li>
              <li><Link href="contact.html">Contact Us</Link></li>
            </ul>
            <div className="relative hidden header__centereng">
              <Link href="#" id="dropdownButton" data-dropdown-toggle="dropdownMenu" className=" btn btn-secondary bg-white py-2 px-4 flex gap-1 items-center">
                <Image  className="w-5" src={svgrepo} alt="global-svgrepo-com.svg" />
                <span className="font-medium capitalize text-[.9rem] font-Mluvka">eng</span>
              </Link>
              <div id="dropdownMenu" className="z-10 hidden absolute right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
                  <li>
                    <Link href="/" className="block px-4 py-2">English</Link>
                  </li>
                  <li>
                    <Link href="/" className="block px-4 py-2">Arabic</Link>
                  </li>
                  <li>
                    <Link href="/" className="block px-4 py-2">Russian</Link>
                  </li>
                  <li>
                    <Link href="/" className="block px-4 py-2">Chinese</Link>
                  </li>
                </ul>
              </div>
            </div>

          </nav>
          <div className="header__right flex gap-3 items-center max-lg:ml-auto">
            <Link href="#" className="btn btn-primary uppercase bg-primary text-white rounded-md px-4 py-2 bookaconsultation font-Mluvka">Book a Consultation</Link>
            <div className="relative header__righeng">
              <Link href="#" id="dropdownButton2" data-dropdown-toggle="dropdownMenu2" className=" btn btn-secondary bg-white py-2 px-4 flex gap-1 items-center">
                <Image className="w-5" src={svgrepo} alt="global-svgrepo-com.svg" />
                <span className="font-medium capitalize text-[.9rem] font-Mluvka">eng</span>
              </Link>
              <div id="dropdownMenu2" className="z-10 hidden absolute right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
                  <li>
                    <Link href="/" className="block px-4 py-2">English</Link>
                  </li>
                  <li>
                    <Link href="/" className="block px-4 py-2">Arabic</Link>
                  </li>
                  <li>
                    <a href="/" className="block px-4 py-2">Russian</a>
                  </li>
                  <li>
                    <Link href="/" className="block px-4 py-2">Chinese</Link>
                  </li>
                </ul>
              </div>
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
