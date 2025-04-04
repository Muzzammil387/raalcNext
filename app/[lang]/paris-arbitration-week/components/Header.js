"use client"
import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react';
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
import Team from './Team';
import OurClients from './Clients';
import Services from './Services';
import styles from '../styles/header.module.css';
import ContactUs from './ContactUs';
import TimeTable from './TimeTable';
import { raalc_white_logo, white_whatsapp_icon } from '@/app/untils/imgimport';

const pages = [
    { label: 'Home', link: '/paris-arbitration-week' },
    { label: 'Our Team', link: '#team' },
    { label: 'Schedule', link: '#schedule' },
];

const Header = ({ lang }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar 
        position="absolute" 
        elevation={0} 
        style={{
          backgroundColor: "transparent",
          boxShadow: "none",
          top: 0, 
          width: "100%", 
          zIndex: 1100
        }}
      >
        <Container maxWidth="xl" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Toolbar disableGutters style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            
            {/* Desktop & Tablet Layout */}
            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", flexGrow: 1, justifyContent: "space-between", width: "100%" }}>
              <Link href="/paris-arbitration-week" passHref>
                <Image 
                  src={raalc_white_logo ?? ""} 
                  width={220} 
                  height={220} 
                  alt="RAALC White Logo"
                  style={{ cursor: "pointer" }}
                />
              </Link>
              
              <Box style={{display: "flex"}}>
             <Box style={{marginRight: 60}}>
                {pages.map((page) => (
                  <Link key={page.label} href={page.link} passHref>
                    <Button
                      className={styles.navbar_styling}
                      sx={{ my: 2, color: "white", textTransform: "none", fontSize: 24, marginRight: 0 }}
                    >
                      {page.label}
                    </Button>
                  </Link>
                ))}
              </Box>
              
              {/* WhatsApp Icon & Phone Number */}
              <Box 
                sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                onClick={() => window.location.href = 'tel:8007225223'}
              >
                <Image src={white_whatsapp_icon ?? ""} width={40} height={40} alt="Phone Icon" />
                <Typography className={styles.navbar_styling} onClick={() => window.open('tel:8007225223', '_self')}>
                  800-7225223
                </Typography>
              </Box>
             </Box>
            </Box>

            {/* Mobile Menu with Centered Logo */}
            <Box sx={{ display: { xs: "flex", md: "none" }, width: "100%", alignItems: "center", justifyContent: "space-between" }}>
              
              {/* Burger Menu on Left */}
              <IconButton
                size="large"
                aria-label="menu"
                id="burger_icon"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{
                  marginLeft: "10px"
              }}
              >
                <MenuIcon />
              </IconButton>

              {/* Mobile Navigation Menu */}
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <Link href={page.link} passHref>{page.label}</Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>

              {/* Centered Logo in Mobile */}
              <Link href="/paris-arbitration-week" passHref>
                <Image 
                  src={raalc_white_logo ?? ""} 
                  width={180} 
                  height={180} 
                  alt="RAALC White Logo"
                  style={{ cursor: "pointer" }}
                />
              </Link>

              {/* WhatsApp Icon on Right */}
              <Box 
                sx={{ display: "flex", alignItems: "center", cursor: "pointer", marginRight: "10px" }}
                onClick={() => window.open('https://wa.me/97145693370', '_blank')}
              >
                <Image src={white_whatsapp_icon ?? ""} width={50} height={50} alt="WhatsApp Icon" />
              </Box>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>

      <div id="home_page">
        <HomePage />
      </div>

      <div id="team">
        <Team />
      </div>

      <div id="schedule">
        <TimeTable />
      </div>
    </>
  );
};

export default Header;
