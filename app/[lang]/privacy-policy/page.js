import React from 'react'
import PrivacyPolicyComponent from './PrivacyPolicyComponent';


export async function generateStaticParams() {
    const languages = ['en', 'ar'];
    const paths = languages.map((lang) => ({ lang }));
    return paths;
  }

  export const metadata = {
    title: "Privacy Policy | RAALC Law Firm UAE",
    description:
      "Read RAALC Law Firm’s Privacy Policy to understand how we collect, use, and protect your personal information when you visit our website or use our legal services.",
      alternates: {
        canonical: "https://www.raalc.ae/privacy-policy",
      },
  };
  
  const page = ({ params }) => {
    const { lang } = params;
  return (
   <>
    <PrivacyPolicyComponent lang={lang} />
   </>
  )
}

export default page