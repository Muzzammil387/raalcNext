// /app/[lang]/main.js
"use client";
import React, { useEffect, useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { main } from "../data/main";
import { MyLanguage } from "../context/MyLanguageContext";
import { language } from "../data/language";
import { ToastContainer } from "react-toastify";
import { MyHome } from '../context/MyHomeContext';
import Loader from '../Loader';
import MainBookingStatusProvider from '../context/MainBookingStatusContext';
import MainReachUsStatusProvider from '../context/MainReachUsStatusContext';
import MainLanguageValueProvider from '../context/MainLanguageValue';

const Main = ({ children }) => {
  const [home, setHome] = useState("");
  const [lang, setLang] = useState("");
  const { header, languagess } = main;

  useEffect(() => {
    setLang(language);
    setHome(main);
  }, []);

  if (!home) return <Loader />;

  return (
    <>
      <MainLanguageValueProvider>
      <MainReachUsStatusProvider>
        <MainBookingStatusProvider>
          <MyHome.Provider value={{ home, setHome }}>
            <MyLanguage.Provider value={{ lang, setLang }}>
              <Header language={languagess} data={header} />
              <main className="indexPage">
                {children}
              </main>
              <Footer />
              <ToastContainer />
            </MyLanguage.Provider>
          </MyHome.Provider>
        </MainBookingStatusProvider>
      </MainReachUsStatusProvider>
      </MainLanguageValueProvider>
    </>
  );
};

export default Main;
