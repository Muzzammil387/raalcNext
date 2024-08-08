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
    const { loading, data } = useFetch(`teams/${lang}`);
    const { loading:loading2, data:data2 } = useFetch(`departments/${lang}`);
    const { loading:loading3, data:data3 } = useFetch(`webContents/home/${lang}`);

    
    return (
        <>
           {!loading3 && <Banner data={data3.data} />}
           {!loading3 && <AboutSection home={data3.data} />}
           {(!loading2 && !loading3) && <ServicesSection department={data2?.data} home={data3.data} />}
           {!loading3 && <Section3 home={data3.data} />}
            {/* <BOD /> */}
            {(!loading && !loading3) && <Team team={data?.data} count={5} home={data3.data} />}
           {!loading3 &&  <NEWS data={data3}  />}
            <Testimonials />
        </>
    )
}

export default Home