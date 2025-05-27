import React from 'react';
import Home from '@/components/Home';
import config from "../services/config.json";
import axios from 'axios';

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const { lang, slug } = params;

  const baseUrl = `${config.websiteRootUrl}`;
   const shouldNoIndex = ['ch', 'ru'].includes(lang);
 
   // Construct the path
   const path = `/${lang}`;
   const language_for_con = lang === 'ar' ? `${lang}` : '';
 
 
   // Construct the query string from searchParams
   const queryString = new URLSearchParams(
     Object.entries(searchParams || {}).reduce((acc, [key, value]) => {
       acc[key] = Array.isArray(value) ? value[0] : value || '';
       return acc;
     }, {})
   ).toString();
 
   const fullPath = queryString ? `${language_for_con}?${queryString}` : language_for_con;
   const canonicalUrl = `${baseUrl}${fullPath}`;
 
  // fetch data using Axios
  try {
    const response = await axios.get(`${config.apiEndPoint}webContents/home/${lang}`);
    const data = response.data?.data;
    return {
      title:data?.meta_tag || "Raalc Home",
      description: data?.meta_description || "Raalc Home",
      robots: {
      index: !shouldNoIndex,
      follow: !shouldNoIndex,
      nocache: false,
      googleBot: {
        index: !shouldNoIndex,
        follow: !shouldNoIndex,
        noimageindex: false,
      },
    },
      alternates: {
        canonical: canonicalUrl ?? canonicalUrl,
        languages: {
          'en': `https://www.raalc.ae/en`,
          'ar': `https://www.raalc.ae/ar`,
          'x-default': 'https://www.raalc.ae/',
        },
      },
    };
  } catch (error) {
    console.error('Error fetching product data:', error);
    return {
      title: 'Raalc Home', // fallback title in case of an error
    };
  }
}

export async function generateStaticParams() {
  // Define all possible language codes
  const languages = ['en', 'ar'];
  
  // Generate the paths for each language
  const paths = languages.map((lang) => ({ lang }));
  return paths;
}

const page = ({ params }) => {
  const { lang } = params;
  
  return (
    <>
      <Home lang={lang} />
    </>
  );
};

export default page;
