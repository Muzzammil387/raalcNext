"use client"
import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react';
import styles from '../styles/contact_us.module.css'
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Typewriter } from "react-simple-typewriter";
import { 
    instagram_icon,
    facebook_icon,
    history_main_image,
    twitter_icon,linkedin_icon,
    whatsapp_icon,
    phone_icon,
    email_ic
} from '@/app/untils/imgimport';
import { Grid, Paper } from "@mui/material";
import ForwardIcon from '@mui/icons-material/Forward';
import HubSpotForm from './HubSpotForm';

const ContactUs = ({ lang }) => {

  const scrollToHomePage = () => {
    const homePageSection = document.getElementById("home_page");
    if (homePageSection) {
      homePageSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
    <div>
    <div className={styles.background_image_style}>
    <div
   className={styles.overlay}
  ></div>
      <div className={styles.left_grid}>
        <Grid container spacing={2} style={{marginLeft: "4%", marginRight: "4%"}}>
          <Grid item xs={12} md={7} className={styles.contact_us_container}>
           <div style={{lineHeight: "60px", marginTop: 20}}>
           <p className={styles.real_estate_lawyer}>
           Secure Your Property with RAALC’s Legal Experts
           </p>
           </div>
           <div>
           <p className={`${styles.ensure_protection}`}>
            Ensure the protection of your property and investments with expert legal support. We handle real estate challenges, giving you peace of mind. Book a consultation today!
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 p-4" style={{marginTop: 20}}>
            <div>
            <h3 className={styles.call_text}>
          Call Us Today:
          </h3>
      {/* Call Button */}
      <Link
        href="tel:+97145693370"
        className="flex items-center gap-1 px-6 py-3 text-white rounded-full border-4 shadow-md transition-all"
        style={{
          backgroundColor: "#f4c766",
          borderColor: "#f4c766",
          padding: "7px",
          color: "#f4c766",
        }}
      >
       <span className={`text-2xl ${styles.phone_icon_style}`}>
       <Image 
            src={phone_icon ?? ""} 
            width={35} 
            height={35} 
            alt="Phone Icon" 
            />
       </span>
        <span 
        className={`font-bold text-lg text-yellow-900 ${styles.phone_number_style}`}
        >+971 4569 3370</span>
      </Link>
            </div>

      <div>
      <h3 className={styles.call_text}>
          Chat on Whatsapp Now:
          </h3>
{/* WhatsApp Button */}
<Link
        href="https://wa.me/97145693370?text=How%20can%20I%20assist%20you?&type=phone_number&app_absent=0"
        target="_blank"
        className="flex items-center gap-1 px-6 py-3 bg-green-500 text-white rounded-full border-4 border-green-700 shadow-md hover:bg-green-600 transition-all"
        style={{
          backgroundColor: "#7ed957",
          borderColor: "#7ed957",
          padding: "7px",
          color: "#7ed957",
        }}
     >
         <span className={`text-2xl`}>
         <Image 
            src={whatsapp_icon ?? ""} 
            width={50} 
            height={50} 
            alt="Whatsapp Icon" 
            />
         </span>
        <span 
        className={`font-bold text-lg text-yellow-900 ${styles.phone_number_style}`}
        >
          +971 4569 3370</span>
      </Link>
      </div>
      

    </div>

    <div>
      <h3 className={styles.call_text}>
          Write Us On:
          </h3>
{/* WhatsApp Button */}
<Link
        href="mailto:inquiry@raalc.ae"
        target="_blank"
        className="flex items-center gap-1 px-6 py-3 bg-green-500 text-white rounded-full border-4 border-green-700 shadow-md hover:bg-green-600 transition-all"
        style={{
          backgroundColor: "#338aff",
          borderColor: "#338aff",
          padding: "7px",
          color: "#338aff",
          width: "fit-content"
        }}
     >
         <span className={`text-2xl`}>
         <Image 
            src={email_ic ?? ""} 
            width={50} 
            height={50} 
            alt="Whatsapp Icon" 
            />
         </span>
        <span 
        className={`font-bold text-lg text-yellow-900 ${styles.phone_number_style}`}
        >
          inquiry@raalc.ae</span>
      </Link>
      </div>

          </Grid>

          <Grid item xs={12} md={5}>
            <div className={styles.form_container}>
                <p className={styles.form_heading}>
                Speak to a Real Estate Lawyer Now
                </p>
                <HubSpotForm formId="hubspotForm2"/>
            <p className={styles.form_footer}>
            Your information is 100% secure & confidential.
            </p>
            </div>
          </Grid>
        
        </Grid>
      </div>
      

        <div className={styles.footer_container}>
        <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <h3 className={styles.footer_heading}>
          Dubai Office (HQ)
          </h3>
          <p className={styles.footer_content}>
          Office 308 & 309, 3rd Floor, Dubai Supreme Court Complex, Umm Hurair 2, Dubai UAE
          </p>
          </Grid>
          <Grid item xs={12} md={3}>
          <h3 className={styles.footer_heading}>
          Sharjah Branch
          </h3>
          <p className={styles.footer_content}>
          Suite 1307, 13th Floor, Sarh Al Emarat Tower, Buheirah Corniche, Sharjah, UAE
          </p>
          </Grid>
          <Grid item xs={12} md={3}>
          <h3 className={styles.footer_heading}>
          Ras Al-Khaimah Branch
          </h3>
          <p className={styles.footer_content}>
          Suite 1006, 10th Floor, Burj Al Noem, Al Qowaism Corniche, RAK, UAE
          </p>
          </Grid>
          <Grid item xs={12} md={3} style={{display: "flex", alignItems: "center"}}>
         <div className={styles.social_media_container}>
         <Link href="https://www.instagram.com/raalc_uae/" target="_blank" rel="noopener noreferrer">
          <Image 
          src={instagram_icon ?? ""} 
          width={45} 
          height={45} 
          alt="Instagram Icon" 
        />
        </Link>

        <Link href="https://www.facebook.com/RAALCUAE.ae/" target="_blank" rel="noopener noreferrer">
        <Image 
            src={facebook_icon ?? ""} 
            width={45} 
            height={45} 
            alt="Facebook Icon" 
            />
    </Link>

    <Link href="https://www.linkedin.com/company/uaeraalc/" target="_blank" rel="noopener noreferrer">
        <Image 
            src={linkedin_icon ?? ""} 
            width={45} 
            height={45} 
            alt="Facebook Icon" 
            />
    </Link>

    <Link href="https://x.com/raalcuae" target="_blank" rel="noopener noreferrer">
    <Image 
            src={twitter_icon ?? ""} 
            width={45} 
            height={45} 
            alt="X Icon" 
            />
    </Link>
              
         </div>
          </Grid>
          </Grid>
        </div>

    </div>
    </div>

    </div>

  );
};

export default ContactUs;