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
import HomePage from './HomePage';
import AboutUs from './AboutUs';
import OurClients from './Clients';
import Team from './Team';
import TeamMembers from './TeamMembers';
import Gallery from './Gallery';
import ContactUs from './ContactUs';
import Services from './Services';
import Services2 from './Services2';
import Services3 from './Services3';
import Services4 from './Services4';
import Faq from './FAQ';
import { 
    raalc_white_logo, 
    white_whatsapp_icon
} from '@/app/untils/imgimport';


const pages = [
    { label: 'Home', link: '/corporate' },
    { label: 'About Us', link: '#about_us' },
    { label: 'Clients', link: '#our_clients' },
    { label: 'Services', link: '#services' },
    { label: 'Our Team', link: '#team' },
    { label: 'Gallery', link: '#gallery' },
    { label: 'Contact Us', link: '#contact_us' }
  ];

const Header = ({ lang }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const saveLogForCorporate = async () => {
    try {
      await fetch('https://api.raalc.ae/api/save_log', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: 'Phone button clicked from Corporate Landing Page',
          origin: "Corporate",
          type: "Phone",
          source: "Web",
          page_url: window.location.href
        }),
      });
      console.log('Log sent!');
    } catch (error) {
      console.error('Log failed:', error);
    }
  };

  return (
    <div>
        <AppBar position="static" className={styles.header_styling}>
      <Container maxWidth="xl" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Toolbar disableGutters className={styles.toolbar_styling}>
          {/* Desktop Layout */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", flexGrow: 1 }}>
            <Link href="/corporate" passHref>
  <Image
    src={raalc_white_logo ?? ""} 
    width={220} 
    height={220} 
    alt="RAALC White Logo" 
   className={styles.white_logo_styling}
  />
</Link>
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
            <Box sx={{ height: "7.5rem", display: { xs: "none", md: "block" }, marginLeft: "20px" }}></Box>
            <Box 
            sx={{ marginLeft: "20px", display: { xs: "none", md: "block" }, cursor: "pointer" }}
            onClick={() => {
              saveLogForCorporate();
              window.location.href = 'tel:8007225223';
            }}
            >
              <Image src={white_whatsapp_icon ?? ""} width={40} height={40} alt="WhatsApp Icon" />
            </Box>
            <Typography className={styles.navbar_styling} 
            // onClick={() => window.open('tel:8007225223', '_self')} 
            onClick={() => {
              saveLogForCorporate();
              window.open('tel:8007225223', '_self');
            }}
            >800-7225223</Typography>
          </Box>
          
          {/* Mobile Layout */}
          <Box sx={{ display: { xs: "flex", md: "none" }, width: "100%", alignItems: "center", justifyContent: "space-between" }}>
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
            <Link href="/real-estate" passHref>
  <Image 
    src={raalc_white_logo ?? ""} 
    width={200} 
    height={200} 
    alt="RAALC White Logo" 
    style={{ margin: "0 auto" }}
  />
</Link>
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
    <HomePage/>
    </div>
    <div id='about_us'>
    <AboutUs/>
    </div>
    <div id='our_clients'>
    <OurClients/>
    </div>

    <div id='services'>
    <Services/>
    </div>

    <div>
    <Services2/>
    </div>

    <div>
    <Services3/>
    </div>

    <div>
    <Services4/>
    </div>
    <div id='faq'>
    <Faq/>
    </div>
    <div id='team'>
    <Team/>
    </div>
    <div>
    <TeamMembers/>
    </div>
    <div id='gallery'>
    <Gallery/>
    </div>
    <div id='contact_us'>
    <ContactUs/>
    </div>
    </div>

  );
};

export default Header;
