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
import { GoogleAnalytics,GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Raalc",
  description: "RAALC’s journey began in 2013, when it was co-founded in the Emirate of Sharjah. Our success continued through years and we opened our two new branches in Ras Al Khaimah",
  verification: {
    google: "kvKmamV1GmbVp8AZbTRautEsWCs1-84lLD5oB5rjj4g"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>


        <GoogleTagManager gaId="GTM-NK2H57S" /> 
        <GoogleAnalytics gaId="G-4VM2WNCYK1" /> 
        <Main>{children}</Main>
      </body>
    </html>
  );
}