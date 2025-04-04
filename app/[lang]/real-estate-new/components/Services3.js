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
          heading: "Property Sale, Purchase & Conveyancing",
          content: "We provide legal support for property transactions, including off-plan, primary, and secondary market deals. Our services include drafting and reviewing Sale and Purchase Agreements (including Form F), conducting due diligence, and managing the conveyancing process for secure transfers."
        },
        {
          heading: "Legal Representation for Property Sales & Purchases",
          content: "We provide legally binding powers of attorney, allowing us to represent you in property transactions with confidence and compliance. Whether you're unavailable or abroad, we ensure your interests are protected, and your deals proceed seamlessly."
        },
        {
          heading: "Real Estate Escrow Services",
          content: "A property deal is built on trust. Our escrow services securely manage funds, ensuring payments are released only when all conditions are met, protecting both buyers and sellers. With escrow account in real estate, every transaction is transparent and secure."
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

export default Services3;