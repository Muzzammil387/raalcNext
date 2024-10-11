
import React from 'react'
import TeamMain from './TeamMain';
import axios from 'axios';
import config from "../../services/config.json";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const { lang, slug } = params;
 
  // fetch data using Axios
  try {
    const response = await axios.get(`${config.apiEndPoint}webContents/metadata/teams/${lang}`);
    const data = response.data?.data;
    return {
      title:data?.meta_tag || "Raalc Team",
      description: data?.meta_description || "Raalc Team",
    };
  } catch (error) {
    console.error('Error fetching product data:', error);
    return {
      title: 'Raalc Teams', // fallback title in case of an error
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