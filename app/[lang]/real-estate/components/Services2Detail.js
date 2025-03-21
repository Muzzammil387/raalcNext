"use client"
import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react';
import styles from '../styles/services_two_detail.module.css'
import Button from '@mui/material/Button';
import 'react-multi-carousel/lib/styles.css';
import { 
  arrow_icon_services
} from '@/app/untils/imgimport';
import { Grid, Paper, Box } from "@mui/material";

const Services2Detail = ({ lang }) => {
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
          },
          {
            heading: "Delayed Handover Disputes & Investor Protection",
            content: "When property handovers are delayed, your investment is at risk. RAALC’s legal team holds developers accountable, secures compensation, and negotiates favorable resolutions to minimize financial losses and ensure fair treatment."
          },
          {
            heading: "Real Estate Compensation & Lawsuits",
            content: "When property transactions go wrong, whether due to contract breaches, project failures, or financial losses, we’re committed to recovering what’s rightfully yours. Our expert team navigates legal complexities to secure justice and ensure fair compensation."
          },
          {
            heading: "Property Guardianship",
            content: "Managing real estate owned by minors or dependents requires careful attention. We provide expert legal support to ensure compliance with UAE laws and protect the interests of young or vulnerable property owners, securing their future."
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

  <Grid container spacing={0} style={{marginTop: 25}}>
      {service_content.map((member, index) => (
        <React.Fragment key={index}>
          {/* Left Column: Heading */}
          <Grid item xs={12} sm={4} md={4}>
            <Box>
              <div className={styles.team_card_container}>
                <div className={styles.memberInfo}>
                  <h3 className={`${styles.centerize_content} ${styles.border_heading}`}>
                    {member.heading}
                  </h3>
                  <Image 
                  src={arrow_icon_services ?? ""} 
                  width={80} 
                  height={80} 
                  alt=""
                  />
                </div>
              </div>
            </Box>
          </Grid>

          {/* Right Column: Description */}
          <Grid item xs={12} sm={8} md={8}>
            <Box className={styles.memberInfoContent}>
              <p className={styles.centerize_content}>{member.content}</p>
            </Box>
          </Grid>
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