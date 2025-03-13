import React from 'react'
import TermsAndConditionsComponent from './TermsAndConditionsComponent';


export async function generateStaticParams() {
    const languages = ['en', 'ar'];
    const paths = languages.map((lang) => ({ lang }));
    return paths;
  }
  
  const page = ({ params }) => {
    const { lang } = params;
  return (
   <>
    <TermsAndConditionsComponent lang={lang} />
   </>
  )
}

export default page