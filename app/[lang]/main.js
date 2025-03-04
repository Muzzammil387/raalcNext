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
import { ReactLenis } from '@studio-freight/react-lenis'

const Main = ({ children }) => {
  const pathname = usePathname();
  const [lang, setLang] = useState("");
  const [home, setHome] = useState("");
  const { header, languagess } = main;

  useEffect(() => {
    setLang(language);
    setHome(main);
  }, []);

  const hideHeaderFooter = pathname == "/en/real-estate" || pathname == "/real-estate";

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
                        <meta name="robots" content="noindex" />
                      </Head>

                      {/* Hide Header/Footer only for /real-estate */}
                      {!hideHeaderFooter && <Header language={languagess} data={header} />}

                      <main className="indexPage">{children}</main>

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
