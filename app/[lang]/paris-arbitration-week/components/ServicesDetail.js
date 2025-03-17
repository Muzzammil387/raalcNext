"use client"
import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react';
import styles from '../styles/services_detail.module.css'
import Button from '@mui/material/Button';
import 'react-multi-carousel/lib/styles.css';
import { 
    ehab,
    abdelaziz,
    lina
} from '@/app/untils/imgimport';
import { Grid, Paper } from "@mui/material";

const ServicesDetail = ({ lang }) => {
    const scrollToHomePage = () => {
        const homePageSection = document.getElementById("home_page");
        if (homePageSection) {
          homePageSection.scrollIntoView({ behavior: "smooth" });
        }
      };
    const service_content = [
        {
          heading: "Mediation in Property Transfers",
          content: "Our mediation for property transfer services guide you through complex negotiations, ensuring fair, legally sound resolutions while safeguarding your interests."
        },
        {
          heading: "Real Estate Escrow Services",
          content: "Our escrow services securely manage funds, ensuring payments are released only when all conditions are met, protecting both buyers and sellers. With RAALC, every transaction is secure."
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
  <div className={styles.client_container} style={{ position: "relative", zIndex: 2, paddingLeft: "5%", paddingRight: "5%", paddingBottom: "2.5%" }}>
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

  {/* Call to Action Section */}
  <div className={styles.section_container}>
      <span className={styles.section_text}>Book Your Consultation Now</span>
      <div className={styles.section_line}></div>
      <Button onClick={scrollToHomePage} className={styles.get_started_btn}>
      BOOK A CONSULATION
      </Button>
    </div>

  </div>
</div>


        </div>
    </div>

  );
};

export default ServicesDetail;