
import { MainAPiContext } from '@/app/context/MainAPiContext'
import { MainLanguageValueContext } from '@/app/context/MainLanguageValue'
import { MainReachUsStatusContext } from '@/app/context/MainReachUsStatusContext'
import usePost from '@/app/customHooks/usePost'
import { banner3, facebook1, intragram1, linkdin1, logo, model2, whatsapp } from '@/app/untils/imgimport'
import { Field, Form, Formik } from 'formik'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import React, { useContext, useEffect } from 'react'
import { toast } from 'react-toastify'


const Footer = () => {
  const { langValue } = useContext(MainLanguageValueContext);
  const {mainData } = useContext(MainAPiContext);
  const elements = mainData?.elements
  const contact_us = mainData?.contact_us
  const company_profile = mainData?.company_profile
  const social_media = mainData?.social_media
  const basePath = langValue === "en" ? '' : `${langValue}/`;
  const { handleReachUsOpenModel, reachUs } = useContext(MainReachUsStatusContext);
  const initialValues = {
  }

  const [res, apiMethod] = usePost()
  const requireFeild = ["name", "email"];
  const handleSubmit = async (values) => {
    let formdata = new FormData();
    let requireFeildSwal = {
      name: "Name",
      email: "Client Email",
    };
    let checkerRequried = [];
    for (const item in values) {
      if (requireFeild.includes(item) && values[item] === "") {
        checkerRequried.push(requireFeildSwal[item]);
      }
      formdata.append(item, values[item]);
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
        {/* <li className="my-3"><Link href={`/${basePath}`}  className="font-cormorant font-bold capitalize">services</Link></li> */}
        <li className="my-3"><Link href={`/${basePath}expertise`} className="font-cormorant font-bold capitalize">{elements?.expertise}</Link></li>
      </ul>
      <ul>
        <li className="my-3"><Link href={`/${basePath}diversity`} className="font-cormorant font-bold capitalize">{elements?.diversity}</Link></li>
        <li className="my-3"><Link href={`/${basePath}legallibrary`} className="font-cormorant font-bold capitalize">{elements?.["legal-library"]}</Link></li>
        {/* <li className="my-3"><a href="#" className="font-cormorant font-bold capitalize">Other Service</a></li> */}
      </ul>
    </div>
    <div className="footer__topBox">
      <Link href="#" className="block border border-secondary rounded-full font-cormorant font-bold capitalize text-center quote py-2 mb-4" onClick={() => handleReachUsOpenModel(true)}>{elements?.["get-a-quote"]}</Link>
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
      <div className="footer__bottomBox">
        <div className="h3 font-cormorant font-bold  text-[#9F865F] uppercase">{elements?.headquarters}</div>
        <div className="h4 font-cormorant font-bold text-[1.2rem] text-secondary mt-6">{contact_us?.sec_two_sub_head_one}</div>
        <p className="font-medium">{contact_us?.sec_two_location_one}</p>
        <ul className="list font-medium">
          <li><span className='capitalize'>{elements?.email}:</span><a href={`mailto:${contact_us?.sec_two_email_one}`} className="border-b border-black">{contact_us?.sec_two_email_one}</a></li>
          <li><span className='capitalize'>{elements?.phone}:</span><a href={`tel:${contact_us?.sec_two_phone_one}`} className="border-b border-black">{contact_us?.sec_two_phone_one}</a> </li>
        </ul>
      </div>
      <div className="footer__bottomBox">
        <div className="h3 font-cormorant font-bold  text-[#9F865F] uppercase">{elements?.["our-branches"]}</div>
        <div className="h4 font-cormorant font-bold text-[1.2rem] text-secondary mt-6">{contact_us?.sec_two_sub_head_two}</div>
        <p className="font-medium">{contact_us?.sec_two_location_two}</p>
        <ul className="list font-medium">
          <li><span className='capitalize'>{elements?.email}:</span><a href={`mailto:${contact_us?.sec_two_email_two}`} className="border-b border-black">{contact_us?.sec_two_email_two}</a></li>
          <li><span className='capitalize'>{elements?.phone}:</span><a href={`tel:${contact_us?.sec_two_phone_two}`} className="border-b border-black">{contact_us?.sec_two_phone_two}</a> </li>
        </ul>
      </div>
      <div className="footer__bottomBox">

      <div className="h4 font-cormorant font-bold text-[1.2rem] text-secondary mt-6">{contact_us?.sec_two_sub_head_three}</div>
        <p className="font-medium">{contact_us?.sec_two_location_three}</p>
        <ul className="list font-medium">
          <li><span className='capitalize'>{elements?.email}:</span><a href={`mailto:${contact_us?.sec_two_email_three}`} className="border-b border-black">{contact_us?.sec_two_email_three}</a></li>
          <li><span className='capitalize'>{elements?.phone}:</span><a href={`tel:${contact_us?.sec_two_phone_three}`} className="border-b border-black">{contact_us?.sec_two_phone_three}</a> </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="footer_Quick bg-secondary py-2 text-white text-center">
    <div className="container mx-auto"> {elements?.["developed_by"]} <Link href={"https://quickdigitals.ae/"} target='_blank' className='border-b border-[#fff]'>{elements?.["quick_digitals"]}</Link>
    </div>
  </div>
  </footer>
  <a href={company_profile?.link} target='_blank' id="fc-phone" className="cb-button call_back">
    <div className="cbb-circle"></div>
    <div className="cbb-circle-fill"></div>
    <div className="cbb-circle-img"><Image src={whatsapp} alt="phone" className="faa-ring animated" /></div>
</a>
  {/* <div
    className="z-[9] bannerRight w-fit fixed bottom-2 right-[-9rem] hover:right-[-2rem] flex items-center gap-1 transition-all ease-in-out duration-700 cursor-pointer">
    <div className="bannerRightBOx p-2 bg-[#30303D] rounded-full w-[3.188rem] h-[3.188rem] border-setext-secondary border-2">
      <Image className="w-full h-full object-cover rounded-full" src={banner3} alt="3.webp" />
    </div>
    <div className="bannerRight_ leading-4 py-2 text-[.8rem] px-4 rounded-[7rem] bg-[#30303D] text-white capitalize pr-14">
      Hi, How can <br />
      I help you?
    </div>
  </div> */}
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
        <div className="h4 relative text-[2rem] font-medium leading-[1] pl-4 mb-6">{elements?.["reach-us"]}</div>
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
              placeholder={elements?.["reach-us"]}
            />
          </div>

          <button type='submit'  className="py-3 px-20 mt-10 block bg-primary w-fit text-white rounded-2xl transition-all duration-300 hover:bg-secondary">{res?.isLoading ? elements?.["loading"] : elements?.["submit"]}</button>
          </Form>
          </Formik>
      </div>
    </div>
    <Script
        id="tawkto-script"
        strategy="lazyOnload"
        src="https://embed.tawk.to/66c9aa6250c10f7a009ff00c/1i61s34lk"
        crossorigin="*"
      />

  </div>
   </>
  )
}


export default Footer
