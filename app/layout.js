// app/layout.js
import { Inter } from "next/font/google";
import "../public/css/customize.css";
import "./globals.css";
import "./quill.css";
import Head from 'next/head';
import "./_arabic.css";
import "../public/css/whatsapp.css";
import "react-toastify/dist/ReactToastify.css";
import Main from "./[lang]/main";
import Script from "next/script";
import WhatsAppButton from "./[lang]/real-estate/components/WhatsappButton";
import WhatsAppButtonParis from "./[lang]/paris-arbitration-week/components/WhatsappButton";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Raalc Law Firm",
  description: "RAALC’s journey began in 2013, when it was co-founded in the Emirate of Sharjah. Our success continued through years and we opened our two new branches in Ras Al Khaimah",
  verification: {
    google: "kvKmamV1GmbVp8AZbTRautEsWCs1-84lLD5oB5rjj4g"
  }
};

export default function RootLayout({ children, params, searchParams }) {
   const baseUrl = 'https://www.raalc.ae';
  const currentLang = params.lang;
  const path = `/${currentLang}`;
   const language_for_con = currentLang === 'ar' ? `${currentLang}` : '';
     // Construct the query string from searchParams
   const queryString = new URLSearchParams(
     Object.entries(searchParams || {}).reduce((acc, [key, value]) => {
       acc[key] = Array.isArray(value) ? value[0] : value || '';
       return acc;
     }, {})
   ).toString();
 
   const fullPath = queryString ? `${language_for_con}?${queryString}` : language_for_con;
   const canonicalUrl = `${baseUrl}${fullPath}`;
  return (
    <html lang={currentLang}>
       <head>
        {/* <link rel="canonical" href={`${baseUrl}/${currentLang}`} /> */}
        <link rel="alternate" hreflang="en" href={`${fullPath}`} />
        <link rel="alternate" hreflang="ar" href={`${fullPath}`} />
        <link rel="alternate" hreflang="x-default" href={fullPath} />
      </head>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="google-site-verification" content={metadata.verification.google} />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body className={inter.className}>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NK2H57S');
          `
        }} />
        {/* End Google Tag Manager */}
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NK2H57S"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}>
          </iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <GoogleTagManager gaId="GTM-NK2H57S" />
        <GoogleAnalytics gaId="G-4VM2WNCYK1" />
        <Main>{children}</Main>
        {/* <WhatsAppButton /> */}
      </body>
    </html>
  );
}