"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link"; 

const BlogNavbar = () => {
  const [collapsed, setCollapsed] = useState(true); 

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };
 
  useEffect(() => {
    const handleScroll = () => {
      const elementId = document.getElementById("navbar");
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
 

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "navbar-collapse collapse show";
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <nav id="navbar" className="navbar navbar-expand-md navbar-light bg-light header-sticky">
        <div className="container">
          <Link href="/" className="navbar-brand">
            <span>A</span>ddax
          </Link>

          <button
            onClick={toggleNavbar}
            className={classTwo}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={classOne} id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  onClick={toggleNavbar} 
                  className="nav-link active"
                  href="/#home"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  onClick={toggleNavbar} 
                  className="nav-link"
                  href="/#about"
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  onClick={toggleNavbar} 
                  className="nav-link"
                  href="/#team"
                >
                  Team
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  onClick={toggleNavbar} 
                  className="nav-link"
                  href="/#services"
                >
                  Services
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  onClick={toggleNavbar} 
                  className="nav-link"
                  href="/#work"
                >
                  Work
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  onClick={toggleNavbar} 
                  className="nav-link"
                  href="/#price"
                >
                  Pricing
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  onClick={toggleNavbar} 
                  className="nav-link"
                  href="#blog"
                >
                  Blog
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  onClick={toggleNavbar} 
                  className="nav-link"
                  href="/#contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default BlogNavbar;