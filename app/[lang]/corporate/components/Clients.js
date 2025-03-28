"use client"
import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react';
import styles from '../styles/clients.module.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { 
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve,
    thirteen,
    twenty_three,
    fourteen,
    fifteen,
    sixteen,
    seventeen,
    eighteen,
    nineteen,
    twenty,
    twenty_one,
    twenty_two,
    tridition,
    transparency,
    legal,
    star,
    client_background,
    corporate_client_icon_1,
    corporate_client_icon_2,
    corporate_client_icon_3
} from '@/app/untils/imgimport';
import { Grid, Paper } from "@mui/material";

const OurClients = ({ lang }) => {
    const scrollToHomePage = () => {
        const homePageSection = document.getElementById("home_page");
        if (homePageSection) {
          homePageSection.scrollIntoView({ behavior: "smooth" });
        }
      };
    const images = [
        one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve,
        twenty_three, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty,
        twenty_one, twenty_two
    ];
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6,
          },
        desktop: {
          breakpoint: { max: 3000, min: 1400 },
          items: 5,
        },
        tablet: {
          breakpoint: { max: 1400, min: 1050 },
          items: 4,
        },
        large_mobile: {
          breakpoint: { max: 1050, min: 700 },
          items: 3,
        },
        mobile: {
          breakpoint: { max: 700, min: 0 },
          items: 2,
        }
      };
  return (
    <div>
        <div className={styles.client_container}>
        <p className={styles.client_heading}>
            OUR CLIENTS : <span style={{fontWeight: 600}}>Trusted By Industry Leaders</span>
         </p>
         <Carousel
      responsive={responsive}
      autoPlay={true}
      autoPlaySpeed={1000}
      infinite={true}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      showDots={false}
    >
      {images.map((src, index) => (
        <div key={index} style={{ padding: "10px" }}>
          <Image src={src} alt={`Image ${index + 1}`} width={250} height={200} style={{ borderRadius: "10px" }} />
        </div>
      ))}
    </Carousel>
        </div>

        <div
        >
        
      <div style={{display: "flex", alignItems: "center"}}>
     
           <div className={styles.section_line}></div>
      </div>

      <div
  className={styles.background}
>
  {/* Dark Overlay */}
  <div
   className={styles.overlay}
  ></div>

  {/* Content inside */}
  <div className={styles.client_container} style={{ position: "relative", zIndex: 2, paddingLeft: "5%", paddingRight: "5%" }}>
  <p className={`${styles.your_search_for} ${styles.margin_up}`} style={{marginBottom: 25}}>
  We provide <span className={styles.bold}>expert legal counsel</span> to navigate <span className={styles.bold}>corporate challenges</span> and <span className={styles.bold}>legal complexities.</span>
           </p>
    <div style={{ marginTop: "30px"}}>
    <Grid container spacing={0} className={styles.client_p}>
          <Grid item xs={12} md={4}>
          <p className={styles.clients_points} style={{display: "flex", alignItems: "center"}}>
                <div style={{height: "100%", width: 350}}>
                <Image 
            src={corporate_client_icon_1 ?? ""} 
            width={350} 
            height={100} 
            className={styles.client_icons}
            alt="Comprehensive Legal Expertise Logo"
            />
                </div>
<div style={{marginLeft: 15}}>
<p className={styles.bold}>
Comprehensive Legal Expertise
            </p>
            Our lawyers deliver
end-to-end legal solutions,
ensuring businesses remain
secure, compliant, and successful.
</div>
            </p>
          </Grid>

          <Grid item xs={12} md={4}>
          <p className={styles.clients_points} style={{display: "flex", alignItems: "center"}}>
                <div style={{height: "100%", width: 300}}>
                <Image 
            src={corporate_client_icon_2 ?? ""} 
            width={300} 
            className={styles.client_icons}
            height={100} 
            alt="Business-First Approach Logo" 
            />
                </div>
<div style={{marginLeft: 15}}>
<p className={styles.bold}>
Business-First Approach
            </p>
            We craft strategic legal frameworks
that align with your business
objectives, protecting assets and
fostering growth.
</div>
            </p>
          </Grid>

          <Grid item xs={12} md={4}>
          <p className={styles.clients_points} style={{display: "flex", alignItems: "center"}}>
                <div style={{height: "100%", width: 300}}>
                <Image 
            src={corporate_client_icon_3 ?? ""} 
            width={300} 
            height={100} 
            className={styles.client_icons}
            alt="Trust & Integrity:" 
            />
                </div>
<div style={{marginLeft: 15}}>
<p className={styles.bold}>
            Trust and Transparency
            </p>
            Transparent, ethical, and
committed to long-term success,
RAALC is your dedicated legal
partner.
</div>
            </p>
          </Grid>
        
        </Grid>
    </div>

    {/* Call to Action Section */}
    <div className={styles.section_container}>
      <span className={styles.section_text}>Get Expert Legal Guidance Now!</span>
      <div className={styles.section_line}></div>
      <Button onClick={scrollToHomePage} className={styles.get_started_btn}>
      GET STARTED
      </Button>
    </div>
  </div>
</div>


        </div>
    </div>

  );
};

export default OurClients;