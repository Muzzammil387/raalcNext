"use client"
import React from 'react'
import Image from 'next/image'
import styles from '../styles/time_table.module.css'
import Button from '@mui/material/Button';
import { 
    paris_team,
    raw_logo,
    paris_home
} from '@/app/untils/imgimport';
import { Grid, Paper } from "@mui/material";
import HubSpotForm from './HubSpotForm';
import EventSchedule from './EventSchedule';

const TimeTable = ({ lang }) => {

  const scrollToHomePage = () => {
    const homePageSection = document.getElementById("home_page");
    if (homePageSection) {
      homePageSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>

    <div>
        <div className={styles.history_container}>
        <div
   className={styles.overlay}
  ></div>

<div className={styles.time_table_container}>
<div style={{ display: "flex", alignItems: "center" }}>
      <p className={styles.commitment_heading}>Meet us at the <span style={{fontStyle: "italic"}}>PAW</span> official Events</p>
      <div className={styles.section_line}></div>
    </div>
    <div style={{marginTop: "6%"}}>
      <EventSchedule/>
    </div>
    <div style={{ textAlign: "right", marginTop: "auto", marginBottom: 60, marginTop: "6%" }}>
  <Button  onClick={scrollToHomePage} className={styles.get_started_btn}>
        Book Your Free Consultation Now!
      </Button>
  </div>
</div>

        </div>
    </div>

    </div>

  );
};

export default TimeTable;