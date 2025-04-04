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
          heading: "Real Estate Transactions & Family Office Advisory",
          content: "We assist family offices and private investors in high-value real estate transactions, contract negotiations, due diligence, and dispute resolution. Our expertise covers acquisitions, sales, leasing, and development while ensuring seamless legal compliance."
        },
        {
          heading: "Investment Structuring, Trusts & Asset Protection",
          content: "We provide legal guidance on structuring real estate investments through trusts, foundations, and asset protection solutions. Our team ensures full compliance while mitigating risks. We help family offices create tailored frameworks for long-term wealth preservation."
        },
        {
          heading: "Trusts & Private Wealth Management",
          content: "WWe assist in establishing trusts, foundations, and private wealth structures to protect real estate assets and ensure smooth succession planning. Our legal strategies focus on secure property ownership transitions, tax compliance, and long-term asset protection."
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
      <p className={styles.commitment_heading}>Comprehensive Real Estate Legal Services</p>
      <div className={styles.section_line}></div>
    </div>
<div>
<h2 className={styles.history_heading}>
Offering professional support through every step of property dealings in the UAE.
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

export default Services;