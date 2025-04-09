"use client";

import React, { useState, useEffect } from "react";

const DarkModeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedPreference = localStorage.getItem("theme");
    if (storedPreference === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");

    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      if (isDarkMode) {
        htmlElement.classList.add("dark");
      } else {
        htmlElement.classList.remove("dark");
      }
    }
  }, [isDarkMode]);

  return (
    <div
      className="dark-switcher-btn"
      onClick={handleToggle}
      title="Switch Dark/Light"
    >
      <i className="fa-regular fa-moon moon"></i>
      <i className="fa-regular fa-sun sun"></i>
    </div>
  );
};

export default DarkModeSwitcher;
