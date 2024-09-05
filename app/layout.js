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
// import RedirectComponent from './RedirectComponent'; // Adjust path if needed

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Raalc",
  description: "RAALC’s journey began in 2013, when it was co-founded in the Emirate of Sharjah. Our success continued through years and we opened our two new branches in Ras Al Khaimah",
  robots: {
    index: false, // this will set 'noindex'
  },
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <body className={inter.className}>
        <Script id="muzzammil"></Script>
        <Main>{children}</Main>
      </body>
    </html>
  );
}
