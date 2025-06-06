"use client"
import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react';
import styles from '../styles/team.module.css'
import Button from '@mui/material/Button';
import 'react-multi-carousel/lib/styles.css';
import { 
    ehab,
    lina,
    israa,
    kate
} from '@/app/untils/imgimport';
import { Grid, Paper } from "@mui/material";

const Team = ({ lang }) => {
  const scrollToHomePage = () => {
    const homePageSection = document.getElementById("home_page");
    if (homePageSection) {
      homePageSection.scrollIntoView({ behavior: "smooth" });
    }
  };
    const teamMembers = [
        {
          name: "Ehab Mohamed",
          position: "CEO - Senior Legal Consultant",
          image: ehab,
        },
        {
          name: "Lina Khudairi",
          position: "Chief Operating Officer",
          image: lina,
        },
        {
                  name: "Israa Abdulla",
                  position: "Head of Corporate",
                  image: israa,
                },
                {
                    name: "Kate Chen",
                    position: "Senior Corporate Consultant",
                    image: kate,
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
  <div className={styles.client_container} style={{ position: "relative", zIndex: 2, paddingLeft: "5%", paddingRight: "5%", paddingBottom: "3.5%" }}>
    <div style={{ display: "flex", alignItems: "center" }}>
      <p className={styles.commitment_heading}>Meet Our Attendees</p>
      <div className={styles.section_line}></div>
    </div>
<div>
<h2 className={styles.history_heading}>
With a team of highly skilled lawyers from diverse legal backgrounds, we offer a broad perspective on cross-border arbitration while ensuring tailored strategies for each case.
            </h2>
</div>

<div className={styles.teamContainer}>
        {teamMembers.map((member, index) => (
         <div key={index} className={styles.team_card_container}>
             <div key={index} className={styles.teamCard}>
            <div className={styles.imageWrapper}>
              <Image src={member.image} alt={member.name} width={300} height={300} className={styles.image_styling} />
            </div>
          </div>
          <div className={styles.memberInfo}>
          <h3 className={styles.centerize_content}>{member.name}</h3>
          <p className={styles.centerize_content}>{member.position}</p>
        </div>
         </div>
        ))}
      </div>
  </div>

  <div className={styles.btn_container}>
  <Grid container spacing={2} justifyContent="center">
    
    {/* First Button */}
    <Grid item xs={12} sm={6} md={5} lg={4}>
    <Button 
  className={styles.get_started_btn} fullWidth
  onClick={() => window.open('/webImages/paw_2025_raalc_event_calendar.pdf', '_blank')}
>
        Meet our Lawyers at PAW
      </Button>
    </Grid>

    {/* Second Button */}
    <Grid item xs={12} sm={6} md={5} lg={4}>
      <Button onClick={scrollToHomePage} className={styles.get_started_btn} fullWidth>
        Book Your Free Consultation
      </Button>
    </Grid>

  </Grid>
</div>

</div>


        </div>
    </div>

  );
};

export default Team;