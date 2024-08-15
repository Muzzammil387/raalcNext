
import React from 'react'
import Expertise from './Expertise';

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
   <div className='NewPage'>
    <Expertise lang={lang} />
   </div>
  )
}

export default page