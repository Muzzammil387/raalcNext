// /app/[lang]/layout.js
import { Inter } from "next/font/google";
import "../public/css/customize.css";
import "./globals.css";
import "./_arabic.css";
import "../public/css/whatsapp.css";
import "react-toastify/dist/ReactToastify.css";
import Main from "./[lang]/main";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Raalc",
  description: "RAALC’s journey began in 2013, when it was co-founded in the Emirate of Sharjah. Our success continued through years and we opened our two new branches in Ras Al Khaimah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Main>{children}</Main>
      </body>
    </html>
  );
}
