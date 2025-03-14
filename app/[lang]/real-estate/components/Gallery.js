"use client"
import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react';
import styles from '../styles/gallery.module.css'
import Button from '@mui/material/Button';
import 'react-multi-carousel/lib/styles.css';
import { 
    ehab,
    abdelaziz,
    lina,
    gallery_1,
    gallery_2,
    gallery_3,
    gallery_4,
    gallery_5,
    gallery_6,
    gallery_7,
    gallery_8
} from '@/app/untils/imgimport';
import { Grid, Paper } from "@mui/material";

const Gallery = ({ lang }) => {
    const teamMembers = [
        {
          image: gallery_1,
        },
        {
            image: gallery_2,
          },
          {
            image: gallery_3,
          },
          {
            image: gallery_4,
          },
          {
            image: gallery_5,
          },
          {
            image: gallery_6,
          },
          {
            image: gallery_7,
          },
          {
            image: gallery_8,
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

  {/* Content inside */}
  <div className={styles.client_container} style={{ position: "relative", zIndex: 2, paddingLeft: "5%", paddingRight: "5%", paddingBottom: "3.5%" }}>
    <div style={{ display: "flex", alignItems: "center" }}>
      <p className={styles.commitment_heading}>Our Gallery: Bridging Borders, Building Connections</p>
      <div className={styles.section_line}></div>
    </div>
<div>
<h2 className={styles.history_heading}>
From Dubai to international legal hubs, our journey is marked by active participation in key events. Each moment reflects our dedication to innovation, collaboration, and shaping the future of law.
            </h2>
</div>

<div className={styles.teamContainer}>
        {teamMembers.map((member, index) => (
         <div key={index} className={styles.team_card_container}>
             {/* <div key={index} className={styles.teamCard}> */}
            <div className={styles.imageWrapper} key={index}>
              <Image src={member.image} alt={member.name} width={300} height={300} className={styles.image_styling} />
            </div>
          {/* </div> */}
         </div>
        ))}
      </div>


  </div>
</div>


        </div>
    </div>

  );
};

export default Gallery;