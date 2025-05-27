import React from 'react'
import TermsAndConditionsComponent from './TermsAndConditionsComponent';
import config from "../../services/config.json";


export async function generateStaticParams() {
    const languages = ['en', 'ar'];
    const paths = languages.map((lang) => ({ lang }));
    return paths;
  }

  export async function generateMetadata({ params, searchParams }) {
      const { lang } = params;
      const baseUrl = config.websiteRootUrl;
      const shouldNoIndex = ['ch', 'ru'].includes(lang);
    
      // Construct the path based on the language
      const path = lang === 'ar' ? `${lang}/terms-and-conditions` : 'terms-and-conditions';
    
      // Construct the query string from searchParams
      const queryString = new URLSearchParams(
        Object.entries(searchParams || {}).reduce((acc, [key, value]) => {
          acc[key] = Array.isArray(value) ? value[0] : value || '';
          return acc;
        }, {})
      ).toString();
    
      const fullPath = queryString ? `${path}?${queryString}` : path;
      const canonicalUrl = `${baseUrl}${fullPath}`;
    
      return {
        title: 'Terms & Conditions | RAALC Law Firm UAE',
        description:
        'Review the terms and conditions governing the use of RAALC Law Firm’s website and legal services. Understand your rights, responsibilities, and our service policies.',
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
        alternates: {
          canonical: canonicalUrl,
          languages: {
            en: 'https://www.raalc.ae/en/terms-and-conditions',
            ar: 'https://www.raalc.ae/ar/terms-and-conditions',
            'x-default': 'https://www.raalc.ae/terms-and-conditions',
          },
        },
      };
    }
  

  // export const metadata = {
  //   title: "Terms & Conditions | RAALC Law Firm UAE",
  //   description:
  //     "Review the terms and conditions governing the use of RAALC Law Firm’s website and legal services. Understand your rights, responsibilities, and our service policies.",
  //     robots: {
  //       index: true,
  //       follow: true,
  //       nocache: false,
  //       googleBot: {
  //         index: true,
  //         follow: true,
  //         noimageindex: false,
  //       },
  //     },
  //     alternates: {
  //       canonical: 'https://www.raalc.ae/terms-and-conditions',
  //       languages: {
  //         'en': `https://www.raalc.ae/en/terms-and-conditions`,
  //         'ar': `https://www.raalc.ae/ar/terms-and-conditions`,
  //         'x-default': `https://www.raalc.ae/terms-and-conditions`,
  //       },
  //     },
  // };
  
  const page = ({ params }) => {
    const { lang } = params;
  return (
   <>
    <TermsAndConditionsComponent lang={lang} />
   </>
  )
}

export default page