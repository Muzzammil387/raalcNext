
import { Inter } from "next/font/google";
import "./globals.css";
import "./_arabic.css";
import "../dist/css/whatsapp.css";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Main from "./main";
import "../dist/css/customize.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Raalc",
  description: "RAALC’s journey began in 2013, when it was co-founded in the Emirate of Sharjah. Our success continued through years and we opened our two newbranches in Ras Al Khaimah",
};

export default function RootLayout({ children }) {


  axios.defaults.headers = {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${getTokenSession()}`,
};
  // axios.get('http://localhost:3001/main')
  //   .then((data) => {

  //   }).catch((error) => {
  //     if (error.response?.status === 401)
  //       toast.error(error.response.data.message);
  //     else toast.error(error.response.data.errorMessage);
  //   });

 

  return (
    <html lang="en">
      <body className={inter.className}>
      <Main child={children} />
        </body>
    </html>
  );
}
