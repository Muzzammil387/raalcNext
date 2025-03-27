"use client"
import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react';
import styles from '../styles/services.module.css'
import Button from '@mui/material/Button';
import 'react-multi-carousel/lib/styles.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { 
    ehab,
    abdelaziz,
    lina
} from '@/app/untils/imgimport';
import { Grid, Paper } from "@mui/material";

const Services = ({ lang }) => {
  const scrollToHomePage = () => {
    const homePageSection = document.getElementById("home_page");
    if (homePageSection) {
      homePageSection.scrollIntoView({ behavior: "smooth" });
    }
  };
    const service_content = [
        {
          heading: "Company Set-up in the UAE",
          content: "We provide expert services for setting up companies across the UAE, handling all regulatory compliance and business licensing. Our team ensures a seamless and efficient company formation process, giving you a strong foundation in the UAE market."
        },
        {
          heading: "Corporate Governance and Compliance",
          content: "Our experts offer corporate governance and compliance solutions to optimize business operations and ensure regulatory adherence. Our services help businesses stay compliant with local and international laws while enhancing credibility and operational efficiency."
        },
        {
          heading: "Corporate Restructuring Services",
          content: "We offer expert restructuring services to help businesses navigate financial, operational, or organizational changes. Our solutions are designed to ensure compliance, minimize disruption, and enhance long-term stability."
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
    <div style={{ display: "flex", alignItems: "center" }}>
      <p className={styles.commitment_heading}>Business Formation and Governance</p>
      <div className={styles.section_line}></div>
    </div>
<div>
<h2 className={styles.history_heading}>
Comprehensive legal solutions to help businesses establish, govern, and optimize their operations in the UAE.
            </h2>
</div>

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

  <div className={styles.section_container}>
      <div
      className={styles.section_text}>
        Start your business journey in the UAE with expert legal guidance
      </div>

      <div className={styles.section_line}></div>
      <Button
        onClick={scrollToHomePage}
        className={styles.get_started_btn}>
        GET STARTED
      </Button>
    </div>

</div>

        </div>

    </div>

  );
};

export default Services;