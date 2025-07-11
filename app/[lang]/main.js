// /app/[lang]/main.js
"use client";
import React, { useEffect, useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import { main } from "../data/main";
import { MyLanguage } from "../context/MyLanguageContext";
import { language } from "../data/language";
import { ToastContainer } from "react-toastify";
import { MyHome } from '../context/MyHomeContext';
import Loader from '../Loader';
import MainBookingStatusProvider from '../context/MainBookingStatusContext';
import MainReachUsStatusProvider from '../context/MainReachUsStatusContext';
import MainLanguageValueProvider from '../context/MainLanguageValue';
import MainTeamProvider from '../context/MainTeamContext';
import MainAPiProvider from '../context/MainAPiContext';
import Head from 'next/head';
// import WhatsAppButton from "./[lang]/real-estate/components/WhatsappButton";
import { ReactLenis } from '@studio-freight/react-lenis'
import WhatsAppButtonRealEstate from './real-estate/components/WhatsappButton';
import WhatsAppButtonParis from "./paris-arbitration-week/components/WhatsappButton";
import WhatsAppButtonCorporate from './corporate/components/WhatsappButton';
import WhatsAppButtonWebsite from './WhatsappButton';

const Main = ({ children }) => {
  const pathname = usePathname();
  const [lang, setLang] = useState("");
  const [home, setHome] = useState("");
  const { header, languagess } = main;

  useEffect(() => {
    setLang(language);
    setHome(main);
  }, []);

  const hideHeaderFooter = pathname == "/en/real-estate" || pathname == "/real-estate" || pathname == "/en/paris-arbitration-week" || pathname == "/paris-arbitration-week" || pathname == "/en/corporate" || pathname == "/corporate" || pathname == "/en/commercial" || pathname == "/commercial" || pathname == "/en/free_consultation" || pathname == "/free_consultation";
  const parisPage = "/paris-arbitration-week";
  const parisPageEng = "/en/paris-arbitration-week";
  const realEstatePage = "/real-estate";
  const realEstatePageEng = "/en/real-estate";
  const corporatePage = "/corporate";
  const corporatePageEng = "/en/corporate";
   const freeConsultationPage = "/free_consultation";
  const freeConsultationPageEng = "/en/free_consultation";

  return (
    <>
      <ReactLenis root>
        <MainTeamProvider>
          <MainAPiProvider>
            <MainLanguageValueProvider>
              <MainReachUsStatusProvider>
                <MainBookingStatusProvider>
                  <MyHome.Provider value={{ home, setHome }}>
                    <MyLanguage.Provider value={{ lang, setLang }}>
                      <Head>
                      <meta name="robots" content="index, follow" />
                      </Head>

                      {/* Hide Header/Footer only for /real-estate */}
                      {!hideHeaderFooter && <Header language={languagess} data={header} />}

                      <main className="indexPage">{children}</main>

                      {
  pathname === parisPage || pathname === parisPageEng ? (
    <WhatsAppButtonParis />
  ) : pathname === corporatePage || pathname === corporatePageEng ? (
    <WhatsAppButtonCorporate />
  ) : pathname === realEstatePage || pathname === realEstatePageEng ? (
    <WhatsAppButtonRealEstate />
     ) : pathname === freeConsultationPage || pathname === freeConsultationPageEng ? null : (
    <WhatsAppButtonWebsite />
  )
}
                      {/* {pathname == parisPage || pathname == parisPageEng ? <WhatsAppButtonParis/> : (pathname == corporatePage || pathname == corporatePageEng) ? <WhatsAppButtonCorporate/> : <WhatsAppButtonRealEstate/>} */}

                      {!hideHeaderFooter && <Footer />}

                      <ToastContainer />
                    </MyLanguage.Provider>
                  </MyHome.Provider>
                </MainBookingStatusProvider>
              </MainReachUsStatusProvider>
            </MainLanguageValueProvider>
          </MainAPiProvider>
        </MainTeamProvider>
      </ReactLenis>
    </>
  );
};


export default Main;
