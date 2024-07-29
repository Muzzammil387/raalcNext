// /app/[lang]/page.js
import React from 'react';
import Team from '@/components/Team';
import AboutSection from '@/components/home/AboutSection';
import BOD from '@/components/home/BOD';
import Banner from '@/components/home/Banner';
import Section3 from '@/components/home/Section3';
import ServicesSection from '@/components/home/ServicesSection';
import NEWS from '@/components/home/NEWS';
import Testimonials from '@/components/Testimonials';

export async function generateStaticParams() {
  // Define all possible language codes
  const languages = ['en', 'ar', 'ch', 'ru'];
  
  // Generate the paths for each language
  const paths = languages.map((lang) => ({ lang }));
  return paths;
}

const Home = ({ params }) => {
  const { lang } = params;
  
  return (
    <>
      <Banner />
      <AboutSection />
      <ServicesSection />
      <Section3 />
      <BOD />
      <Team />
      <NEWS />
      <Testimonials />
    </>
  );
};

export default Home;
