import React from 'react';
import Home from '@/components/Home';
import config from "../services/config.json";
import axios from 'axios';

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const { lang, slug } = params;
 
  // fetch data using Axios
  try {
    const response = await axios.get(`${config.apiEndPoint}webContents/home/${lang}`);
    const data = response.data?.data;
    return {
      title:data?.meta_tag || "Raalc Home",
      description: data?.meta_description || "Raalc Home",
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
        canonical: 'https://www.raalc.ae/',
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
  const languages = ['en', 'ar', 'ch', 'ru'];
  
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
