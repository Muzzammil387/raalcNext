"use client"
import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react';
import styles from '../styles/home.module.css'
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Typewriter } from "react-simple-typewriter";
import ZohoContactForm from './HubSpotForm';
import { useEffect } from "react";
import { 
    tridition,
    trust,
    history_main_image,
    technology,
    corporate_home_image,
    corporate_home_2,
    header_real_estate,
    corporate_home_logo,
    real_estate_logo_one,
    real_estate_logo_two
} from '@/app/untils/imgimport';
import { Grid, Paper } from "@mui/material";
import ForwardIcon from '@mui/icons-material/Forward';
import HubSpotForm from './HubSpotForm';

const HomePage = ({ lang }) => {

  const scrollToHomePage = () => {
    const homePageSection = document.getElementById("home_page");
    if (homePageSection) {
      homePageSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
    <div>
    <div className={styles.background_image_style}>
    <div
   className={styles.overlay}
  ></div>
      <div className={styles.left_grid}>
        <Grid container spacing={2} style={{marginLeft: "4%", marginRight: "4%"}}>
          <Grid item xs={12} md={7}>
           <p style={{color: "#ffffff", display: "flex", flexDirection: "column"}}>
           <span className={styles.welcome_to_raalc}>Welcome to RAALC Law Firm</span><span className={styles.welcome_to_raalc}>Real Estate Legal Experts</span>
           </p>
           <div style={{lineHeight: "60px", marginTop: 40}}>
           <p className={styles.real_estate_lawyer}>
            YOUR SEARCH FOR
           </p>
           <p className={styles.real_estate_lawyer}>
           <Typewriter
        words={[
            "THE BEST REAL ESTATE LAWYER", 
            "THE BEST PROPERTY LAWYERS", 
            "PROPERTY DISPUTE LAWYER",
            // "BEST LAWYER FOR REAL ESTATE DISPUTE",
            // "BEST LAWYERS FOR PROPERTY DISPUTES"
        ]}
        loop={true}
        cursor
        cursorStyle="_"
        typeSpeed={80}
        deleteSpeed={50}
        delaySpeed={1000}
      />
      </p>
            <p className={styles.real_estate_lawyer}>
            ENDS HERE.</p>
           </div>
          
            {/* <p className={styles.what_can_we_do}>
            WHAT CAN WE DO?</p>

            <p className={styles.transaction_services}>
           <span>Property Transaction Services</span>  <span><ForwardIcon style={{ fontSize: 50 }} /></span>
           </p> */}

           <div>
           <p className={`${styles.ensure_protection} ${styles.margin_up}`}>
            Ensure the protection of your property and investments with expert legal support. We handle real estate challenges, giving you peace of mind. Book a consultation today!
            </p>
          </div>

          </Grid>

          <Grid item xs={12} md={5} style={{display: "flex"}}>
            <div className={styles.form_container}>
                <p className={styles.form_heading}>
                Speak to a Real Estate Lawyer Now
                </p>
                {/* <ZohoContactForm/> */}
            <HubSpotForm formId="hubspotForm1"/>
            <p className={styles.form_footer}>
            Your information is 100% secure & confidential.
            </p>
            </div>
          </Grid>
        
        </Grid>
      </div>
    </div>
    </div>

    <div>
    <div className={styles.background_image_style_second}>
        <div
   className={styles.overlay}
  ></div>
          <div className={styles.history_container} style={{position: "relative", zIndex: 2}}>
            <h2 className={styles.history_heading}>
            Founded in 2013, RAALC has grown into a powerhouse of legal excellence, serving clients across the UAE with a
            commitment to innovation and strategic legal solutions.
            </h2>
           
          {/* <div className={styles.history_main_image_container}>
                <Image 
            src={corporate_home_image ?? ""} 
            width={1000} 
            height={500} 
            style={{height: "100%", width: "100%"}}
            alt="About Us Page Main Image" 
            />
                </div> */}

                <div className={styles.history_main_image_container} style={{ height: "600px" }}>
    <Image 
        src={header_real_estate ?? ""} 
        width={1000} 
        height={1000} 
        style={{ height: "100%", width: "100%", objectFit: "cover" }}
        alt="Real Estate HomePage Main Image" 
    />
</div>

<div style={{ marginTop: "30px"}}>
    <Grid container spacing={0} className={styles.client_p}>
          <Grid item xs={12} md={6}>
          <p className={styles.clients_points} style={{display: "flex", alignItems: "center"}}>
                <div style={{height: "100%", width: 200}}>
                <Image
            src={real_estate_logo_one ?? ""} 
            width={200} 
            height={100} 
            alt="Tradition of Excellence Logo"
            />
                </div>
<div style={{marginLeft: 15}}>
<p className={styles.bold}>
Tradition of Excellence
            </p>
            We provide advanced legal With a strong foundation in
real estate law, we provide expert representation and
strategic counsel to safeguard our client&apos;s interests.
</div>
            </p>
          </Grid>

          <Grid item xs={12} md={6}>
          <p className={styles.clients_points} style={{display: "flex", alignItems: "center"}}>
                <div style={{height: "100%", width: 240}}>
                <Image 
            src={real_estate_logo_two ?? ""} 
            width={300} 
            height={100} 
            alt="Your Trusted Legal Partner Logo" 
            />
                </div>
<div style={{marginLeft: 15}}>
<p className={styles.bold}>
Your Trusted Legal Partner
            </p>
            From litigation to advisory, we craft tailored legal
strategies that protect your rights and investments.
Experience excellence—partner with RAALC today.
</div>
            </p>
          </Grid>
        
        </Grid>
    </div>
          

        <div>
        <div className={styles.section_container}>
      <span className={styles.section_text}>Speak to a Real Estate Lawyer Now</span>
      <div className={styles.section_line}></div>
      <Button  onClick={scrollToHomePage} className={styles.get_started_btn}>
        GET STARTED
      </Button>
    </div>
        </div>

        </div>
        </div>
    </div>

    </div>

  );
};

export default HomePage;