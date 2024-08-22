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
// import RedirectComponent from './RedirectComponent'; // Adjust path if needed

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Raalc",
  description: "RAALC’s journey began in 2013, when it was co-founded in the Emirate of Sharjah. Our success continued through years and we opened our two new branches in Ras Al Khaimah",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/webImages/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/webImages/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/webImages/favicon-16x16.png" />
<link rel="manifest" href="/webImages/site.webmanifest" />
      </Head>
      <body className={inter.className}>
        {/* <RedirectComponent /> */}
        <Main>{children}</Main>
      </body>
    </html>
  );
}
