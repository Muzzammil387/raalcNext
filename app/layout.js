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
import { GoogleAnalytics } from '@next/third-parties/google'

// import RedirectComponent from './RedirectComponent'; // Adjust path if needed

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Raalc",
  description: "RAALC’s journey began in 2013, when it was co-founded in the Emirate of Sharjah. Our success continued through years and we opened our two new branches in Ras Al Khaimah",
  robots: {
    index: false, // this will set 'noindex'
  },
  verification: {
    google: "SfmJMQbEn55NU98hNr2dAVHwyvMdKVNlaT-pDrguRiM"
  }
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
    <Head>
        {/* Google Tag Manager Script */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NK2H57S');`,
          }}
        />
      </Head>
      <body className={inter.className}>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NK2H57S"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        
        {/* <GoogleAnalytics gaId="AW-11060079184" />
        <GoogleAnalytics gaId="G-21ZHG3RN35" />
        <GoogleAnalytics gaId="GTM-KFHJPV7" /> */}
          {/* <Head>

      </Head> */}
        <Main>{children}</Main>
      </body>
    </html>
  );
}