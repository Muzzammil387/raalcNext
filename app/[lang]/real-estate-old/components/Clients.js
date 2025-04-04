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
    client_background
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
            OUR CLIENTS
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
          <Image src={src} alt={`Image ${index + 1}`} width={300} height={200} style={{ borderRadius: "10px" }} />
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
    <p className={styles.commitment_heading}>RAALC’S COMMITMENT TO EXCELLENCE IN</p>
    <div style={{ display: "flex", alignItems: "center" }}>
      <p className={styles.commitment_subheading}>Real Estate Law</p>
      <div className={styles.section_line}></div>
    </div>

    <div style={{ marginTop: "30px"}}>
    <Grid container spacing={0} className={styles.client_p}>
          <Grid item xs={12} md={4}>
          <p className={styles.clients_points} style={{display: "flex", alignItems: "center"}}>
                <div style={{height: "100%", width: "100%"}}>
                <Image 
            src={star ?? ""} 
            width={250} 
            height={100} 
            alt="High Success Rate Logo"
            />
                </div>
<div style={{marginLeft: 15}}>
<p className={styles.bold}>
            High Success Rate
            </p>
            We’ve secured successful outcomes for clients in real estate disputes, including millions of compensation claims.
</div>
            </p>
          </Grid>

          <Grid item xs={12} md={4}>
          <p className={styles.clients_points} style={{display: "flex", alignItems: "center"}}>
                <div style={{height: "100%", width: "100%"}}>
                <Image 
            src={legal ?? ""} 
            width={250} 
            height={100} 
            alt="Tailored Legal Solutions Logo" 
            />
                </div>
<div style={{marginLeft: 15}}>
<p className={styles.bold}>
            Tailored Legal Solutions
            </p>
            Every case is unique, which is why we create personalized legal plans that align with your specific goals, maximizing your chances of success.
</div>
            </p>
          </Grid>

          <Grid item xs={12} md={4}>
          <p className={styles.clients_points} style={{display: "flex", alignItems: "center"}}>
                <div style={{height: "100%", width: "100%"}}>
                <Image 
            src={transparency ?? ""} 
            width={250} 
            height={100} 
            alt="Trust and Transparency Logo" 
            />
                </div>
<div style={{marginLeft: 15}}>
<p className={styles.bold}>
            Trust and Transparency
            </p>
            We prioritize trust through transparent communication, providing consistent updates to keep you fully informed at every stage of your case.
</div>
            </p>
          </Grid>
        
        </Grid>
    </div>

    {/* Call to Action Section */}
    <div className={styles.section_container}>
      <span className={styles.section_text}>Speak to a Real Estate Lawyer Now</span>
      <div className={styles.section_line}></div>
      <Button onClick={scrollToHomePage} className={styles.get_started_btn}>
      BOOK A CONSULTATION
      </Button>
    </div>
  </div>
</div>


        </div>
    </div>

  );
};

export default OurClients;