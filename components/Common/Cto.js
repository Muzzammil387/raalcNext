"use client";

import React from "react";
import Link from "next/link";

const Cto = () => {
  return (
    <>
      <section
        className="ctr-area ptb-80"
        style={{ backgroundImage: `url(/images/ctr-bg.jpg)` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="section-title mb-0">
                <h4>Looking for exclusive services?</h4>

                <h2>Get The Best For Your Business</h2>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <Link href="#contact" className="btn btn-primary">
                  Contact
                </Link>
                <Link href="#work" className="btn btn-primary view-work">
                  View Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cto;
