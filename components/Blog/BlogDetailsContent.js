"use client";

import React from "react";
import Link from "next/link";
import Comments from "./Comments";
import Image from "next/image";

const BlogDetailsContent = () => {
  return (
    <>
      <section
        id="blog"
        className="blog-details-area ptb-80"
        style={{ backgroundImage: `url(/images/pattern.png)` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 offset-lg-2">
              <div className="blog-details">
                <div className="article-img">
                  <Image
                    src="/images/blog-details.jpg"
                    alt="blog-details"
                    width={900}
                    height={500}
                  />

                  <div className="date">
                    20 <br /> Dec
                  </div>
                </div>

                <div className="article-text">
                  <ul className="category">
                    <li>
                      <Link href="#">IT</Link>
                    </li>
                    <li>
                      <Link href="#">Mobile</Link>
                    </li>
                    <li>
                      <Link href="#">Marketing</Link>
                    </li>
                    <li>
                      <Link href="#">Design</Link>
                    </li>
                    <li>
                      <Link href="#">Development</Link>
                    </li>
                  </ul>

                  <h4 className="title">
                    How to Be Link Work From Home Professional
                  </h4>

                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
                    necessitatibus provident facere, reiciendis voluptate
                    dolorem iste consectetur veniam aperiam suscipit ad ipsum et
                    labore Link repellendus debitis explicabo quisquam
                    obcaecati....
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Atque eum alias debitis suscipit, sint dignissimos minus
                    quisquam recusandae nostrum quas eligendi odit, fugiat eius
                    rem. Cumque, labore placeat! Velit, vitae. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Nemo, iste? Aut ipsam
                    consequuntur non rem tenetur dolore consequatur ducimus Link
                    labore excepturi quae nisi, quisquam, maxime voluptates
                    magnam aliquid. Cupiditate!
                  </p>

                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore
                    consequatur ducimus Link labore excepturi quae nisi,
                    quisquam, maxime voluptates magnam aliquid. Cupiditate!
                  </p>

                  <blockquote className="blockquote">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore
                      consequatur ducimus Link labore excepturi quae nisi,
                      quisquam, maxime voluptates magnam aliquid. Cupiditate.
                    </p>
                  </blockquote>

                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Atque eum alias debitis suscipit, sint dignissimos minus
                    quisquam recusandae nostrum quas eligendi odit, fugiat eius
                    rem. Cumque, labore placeat! Velit, vitae. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Nemo, iste? Aut ipsam
                    consequuntur non rem tenetur dolore consequatur ducimus Link
                    labore excepturi quae nisi, quisquam, maxime voluptates
                    magnam aliquid. Cupiditate!
                  </p>

                  <div className="author-share">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="article-author">
                          <div className="author-img">
                            <Image
                              src="/images/client-avatar1.jpg"
                              alt="client"
                              width={85}
                              height={85}
                            />
                          </div>

                          <div className="author-title">
                            <h4>John Smith</h4>
                            <span>Back-End Developer</span>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <ul className="social-share">
                          <li>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Share on Facebook"
                            >
                              <i className="fa-brands fa-facebook-f"></i>
                            </a>
                          </li>

                          <li>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Share on Twitter"
                            >
                              <i className="fa-brands fa-twitter"></i>
                            </a>
                          </li>

                          <li>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Share on Linkedin"
                            >
                              <i className="fa-brands fa-linkedin"></i>
                            </a>
                          </li>

                          <li>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Share on Instagram"
                            >
                              <i className="fa-brands fa-instagram"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comments */}
              <Comments />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsContent;
