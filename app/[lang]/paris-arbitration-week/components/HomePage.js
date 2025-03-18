"use client"
import React from 'react'
import Image from 'next/image'
import styles from '../styles/home.module.css'
import Button from '@mui/material/Button';
import { 
    paris_team,
    raw_logo
} from '@/app/untils/imgimport';
import { Grid, Paper } from "@mui/material";
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
        <Grid container spacing={2} className={styles.home_container}>
          <Grid item xs={12} md={7} style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
           <p style={{color: "#ffffff"}}>
           <span className={styles.welcome_to_raalc}>Welcome to RAALC Law Firm</span> — <div className={styles.legal_experts}>
           Leaders in Arbitration & Legal Expertise
           </div>
           </p>
          <div>
           <p className={`${styles.ensure_protection_first} ${styles.margin_up}`}>
           Resolve Your Dispute with Expert <span style={{fontWeight: "700", fontStyle: "italic"}}>Arbitration Support</span>
            </p>
           <p className={`${styles.ensure_protection}`}>
           RAALC is a proud sponsor of Paris Arbitration Week – <span style={{fontWeight: "700"}}>PAW 2025</span>. Engage with global arbitration leaders, explore innovative legal solutions, and safeguard your interests with expert representation.
            </p>
          </div>

          </Grid>

          <Grid item xs={12} md={5}>
            <div className={styles.raw_logo}>
               <Image 
                                src={raw_logo ?? ""} 
                                width={160} 
                                height={160} 
                                alt="Paris Arbitration Week Logo"
                              />
            </div>
            <div className={styles.form_container}>
                <p className={styles.form_heading}>
                Book Your Free Consultation Today!
                </p>
            <HubSpotForm formId="hubspotForm1"/>
            <p className={styles.form_footer}>
            Your information is 100% secure & confidential.
            </p>
            </div>
          </Grid>
          <div className={styles.paw_container}>
      <h1 className={styles.paw_styling}>
      #PAW2025
      </h1>
    </div>
        </Grid>
      </div>
    </div>
    </div>

    <div>
        <div className={styles.history_container}>
            <Grid container spacing={0} style={{display: "flex", alignItems: "center"}}>
          <Grid item xs={12} md={5}>
          <div className={styles.history_main_image_container}>
                <Image 
            src={paris_team ?? ""} 
            width={1000} 
            height={1000} 
            style={{height: "100%"}}
            alt="Paris Team Image" 
            />
                </div>
          </Grid>

          <Grid item xs={12} md={7} className={styles.about_us_content}>
          <div style={{marginTop: 40}}>
            <p className={styles.ensure_protection} style={{display: "flex"}}>
            <div style={{marginLeft: 15}}>
            At RAALC Law Firm, Arbitration is a key part of our dispute
resolution practice, helping businesses and individuals navigate
complex commercial conflicts efficiently. Our Arbitration Section
represents clients in arbitration proceedings across the world,
handling disputes under various international Arbitration rules
and jurisdictions.
            </div>
            </p>
          </div>
          </Grid>
        
        </Grid>

        <div>
        <div className={styles.section_container}>
      <span className={styles.section_text}>Contact Us</span>
      <div className={styles.section_line}></div>
      <Button  onClick={scrollToHomePage} className={styles.get_started_btn}>
        BOOK A CONSULTATION
      </Button>
    </div>
        </div>

        </div>
    </div>

    </div>

  );
};

export default HomePage;