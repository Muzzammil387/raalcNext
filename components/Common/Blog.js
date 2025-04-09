"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const Blog = () => {
  return (
    <>
      <section id="blog" className="blog-area ptb-80">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <h4>Our News</h4>
            <h2>
              Latest Blog <span>Posts</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="blog-slider"
          >
            <SwiperSlide>
              <div
                className="single-blog-item"
                style={{
                  backgroundImage: `url("/images/services-img1.jpg")`,
                }}
              >
                <span>Business & Tech</span>
                <h4>
                  <Link href="/blog/details" target="_blank">
                    The best gear for starting Link small business
                  </Link>
                </h4>
                <p>
                  {" "}
                  Fusce vitae nulla at lorem pret ium semper. Curab itur
                  laoreet, lectus ac digni ssim vest ibul lorem pretium semper
                  lectus ac digni...
                </p>

                <Link
                  href="/blog/details"
                  title="Read More"
                  className="link-btn"
                  target="_blank"
                >
                  <i className="fa fa-arrow-right"></i>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="single-blog-item"
                style={{
                  backgroundImage: `url("/images/services-img2.jpg")`,
                }}
              >
                <span>Business & Tech</span>
                <h4>
                  <Link href="/blog/details" target="_blank">
                    Get your first business suit right with these tips
                  </Link>
                </h4>
                <p>
                  {" "}
                  Fusce vitae nulla at lorem pret ium semper. Curab itur
                  laoreet, lectus ac digni ssim vest ibul lorem pretium semper
                  lectus ac digni...
                </p>

                <Link
                  href="/blog/details"
                  title="Read More"
                  className="link-btn"
                  target="_blank"
                >
                  <i className="fa fa-arrow-right"></i>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="single-blog-item"
                style={{
                  backgroundImage: `url("/images/services-img3.jpg")`,
                }}
              >
                <span>Design & IT</span>
                <h4>
                  <Link href="/blog/details" target="_blank">
                    How to Make Link Font - Font Design Full Process
                  </Link>
                </h4>
                <p>
                  {" "}
                  Fusce vitae nulla at lorem pret ium semper. Curab itur
                  laoreet, lectus ac digni ssim vest ibul lorem pretium semper
                  lectus ac digni...
                </p>

                <Link
                  href="/blog/details"
                  title="Read More"
                  className="link-btn"
                  target="_blank"
                >
                  <i className="fa fa-arrow-right"></i>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="single-blog-item"
                style={{
                  backgroundImage: `url("/images/services-img4.jpg"))`,
                }}
              >
                <span>Marketing & Trend</span>
                <h4>
                  <Link href="/blog/details" target="_blank">
                    10 Hot Marketing Trends You Need to Implement in 2018
                  </Link>
                </h4>
                <p>
                  {" "}
                  Fusce vitae nulla at lorem pret ium semper. Curab itur
                  laoreet, lectus ac digni ssim vest ibul lorem pretium semper
                  lectus ac digni...
                </p>

                <Link
                  href="/blog/details"
                  title="Read More"
                  className="link-btn"
                  target="_blank"
                >
                  <i className="fa fa-arrow-right"></i>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="single-blog-item"
                style={{
                  backgroundImage: `url("/images/services-img5.jpg")`,
                }}
              >
                <span>Business & Tech</span>
                <h4>
                  <Link href="/blog/details" target="_blank">
                    How to Be Link Work From Home Professional
                  </Link>
                </h4>
                <p>
                  {" "}
                  Fusce vitae nulla at lorem pret ium semper. Curab itur
                  laoreet, lectus ac digni ssim vest ibul lorem pretium semper
                  lectus ac digni...
                </p>

                <Link
                  href="/blog/details"
                  title="Read More"
                  className="link-btn"
                  target="_blank"
                >
                  <i className="fa fa-arrow-right"></i>
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Blog;
