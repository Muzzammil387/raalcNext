"use client"
import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react';
import styles from '../styles/team_members.module.css'
import Button from '@mui/material/Button';
import 'react-multi-carousel/lib/styles.css';
import { 
    ehab,
    lina,
    israa,
    kate
} from '@/app/untils/imgimport';
import { Grid, Paper } from "@mui/material";

const TeamMembers = ({ lang }) => {
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
            position: "Corporate Consultant",
            image: kate,
          },
      ];
  return (
    <div>
        <div
        >
        
      <div style={{display: "flex", alignItems: "center"}}>
        <div>
        <div style={{ position: "relative", zIndex: 2, paddingLeft: "5%", paddingRight: "5%", paddingBottom: "3.5%" }}>
      <p className={styles.commitment_heading}>Meet Our Attendees</p>
      <div className={styles.section_line}></div>
    </div>
        </div>
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
</div>


        </div>
    </div>

  );
};

export default TeamMembers;