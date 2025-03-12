"use client";  // Ensure this runs as a Client Component

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/WhatsappButton.module.css";

const WhatsAppButton = () => {
  const [showMessage, setShowMessage] = useState(false);

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
       href="https://wa.me/97145693370?text=How%20can%20I%20assist%20you?&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsapp_button}
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
