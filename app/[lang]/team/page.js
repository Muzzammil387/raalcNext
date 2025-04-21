
import React from 'react'
import TeamMain from './TeamMain';
import axios from 'axios';
import config from "../../services/config.json";

export async function generateMetadata({ params }) {
  const { lang } = params;

  try {
    const res = await fetch(`${config.apiEndPoint}webContents/metadata/teams/${lang}`, {
      cache: "no-store",
    });

    const json = await res.json();
    const data = json.data;

    return {
      title: data?.meta_tag || "Raalc News",
      description: data?.meta_description || "Raalc News",
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
   <div className='teampage'>
<TeamMain lang={lang} />
   </div>
  )
}

export default page