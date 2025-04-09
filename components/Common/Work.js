"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Work = () => {
  return (
    <>
      <section id="work" className="work-area ptb-80">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <h2>
              Our <span>Work</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="row m-0 justify-content-center">
          <div
            className="col-lg-4 col-sm-6 p-0"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <div className="single-work">
              <Image
                src="/images/work-img1.jpg"
                alt="work-img"
                width={640}
                height={450}
              />

              <div className="work-content">
                <h4>Creative Design</h4>
                <ul>
                  <li>
                    <Link href="#">Design</Link>
                  </li>
                  <li>.</li>
                  <li>
                    <Link href="#">Brand</Link>
                  </li>
                </ul>
              </div>

              <Link href="#" target="_blank" className="view-details">
                <i className="fa fa-plus"></i>
              </Link>
            </div>
          </div>

          <div
            className="col-lg-4 col-sm-6 p-0"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <div className="single-work">
              <Image
                src="/images/work-img2.jpg"
                alt="work-img"
                width={640}
                height={450}
              />

              <div className="work-content">
                <h4>Creative Design</h4>
                <ul>
                  <li>
                    <Link href="#">Design</Link>
                  </li>
                  <li>.</li>
                  <li>
                    <Link href="#">Brand</Link>
                  </li>
                </ul>
              </div>

              <Link href="#" target="_blank" className="view-details">
                <i className="fa fa-plus"></i>
              </Link>
            </div>
          </div>

          <div
            className="col-lg-4 col-sm-6 p-0"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <div className="single-work">
              <Image
                src="/images/work-img3.jpg"
                alt="work-img"
                width={640}
                height={450}
              />

              <div className="work-content">
                <h4>Creative Design</h4>
                <ul>
                  <li>
                    <Link href="#">Design</Link>
                  </li>
                  <li>.</li>
                  <li>
                    <Link href="#">Brand</Link>
                  </li>
                </ul>
              </div>

              <Link href="#" target="_blank" className="view-details">
                <i className="fa fa-plus"></i>
              </Link>
            </div>
          </div>

          <div
            className="col-lg-4 col-sm-6 p-0"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <div className="single-work">
              <Image
                src="/images/work-img4.jpg"
                alt="work-img"
                width={640}
                height={450}
              />

              <div className="work-content">
                <h4>Creative Design</h4>
                <ul>
                  <li>
                    <Link href="#">Design</Link>
                  </li>
                  <li>.</li>
                  <li>
                    <Link href="#">Brand</Link>
                  </li>
                </ul>
              </div>

              <Link href="#" target="_blank" className="view-details">
                <i className="fa fa-plus"></i>
              </Link>
            </div>
          </div>

          <div
            className="col-lg-4 col-sm-6 p-0"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <div className="single-work">
              <Image
                src="/images/work-img5.jpg"
                alt="work-img"
                width={640}
                height={450}
              />

              <div className="work-content">
                <h4>Creative Design</h4>
                <ul>
                  <li>
                    <Link href="#">Design</Link>
                  </li>
                  <li>.</li>
                  <li>
                    <Link href="#">Brand</Link>
                  </li>
                </ul>
              </div>

              <Link href="#" target="_blank" className="view-details">
                <i className="fa fa-plus"></i>
              </Link>
            </div>
          </div>

          <div
            className="col-lg-4 col-sm-6 p-0"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <div className="single-work">
              <Image
                src="/images/work-img6.jpg"
                alt="work-img"
                width={640}
                height={450}
              />

              <div className="work-content">
                <h4>Creative Design</h4>
                <ul>
                  <li>
                    <Link href="#">Design</Link>
                  </li>
                  <li>.</li>
                  <li>
                    <Link href="#">Brand</Link>
                  </li>
                </ul>
              </div>

              <Link href="#" target="_blank" className="view-details">
                <i className="fa fa-plus"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
