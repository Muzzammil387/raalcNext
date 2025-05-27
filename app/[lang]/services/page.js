import React from 'react'
import ServicesPage from './[slug]/ServicesPage';
import ServicesMain from './ServicesMain';
import config from "../../services/config.json";
import axios from 'axios';

export async function generateMetadata({ params, searchParams }) {
  const { lang } = params;

  const baseUrl = `${config.websiteRootUrl}`;
  const shouldNoIndex = ['ch', 'ru'].includes(lang);
     
       // Construct the path
       const path = `/${lang}/services`;
       const language_for_con = lang === 'ar' ? `${lang}/services` : 'services';
     
     
       // Construct the query string from searchParams
       const queryString = new URLSearchParams(
         Object.entries(searchParams || {}).reduce((acc, [key, value]) => {
           acc[key] = Array.isArray(value) ? value[0] : value || '';
           return acc;
         }, {})
       ).toString();
     
       const fullPath = queryString ? `${language_for_con}?${queryString}` : language_for_con;
       const canonicalUrl = `${baseUrl}${fullPath}`;

  try {
    const res = await fetch(`${config.apiEndPoint}webContents/metadata/services/${lang}`, {
      cache: "no-store", // or "force-cache" depending on your logic
    });

    const json = await res.json();
    const data = json.data;

    return {
      title: data?.meta_tag || "Raalc News",
      description: data?.meta_description || "Raalc News",
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
          'en': `https://www.raalc.ae/en/services`,
          'ar': `https://www.raalc.ae/ar/services`,
          'x-default': `https://www.raalc.ae/services`,
        },
      },
    };
  } catch (err) {
    console.error("Metadata fetch failed", err);
    return {
      title: "Raalc News",
      description: "Raalc Legal News in UAE",
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
    <div>
     <ServicesMain lang={lang} />
    </div>
  )
}

export default page