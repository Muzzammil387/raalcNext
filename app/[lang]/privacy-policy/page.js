import React from 'react'
import PrivacyPolicyComponent from './PrivacyPolicyComponent';
import config from "../../services/config.json";


export async function generateStaticParams() {
    const languages = ['en', 'ar'];
    const paths = languages.map((lang) => ({ lang }));
    return paths;
  }

  export async function generateMetadata({ params, searchParams }) {
    const { lang } = params;
    const baseUrl = config.websiteRootUrl;
  
    // Construct the path based on the language
    const path = lang === 'ar' ? `${lang}/privacy-policy` : 'privacy-policy';
  
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
      title: 'Privacy Policy | RAALC Law Firm UAE',
      // title: lang === 'ar' ? 'سياسة الخصوصية | RAALC' : 'Privacy Policy | RAALC Law Firm UAE',
      description:
      'Read RAALC Law Firm’s Privacy Policy to understand how we collect, use, and protect your personal information when you visit our website or use our legal services.',
        // lang === 'ar'
        //   ? 'اقرأ سياسة الخصوصية الخاصة بـ RAALC لفهم كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتك الشخصية عند زيارتك لموقعنا الإلكتروني أو استخدامك لخدماتنا القانونية.'
        //   : 'Read RAALC Law Firm’s Privacy Policy to understand how we collect, use, and protect your personal information when you visit our website or use our legal services.',
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
        canonical: canonicalUrl,
        languages: {
          en: 'https://www.raalc.ae/en/privacy-policy',
          ar: 'https://www.raalc.ae/ar/privacy-policy',
          'x-default': 'https://www.raalc.ae/privacy-policy',
        },
      },
    };
  }

  // export const metadata = {
  //   title: "Privacy Policy | RAALC Law Firm UAE",
  //   description:
  //     "Read RAALC Law Firm’s Privacy Policy to understand how we collect, use, and protect your personal information when you visit our website or use our legal services.",
  //     robots: {
  //             index: true,
  //             follow: true,
  //             nocache: false,
  //             googleBot: {
  //               index: true,
  //               follow: true,
  //               noimageindex: false,
  //             },
  //           },
  //           alternates: {
  //             canonical: 'https://www.raalc.ae/privacy-policy',
  //             languages: {
  //               'en': `https://www.raalc.ae/en/privacy-policy`,
  //               'ar': `https://www.raalc.ae/ar/privacy-policy`,
  //               'x-default': `https://www.raalc.ae/privacy-policy`,
  //             },
  //           },
  // };
  
  const page = ({ params }) => {
    const { lang } = params;
  return (
   <>
    <PrivacyPolicyComponent lang={lang} />
   </>
  )
}

export default page