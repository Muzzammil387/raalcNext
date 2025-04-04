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
          heading: "Real Estate & Rental Dispute Resolution",
          content: "Conflicts over ownership, rental agreements, or property rights can jeopardize investments. RAALC offers strategic legal solutions for landlords, tenants, buyers, and sellers, ensuring compliance with UAE property laws through negotiation, mediation, or litigation."
        },
        {
          heading: "Jointly Owned Property Disputes",
          content: "Co-ownership can bring complications. Whether it’s a disagreement over property management or a need to dissolve joint ownership, RAALC helps co-owners navigate disputes and reach fair, legally sound resolutions in line with UAE laws."
        },
        {
          heading: "Cancelled Real Estate Projects",
          content: "A cancelled project can feel like a setback, but RAALC is here to turn it around. We help investors recover their funds by handling legal claims and providing strong representation to ensure you get what you’re owed."
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

export default Services4;