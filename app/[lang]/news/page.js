
import React from 'react'
import NewPage from './NewPage';
import config from "../../services/config.json";

import axios from 'axios';

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const { lang, slug } = params;
 
  // fetch data using Axios
  try {
    const response = await axios.get(`${config.apiEndPoint}webContents/metadata/news/${lang}`);
    console.log("debugging response", response)
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
   <div className='NewPage'>
<NewPage lang={lang} />
   </div>
  )
}

export default page