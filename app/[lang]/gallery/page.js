
import React from 'react'
import GalleryBox from './GalleryBox';
import config from "../../services/config.json";
import axios from 'axios';


export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const { lang, slug } = params;
   
    // fetch data using Axios
    try {
      const response = await axios.get(`${config.apiEndPoint}webContents/gallery/${lang}`);
      const data = response.data;
      return {
          title: data?.data?.meta_tag || "Raalc gallery",
          description: data?.data?.meta_description || "Raalc gallery",
      };
    } catch (error) {
      console.error('Error fetching product data:', error);
      return {
        title: 'Raalc', // fallback title in case of an error
      };
    }
  }


export async function generateStaticParams() {
    // Define all possible language codes
    const languages = ['en', 'ar', 'ch', 'ru'];
    
    // Generate the paths for each language
    const paths = languages.map((lang) => ({ lang }));
    
    return paths;
  }

const page = ({ params }) => {
    const { lang } = params;
  return (
   <>
       <div className="InnerPageBox1 absolute w-[22rem] h-[22rem] opacity-5 bg-primary left-0 top-[50%]"></div>
    <div className="InnerPageBox2"></div>   
    <section className="gallery relative">
        <div className="container mx-auto">
           <GalleryBox lang={lang} />
        </div>
    </section>
   </>
  )
}

export default page