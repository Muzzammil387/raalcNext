"use client"
import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react';
import styles from '../styles/faq.module.css'
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Typewriter } from "react-simple-typewriter";
import { 
  arrow_icon_services
} from '@/app/untils/imgimport';
import { Grid, Paper } from "@mui/material";
import ForwardIcon from '@mui/icons-material/Forward';
import HubSpotForm from './HubSpotForm';

const Faq = ({ lang }) => {

  return (
    <div>
    <div>
    <div className={styles.background_image_style}>
        <div
   className={styles.overlay}
  ></div>
       <div className={styles.history_container}>
       <div style={{ display: "flex", alignItems: "center" }}>
      <p className={styles.commitment_heading}>Frequently Asked Questions (FAQs)</p>
      <div className={styles.section_line}></div>
    </div>
    <div
      style={{
        backgroundColor: '#dcb65b',
        color: 'white',
        padding: '30px 20px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px',
        marginTop: 30
      }}
    >
      <div
        style={{
          flex: '1 1 250px',
          fontSize: '23px',
          fontWeight: 'bold',
          fontFamily: 'Montserrat, sans-serif',
        }}
      >
        How do I start a business in the UAE?
      </div>
      <div
        style={{
          fontSize: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          flexShrink: 0,
          marginRight: 25
        }}
      >
         <Image 
                  src={arrow_icon_services ?? ""} 
                  width={120} 
                  height={120} 
                  className={styles.arrow_styling}
                  alt=""
                  />
      </div>
      <div
        style={{
          flex: '2 1 300px',
          fontSize: '19px',
          fontFamily: 'Montserrat, sans-serif',
          lineHeight: 1.6,
        }}
      >
        Starting a business in the UAE is simple with RAALC. We guide you through
        the process of choosing the right structure, getting the necessary licenses,
        and ensuring full compliance with UAE laws. Let us take care of the legal
        details so you can focus on growing your business!
      </div>
    </div>

    <div
      style={{
        backgroundColor: '#dcb65b',
        color: 'white',
        padding: '30px 20px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px',
        marginTop: 30
      }}
    >
      <div
        style={{
          flex: '1 1 250px',
          fontSize: '23px',
          fontWeight: 'bold',
          fontFamily: 'Montserrat, sans-serif',
        }}
      >
      What&rsquo;s the difference between mainland, free zone, and offshore company formation?

      </div>
      <div
        style={{
          fontSize: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          flexShrink: 0,
          marginRight: 25
        }}
      >
         <Image 
                  src={arrow_icon_services ?? ""} 
                  width={120} 
                  height={120} 
                  className={styles.arrow_styling}
                  alt=""
                  />
      </div>
      <div
        style={{
          flex: '2 1 300px',
          fontSize: '19px',
          fontFamily: 'Montserrat, sans-serif',
          lineHeight: 1.6,
        }}
      >
        Each business location has its advantages. We help you decide between mainland, free
zones, or offshore setups based on your needs, whether it's flexibility, tax benefits, or ease of
operation. RAALC ensures you pick the best option for your business.
      </div>
    </div>

    <div
      style={{
        backgroundColor: '#dcb65b',
        color: 'white',
        padding: '30px 20px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px',
        marginTop: 30
      }}
    >
      <div
        style={{
          flex: '1 1 250px',
          fontSize: '23px',
          fontWeight: 'bold',
          fontFamily: 'Montserrat, sans-serif',
        }}
      >
      Do I need corporate
      governance and compliance?
      </div>
      <div
        style={{
          fontSize: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          flexShrink: 0,
          marginRight: 25
        }}
      >
         <Image 
                  src={arrow_icon_services ?? ""} 
                  width={120} 
                  height={120} 
                  className={styles.arrow_styling}
                  alt=""
                  />
      </div>
      <div
        style={{
          flex: '2 1 300px',
          fontSize: '19px',
          fontFamily: 'Montserrat, sans-serif',
          lineHeight: 1.6,
        }}
      >
        Yes! Corporate governance ensures your business runs smoothly and stays compliant with
UAE laws. RAALC creates strong governance systems, conducts risk assessments, and
handles audits, so you can focus on your business while staying legally secure.
      </div>
    </div>

    <div
      style={{
        backgroundColor: '#dcb65b',
        color: 'white',
        padding: '30px 20px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px',
        marginTop: 30
      }}
    >
      <div
        style={{
          flex: '1 1 250px',
          fontSize: '23px',
          fontWeight: 'bold',
          fontFamily: 'Montserrat, sans-serif',
        }}
      >
       What&rsquo;s involved in Mergers
       and Acquisitions (M&A)?
      </div>
      <div
        style={{
          fontSize: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          flexShrink: 0,
          marginRight: 25
        }}
      >
         <Image 
                  src={arrow_icon_services ?? ""} 
                  width={120} 
                  height={120} 
                  className={styles.arrow_styling}
                  alt=""
                  />
      </div>
      <div
        style={{
          flex: '2 1 300px',
          fontSize: '19px',
          fontFamily: 'Montserrat, sans-serif',
          lineHeight: 1.6,
        }}
      >
       Merging with or acquiring a company can be complex, but RAALC makes it easy. We handle
the due diligence, negotiate contracts, and secure necessary approvals, making sure the
process is seamless and beneficial for your business.
      </div>
    </div>

    <div
      style={{
        backgroundColor: '#dcb65b',
        color: 'white',
        padding: '30px 20px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px',
        marginTop: 30
      }}
    >
      <div
        style={{
          flex: '1 1 250px',
          fontSize: '23px',
          fontWeight: 'bold',
          fontFamily: 'Montserrat, sans-serif',
        }}
      >
      What happens if my business
      is facing financial difficulties?
      </div>
      <div
        style={{
          fontSize: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          flexShrink: 0,
          marginRight: 25
        }}
      >
         <Image 
                  src={arrow_icon_services ?? ""} 
                  width={120} 
                  height={120} 
                  className={styles.arrow_styling}
                  alt=""
                  />
      </div>
      <div
        style={{
          flex: '2 1 300px',
          fontSize: '19px',
          fontFamily: 'Montserrat, sans-serif',
          lineHeight: 1.6,
        }}
      >
       If your business faces financial challenges, RAALC is here to help. We offer expert advice on
corporate restructuring and bankruptcy, guiding you through tough times while protecting
your interests and helping you recover.
      </div>
    </div>

        </div>
       </div>
    </div>

    </div>

  );
};

export default Faq;