"use client"
import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react';
import styles from '../styles/services.module.css'
import Button from '@mui/material/Button';
import 'react-multi-carousel/lib/styles.css';
import { 
   arrow_icon_services
} from '@/app/untils/imgimport';
import { Grid, Paper, Box } from "@mui/material";

const Services = ({ lang }) => {
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
          heading: "Trusts & Private Wealth Management for Real Estate Holdings",
          content: "We assist in establishing trusts, foundations, and private wealth structures to protect real estate assets and ensure smooth succession planning. Our legal strategies focus on secure property ownership transitions, tax compliance, and long-term asset protection."
        },
        {
          heading: "Inheritance & Property Management",
          content: "We provide legal guidance on inheritance and property management, ensuring smooth transfers and compliance with succession laws. Our services include estate planning, asset protection, wills, trust, heirship certificate and seamless property transition for long-term value preservation."
        },
        {
          heading: "Legal Support for Developers & Contractors",
          content: "We offer legal services to real estate developers and contractors, ensuring compliance with zoning laws and construction agreements. Our expertise includes contract negotiation, risk management, dispute resolution, and securing permits for smooth project execution."
        },
        {
          heading: "Legal Assistance for Property Management Companies",
          content: "We provide legal support to property management companies in navigating lease agreements, tenant disputes, regulatory compliance, and risk management. Our services ensure efficient property administration and legal protection for property owners and management firms."
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
    <div style={{ display: "flex", alignItems: "center" }}>
      <p className={styles.commitment_heading}>COMPREHENSIVE REAL ESTATE LEGAL SERVICES</p>
      <div className={styles.section_line}></div>
    </div>
<div>
<h2 className={styles.history_heading}>
RAALC specializes in a range of services, offering professional support through every step of property dealings in the UAE.
            </h2>
</div>

{/* New Card */}
<Grid container spacing={0} style={{marginTop: 25}}>
      {service_content.map((member, index) => (
        <React.Fragment key={index}>
          <span className={styles.card_container}>
          <Grid item xs={12} sm={4} md={4}>
            <Box style={{height: "100%"}}>
              <div className={styles.team_card_container}>
                <div className={styles.memberInfo}>
                  <h3 className={`${styles.centerize_content} ${styles.border_heading}`}>
                    {member.heading}
                  </h3>
                  <Image 
                  src={arrow_icon_services ?? ""} 
                  width={80} 
                  height={80} 
                  className={styles.arrow_styling}
                  alt=""
                  />
                </div>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={8} md={8}>
            <Box className={styles.memberInfoContent}>
              <p className={styles.centerize_content}>{member.content}</p>
            </Box>
          </Grid>
          </span>
        </React.Fragment>
      ))}
    </Grid>

{/* <div className={styles.teamContainer}>
        {service_content.map((member, index) => (
         <div key={index} className={styles.team_card_container}>
          <div className={styles.memberInfo}>
          <h3 className={`${styles.centerize_content} ${styles.border_heading}`}>
  {member.heading}
</h3>

        </div>
        <div className={styles.memberInfoContent}>
<p className={styles.centerize_content}>
  {member.content}
</p>
</div>
         </div>
        ))}
      </div> */}

      {/* New Card End */}

{/* <div className={styles.teamContainer}>
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
      </div> */}

  </div>
</div>


        </div>
    </div>

  );
};

export default Services;