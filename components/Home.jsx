"use client"
import useFetch from '@/app/customHooks/useFetch';
import React, { useEffect } from 'react'
import Banner from './home/Banner';
import AboutSection from './home/AboutSection';
import ServicesSection from './home/ServicesSection';
import Section3 from './home/Section3';
import BOD from './home/BOD';
import NEWS from './home/NEWS';
import Testimonials from './Testimonials';
import Team from './Team';

const Home = ({lang}) => {
    const { loading, data } = useFetch(`webContents/home/pagecontent/7/${lang}`);

    if(loading) return '';
    return (
        <>
           { <Banner data={data.data} />}
           { <AboutSection home={data.data} />}
           { <ServicesSection department={data?.data?.departments} home={data.data} />}
           { <Section3 home={data.data} />}
            {/* <BOD /> */}
            {<Team team={data?.data?.teams} count={5} home={data.data} />}
           { <NEWS  news={data?.data?.news}  />}
            <Testimonials />
        </>
    )
}

export default Home