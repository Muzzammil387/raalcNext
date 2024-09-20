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
    
      <body className={inter.className}>
        <GoogleAnalytics gaId="AW-11060079184" />
        <GoogleAnalytics gaId="G-21ZHG3RN35" />
        <GoogleAnalytics gaId="GTM-KFHJPV7" />
          <Head>


        {/* Clarity Analytics */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function(e, t, n, c, a, i) {
              e[n] = e[n] || function() {
                (e[n].q = e[n].q || []).push(arguments);
              }, (a = t.createElement(c)).async = 1, a.src = "https://www.clarity.ms/tag/fip35c5fke",
              (i = t.getElementsByTagName(c)[0]).parentNode.insertBefore(a, i);
            })(window, document, "clarity", "script");
          `,
        }} />
        {/* Google Tag Manager */}

      </Head>
        <Script id="muzzammil"></Script>
        <Main>{children}</Main>
      </body>
    </html>
  );
}
