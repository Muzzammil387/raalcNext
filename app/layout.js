import { Inter } from "next/font/google";
import "./globals.css";
import "./dist/css/whatsapp.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Raalc",
  description: "RAALC’s journey began in 2013, when it was co-founded in the Emirate of Sharjah. Our success continued through years and we opened our two newbranches in Ras Al Khaimah",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
      <main class="indexPage">
        {children}
      </main>
      <Footer />
        </body>
    </html>
  );
}
