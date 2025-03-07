"use client"
import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react';
import styles from '../styles/services_two.module.css'
import Button from '@mui/material/Button';
import 'react-multi-carousel/lib/styles.css';
import { 
    ehab,
    abdelaziz,
    lina
} from '@/app/untils/imgimport';
import { Grid, Paper } from "@mui/material";

const Services2 = ({ lang }) => {
    const service_content = [
        {
          heading: "Real Estate Disputes",
          content: "Ownership conflicts, contract breaches, and property rights disputes can disrupt your life and investments. RAALC’s real estate dispute lawyer is here to turn legal challenges into solutions."
        },
        {
          heading: "Rental Disputes",
          content: "RAALC’s rental dispute lawyer provides swift, effective legal solutions for both landlords and tenants, ensuring compliance with UAE tenancy laws and protecting your interests."
        },
        {
          heading: "Jointly Owned Property Disputes",
          content: "Whether it’s a disagreement over property management or a need to dissolve joint ownership, RAALC helps co-owners navigate disputes and reach fair, legally sound resolutions."
        },
        {
            heading: "Cancelled Real Estate Projects",
            content: "We help investors recover their funds by handling legal claims and providing strong representation to ensure you get what you’re owed."
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
  <div className={styles.client_container} style={{ position: "relative", zIndex: 2, paddingLeft: "5%", paddingRight: "5%", paddingBottom: "4%" }}>
    <p className={styles.commitment_sub_heading}>2) Dispute Resolution Services: </p>
<div>
<h2 className={styles.history_heading}>
RFrom ownership conflicts to tenancy issues, we offer expert legal representation to resolve a variety of real estate disputes efficiently and effectively.
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

export default Services2;