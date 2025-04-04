"use client"
import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react';
import styles from '../styles/services_five.module.css'
import Button from '@mui/material/Button';
import 'react-multi-carousel/lib/styles.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { 
    ehab,
    abdelaziz,
    lina
} from '@/app/untils/imgimport';
import { Grid, Paper } from "@mui/material";

const Services5 = ({ lang }) => {
  const scrollToHomePage = () => {
    const homePageSection = document.getElementById("home_page");
    if (homePageSection) {
      homePageSection.scrollIntoView({ behavior: "smooth" });
    }
  };
    const service_content = [
        {
          heading: "Delayed Handover Disputes & Investor Protection",
          content: "When property handovers are delayed, your investment is at risk. RAALC’s legal team holds developers accountable, secures compensation, and negotiates favorable resolutions to minimize financial losses and ensure fair treatment."
        },
        {
          heading: "Real Estate Compensation & Lawsuits",
          content: "When property transactions go wrong, whether due to contract breaches, project failures, or financial losses, we’re committed to recovering what’s rightfully yours. Our expert team navigates legal complexities to secure justice and ensure fair compensation."
        },
        {
          heading: "Property Guardianship",
          content: "Managing real estate owned by minors or dependents requires careful attention. We provide expert legal support to ensure compliance with UAE laws and protect the interests of young or vulnerable property owners, securing their future."
        }
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

export default Services5;