"use client"
import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react';
import styles from '../styles/services_two_detail.module.css'
import Button from '@mui/material/Button';
import 'react-multi-carousel/lib/styles.css';
import { 
    ehab,
    abdelaziz,
    lina
} from '@/app/untils/imgimport';
import { Grid, Paper } from "@mui/material";

const Services2Detail = ({ lang }) => {
    const scrollToHomePage = () => {
        const homePageSection = document.getElementById("home_page");
        if (homePageSection) {
          homePageSection.scrollIntoView({ behavior: "smooth" });
        }
      };
    const service_content = [
        {
          heading: "Delayed Handover Cases",
          content: "We fight for the compensation and solutions that safeguard your investment. Our dedicated team ensures you receive fair treatment and timely results."
        },
        {
          heading: "Real Estate Management Company Disputes",
          content: "RAALC safeguards your rights by addressing breaches of contract and mismanagement claims, ensuring compliance with UAE real estate laws."
        },
        {
            heading: "Real Estate Compensation & Lawsuits",
            content: "Whether due to contract breaches, project failures, or financial losses, we’re committed to recovering what’s rightfully yours."
          },
          {
            heading: "Judicial Notices",
            content: "RAALC assists in drafting and issuing judicial notices, including eviction notices for personal use, sale, or maintenance, as well as rent default notices."
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
      BOOK A CONSULTATION
      </Button>
    </div>

  </div>
</div>


        </div>
    </div>

  );
};

export default Services2Detail;