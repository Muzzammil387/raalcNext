"use client";

import React from "react";
import CustomForm from "./consultation_form"; // Adjust path as needed

const FreeConsultation = () => {
  return (
    <>
      {/* 🔝 Fixed Top-Left Logo with translucent background */}
      <div
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          padding: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.08)", // ✅ translucent background
          borderRadius: "0px",
          backdropFilter: "blur(8px)", // ✅ subtle blur for modern effect
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3)", // subtle shadow to lift over bg
          zIndex: 9999,
        }}
      >
        <img
          src="/webImages/raalc_golden_logo.webp"
          alt="Global Logo"
          style={{
            width: "200px",
            height: "auto",
            display: "block",
          }}
        />
      </div>

      {/* 🔳 Background Container with heavier dark overlay */}
      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          width: "100%",
          backgroundImage: "url('/webImages/header_real-estate.webp')", // Replace with actual image
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "__Poppins_9b9fd1, __Poppins_Fallback_9b9fd1",
        }}
      >
        {/* 🔲 Darker overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.65)", // ✅ heavier dark background
            zIndex: 0,
          }}
        />

        {/* 🧾 Form Wrapper */}
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "2rem",
            maxWidth: "800px",
            width: "90%",
            boxShadow: "0 16px 48px rgba(0, 0, 0, 0.4)", // ✅ stronger shadow
            borderRadius: "0px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* 🔶 Optional Form Logo */}
          <img
            src="/webImages/apple-touch-icon.png"
            alt="Form Logo"
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
              width: "60px",
              height: "auto",
            }}
          />

          {/* 🔷 Form Title */}
          <p
            style={{
              fontSize: "1.8rem",
              fontWeight: "bold",
              color: "#D4AF37",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            Speak to a Lawyer Now
          </p>

          {/* 📩 Actual Form */}
          <CustomForm />

          {/* 🔒 Footer Message */}
          <p
            style={{
              fontSize: "1rem",
              color: "#D4AF37",
              marginTop: "2rem",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Your information is 100% secure & confidential.
          </p>
        </div>
      </div>
    </>
  );
};

export default FreeConsultation;
