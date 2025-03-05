"use client"
import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react';
import styles from '../styles/about_us.module.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { 
    about_us
} from '@/app/untils/imgimport';
import { Grid, Paper } from "@mui/material";
import ForwardIcon from '@mui/icons-material/Forward';
import HubSpotForm from './HubSpotForm';

const AboutUs = ({ lang }) => {
    const scrollToHomePage = () => {
        const homePageSection = document.getElementById("home_page");
        if (homePageSection) {
          homePageSection.scrollIntoView({ behavior: "smooth" });
        }
      };
  return (
    <div>
        <div className={styles.about_us_image_container}>
  <Image
    src={about_us ?? ""} 
    width={500} 
    height={500} 
    className={styles.about_us_image}
    alt="About Us Page Image" 
  />

  <div 
    className={styles.section_container} 
  >
    <span className={styles.section_text}>Speak to a Real Estate Lawyer Now</span>
    <div className={styles.section_line}></div>
    <Button onClick={scrollToHomePage} className={styles.get_started_btn}>
      GET STARTED
    </Button>
  </div>
</div>
    </div>

  );
};

export default AboutUs;