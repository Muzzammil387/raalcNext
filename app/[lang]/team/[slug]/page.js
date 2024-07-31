
import React from 'react';
import TeamDetails from './TeamDetails';
import axios from 'axios';

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const { lang, slug } = params;
 
  // fetch data using Axios
  try {
    const response = await axios.get(`https://raalc.quickdigitals.ae/api/teams/${slug}/${lang}`);
    const data = response.data;
    console.log(data?.data,"muzcxgdfgz")
    return {
      title: data?.data?.name || "abc",
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

const Page = ({ params }) => {
  const { lang, slug } = params;


  return (
    <TeamDetails lang={lang} slug={slug} />

  );
};

export default Page;



