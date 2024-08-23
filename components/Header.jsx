"use client"
import { useContext, useEffect, useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { burgerMenu, checkmark, downarrow, logo, model1, svgrepo } from '@/app/untils/imgimport'
import Lenis from 'lenis';
import { MainBookingStatusContext } from "@/app/context/MainBookingStatusContext";
import { Field, Form, Formik } from "formik";
import HeaderLanguage from "@/app/[lang]/about/components/HeaderLanguage";
import { DatePicker } from 'antd';
import { MainLanguageValueContext } from "@/app/context/MainLanguageValue";
import { MainTeamContext } from "@/app/context/MainTeamContext";
import useFetch from "@/app/customHooks/useFetch";
import usePost from "@/app/customHooks/usePost";
import { toast } from "react-toastify";
import swal from "sweetalert";
import dayjs from 'dayjs';
import { BeverageList } from "@/app/data/main";

const Header = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);
  const { langValue } = useContext(MainLanguageValueContext);
  const { loading: loading2, data: data2 } = useFetch(`servicescategory/services_relates_category/${langValue}`);
  const { loading, data } = useFetch(`teams/${langValue}/100?page=1`);
  const { handleTeamss, teamss } = useContext(MainTeamContext);
  const basePath = langValue === "en" ? '' : `${langValue}/`;
  const [mobleMenuActive, setMobleMenuActive] = useState("")

  const handleMobile = () => {
    setMobleMenuActive(true)
  }
  const handleMobileClose = () => {
    setMobleMenuActive(false)
  }


  const [menuActive, setMenuActive] = useState("")

  const { handleOpenModel, bookingModel } = useContext(MainBookingStatusContext);

  useEffect(() => {
    if (data) {
      handleTeamss(data?.data)
    }
  }, [loading])




  const initialValues = {
    client_name: "",
    client_email: "",
    client_phone: "",
    time_slot: "",
    beverage: "",
    number_of_attendees: "",
    consultant_id: ""
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

  const [res, apiMethod] = usePost()
  const requireFeild = ["client_name", "client_email", "client_phone", "time_slot", "beverage", "number_of_attendees", "consultant_id"];
  const handleSubmit = async (values) => {
    let formdata = new FormData();
    let requireFeildSwal = {
      client_name: "Client Name",
      client_email: "Client Email",
      client_phone: "Client Phone",
      time_slot: "Time Slot",
      beverage: "Beverage",
      number_of_attendees: "Number Of Attendees",
      consultant_id: "Consultant Id",
    };
    formdata.append("meeting_date", selectedDate2);
    let checkerRequried = [];
    for (const item in values) {
      if (requireFeild.includes(item) && values[item] === "") {
        checkerRequried.push(requireFeildSwal[item]);
      }
      formdata.append(item, values[item]);
    }
    if (!selectedDate) {
      checkerRequried.push("Date")
    }
    if (checkerRequried.length > 0) {
      swal({
        title: "Required Fields are empty! Please fill and try again",
        text: checkerRequried.join(","),
        icon: "error",
        dangerMode: true,
      });
    }
    else {
      apiMethod(`booking/meetingStore/${langValue}`, formdata)
    }
  }

  useEffect(() => {
    if (res.data) {
      const { status, message } = res?.data
      if (status === "false") {
        toast.error(message);
      }
      else {
        toast.success(message);
        setSelectedDate("")
        setSelectedDate2("")
        handleOpenModel(false)
      }
    }
  }, [res.data])


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

  const disabledDate = (current) => {
    // Disable all dates before today
    return current && current <= dayjs().endOf('day');
  };

  const [timeSlots, setTimeSlots] = useState([])
  const [res2, apiMethod2] = usePost()
  const onChange = (date, dateString) => {
    setSelectedDate(date);
    setSelectedDate2(dateString);
    let formdata = new FormData();
    formdata.append("meeting_date", dateString);
    apiMethod2(`timeSlots`, formdata)
  };
  useEffect(() => {
    if (res2.data) {
      const { status, message } = res2?.data
      if (status === "false") {
        toast.error(message);
      }
      else {
        setTimeSlots(res2.data.data)
      }
    }
  }, [res2.data])


  return (
    <>
      <div onClick={() => handleOpenModel(false)} className={`fixedback ${bookingModel ? "active" : ""}`}></div>
      <div onClick={() => handleMobileClose(false)} className={`fixedback ${mobleMenuActive ? "active" : ""}`}></div>
      {bookingModel && <div className={`consModel  w-[80%] fixed top-[50%] transform translate-y-[-50%] scale-x-0 transition-all duration-300 mx-auto left-0 right-0 z-[999] ${bookingModel ? "active" : ""}`} >
        <div className="consModelMain grid grid-cols-2">
          <div className="consModelMainl">
            <Image src={model1} className="w-full max-h-[70vh] object-cover object-top" alt="" />
          </div>
          <div className="consModelMainr bg-white py-14 px-8">
            <div className="flex justify-between">
              <div className="h4 relative text-[2rem] font-medium leading-[1] pl-4 mb-6">Book Meeting</div>
              <Link href="#" onClick={() => handleOpenModel(false)} className="close  mb-3">
                <svg className="ml-auto" width="30" height="30" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M40.1992 3.24219L3.19922 40.2422" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3.19922 3.24219L40.1992 40.2422" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              <Form>
                <div className=" overflow-auto h-[42vh]">
                  <div className="inputBox mb-4">
                    <Field name="client_name" className="w-full border border-[#ddd] py-3 px-4 rounded-3xl  outline-0 capitalize" placeholder={"Enter Name"} ></Field>
                  </div>
                  <div className="inputBox mb-4">
                    <Field name="client_email" className="w-full border border-[#ddd] py-3 px-4 rounded-3xl  outline-0" placeholder={"Enter Email"} ></Field>
                  </div>
                  <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-3">
                  <div className="inputBox mb-4">
                    <Field name="client_phone" className="w-full border border-[#ddd] py-3 px-4 rounded-3xl  outline-0" placeholder={"Enter Phone Number"} ></Field>
                  </div>
                  </div>
                  <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-3">
                    <div className="inputBox">
                      <Field type={"number"} name="number_of_attendees" className="w-full border border-[#ddd] py-3 px-4 rounded-3xl  outline-0" placeholder={"Number of Attendance"} ></Field>
                    </div>

                    <div className="inputBox">
                      <Field as="select" name="consultant_id" className="w-full border border-[#ddd] py-3 px-4 rounded-3xl  outline-0 capitalize">
                        <option value="">choose consultant</option>
                        {teamss.map((item, index) => {
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
                        onChange={onChange}
                        value={selectedDate}
                        disabledDate={disabledDate}
                      />
                    </div>
                    <div className="inputBox">
                      <Field as="select" className="w-full border border-[#ddd] py-3 px-4 rounded-3xl  outline-0 capitalize" name="time_slot" id="">
                        <option value="">Time Slot</option>
                        {
                          Array.isArray(timeSlots) && timeSlots.map((item) => {
                            const { id, time_slot, slot_status } = item
                            return (
                              <option key={id} value={id} disabled={slot_status === 1 ? true : false}>{time_slot}</option>
                            )
                          })
                        }
                      </Field>
                    </div>
                    <div className="inputBox">
                      <Field as="select" className="w-full border border-[#ddd] py-3 px-4 rounded-3xl  outline-0 capitalize" name="beverage" id="">
                        <option value="">Beverage</option>
                        {
                          BeverageList[langValue].map((item, index) => {
                            const { label } = item

                            return (
                              <option key={index} value={label}>{label}</option>
                            )
                          })
                        }
                      </Field>
                    </div>

                    
                  </div>
                </div>
                <button type="submit" className="py-3 px-20 mt-10 block bg-primary w-fit text-white rounded-2xl transition-all duration-300 hover:bg-secondary">Book Now</button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>}



      <header className="header relative py-4">
        <div className="px-10 mx-auto flex justify-between items-center">
          <div className="header__logo">
            <Link href={`/${basePath}`}>
              <Image src={logo} className="w-[10.313rem]" alt="" />
            </Link>
          </div>
          <nav className={`max-lg:hidden header__center  max-lg:order-4 max-lg:w-fit ${mobleMenuActive ? "active" : ""}`}>
            <div className="hidden close" onClick={() => handleMobileClose(false)}>X</div>
            <ul className="  flex gap-6    [&_a]:capitalize">
              <li><Link href={`/${basePath}`} className="font-bold font-cormorant text-lg">Home</Link></li>
              <li><Link href={`/${basePath}about`} className="font-bold font-cormorant text-lg">about</Link></li>
              <li><Link href={`#`} className="font-bold font-cormorant text-lg flex items-center gap-2">services   <Image className="cursor-pointer relative top-[.1rem]" src={downarrow} alt="" /></Link>
                <div className="servicesMenu bg-[#fff] w-[80%] absolute top-[4rem]  left-[10%] z-[10] p-10 transition-all duration-300 ">
                  <div className="servicesMenu-  grid grid-cols-4 gap-4">
                  {!loading2 && data2.data && 
  [...Array(4)].map((_, groupIndex) => (
    <div key={groupIndex}>
      {Object.keys(data2.data).slice(groupIndex * Math.ceil(Object.keys(data2.data).length / 4), (groupIndex + 1) * Math.ceil(Object.keys(data2.data).length / 4)).map((item, index) => (
        <div className="servicesMenu-BOx my-3 relative" key={index}>
          <div className="h2 flex gap-3 items-start">
            <span className="font-cormorant text-[1.2rem] leading-[1] text-black font-bold w-[60%]">{item}</span>
            {data2.data[item]?.length > 0 && <Image className="cursor-pointer" onClick={(event) => handleMenu(event, item)} src={downarrow} alt="" />}
          </div>
          {data2.data[item]?.length > 0 && 
            <div className={`innerMenu ${menuActive === item ? "active" : ""}`}>
              <ul className="innerMenu_ relative">
                {data2.data[item].map((item2, index2) => {
                  const { service_title, id } = item2;
                  return (
                    <li key={index2} className="flex gap-1 items-start my-2 relative">
                      <Image className="relative top-[.2rem]" src={checkmark} alt="" />
                      <Link className="text-[.9rem]" href={`/${basePath}services/${id}`}>{service_title}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          }
        </div>
      ))}
    </div>
  ))
}


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
            <div className={`header__centernav hidden max-lg:block  ${mobleMenuActive ? "active" : ""}`} onClick={handleMobile}>
              <Image src={burgerMenu} className="w-full" alt="" />
            </div>
          </div>
        </div>
      </header>


    </>
  )
}

export default Header
