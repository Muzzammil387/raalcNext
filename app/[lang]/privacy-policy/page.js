import React from 'react'
import PrivacyPolicyComponent from './PrivacyPolicyComponent';


export async function generateStaticParams() {
    const languages = ['en', 'ar'];
    const paths = languages.map((lang) => ({ lang }));
    return paths;
  }
  
  const page = ({ params }) => {
    const { lang } = params;
  return (
   <>
    <PrivacyPolicyComponent lang={lang} />
   </>
  )
}

export default page