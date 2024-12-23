"use client"
import useFetch from '@/app/customHooks/useFetch';
import React from 'react'
import Banner from './home/Banner';
import AboutSection from './home/AboutSection';
import ServicesSection from './home/ServicesSection';
import Section3 from './home/Section3';
import NEWS from './home/NEWS';
import Testimonials from './Testimonials';
import Team from './Team';
import Loaders from './Loaders';
import EventSlider from './home/EventSlider';
import Members from './home/Members';

const Home = ({lang}) => {
    const { loading, data } = useFetch(`webContents/home/pagecontent/7/${lang}`);


    if(loading) return <Loaders />;
    const alldata = data?.data
    const { departments,teams,news,events,reviews,client_section } = alldata
    return (
        <>
           { <Banner data={alldata} />}
           { <AboutSection home={alldata} />}
           { <ServicesSection department={departments} home={alldata} />}
           { <Section3 home={alldata} />}
            {/* <BOD /> */}
            {<Team team={teams?.teams} count={5} home={alldata} />}
           { <NEWS  news={news?.news}  />}
           <EventSlider events={events} home={alldata} /> 
           <Members alldata={alldata} data={client_section} /> 
            <Testimonials data={reviews} />
        </>
    )
}

export default Home