"use client";

import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import { useEffect } from "react";
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.$) {
      window.$(".hero-slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        nav: false,
        dots: true,
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Atorn - Law Firm & Attorney Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />

        <link rel="icon" href="/assets/img/favicon.png" type="image/png" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/meanmenu.min.css" />
        <link rel="stylesheet" href="/assets/css/line-awesome.min.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/assets/css/odometer.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
        <link rel="stylesheet" href="/assets/css/theme-dark.css" />
      </Head>

      {/* Scripts */}
      <Script src="/assets/js/jquery.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/meanmenu.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/jquery.magnific-popup.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/owl.carousel.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/odometer.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/jquery.appear.js" strategy="lazyOnload" />
      <Script src="/assets/js/form-validator.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/contact-form-script.js" strategy="lazyOnload" />
      <Script src="/assets/js/jquery.ajaxchimp.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/custom.js" strategy="lazyOnload" />

      <body>
        <div className="preloader">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="lds-hourglass"></div>
            </div>
          </div>
        </div>

        <header className="header-area">
          <div className="top-header">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 col-sm-6">
                  <ul className="left-info">
                    <li>
                      <a href="mailto:hello@atorn.com">
                        <i className="las la-envelope"></i>
                        hello@atorn.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:+823-456-879">
                        <i className="las la-phone"></i>
                        +0123 456 789
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <ul className="right-info">
                    <li><a href="https://facebook.com" target="_blank"><i className="lab la-facebook-f"></i></a></li>
                    <li><a href="https://twitter.com" target="_blank"><i className="lab la-twitter"></i></a></li>
                    <li><a href="https://instagram.com" target="_blank"><i className="lab la-instagram"></i></a></li>
                    <li><a href="https://plus.google.com" target="_blank"><i className="lab la-google-plus"></i></a></li>
                    <li className="heder-btn">
                      <a href="/contact">Get A Schedule</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
         
          <div className="atorn-nav">
      <div className="container">
        <nav className="navbar navbar-expand-md navbar-light">
          <Link className="navbar-brand" href="/">
            <img src="/assets/img/logo.png" className="logo1" alt="logo" />
            <img src="/assets/img/logo-white.png" className="logo2" alt="logo" />
          </Link>

          <div className="collapse navbar-collapse mean-menu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#" className="nav-link active">
                  Home <i className="las la-angle-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <Link className="nav-link active" href="/">Home Demo - 1</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/index-2">Home Demo - 2</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/index-3">Home Demo - 3</Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="/about">About Us</Link>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">
                  Pages <i className="las la-angle-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="nav-link" href="/about">About</Link></li>
                  <li><Link className="nav-link" href="/team">Team</Link></li>
                  <li><Link className="nav-link" href="/testimonials">Testimonials</Link></li>
                  <li><Link className="nav-link" href="/gallery">Gallery</Link></li>
                  <li><Link className="nav-link" href="/faq">FAQ</Link></li>

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      User <i className="las la-angle-right"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li><Link className="nav-link" href="/sign-in">Sign In</Link></li>
                      <li><Link className="nav-link" href="/sign-up">Sign Up</Link></li>
                    </ul>
                  </li>

                  <li><Link className="nav-link" href="/privacy-policy">Privacy Policy</Link></li>
                  <li><Link className="nav-link" href="/terms-condition">Terms & Condition</Link></li>
                  <li><Link className="nav-link" href="/coming-soon">Coming Soon</Link></li>
                  <li><Link className="nav-link" href="/error-404">404 Error Page</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">
                  Services <i className="las la-angle-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="nav-link" href="/services">Services</Link></li>
                  <li><Link className="nav-link" href="/service-details">Services Details</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">
                  Case Study <i className="las la-angle-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="nav-link" href="/case-study">Case Study</Link></li>
                  <li><Link className="nav-link" href="/case-study-details">Case Study Details</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">
                  Attorney <i className="las la-angle-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="nav-link" href="/attorney">Attorney</Link></li>
                  <li><Link className="nav-link" href="/attorney-details">Attorney Details</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">
                  Blog <i className="las la-angle-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="nav-link" href="/blog">Blog</Link></li>
                  <li><Link className="nav-link" href="/blog-details">Blog Details</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="/contact">Contact</Link>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link search-box">
                  <i className="las la-search"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
        </header>
      </body>
    </>
  );
}
