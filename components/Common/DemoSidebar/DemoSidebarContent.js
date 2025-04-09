"use client";

import React from "react";
import Image from "next/image";

const DemoSidebarContent = ({ active, onClick }) => {
  const closeModal = () => {
    onClick();
  };

  return (
    <>
      <div className={`example-demo-modal ${active}`}>
        <div className="inner">
          <ul>
            <li>
              <div className="single-demo">
                <Image
                  src="/images/demo-img/home-1.jpg"
                  alt="Home One"
                  width={700}
                  height={700}
                />
                <span>Home One</span>
                <a href="/" className="link-btn"></a>
              </div>
            </li>
            <li>
              <div className="single-demo">
                <Image
                  src="/images/demo-img/home-2.jpg"
                  alt="Home Two"
                  width={700}
                  height={700}
                />
                <span>Home Two</span>
                <a href="/home-2" className="link-btn"></a>
              </div>
            </li>
            <li>
              <div className="single-demo">
                <Image
                  src="/images/demo-img/home-3.jpg"
                  alt="Home Three"
                  width={700}
                  height={700}
                />
                <span>Home Three</span>
                <a href="/home-3" className="link-btn"></a>
              </div>
            </li>
            <li>
              <div className="single-demo">
                <Image
                  src="/images/demo-img/home-4.jpg"
                  alt="Home Four"
                  width={700}
                  height={700}
                />
                <span>Home Four</span>
                <a href="/home-4" className="link-btn"></a>
              </div>
            </li>
            <li>
              <div className="single-demo">
                <Image
                  src="/images/demo-img/home-5.jpg"
                  alt="Home Five"
                  width={700}
                  height={700}
                />
                <span>Home Five</span>
                <a href="/home-5" className="link-btn"></a>
              </div>
            </li>
            <li>
              <div className="single-demo">
                <Image
                  src="/images/demo-img/home-6.jpg"
                  alt="Home Six"
                  width={700}
                  height={700}
                />
                <span>Home Six</span>
                <a href="/home-6" className="link-btn"></a>
              </div>
            </li>
            <li>
              <div className="single-demo">
                <Image
                  src="/images/demo-img/home-7.jpg"
                  alt="Home Seven"
                  width={700}
                  height={700}
                />
                <span>Home Seven</span>
                <a href="/home-7" className="link-btn"></a>
              </div>
            </li>
            <li>
              <div className="single-demo">
                <Image
                  src="/images/demo-img/home-8.jpg"
                  alt="Home Eight"
                  width={700}
                  height={700}
                />
                <span>Home Eight</span>
                <a href="/home-8" className="link-btn"></a>
              </div>
            </li>
            <li>
              <div className="single-demo">
                <Image
                  src="/images/demo-img/home-9.jpg"
                  alt="Home Nine"
                  width={700}
                  height={700}
                />
                <span>Home Nine</span>
                <a href="/home-9" className="link-btn"></a>
              </div>
            </li>
            <li>
              <div className="single-demo">
                <Image
                  src="/images/demo-img/home-10.jpg"
                  alt="Home Ten"
                  width={700}
                  height={700}
                />
                <span>Home Ten</span>
                <a href="/home-10" className="link-btn"></a>
              </div>
            </li>
            <li>
              <div className="single-demo">
                <Image
                  src="/images/demo-img/home-11.jpg"
                  alt="Home Eleven"
                  width={700}
                  height={700}
                />
                <span>Home Eleven</span>
                <a href="/home-11" className="link-btn"></a>
              </div>
            </li>
            <li>
              <div className="single-demo">
                <Image
                  src="/images/demo-img/home-12.jpg"
                  alt="Home Twelve"
                  width={700}
                  height={700}
                />
                <span>Home Twelve</span>
                <a href="/home-12" className="link-btn"></a>
              </div>
            </li>
          </ul>
        </div>

        <div className="header-title">
          <button className="example-demo-modal-control" onClick={closeModal}>
            <i className="fa fa-close"></i>
          </button>
          <div className="title">View Demo</div>
        </div>
      </div>
    </>
  );
};

export default DemoSidebarContent;
