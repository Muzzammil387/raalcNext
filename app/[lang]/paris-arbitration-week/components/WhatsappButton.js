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
          message: 'WhatsApp Button clicked from Paris Arbitration Week Landing Page',
          origin: "Paris Arbitration Week",
          type: "Whatsapp",
          source: "Web",
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
        href="https://wa.me/97145693370?text=Hi!%20Meet%20us%20at%20Paris%20Arbitration%20Week%20and%20book%20your%20free%20consultation%20-%20just%20drop%20us%20a%20message!"
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
