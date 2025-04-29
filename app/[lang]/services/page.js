import React from 'react'
import ServicesPage from './[slug]/ServicesPage';
import ServicesMain from './ServicesMain';
import config from "../../services/config.json";
import axios from 'axios';

export async function generateMetadata({ params }) {
  const { lang } = params;

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
        canonical: 'https://www.raalc.ae/services',
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