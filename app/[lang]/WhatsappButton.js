"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../[lang]/WhatsappButton.module.css";

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
          message: 'WhatsApp button clicked from Website',
          origin: "Website",
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
    const hasSeenMessage = sessionStorage.getItem("whatsappGreeting");

    if (!hasSeenMessage) {
      setShowMessage(true);
      sessionStorage.setItem("whatsappGreeting", "true");
    }
  }, []);

  return (
    <div className={styles.whatsappContainer}>
      {showMessage && (
        <div className={styles.greetingMessage}>
          👋 Hi there! Need help? Chat with us on WhatsApp.
          <button onClick={() => setShowMessage(false)}>✖</button>
        </div>
      )}
      <Link
        href="https://api.whatsapp.com/send/?phone=97145693370&text=Hi+RAALC%2C+I'm+interested+in+your+services.+Can+you+please+provide+more+information%3F&type=phone_number&app_absent=0&utm_source=Organic&utm_medium=SEO&utm_campaign=Website"
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
