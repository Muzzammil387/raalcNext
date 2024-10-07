import React from 'react'
import ServicesPage from './[slug]/ServicesPage';
import ServicesMain from './ServicesMain';

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