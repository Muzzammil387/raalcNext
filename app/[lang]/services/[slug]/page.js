import React from 'react'
import ServicesPage from './ServicesPage';
import axios from 'axios';
import config from "../../../services/config.json";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const { lang, slug } = params;
 
  // fetch data using Axios
  try {
    const response = await axios.get(`${config.apiEndPoint}services/fetchPageContent/${slug}/${lang}`);
    const data = response.data;
    return {
      title: data?.data?.meta_tag || "Raalc Events",
      description: data?.data?.meta_description || "Raalc Events",
    };
  } catch (error) {
    console.error('Error fetching product data:', error);
    return {
      title: 'Raalc', // fallback title in case of an error
    };
  }
}

 
export async function generateStaticParams() {
  // Define your static paths
  return [
    { params: { lang: 'en', slug: '1' } },
    { params: { lang: 'ar', slug: '2' } },
    { params: { lang: 'ch', slug: '3' } },
    { params: { lang: 'ru', slug: '4' } },
  ];
}



const page = ({ params }) => {
  const { lang,slug } = params;
  return (
    <div>
      <ServicesPage slug={slug} lang={lang} />
    </div>
  )
}

export default page