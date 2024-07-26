// /app/[lang]/page.js
import React from 'react';
import Team from '@/components/Team';
import AboutSection from '@/components/home/AboutSection';
import BOD from '@/components/home/BOD';
import Banner from '@/components/home/Banner';
import Section3 from '@/components/home/Section3';
import ServicesSection from '@/components/home/ServicesSection';

const Home = ({ params: { lang } }) => {
  console.log(lang);
  return (
    <>
      <Banner />
      <AboutSection />
      <ServicesSection />
      <Section3 />
      <BOD />
      <Team />
    </>
  );
};

export default Home;
