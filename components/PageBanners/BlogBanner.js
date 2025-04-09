"use client";

import React from "react";
import Link from "next/link";

const BlogBanner = () => {
  return (
    <>
      <div
        className="page-title"
        style={{ backgroundImage: `url(/images/main-bg-2.jpg)` }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="relative">
                    <h1>Blog</h1>
                    <ul>
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <i className="fa fa-angle-right"></i>
                      </li>
                      <li className="active">Blog</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogBanner;
