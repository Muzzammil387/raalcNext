import React from 'react'
import ContactPage from './ContactPage';
import config from "../../services/config.json";
import axios from 'axios';

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const { lang, slug } = params;

  const baseUrl = `${config.websiteRootUrl}`;
         
           // Construct the path
           const path = `/${lang}/contact`;
           const language_for_con = lang === 'ar' ? `${lang}/contact` : 'contact';
         
         
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
    const response = await axios.get(`${config.apiEndPoint}webContents/contact/${lang}`);
    const data = response.data;
    return {
      title: data?.data?.meta_tag || "Raalc About",
      description: data?.data?.meta_description || "Raalc About",
      robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: false,
        },
      },
      alternates: {
        canonical: canonicalUrl ?? canonicalUrl,
        languages: {
          'en': `https://www.raalc.ae/en/contact`,
          'ar': `https://www.raalc.ae/ar/contact`,
          'x-default': `https://www.raalc.ae/contact`,
        },
      },
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