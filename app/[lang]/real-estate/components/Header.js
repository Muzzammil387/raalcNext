"use client"
import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react';
import styles from '../styles/header.module.css'
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
    raalc_white_logo, 
    white_whatsapp_icon, 
    home_page_bg_image, 
    right_arrow,
    tridition,
    trust,
    history_main_image
} from '@/app/untils/imgimport';
import { Grid, Paper } from "@mui/material";
import ForwardIcon from '@mui/icons-material/Forward';
import HubSpotForm from './HubSpotForm';


const pages = [
    { label: 'Home', link: '/real-estate' },
    { label: 'About Us', link: '/real-estate' },
    { label: 'Services', link: '/real-estate' },
    { label: 'Our Team', link: '/real-estate' },
    { label: 'Gallery', link: '/real-estate' },
    { label: 'Clients', link: '/real-estate' },
    { label: 'Contact Us', link: '/real-estate' }
  ];

const Header = ({ lang }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const scrollToHomePage = () => {
    const homePageSection = document.getElementById("home_page");
    if (homePageSection) {
      homePageSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
        <AppBar position="static" className={styles.header_styling}>
      <Container maxWidth="xl" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Toolbar disableGutters className={styles.toolbar_styling}>
          {/* Desktop Layout */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", flexGrow: 1 }}>
            {/* Logo on Left Most */}
            <Link href="/real-estate" passHref>
  <Image 
    src={raalc_white_logo ?? ""} 
    width={220} 
    height={220} 
    alt="RAALC White Logo" 
   className={styles.white_logo_styling}
  />
</Link>
            {/* <Image src={raalc_white_logo ?? ""} width={220} height={220} alt="RAALC White Logo" style={{ marginRight: "20px" }} /> */}
            {/* Menu */}
            {pages.map((page) => (
  <Link key={page.label} href={page.link} passHref>
    <Button
      className={styles.navbar_styling}
      sx={{ my: 2, color: "white", textTransform: "none", fontSize: 24, marginRight: 3 }}
    >
      {page.label}
    </Button>
  </Link>
))}

            {/* {pages.map((page) => (
        <Button
          key={page.label}
          onClick={() => router.push(page.link)}
          className={styles.navbar_styling}
          sx={{ my: 2, color: "white", textTransform: "none", fontSize: 24, marginRight: 3 }}
        >
          {page.label}
        </Button>
      ))} */}
            {/* Contact Number */}
            {/* Yellow Border Divider Before WhatsApp Icon */}
            <Box sx={{ borderRight: '5px solid #dab35c', height: "7.5rem", display: { xs: "none", md: "block" }, marginLeft: "20px" }}></Box>
            <Box 
            sx={{ marginLeft: "20px", display: { xs: "none", md: "block" }, cursor: "pointer" }}
            onClick={() => window.open('https://wa.me/97145693370', '_blank')}
            >
              <Image src={white_whatsapp_icon ?? ""} width={40} height={40} alt="WhatsApp Icon" />
            </Box>
            <Typography className={styles.navbar_styling} onClick={() => window.open('https://wa.me/97145693370', '_blank')} >+97145693370</Typography>
          </Box>
          
          {/* Mobile Layout */}
          <Box sx={{ display: { xs: "flex", md: "none" }, width: "100%", alignItems: "center", justifyContent: "space-between" }}>
            {/* Menu Icon on Left */}
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              className={styles.mobile_navbar}
              sx={{ display: { xs: "block", md: "none", width: "50vw" } }}
            >
             {pages.map((page) => (
  <MenuItem key={page.label} onClick={handleCloseNavMenu}>
    <Typography textAlign="center">{page.label}</Typography>
  </MenuItem>
))}
            </Menu>
            {/* Logo in Center */}
            <Link href="/real-estate" passHref>
  <Image 
    src={raalc_white_logo ?? ""} 
    width={200} 
    height={200} 
    alt="RAALC White Logo" 
    style={{ margin: "0 auto" }}
  />
</Link>
            {/* <Image src={raalc_white_logo ?? ""} width={200} height={200} alt="RAALC White Logo" style={{ margin: "0 auto" }} /> */}
            {/* WhatsApp Icon & Contact Number on Right */}
            <Box 
            sx={{ display: "flex", alignItems: "center", gap: "10px", marginRight: "10px", marginLeft: "10px" }}
            onClick={() => window.open('https://wa.me/97145693370', '_blank')}>
              <Image src={white_whatsapp_icon ?? ""} width={40} height={40} alt="WhatsApp Icon" />
              <Typography sx={{ color: "white", fontSize: 20 }}></Typography>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <div id='home_page'>
    <div className={styles.background_image_style}>
      {/* Background Image */}
      <div
        style={{
          backgroundImage: "url('/webImages/landing_page/home_page_bg_image.png')",
          backgroundSize: "cover",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
        }}
      />

      {/* Dark Overlay (Makes background darker) */}
      <div
        className={styles.overlay_styling}
      />

      {/* Content (Grid) */}
      <div className={styles.left_grid}>
        <Grid container spacing={2} style={{marginLeft: "4%", marginRight: "4%"}}>
          <Grid item xs={12} md={7}>
           <p style={{color: "#ffffff"}}>
           <span className={styles.welcome_to_raalc}>Welcome to RAALC Law Firm</span> — <span className={styles.legal_experts}>Real Estate Legal Experts</span>
           </p>
           <div style={{lineHeight: "60px", marginTop: 20}}>
           <p className={styles.your_search_for}>
            YOUR SEARCH FOR
           </p>
           <p className={styles.real_estate_lawyer}>
            “BEST REAL ESTATE LAWYER”</p>
            <p className={styles.your_search_for}>
            ENDS HERE.</p>
           </div>
          
            <p className={styles.what_can_we_do}>
            WHAT CAN WE DO?</p>

            <p className={styles.transaction_services}>
           <span>Property Transaction Services</span>  <span><ForwardIcon style={{ fontSize: 50 }} /></span>
           </p>

           <div>
            <p className={styles.ensure_protection}>
            Ensure the protection of your property and investments with expert legal support. We handle real estate challenges, giving you peace of mind. Book a consultation today!
            </p>
          </div>

          </Grid>

          {/* Right Column (6 Columns) */}
          <Grid item xs={12} md={5}>
            <div className={styles.form_container}>
                <p className={styles.form_heading}>
                Speak to a Real Estate Lawyer Now
                </p>
            <HubSpotForm />
            <p className={styles.form_footer}>
            Your information is 100% secure & confidential.
            </p>
            </div>
          </Grid>
        
        </Grid>
      </div>
    </div>
    </div>

    <div>
        <div className={styles.history_container}>
            <h2 className={styles.history_heading}>
            Founded in 2013, RAALC has grown into a powerhouse of legal excellence, serving clients across the UAE with a
            commitment to innovation and strategic legal solutions.
            </h2>
            <Grid container spacing={0} style={{display: "flex", alignItems: "center"}}>
          <Grid item xs={12} md={5}>
          <div className={styles.history_main_image_container}>
                <Image 
            src={history_main_image ?? ""} 
            width={1000} 
            height={1000} 
            style={{height: "100%"}}
            alt="About Us Page Main Image" 
            />
                </div>
          </Grid>

          <Grid item xs={12} md={7} className={styles.about_us_content}>
          <div style={{marginTop: 40}}>
            <p className={styles.ensure_protection} style={{display: "flex"}}>
                <div >
                <Image 
            src={tridition ?? ""} 
            width={250} 
            height={100} 
            alt="Tradition of Excellence Logo" 
            />
                </div>
<div style={{marginLeft: 15}}>
<p className={styles.bold}>
            Tradition of Excellence
            </p>
            With a strong foundation in real estate, corporate, and financial law, we provide expert representation and strategic counsel to safeguard our clients’ interests.
</div>
            </p>
          </div>
          <div style={{marginTop: 25}}>
          <p className={styles.ensure_protection_trust} style={{display: "flex"}}>
                <div>
                <Image 
            src={trust ?? ""} 
            width={300} 
            height={200} 
            alt="Technology Logo" 
            />
                </div>
<div style={{marginLeft: 15}}>
<p className={styles.bold}>
            Technology-Driven Legal Services
            </p>
            RAALC is shaping the future of law by integrating AI and blockchain solutions into our practice, making us one of the UAE’s pioneers in smart-law innovation.
            </div>
            </p>
          </div>
          <div style={{marginTop: 25}}>
          <p className={styles.ensure_protection_trust} style={{display: "flex"}}>
                <div>
                <Image 
            src={trust ?? ""} 
            width={300} 
            height={200} 
            alt="Trust Logo" 
            />
                </div>
<div style={{marginLeft: 15}}>
<p className={styles.bold}>
            Your Trusted Legal Partner
            </p>
            From litigation to advisory, we craft tailored legal strategies that protect your rights and investments. Experience excellence—partner with RAALC today.
            </div>
            </p>
          </div>
          </Grid>
        
        </Grid>

        <div>
        <div className={styles.section_container}>
      <span className={styles.section_text}>Speak to a Real Estate Lawyer Now</span>
      <div className={styles.section_line}></div>
      <Button  onClick={scrollToHomePage} className={styles.get_started_btn}>
        GET STARTED
      </Button>
    </div>
        </div>
{/* 
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 30}}>
        <h1 className={styles.about_us_footer}>
        Speak to a Real Estate Lawyer Now
        </h1>
        
        <Button
    //   onClick={onClick}
      variant="contained"
      className={styles.get_started_btn}
    >
      GET STARTED
    </Button>
    
    </div> */}

        </div>
    </div>

    </div>

  );
};

export default Header;
