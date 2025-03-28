"use client"
import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react';
import styles from '../styles/home.module.css'
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Typewriter } from "react-simple-typewriter";
import { 
  corporate_home_image,
  transparency,
  corporate_home_logo,
  corporate_home_2
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
           <p style={{color: "#ffffff"}}>
           <span className={styles.welcome_to_raalc}>Welcome to RAALC Law Firm - </span>
           </p>
           <div>
           <p className={styles.your_search_for}>
           Your Legal Partner for Success & Compliance
           </p>
           </div>

           <div>
           <p className={`${styles.your_search_for} ${styles.margin_up}`} style={{marginBottom: 25}}>
           Your Business Deserves the Best Legal Protection
           </p>
           <p className={`${styles.ensure_protection}`}>
           RAALC’s corporate lawyers provide expert legal support for company formation, compliance, and
           dispute resolution. Book a Consultation Today!
            </p>
          </div>

          </Grid>

          <Grid item xs={12} md={5}>
            <div className={styles.form_container}>
                <p className={styles.form_heading}>
                Speak to a Corporate Lawyer Now
                </p>
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
          <div className={styles.history_container}>
            <h2 className={styles.history_heading}>
            RAALC is a <span style={{fontWeight: 700}}>premier law firm</span>, providing expert legal advisory, dispute resolution, and corporate compliance solutions to businesses in the UAE and beyond.
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
        src={corporate_home_image ?? ""} 
        width={1000} 
        height={1000} 
        style={{ height: "100%", width: "100%", objectFit: "cover" }}
        alt="About Us Page Main Image" 
    />
</div>

<div style={{ marginTop: "30px"}}>
    <Grid container spacing={0} className={styles.client_p}>
          <Grid item xs={12} md={6}>
          <p className={styles.clients_points} style={{display: "flex", alignItems: "center"}}>
                <div style={{height: "100%", width: 200}}>
                <Image
            src={corporate_home_2 ?? ""} 
            width={200} 
            height={100} 
            alt="Legal Innovation for Business Leaders Logo"
            />
                </div>
<div style={{marginLeft: 15}}>
<p className={styles.bold}>
Legal Innovation for Business Leaders
            </p>
            We provide advanced legal strategies and customized corporate solutions to protect assets and drive business growth.
</div>
            </p>
          </Grid>

          <Grid item xs={12} md={6}>
          <p className={styles.clients_points} style={{display: "flex", alignItems: "center"}}>
                <div style={{height: "100%", width: 240}}>
                <Image 
            src={corporate_home_logo ?? ""} 
            width={240} 
            height={100} 
            alt="Global Experience, Local Expertise Logo" 
            />
                </div>
<div style={{marginLeft: 15}}>
<p className={styles.bold}>
Global Experience, Local Expertise
            </p>
            RAALC is your corporate legal partner, offering expert support for M&As, regulatory compliance, and commercial transactions.
</div>
            </p>
          </Grid>
        
        </Grid>
    </div>
          

        <div>
        <div className={styles.section_container}>
      <span className={styles.section_text}>Speak to a Corporate Lawyer Now</span>
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