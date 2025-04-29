import React from 'react'
import TermsAndConditionsComponent from './TermsAndConditionsComponent';


export async function generateStaticParams() {
    const languages = ['en', 'ar'];
    const paths = languages.map((lang) => ({ lang }));
    return paths;
  }

  export const metadata = {
    title: "Terms & Conditions | RAALC Law Firm UAE",
    description:
      "Review the terms and conditions governing the use of RAALC Law Firm’s website and legal services. Understand your rights, responsibilities, and our service policies.",
      robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: false,
        },
      },
      alternates: {
        canonical: 'https://www.raalc.ae/terms-and-conditions',
        languages: {
          'en': `https://www.raalc.ae/en/terms-and-conditions`,
          'ar': `https://www.raalc.ae/ar/terms-and-conditions`,
          'x-default': `https://www.raalc.ae/terms-and-conditions`,
        },
      },
  };
  
  const page = ({ params }) => {
    const { lang } = params;
  return (
   <>
    <TermsAndConditionsComponent lang={lang} />
   </>
  )
}

export default page