"use client"
import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react';
import styles from '../styles/services_two.module.css'
import Button from '@mui/material/Button';
import 'react-multi-carousel/lib/styles.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { 
    ehab,
    abdelaziz,
    lina
} from '@/app/untils/imgimport';
import { Grid, Paper } from "@mui/material";

const Services2 = ({ lang }) => {
  const scrollToHomePage = () => {
    const homePageSection = document.getElementById("home_page");
    if (homePageSection) {
      homePageSection.scrollIntoView({ behavior: "smooth" });
    }
  };
    const service_content = [
        {
          heading: "Inheritance & Property Management",
          content: "We provide legal guidance on inheritance and property management, ensuring smooth transfers and compliance with succession laws. Our services include estate planning, asset protection, wills, trust, heirship certificate and seamless property transition for long-term value preservation."
        },
        {
          heading: "Legal Support for Developers & Contractors",
          content: "We offer legal services to real estate developers and contractors, ensuring compliance with zoning laws and construction agreements. Our expertise includes contract negotiation, risk management, dispute resolution, and securing permits for smooth project execution."
        },
        {
          heading: "Legal Assistance for Property Management",
          content: "We provide legal support to property management companies in navigating lease agreements, tenant disputes, regulatory compliance, and risk management. Our services ensure efficient property administration and legal protection for property owners and management firms."
        },
      ];
  return (
    <div>
        <div
        >
        
      <div style={{display: "flex", alignItems: "center"}}>
      </div>

      <div
  className={styles.background}
>
  {/* Dark Overlay */}
  <div
   className={styles.overlay}
  ></div>

  {/* Content inside */}
  <div className={styles.client_container}>

<div className={styles.teamContainer}>
        {service_content.map((member, index) => (
         <div key={index} className={styles.team_card_container}>
          <div className={styles.memberInfo}>
          <h3 className={`${styles.centerize_content} ${styles.border_heading}`}>
  {member.heading}
</h3>
<p className={styles.centerize_content} style={{ paddingTop: 15 }}>
  {member.content}
</p>

        </div>
         </div>
        ))}
      </div>

  </div>

    {/* Call to Action Section */}
    <div className={styles.section_container}>
      <span className={styles.section_text}>Speak to a Real Estate lawyer now</span>
      <div className={styles.section_line}></div>
      <Button onClick={scrollToHomePage} className={styles.get_started_btn}>
      GET STARTED
      </Button>
    </div>

</div>

        </div>

    </div>

  );
};

export default Services2;