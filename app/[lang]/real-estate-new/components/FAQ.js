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
        My property handover is delayed. What can I do?
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
        Don&rsquo;t let delays ruin your dream property! RAALC steps in to negotiate compensation or take
        legal action, making sure your rights are protected and you get what you deserve.
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
      What if there&rsquo;s a dispute over
      jointly owned property?

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
        RAALC expertly resolves co-ownership conflicts, ensuring fair, legal solutions to everything
        from property management issues to dissolving joint ownership, safeguarding your interests.
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
      What happens if my real
      estate project is canceled?
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
        Don&rsquo;t panic—RAALC has you covered. We fight to recover your investment, from filing claims
        to negotiating refunds, turning canceled projects into a path to justice.
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
       How can RAALC help with
       rental disputes?
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
       Whether you&rsquo;re a landlord or tenant, we provide fast, effective legal solutions for disputes like
unpaid rent or lease violations, ensuring compliance and protecting your rights under UAE
law.
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
     How can RAALC simplify my
     real estate transactions?
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
       From secure Sale & Purchase Agreements to expert conveyancing, escrow payment, and
power of attorney, our property lawyers in Dubai ensures your property dealings are hassle-
free and legally sound.
      </div>
    </div>

        </div>
       </div>
    </div>

    </div>

  );
};

export default Faq;