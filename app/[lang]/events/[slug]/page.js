
import React from 'react';
import axios from 'axios';
import config from "../../../services/config.json";
import EventssInner from './EventssInner';

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const { lang, slug } = params;
  const shouldNoIndex = ['ch', 'ru'].includes(lang);
 
  // fetch data using Axios
  try {
    const response = await axios.get(`${config.apiEndPoint}events/fetch/${slug}/${lang}`);
    const data = response.data;
    return {
        title: data?.data?.meta_tag || "Raalc Events",
        description: data?.data?.meta_description || "Raalc Events",
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
    };
  } catch (error) {
    console.error('Error fetching product data:', error);
    return {
      title: 'Raalc Law Firm', // fallback title in case of an error
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

const Page = ({ params }) => {
  const { lang, slug } = params;


  return (
    <EventssInner lang={lang} slug={slug} />

  );
};

export default Page;



