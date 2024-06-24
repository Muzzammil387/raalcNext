import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { burgerMenu, logo, svgrepo } from '@/app/untils/imgimport'

const Header = () => {
  return (
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
         <li><Link href="about.html">about</Link></li>
         <li><Link href="services.html">services</Link></li>
         <li><Link href="#">Virtual Office</Link></li>
         <li><Link href="news.html">News & Updates </Link></li>
         <li><Link href="events.html">Events</Link></li>
         <li><Link href="gallery.html">Gallery</Link></li>
       </ul>
       
     </nav>
     <div className="header__right flex gap-3 items-center max-lg:ml-auto">
       <Link href="#" className="btn btn-primary uppercase bg-primary text-white rounded-md px-4 py-2 bookaconsultation">Book a Consultation</Link>
       <div className="relative">
       <Link href="#"  id="dropdownButton" data-dropdown-toggle="dropdownMenu" className=" btn btn-secondary bg-white py-2 px-4 flex gap-1 items-center">
         <Image className="w-5" src={svgrepo} alt="global-svgrepo-com.svg" />
         <span className="font-medium capitalize text-[.9rem]">eng</span>
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
   <div className="header__centernav hidden max-lg:block">
     <Image src={burgerMenu} className="w-full" alt="" />
   </div>
     </div>
   </div>
 </header>
  )
}

export default Header
