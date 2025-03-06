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
    abdelaziz,
    lina
} from '@/app/untils/imgimport';
import { Grid, Paper } from "@mui/material";

const Team = ({ lang }) => {
    const teamMembers = [
        {
          name: "Ehab Mohamed",
          position: "CEO - Senior Legal Consultant",
          image: ehab,
        },
        {
          name: "Abdelaziz Alkhamiri",
          position: "Advocate",
          image: abdelaziz,
        },
        {
          name: "Lina Khudairi",
          position: "Chief Operating Officer",
          image: lina,
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
      <p className={styles.commitment_heading}>Our Team: Where Diversity Fuels Excellence</p>
      <div className={styles.section_line}></div>
    </div>
<div>
<h2 className={styles.history_heading}>
            Founded in 2013, RAALC has grown into a powerhouse of legal excellence, serving clients across the UAE with a
            commitment to innovation and strategic legal solutions.
            </h2>
</div>

<div className={styles.teamContainer}>
        {teamMembers.map((member, index) => (
         <div className={styles.team_card_container}>
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
</div>


        </div>
    </div>

  );
};

export default Team;