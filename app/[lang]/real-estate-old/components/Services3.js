"use client"
import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react';
import styles from '../styles/services_three.module.css'
import Button from '@mui/material/Button';
import 'react-multi-carousel/lib/styles.css';
import { 
    ehab,
    abdelaziz,
    lina
} from '@/app/untils/imgimport';
import { Grid, Paper } from "@mui/material";

const Services3 = ({ lang }) => {
    const scrollToHomePage = () => {
        const homePageSection = document.getElementById("home_page");
        if (homePageSection) {
          homePageSection.scrollIntoView({ behavior: "smooth" });
        }
      };
    const service_content = [
        {
          heading: "Off-Plan Property Legal Support",
          content: "RAALC secures your investment by reviewing contracts, overseeing escrow accounts, and shielding you from delays or legal disputes."
        },
        {
          heading: "Inheritance Property Transfers",
          content: "At RAALC, we guide families through every step, ensuring rightful heirs receive their assets efficiently and without complications."
        },
        {
          heading: "Property Guardianship",
          content: "We offer expert legal support to ensure compliance with UAE laws and protect the interests of the young or vulnerable property owners."
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
  <div className={styles.client_container} style={{ position: "relative", zIndex: 2, paddingLeft: "5%", paddingRight: "5%", paddingBottom: "4%" }}>
    <p className={styles.commitment_sub_heading}>3) Specialized Real Estate Services: </p>
<div>
<h2 className={styles.history_heading}>
We ensure your investments are safeguarded and navigate specialized issues with expert guidance and protection.
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

       {/* Call to Action Section */}
  <div className={styles.section_container}>
      <span className={styles.section_text}>Book Your Consultation Now</span>
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

export default Services3;