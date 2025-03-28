"use client"
import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react';
import styles from '../styles/about_us.module.css'
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Typewriter } from "react-simple-typewriter";
import { 
    corporate_about_us_1,
    corporate_about_us_2,
    corporate_about_us_3,
    corporate_about_us_4,
    corporate_about_us_5,
    corporate_about_us_6,
    corporate_about_us_img
} from '@/app/untils/imgimport';
import { Grid, Paper } from "@mui/material";
import ForwardIcon from '@mui/icons-material/Forward';
import HubSpotForm from './HubSpotForm';

const AboutUs = ({ lang }) => {

  return (
    <div>
    <div>
    <div className={styles.background_image_style}>
        <div
   className={styles.overlay}
  ></div>
       <div className={styles.history_container}>
       <div style={{ display: "flex", alignItems: "center" }}>
      <p className={styles.commitment_heading}>About Us</p>
      <div className={styles.section_line}></div>
    </div>
            <Grid container spacing={0} style={{display: "flex", alignItems: "center"}}>
          <Grid item xs={12} md={5}>
          <div className={styles.history_main_image_container}>
                <Image 
            src={corporate_about_us_img ?? ""} 
            width={1000} 
            height={1000} 
            className={styles.about_us_image_styling}
            alt="About Us Page Main Image" 
            />
                </div>
          </Grid>

          <Grid item xs={12} md={7} className={styles.about_us_content}>
          <div style={{marginTop: 40}} className={styles.about_us_image_container}>
             <Image 
                        src={corporate_about_us_1 ?? ""}
                        width={90}
                        height={80} 
                        style={{marginRight: 30}}
                        className={styles.image_spacing}
                        alt="Legal Solutions Logo"
                        />
            <p className={styles.ensure_protection} style={{display: "flex"}}>
            <div className={styles.centerize_content}>
<h3 className={styles.heading}>
100+ Tailored Business & Legal Solutions
</h3>
</div>
            </p>
          </div>
          <div style={{marginTop: 45}} className={styles.about_us_image_container}>
          <Image 
                        src={corporate_about_us_2 ?? ""}
                        width={100} 
                        height={80} 
                          style={{marginRight: 20}}
                          className={styles.image_spacing}
                        alt="Experience Logo"
                        />
          <p className={styles.ensure_protection_trust} style={{display: "flex"}}>
<div className={styles.centerize_content}>
<h3 className={styles.heading}>
30+ Years of Combined Experience
</h3>
            </div>
            </p>
          </div>

          <div style={{marginTop: 45}} className={styles.about_us_image_container}>
          <Image 
                        src={corporate_about_us_3 ?? ""}
                        width={80} 
                        height={80} 
                          style={{marginRight: 42}}
                          className={styles.image_spacing}
                        alt="UAE Offices Logo"
                        />
          <p className={styles.ensure_protection_trust} style={{display: "flex"}}>
<div className={styles.centerize_content}>
<h3 className={styles.heading}>
4 UAE Offices – Dubai, Sharjah, RAK
</h3>
            </div>
            </p>
          </div>

          <div style={{marginTop: 45}} className={styles.about_us_image_container}>
          <Image 
                        src={corporate_about_us_4 ?? ""}
                        width={100} 
                        height={80} 
                          style={{marginRight: 20}}
                          className={styles.image_spacing}
                        alt="Languages Spoken Logo"
                        />
          <p className={styles.ensure_protection_trust} style={{display: "flex"}}>
<div className={styles.centerize_content}>
<h3 className={styles.heading}>
17+ Languages Spoken
</h3>
            </div>
            </p>
          </div>

          <div style={{marginTop: 45}} className={styles.about_us_image_container}>
          <Image 
                        src={corporate_about_us_5 ?? ""}
                        width={100} 
                        height={80} 
                          style={{marginRight: 20, height: 70}}
                          className={styles.image_spacing}
                        alt="Diverse Team Logo"
                        />
          <p className={styles.ensure_protection_trust} style={{display: "flex"}}>
<div className={styles.centerize_content}>
<h3 className={styles.heading}>
70+ Experts in a Diverse Team
</h3>
            </div>
            </p>
          </div>

          <div style={{marginTop: 45}} className={styles.about_us_image_container}>
          <Image 
                        src={corporate_about_us_6 ?? ""}
                        width={80} 
                        height={80} 
                        style={{marginRight: 40}}
                        className={styles.image_spacing}
                        alt="Nationalities Logo"
                        />
          <p className={styles.ensure_protection_trust} style={{display: "flex"}}>
<div className={styles.centerize_content}>
<h3 className={styles.heading}>
15+ Nationalities
</h3>
            </div>
            </p>
          </div>
          </Grid>
        
        </Grid>

        </div>
       </div>
    </div>

    </div>

  );
};

export default AboutUs;