import React from 'react'
import LandingPage from './components/LandingPage';
import config from "../../services/config.json";
import axios from 'axios';


export async function generateStaticParams() {
    const languages = ['en'];
    const paths = languages.map((lang) => ({ lang }));
    return paths;
  }
  
  const page = ({ params }) => {
    const { lang } = params;
  return (
   <>
    <LandingPage lang={lang} />
   </>
  )
}

export default page