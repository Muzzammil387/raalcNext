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
          heading: "Mergers and Acquisitions (M&A) Advisory",
          content: "RAALC offers strategic M&A advisory services, including due diligence and negotiations. We help you optimize value, minimize risks, and navigate complex transactions, ensuring smooth integrations and acquisitions."
        },
        {
          heading: "Due Diligence Services",
          content: "Our due diligence services assess legal and operational risks in business transactions. We provide thorough analysis and actionable insights, ensuring that your decisions are fully informed and strategically sound."
        },
        {
          heading: "Contract Drafting and Legal Documentation",
          content: "Our legal experts draft and review commercial contracts, ensuring they are legally sound and aligned with your business goals. We minimize risks and protect your interests in every agreement, ensuring clarity and enforceability."
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
      <p className={styles.commitment_heading}>Transactions, Risk Management, and Documentation</p>
      <div className={styles.section_line}></div>
    </div>
<div>
<h2 className={styles.history_heading}>
Strategic advisory and documentation services to mitigate risks and ensure compliance in business transactions.
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
       Protect your business with expert M&A advice and contract drafting.
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

export default Services2;