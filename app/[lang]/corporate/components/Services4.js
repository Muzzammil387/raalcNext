"use client"
import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react';
import styles from '../styles/services_four.module.css'
import Button from '@mui/material/Button';
import 'react-multi-carousel/lib/styles.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { 
    ehab,
    abdelaziz,
    lina
} from '@/app/untils/imgimport';
import { Grid, Paper } from "@mui/material";

const Services4 = ({ lang }) => {
  const scrollToHomePage = () => {
    const homePageSection = document.getElementById("home_page");
    if (homePageSection) {
      homePageSection.scrollIntoView({ behavior: "smooth" });
    }
  };
    const service_content = [
        {
          heading: "Oil & Gas Legal Advisory",
          content: "Our firm provides corporate clients with strategic legal counsel on oil and gas ventures, covering contract structuring, risk management, and regulatory compliance. We ensure legal security in mergers, acquisitions, and investment transactions."
        },
        {
          heading: "Escrow Services for Corporate Transactions",
          content: "We provide secure escrow solutions for corporate transactions, safeguarding funds and documents in mergers, acquisitions, and joint ventures.Our services ensure financialtransparency and mitigate risks in high-value deals."
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

  <div className={styles.section_container}>
      <div
      className={styles.section_text}>
       Secure your assets and intellectual property with our expert legal services.
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

export default Services4;