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
    tridition,
    trust,
    history_main_image,
    technology
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
           <span className={styles.welcome_to_raalc}>Welcome to RAALC Law Firm</span> — <span className={styles.legal_experts}>Real Estate Legal Experts</span>
           </p>
           <div style={{lineHeight: "60px", marginTop: 20}}>
           <p className={styles.your_search_for}>
            Your Search For
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
            <p className={styles.your_search_for}>
            Ends here.</p>
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

          <Grid item xs={12} md={5}>
            <div className={styles.form_container}>
                <p className={styles.form_heading}>
                Speak to a Real Estate Lawyer Now
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
        <div className={styles.history_container}>
            <h2 className={styles.history_heading}>
            Founded in 2013, RAALC has grown into a powerhouse of legal excellence, serving clients across the UAE with a
            commitment to innovation and strategic legal solutions.
            </h2>
            <Grid container spacing={0} style={{display: "flex", alignItems: "center"}}>
          <Grid item xs={12} md={5}>
          <div className={styles.history_main_image_container}>
                <Image 
            src={history_main_image ?? ""} 
            width={1000} 
            height={1000} 
            style={{height: "100%"}}
            alt="About Us Page Main Image" 
            />
                </div>
          </Grid>

          <Grid item xs={12} md={7} className={styles.about_us_content}>
          <div style={{marginTop: 40}}>
            <p className={styles.ensure_protection} style={{display: "flex"}}>
                <div >
                <Image 
            src={tridition ?? ""} 
            width={250} 
            height={100} 
            alt="Tradition of Excellence Logo" 
            />
                </div>
<div style={{marginLeft: 15}}>
<p className={styles.bold}>
            Tradition of Excellence
            </p>
            With a strong foundation in real estate law, we provide expert representation and strategic counsel to safeguard our clients’ interests.
</div>
            </p>
          </div>
          {/* <div style={{marginTop: 25}}>
          <p className={styles.ensure_protection_trust} style={{display: "flex"}}>
                <div>
                <Image 
            src={technology ?? ""} 
            width={300} 
            height={200} 
            alt="Technology Logo" 
            />
                </div>
<div style={{marginLeft: 15}}>
<p className={styles.bold}>
            Technology-Driven Legal Services
            </p>
            RAALC is shaping the future of law by integrating AI and blockchain solutions into our practice, making us one of the UAE’s pioneers in smart-law innovation.
            </div>
            </p>
          </div> */}
          <div style={{marginTop: 25}}>
          <p className={styles.ensure_protection_trust} style={{display: "flex"}}>
                <div>
                <Image 
            src={trust ?? ""} 
            width={300} 
            height={200} 
            alt="Trust Logo" 
            />
                </div>
<div style={{marginLeft: 15}}>
<p className={styles.bold}>
            Your Trusted Legal Partner
            </p>
            From litigation to advisory, we craft tailored legal strategies that protect your rights and investments. Experience excellence—partner with RAALC today.
            </div>
            </p>
          </div>
          </Grid>
        
        </Grid>

        <div>
        <div className={styles.section_container}>
      <span className={styles.section_text}>Speak to a Real Estate Lawyer Now</span>
      <div className={styles.section_line}></div>
      <Button  onClick={scrollToHomePage} className={styles.get_started_btn}>
        BOOK A CONSULATION
      </Button>
    </div>
        </div>

        </div>
    </div>

    </div>

  );
};

export default HomePage;