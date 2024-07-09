"use client"
import React, { useEffect, useState } from 'react'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { main } from "./data/main";
import { MyLanguage } from "./context/MyLanguageContext";
import { language } from "./data/language";
import { ToastContainer } from "react-toastify";
import { MyHome } from './context/MyHomeContext';
import Loader from './Loader';
const Main = ({child}) => {
    const [home, setHome] = useState("");
    const [lang, setLang] = useState("");
    const {header,languagess} = main
    useEffect(() => {
      setLang(language)
      setHome(main)
    }, [language,main])
    if(!home) return <Loader />
  return (
   <>
   <MyHome.Provider value={{ home, setHome }}>
   <MyLanguage.Provider value={{ lang, setLang }}>
      <Header language={languagess} data={header} />
      <main className="indexPage">
        {child}
      </main>
      <Footer />
      <ToastContainer />
      </MyLanguage.Provider>
      </MyHome.Provider>
   </>
  )
}

export default Main
