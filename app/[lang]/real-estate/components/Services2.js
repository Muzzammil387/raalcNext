"use client"
import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react';
import styles from '../styles/services_two.module.css'
import Button from '@mui/material/Button';
import 'react-multi-carousel/lib/styles.css';
import { 
    arrow_icon_services
} from '@/app/untils/imgimport';
import { Grid, Paper, Box } from "@mui/material";

const Services2 = ({ lang }) => {
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
  <div className={styles.client_container} style={{ position: "relative", zIndex: 2, paddingLeft: "5%", paddingRight: "5%", paddingBottom: "4%" }}>
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

export default Services2;