
import { MainAPiContext } from '@/app/context/MainAPiContext'
import { MainBookingStatusContext } from '@/app/context/MainBookingStatusContext'
import { MainLanguageValueContext } from '@/app/context/MainLanguageValue'
import { MainReachUsStatusContext } from '@/app/context/MainReachUsStatusContext'
import usePost from '@/app/customHooks/usePost'
import {  logo, model2 } from '@/app/untils/imgimport'
import { Field, Form, Formik } from 'formik'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useEffect } from 'react'
import { toast } from 'react-toastify'


const Footer = () => {
  const { langValue } = useContext(MainLanguageValueContext);
  const {mainData } = useContext(MainAPiContext);
  const { handleOpenModel } = useContext(MainBookingStatusContext);
  const elements = mainData?.elements
  const contact_us = mainData?.contact_us
  const company_profile = mainData?.company_profile
  const social_media = mainData?.social_media
  const basePath = langValue === "en" ? '' : `${langValue}/`;
  const { handleReachUsOpenModel, reachUs } = useContext(MainReachUsStatusContext);
  const initialValues = {
    name:"",
    email:"",
    phone:"",
    message:"",
  }

  const [res, apiMethod] = usePost()
  const requireFeild = ["name", "email"];
  const handleSubmit = async (values) => {
    let formdata = new FormData();
    let requireFeildSwal = {
      name: "Name",
      email: "Email",
    };
    let checkerRequried = [];
    for (const item in values) {
      console.log( values[item])
      if (requireFeild.includes(item) && values[item] === "") {
        checkerRequried.push(requireFeildSwal[item]);
      }
      formdata.append(item, values[item]);
    }


    
    console.log(checkerRequried)
    if (checkerRequried.length > 0) {
      swal({
        title: "Required Fields are empty! Please fill and try again",
        text: checkerRequried.join(","),
        icon: "error",
        dangerMode: true,
      });
    }
    else {
      apiMethod(`quote/sendmail/${langValue}`, formdata)
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
        handleReachUsOpenModel(false)
      }
    }
  }, [res.data])


  return (
   <>    
     <footer className="footer overflow-hidden relative z-[2]">
    <div className="w-[20rem] h-[20rem] bg-secondary opacity-[6]  blur-[15rem] absolute right-0 bottom-[-10rem]"></div>
     <div className="js--marque-a">
      <div className="b--marque-a__content ">
        <div className="marquee-container scroller_ourWork flex w-max" data-speed="fast">
        <div className="h5 text-[#F4EEE4] uppercase text-[9rem]  text-center font-MluvkaLight ">Integrity. Advocacy. Success</div>
        <div className="h5 text-[#F4EEE4] uppercase text-[9rem]  text-center font-MluvkaLight ">Integrity. Advocacy. Success</div>
      </div>
      </div>
    </div>
    <div id="BookReader"></div>
  <div className="footer__top relative">
    <div className="container mx-auto px-14 grid grid-cols-[1.2fr,1.4fr,.8fr] gap-10 max-lg:grid-cols-1">
    <div className="footer__topBox">
     <a href="#">
      <Image className="w-[10.188rem]" src={logo} alt="" />
     </a>
       {/* <p className="mt-3">RAALC’s journey began in 2013, when it was co-founded in the Emirate of Sharjah. Our success continued through years and we opened our two newbranches in Ras Al Khaimah and Dubai, which in 2018, became our headquarter.</p>  */}
    </div>
    <div className="footer__topBox grid grid-cols-2 gap-3">
      <ul>
           <li className="my-3"><Link href={`/${basePath}`}  className="font-cormorant font-bold capitalize">{elements?.home}</Link></li>
        <li className="my-3"><Link href={`/${basePath}about`}  className="font-cormorant font-bold capitalize">{elements?.about}</Link></li>
        <li className="my-3"><Link href={`/${basePath}team`} className="font-cormorant font-bold capitalize">{elements?.ourteam}</Link></li>
        
        <li className="my-3"><Link href={`/${basePath}services`}  className="font-cormorant font-bold capitalize">{elements?.services}</Link></li>
        <li className="my-3"><Link href={`/${basePath}news`} className="font-cormorant font-bold capitalize">{elements?.["news-updates"] || 'News & Updates'}</Link></li>
        {/* <li className="my-3"><Link href={`/${basePath}expertise`} className="font-cormorant font-bold capitalize">{elements?.expertise}</Link></li> */}
      </ul>
      <ul>
        <li className="my-3"><Link href={`/${basePath}events`} className="font-cormorant font-bold capitalize">{elements?.["events"] || 'Events'}</Link></li>
        <li className="my-3"><Link href={`/${basePath}gallery`} className="font-cormorant font-bold capitalize"> {elements?.["gallery"] || 'gallery'}</Link></li>
        <li className="my-3"><Link href={`/${basePath}contact`} className="font-cormorant font-bold capitalize">{elements?.["contact-us"] || 'Contact Us'}</Link></li>
        <li className="my-3"><Link href={`/${basePath}privacy-policy`} className="font-cormorant font-bold capitalize">{elements?.["privacy-policy"] || 'Privacy Policy'}</Link></li>
        {/* <li className="my-3"><Link href={`/${basePath}diversity`} className="font-cormorant font-bold capitalize">{elements?.diversity}</Link></li> */}
        {/* <li className="my-3"><Link href={`/${basePath}legallibrary`} className="font-cormorant font-bold capitalize">{elements?.["legal-library"]}</Link></li> */}
        {/* <li className="my-3"><a href="#" className="font-cormorant font-bold capitalize">Other Service</a></li> */}
      </ul>
    </div>
    <div className="footer__topBox">
      <Link href="#" className="block border border-secondary rounded-full font-cormorant font-bold capitalize text-center quote py-2 mb-4" onClick={() => handleOpenModel(true,"")}>{elements?.["get-a-quote"]}</Link>
      <Link target='_blank' href={company_profile?.file ?? ""} className="block bg-secondary rounded-full font-cormorant font-bold capitalize text-center py-2">{elements?.["download-our-company-profile"]}</Link>
      <br />
      <div className="flex gap-2">
        <div className="h6 font-cormorant font-bold text-[1.2rem]">{elements?.["connect-with-us"]}</div>
        <ul className="list flex gap-2">
         {Array.isArray(social_media) && social_media.map((item) => {
          const {id,image,link} = item
          return (
          <li key={id}>
            <Link href={link} target='_blank'><Image className="magnetic w-[32px]" width={10} height={10} src={image ?? ""} alt={id} /></Link>
          </li>
          )
         }) }
        </ul>
      </div>
    </div>
  </div>
  </div>
  <div className="footer__bottom relative mt-16 mb-6">
    <div className="container items-end mx-auto px-14 grid grid-cols-3 gap-5 max-lg:grid-cols-1 max-lg:px-0">
      {contact_us?.branches.slice(0,3).map((item,index) => {
        const {branch_heading,branch_location,branch_email,branch_phone} = item
        return (
          <div className="footer__bottomBox" key={index}>
          {/* <div className="h3 font-cormorant font-bold  text-[#9F865F] uppercase">{index === 0 ? elements?.headquarters : }</div> */}
          <div className="h4 font-cormorant font-bold text-[1.2rem] text-secondary mt-6">{branch_heading}</div>
          <p className="font-medium">{branch_location}</p>
          <ul className="list font-medium">
            <li><span className='capitalize'>{elements?.email}:</span><a href={`mailto:${branch_email}`} className="underline">{branch_email}</a></li>
            <li><span className='capitalize'>{elements?.phone}:</span><a href={`tel:${branch_phone}`} className="underline">{branch_phone}</a> </li>
          </ul>
        </div>
        )
      })}
    </div>
  </div>
  <div className="footer_Quick bg-secondary py-2 text-white text-center">
    <div className="container mx-auto"> {elements?.["developed_by"]} <Link href={"https://quickdigitals.ae/"} target='_blank' className='border-b border-[#fff]'>{elements?.["quick_digitals"]}</Link>
    </div>
  </div>
  </footer>
  <div onClick={() => handleReachUsOpenModel(false)} className={`fixedback ${reachUs ? "active" : ""}`}></div>
  <div className={`consModel2  w-[60rem] fixed top-[50%] transform translate-y-[-50%] scale-x-0 transition-all duration-300 mx-auto left-0 right-0 z-[999] ${reachUs ? "active": ""} `}>
    <div className="consModelMain grid grid-cols-2">
      <div className="consModelMainl">
        <Image src={model2} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="consModelMainr bg-white py-14 px-8">
        <a href="#" className="close  mb-3" onClick={() => handleReachUsOpenModel(false)}>
          <svg className="ml-auto" width="30" height="30" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40.1992 3.24219L3.19922 40.2422" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.19922 3.24219L40.1992 40.2422" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>     
        </a>
        {/* <div className="h4 relative text-[2rem] font-medium leading-[1] pl-4 mb-6">{elements?.["reach-us"]}</div> */}
        <div className="h4 relative text-[2rem] font-medium leading-[1] pl-4 mb-6">{elements?.["get-a-quote"]}</div>
        <Formik initialValues={initialValues}  onSubmit={handleSubmit}>
        <Form>
          <div className="inputBox my-4">
           <Field name={"name"}  className="w-full border border-[#ddd] py-3 px-4 rounded-3xl  outline-0" placeholder={elements?.["full-name"]} />
          </div>
          <div className="inputBox my-4">
           <Field name={"email"}  className="w-full border border-[#ddd] py-3 px-4 rounded-3xl  outline-0" placeholder={elements?.["email-address"]} />
          </div>
          <div className="inputBox my-4">
           <Field type={"tel"} name={"phone"}  className="w-full border border-[#ddd] py-3 px-4 rounded-3xl  outline-0" placeholder={elements?.["phone-number"]} />
          </div>
          <div className="inputBox my-4">
          <Field
              as="textarea"
              name="message"
              className="w-full h-[10rem] border border-[#ddd] py-3 px-4 rounded-3xl  outline-0"
              placeholder={elements?.["message"]}
            />
          </div>

          <button type='submit'  className="py-3 px-20 mt-10 block bg-primary w-fit text-white rounded-2xl transition-all duration-300 hover:bg-secondary">{res?.isLoading ? elements?.["loading"] : elements?.["submit"]}</button>
          </Form>
          </Formik>
      </div>
    </div>
  </div>
   </>
  )
}


export default Footer
