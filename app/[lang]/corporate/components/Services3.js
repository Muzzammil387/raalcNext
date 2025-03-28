"use client"
import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react';
import styles from '../styles/services_three.module.css'
import Button from '@mui/material/Button';
import 'react-multi-carousel/lib/styles.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
          heading: "Trusts, Foundations, and Estate Planning",
          content: "We provide tailored estate planning services, including trusts and foundations, to protect assets and ensure smooth wealth transfer. Our solutions are designed for high-net-worth individuals and businesses, supporting long-term succession planning."
        },
        {
          heading: "Intellectual Property (IP) Services",
          content: "Protect your brand and innovations with RAALC Law Firm’s IP services, including patent and trademark registration and enforcement. We provide tailored strategies to safeguard your intellectual assets, maximizing their value and protecting your market position."
        },
        {
          heading: "Maritime and Shipping Legal Services",
          content: "We provide specialized legal services including regulatory compliance, contract negotiation, and dispute resolution. We help businesses manage legal complexities in shipping and maritime operations, ensuring seamless transactions and compliance."
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
      <p className={styles.commitment_heading}>Asset Protection and Industry-Specific Services</p>
      <div className={styles.section_line}></div>
    </div>
<div>
<h2 className={styles.history_heading}>
Tailored services to safeguard your assets and ensure compliance in specialized industries like maritime and IP.
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

export default Services3;