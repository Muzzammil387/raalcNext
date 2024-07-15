import { banner3, facebook, facebook1, intragram, intragram1, linkdin, linkdin1, logo, whatsapp } from '@/app/untils/imgimport'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
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
           <li className="my-3"><a href="index.html" className="font-cormorant font-medium capitalize">Home</a></li>
        <li className="my-3"><a href="about.html" className="font-cormorant font-medium capitalize">about</a></li>
        <li className="my-3"><a href="services.html" className="font-cormorant font-medium capitalize">services</a></li>
        <li className="my-3"><a href="#" className="font-cormorant font-medium capitalize">expertise</a></li>
      </ul>
      <ul>
        <li className="my-3"><a href="#" className="font-cormorant font-medium capitalize">diversity</a></li>
        <li className="my-3"><a href="#" className="font-cormorant font-medium capitalize">legal library</a></li>
        <li className="my-3"><a href="#" className="font-cormorant font-medium capitalize">Other Service</a></li>
      </ul>
    </div>
    <div className="footer__topBox">
      <a href="#" className="block border border-secondary rounded-full font-cormorant font-bold capitalize text-center quote py-2 mb-4">Get a Quote</a>
      <a href="#" className="block bg-secondary rounded-full font-cormorant font-bold capitalize text-center py-2">Download Our Company Profile</a>
      <br />
      <div className="flex gap-2">
        <div className="h6 font-cormorant font-bold text-[1.2rem]">Connect with us</div>
        <ul className="list flex gap-2">
          <li>
            <a href="#"><Image className="magnetic" src={facebook1} alt="facebook.svg" /></a>
          </li>
          <li>
            <a href="#"><Image className="magnetic" src={intragram1} alt="intragram.svg" /></a>
          </li>
          <li>
            <a href="#"><Image className="magnetic" src={linkdin1} alt="linkdin.svg" /></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </div>
  <div className="footer__bottom relative my-16">
    <div className="container items-end mx-auto px-14 grid grid-cols-3 gap-5 max-lg:grid-cols-1 max-lg:px-0">
      <div className="footer__bottomBox">
        <div className="h3 font-cormorant font-bold  text-[#9F865F] uppercase">HEADQUARTERS</div>
        <div className="h4 font-cormorant font-bold text-[1.2rem] text-secondary mt-6">Dubai (HQ)</div>
        <p className="font-medium">Suite 201, 2nd floor,Bldg No. 06 Bay Square Business Bay Dubai - UAE,128334</p>
        <ul className="list font-medium">
          <li><span>Email:</span><a href="mailto:info@raalc.ae" className="border-b border-black">info@raalc.ae</a></li>
          <li><span>Phone:</span><a href="tel:+97145693370" className="border-b border-black">+97145693370,</a> <span>Fax</span> <a href="tel:+97145693382" className="border-b border-black">+97145693382</a></li>
        </ul>
      </div>
      <div className="footer__bottomBox">
        <div className="h3 font-cormorant font-bold  text-[#9F865F] uppercase">OUR BRANCHES</div>
        <div className="h4 font-cormorant font-bold text-[1.2rem] text-secondary mt-6">Sharjah</div>
        <p className="font-medium">Suite 1307, 13th Floor Sarh Al Emarat Tower Buheirah Corniche Sharjah - UAE</p>
        <ul className="list font-medium">
          <li><span>Email:</span><a href="mailto:info@raalc.ae" className="border-b border-black">info@raalc.ae</a></li>
          <li><span>Phone:</span><a href="tel:+97165370010" className="border-b border-black">+97165370010,</a> <span>Fax</span> <a href="tel:+97145693382" className="border-b border-black">+97165370012</a></li>
        </ul>
      </div>
      <div className="footer__bottomBox">

        <div className="h4 font-cormorant font-bold text-[1.2rem] text-secondary mt-6">Ras Al Khaimah</div>
        <p className="font-medium">Suite 1307, 13th Floor Sarh Al Emarat Tower Buheirah Corniche Sharjah - UAE</p>
        <ul className="list font-medium">
          <li><span>Email:</span><a href="mailto:info@raalc.ae" className="border-b border-black">info@raalc.ae</a></li>
          <li><span>Phone:</span><a href="tel:+97165370010" className="border-b border-black">+97165370010,</a> <span>Fax</span> <a href="tel:+97145693382" className="border-b border-black">+97165370012</a></li>
        </ul>
      </div>
    </div>
  </div>
  </footer>
  <div id="fc-phone" className="cb-button call_back">
    <div className="cbb-circle"></div>
    <div className="cbb-circle-fill"></div>
    <div className="cbb-circle-img"><Image src={whatsapp} alt="phone" className="faa-ring animated" /></div>
</div>
  <div
    className="z-[9] bannerRight w-fit fixed bottom-2 right-[-9rem] hover:right-[-2rem] flex items-center gap-1 transition-all ease-in-out duration-700 cursor-pointer">
    <div className="bannerRightBOx p-2 bg-[#30303D] rounded-full w-[3.188rem] h-[3.188rem] border-setext-secondary border-2">
      <Image className="w-full h-full object-cover rounded-full" src={banner3} alt="3.webp" />
    </div>
    <div className="bannerRight_ leading-4 py-2 text-[.8rem] px-4 rounded-[7rem] bg-[#30303D] text-white capitalize pr-14">
      Hi, How can <br />
      I help you?
    </div>
  </div>
   </>
  )
}

export default Footer
