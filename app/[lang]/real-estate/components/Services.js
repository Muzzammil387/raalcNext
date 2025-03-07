"use client"
import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react';
import styles from '../styles/services.module.css'
import Button from '@mui/material/Button';
import 'react-multi-carousel/lib/styles.css';
import { 
    ehab,
    abdelaziz,
    lina
} from '@/app/untils/imgimport';
import { Grid, Paper } from "@mui/material";

const Services = ({ lang }) => {
    const service_content = [
        {
          heading: "Sale and Purchase Agreements & Form F Services:",
          content: "At RAALC, we ensure your journey is legally secure by expertly drafting, reviewing, and vetting Sale and Purchase Agreements."
        },
        {
          heading: "Property Conveyancing:",
          content: "Whether buying or selling, our conveyancing solicitors handle contracts, due diligence, and compliance, ensuring a seamless transaction from start to finish."
        },
        {
          heading: "Power of Attorney for Sale & Purchase:",
          content: "Whether you're overseas or unavailable, we craft legally binding powers of attorney, ensuring your trusted representative can act with clarity and authority."
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
  <div className={styles.client_container} style={{ position: "relative", zIndex: 2, paddingLeft: "5%", paddingRight: "5%", paddingBottom: "3%" }}>
    <div style={{ display: "flex", alignItems: "center" }}>
      <p className={styles.commitment_heading}>COMPREHENSIVE REAL ESTATE LEGAL SERVICES</p>
      <div className={styles.section_line}></div>
    </div>
    <p className={styles.commitment_sub_heading}>1) Property Transaction Services: </p>
<div>
<h2 className={styles.history_heading}>
Real estate and conveyancing require expert legal guidance to ensure smooth processes and secure investments.
RAALC specializes in a range of services, offering professional support through every step of property dealings in the UAE.
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
</div>


        </div>
    </div>

  );
};

export default Services;