"use client";  // Ensure this runs as a Client Component

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/WhatsappButton.module.css";

const WhatsAppButton = () => {
  const [showMessage, setShowMessage] = useState(false);

  const saveLog = async () => {
    try {
      await fetch('https://api.raalc.ae/api/save_log', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: 'WhatsApp button clicked from Corporate Landing Page',
          origin: "corporate",
          type: "whatsapp",
          source: "web",
          page_url: window.location.href
        }),
      });
      console.log('Log sent!');
    } catch (error) {
      console.error('Log failed:', error);
    }
  };

  useEffect(() => {
    // Check if the user has already seen the greeting in this session
    const hasSeenMessage = sessionStorage.getItem("whatsappGreeting");

    if (!hasSeenMessage) {
      setShowMessage(true);
      sessionStorage.setItem("whatsappGreeting", "true"); // Store session flag
    }
  }, []);

  return (
    <div className={styles.whatsappContainer}>
      {/* Greeting Message (Shows once per session) */}
      {showMessage && (
        <div className={styles.greetingMessage}>
          👋 Hi there! Need help? Chat with us on WhatsApp.
          <button onClick={() => setShowMessage(false)}>✖</button>
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <Link
        href="https://wa.me/97145693370?text=Hi,%20I'm%20interested%20in%20your%20services%20regarding%20Corporate.%20Can%20you%20please%20provide%20more%20information?&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsapp_button}
        onClick={() => {
        saveLog();
        }}
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp Chat"
          width={100} // Keep original size
          height={100}
          className={styles.whatsapp_icon}
        />
      </Link>
    </div>
  );
};

export default WhatsAppButton;
