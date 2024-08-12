import React from 'react'
import ContactPage from './ContactPage';
import config from "../../services/config.json";
import axios from 'axios';

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const { lang, slug } = params;
 
  // fetch data using Axios
  try {
    const response = await axios.get(`${config.apiEndPoint}webContents/contact/${lang}`);
    const data = response.data;
    return {
      title: data?.data?.meta_tag || "Raalc About",
      description: data?.data?.meta_description || "Raalc About",
    };
  } catch (error) {
    console.error('Error fetching product data:', error);
    return {
      title: 'Raalc About', // fallback title in case of an error
    };
  }
}

export async function generateStaticParams() {
  // Define all possible language codes
  const languages = ['en', 'ar', 'ch', 'ru'];
  
  // Generate the paths for each language
  const paths = languages.map((lang) => ({ lang }));
  
  return paths;
}

const page = ({ params }) => {
  const { lang } = params;
  return (
   <ContactPage lang={lang} />
  )
}

export default page