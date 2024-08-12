"use client"
import { useContext, useEffect, useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { burgerMenu, checkmark, downarrow, logo, model1, svgrepo } from '@/app/untils/imgimport'
import Lenis from 'lenis';
import { MainBookingStatusContext } from "@/app/context/MainBookingStatusContext";
import { Field, Form, Formik } from "formik";
import { main } from "@/app/data/main";
import HeaderLanguage from "@/app/[lang]/about/components/HeaderLanguage";
import { DatePicker } from 'antd';
import { MainLanguageValueContext } from "@/app/context/MainLanguageValue";
import { MainTeamContext } from "@/app/context/MainTeamContext";
import useFetch from "@/app/customHooks/useFetch";
import { useParams, useRouter } from "next/navigation";

const { RangePicker } = DatePicker;

const disabledDate = (current) => {
  // Example of disabling specific dates: 2024-08-10 and 2024-08-20
  const disabledDates = [
    new Date('2024-08-10').toDateString(),
    new Date('2024-08-20').toDateString(),
  ];
  return disabledDates.includes(current.toDate().toDateString());
};
const Header = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const { langValue } = useContext(MainLanguageValueContext);
  const { loading, data } = useFetch(`teams/${langValue}`);
  const { handleTeamss, teamss } = useContext(MainTeamContext);
  const basePath = langValue === "en" ? '' : `${langValue}/`;
  const [menuActive, setMenuActive] = useState("")
  const Menu = [
    {
      title: "Corporate Structuring and Governance",
      data: [
        {
          label: "Business Structuring Services"
        },
        {
          label: "Corporate Governance Framework"
        },
        {
          label: "Holding Company Setup"
        },
        {
          label: "Corporate Governance Review and Advisory"
        },
        {
          label: "Partnership and Shareholder Agreements"
        },
      ]
    },
    {
      title: "Legal Investigation and Support",
      data: [
        {
          label: "Corporate Governance Review and Advisory"
        },
        {
          label: "Partnership and Shareholder Agreements"
        },
      ]
    },
    {
      title: "Banking & Finance",
      data: []
    },
    {
      title: "Oil & Gas",
      data: []
    },
    {
      title: "Regulatory and Compliance Services",
      data: []
    },
    {
      title: "Employment and Laboure Services",
      data: []
    },
    {
      title: "Maritime",
      data: []
    },
    {
      title: "Aviation",
      data: []
    },
    {
      title: "Restructuring and Insolvency",
      data: []
    },
    {
      title: "Real Estate Legal Services",
      data: []
    },
    {
      title: "DIFC",
      data: []
    },
    {
      title: "Construction",
      data: []
    },
    {
      title: "Intellectual Property (IP) Services",
      data: []
    },
    {
      title: "Arbitration & Mediation",
      data: []
    },
    {
      title: "Information & Technology",
      data: []
    },
    {
      title: "Medical Negligence",
      data: []
    },
  ]
  const { booking } = main
  const {  TimeSlot } = booking
  const { handleOpenModel, bookingModel } = useContext(MainBookingStatusContext);
  const [beverage, setBeverage] = useState(1)
  const [datas, setData] = useState({
    "disableSlot": [2, 10, 15, 16]
  })
  const { disableSlot } = datas

  useEffect(() => {
    if (data) {
      handleTeamss(data?.data)
    }
  }, [loading])


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location.href])
  

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
  const handleMenu = (event, item) => {
    event.stopPropagation();
    if (menuActive === item) {
      setMenuActive("");
    } else {
      setMenuActive(item);
    }
  };

  useEffect(() => {
    const handleWindowClick = () => {
      setMenuActive("");
    };

    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);


  const onChange = (date, dateString) => {
    setSelectedDate(date);
    console.log('Selected Date: ', dateString); // Logs the selected date as a string
  };


  return (
    <>
      <div onClick={() => handleOpenModel(false)} className={`fixedback ${bookingModel ? "active" : ""}`}></div>
      <div className={`consModel  w-[80%] fixed top-[50%] transform translate-y-[-50%] scale-x-0 transition-all duration-300 mx-auto left-0 right-0 z-[999] ${bookingModel ? "active" : ""}`} >
        <div className="consModelMain grid grid-cols-2">
          <div className="consModelMainl">
            <Image src={model1} className="w-full max-h-[80vh] object-cover" alt="" />
          </div>
          <div className="consModelMainr bg-white py-14 px-8">
            <Link href="#" onClick={() => handleOpenModel(false)} className="close  mb-3">
              <svg className="ml-auto" width="30" height="30" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.1992 3.24219L3.19922 40.2422" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.19922 3.24219L40.1992 40.2422" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <div className="h4 relative text-[2rem] font-medium leading-[1] pl-4 mb-6">Book a <br /> Consultation</div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              <Form>
                <div className=" overflow-auto">
                <div className="inputBox mb-4">
        <Field  name="name" className="w-full border border-[#ddd] py-3 px-4 rounded-3xl  outline-0 capitalize" placeholder={"Enter Name"} ></Field>
</div>
<div className="inputBox mb-4">
        <Field  name="email" className="w-full border border-[#ddd] py-3 px-4 rounded-3xl  outline-0" placeholder={"Enter Email"} ></Field>
</div>

<div className="inputBox mb-4">
        <Field  name="tel" className="w-full border border-[#ddd] py-3 px-4 rounded-3xl  outline-0" placeholder={"Enter Phone Number"} ></Field>
</div>
                <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-3">
                


<div className="inputBox">
        <Field  name="tel" className="w-full border border-[#ddd] py-3 px-4 rounded-3xl  outline-0" placeholder={"Number of Attendance"} ></Field>
</div>

<div className="inputBox">
                  <Field as="select" name="consultant" className="w-full border border-[#ddd] py-3 px-4 rounded-3xl  outline-0 capitalize">
                    <option value="">choose consultant</option>
                    {teamss.map((item,index) => {
                      const { id, name } = item
                      return (
                        <option value={id} key={index}>{name}</option>
                      )
                    })}
                  </Field>
                </div>
                <div className="inputBox">
                  <DatePicker
                    className="w-full border border-[#ddd] py-3 px-4 rounded-3xl outline-0"
                    disabledDate={disabledDate}
                    onChange={onChange}
                    value={selectedDate}
                  />
                </div>
                <div className="inputBox">
                  <Field as="select" className="w-full border border-[#ddd] py-3 px-4 rounded-3xl  outline-0 capitalize" name="slot" id="">
                    <option value="">Time Slot</option>
                    {
                      TimeSlot.map((item) => {
                        const { id, label } = item
                        return (
                          <option key={id} value={id} disabled={disableSlot.includes(id)}>{label}</option>
                        )
                      })
                    }
                  </Field>
                </div>
                <div className="inputBox">
                <Field as="select" className="w-full border border-[#ddd] py-3 px-4 rounded-3xl  outline-0 capitalize" name="beverage" id="">
                    <option value="">Beverage</option>
                    <option value="Espresso">Espresso</option>
                    <option value="Americano">Americano</option>
                    <option value="Coffee Crema">Coffee Crema</option>
                    <option value="Cappuccino">Cappuccino</option>
                    <option value="Coffee Latte">Coffee Latte</option>
                    <option value="Latte Macchiato">Latte Macchiato</option>
                    <option value="Chocolate Milk">Chocolate Milk</option>
                    <option value="Ice Americano">Ice Americano</option>
                    <option value="Espresso with Milk">Espresso with Milk</option>
                    <option value="Americano with Milk">Americano with Milk</option>
                    <option value="Macchiato">Macchiato</option>
                    <option value="Ice Coffee Latte">Ice Coffee Latte</option>
                    <option value="Vanilla ice latte">Vanilla ice latte</option>
                    <option value="Hazelnut latte">Hazelnut latte</option>
                    <option value="Strawberry Smoothie">Strawberry Smoothie</option>
                    <option value="4 seasons Juice">4 seasons Juice</option>
                    <option value="Lemonade">Lemonade</option>
                  </Field>
                </div>
                </div>

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
            <Link href={`/${basePath}`}>
              <Image src={logo} className="w-[10.313rem]" alt="" />
            </Link>
          </div>
          <nav className="max-lg:hidden header__center  max-lg:order-4 max-lg:w-fit">
            <div className="hidden close">X</div>
            <ul className="  flex gap-6    [&_a]:capitalize">
              <li><Link href={`/${basePath}`} className="font-bold font-cormorant text-lg">Home</Link></li>
              <li><Link href={`/${basePath}about`} className="font-bold font-cormorant text-lg">about</Link></li>
              <li><Link href={`#`} className="font-bold font-cormorant text-lg">services</Link>
                <div className="servicesMenu bg-[#fff] w-[80%] absolute top-[4rem]  left-[10%] z-[10] p-10 ">
                  <div className="servicesMenu-  columns-4 gap-4">
                    {Menu.map((item, index) => {
                      const { title, data } = item
                      return (
                        <div className="servicesMenu-BOx my-3 relative" key={index}>
                          <div className="h2 flex gap-3 items-start">
                            <span className="font-cormorant text-[1.2rem] leading-[1] text-black font-bold w-[60%]">{title}</span>
                            {data.length > 0 && <Image className="cursor-pointer" onClick={(event) => handleMenu(event, title)} src={downarrow} alt="" />}
                          </div>
                          {data.length > 0 &&
                            <div className={`innerMenu  ${menuActive === title ? "active" : ""}`}>
                              <ul className={`innerMenu_  relative`}>
                                {data.map((item2, index2) => {
                                  const { label } = item2
                                  return (
                                    <li key={index2} className="flex gap-1 items-start my-2 relative"><Image className="relative top-[.2rem]" src={checkmark} alt="" /> <Link className="text-[.9rem]" href={`/${basePath}services/2`}>{label}</Link></li>
                                  )
                                })}
                              </ul>
                            </div>
                          }
                        </div>
                      )
                    })}
                  </div>
                </div>

              </li>
              <li><Link href={`/${basePath}news`} className="font-bold font-cormorant text-lg">News & Updates </Link></li>
              <li><Link href={`/${basePath}events`} className="font-bold font-cormorant text-lg">Events</Link></li>
              <li><Link href={`/${basePath}gallery`} className="font-bold font-cormorant text-lg">Gallery</Link></li>
              <li><Link href={`/${basePath}contact`} className="font-bold font-cormorant text-lg">Contact Us</Link></li>
            </ul>

            
            <div className="relative hidden header__centereng">
              <HeaderLanguage />
            </div>

          </nav>
          <div className="header__right flex gap-3 items-center max-lg:ml-auto">
            <button onClick={() => handleOpenModel(true)} className="btn btn-primary cursor-pointer uppercase bg-primary text-white rounded-md px-4 py-2 bookaconsultation font-Mluvka">Book a Consultation</button>
            <div className="relative header__righeng">
              <HeaderLanguage />
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
