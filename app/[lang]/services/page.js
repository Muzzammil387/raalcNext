import React from 'react'
import ServicesPage from './[slug]/ServicesPage';
import ServicesMain from './ServicesMain';
import config from "../../services/config.json";
import axios from 'axios';

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const { lang, slug } = params;
 
  // fetch data using Axios
  try {
    const response = await axios.get(`https://api.raalc.ae/webContents/metadata/services/${lang}`);
    const data = response.data?.data;
    return {
      title:data?.meta_tag || "Raalc News",
      description: data?.meta_description || "Raalc News",
    };
  } catch (error) {
    console.error('Error fetching product data:', error);
    return {
      title: 'Raalc News', // fallback title in case of an error
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
    <div>
     <ServicesMain lang={lang} />
    </div>
  )
}

export default page