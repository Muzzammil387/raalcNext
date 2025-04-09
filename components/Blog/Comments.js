"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Comments = () => {
  return (
    <>
      <div className="post-comments">
        <h3 className="title mt-0">Comments</h3>
        <div className="single-comment">
          <div className="comment-img">
            <Image
              src="/images/client-avatar2.jpg"
              alt="client"
              width={85}
              height={85}
            />
          </div>
          <div className="comment-content">
            <h4>Justin Theroux</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
              minus, saepe porro Link voluptatem, quidem aut libero consequatur
              unde molestiae quae impedit accusantium dolor est corporis!
              Dolores ut dignissimos doloribus?
            </p>
            <span>Dec 19, 2018 - 9:10AM</span>
            <Link href="#">Reply</Link>
          </div>
        </div>

        <div className="single-comment left-m">
          <div className="comment-img">
            <Image
              src="/images/client-avatar1.jpg"
              alt="client"
              width={85}
              height={85}
            />
          </div>
          <div className="comment-content">
            <h4>Isla Fisher</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
              minus, saepe porro Link voluptatem, quidem aut libero consequatur
              unde molestiae quae impedit accusantium dolor est corporis!
              Dolores ut dignissimos doloribus?
            </p>
            <span>Dec 19, 2018 - 9:10AM</span>
            <Link href="#">Reply</Link>
          </div>
        </div>

        <div className="single-comment">
          <div className="comment-img">
            <Image
              src="/images/client-avatar2.jpg"
              alt="client"
              width={85}
              height={85}
            />
          </div>
          <div className="comment-content">
            <h4>Katie Holmes</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
              minus, saepe porro Link voluptatem, quidem aut libero consequatur
              unde molestiae quae impedit accusantium dolor est corporis!
              Dolores ut dignissimos doloribus?
            </p>
            <span>Dec 19, 2018 - 9:10AM</span>
            <Link href="#">Reply</Link>
          </div>
        </div>

        <div className="single-comment mb-0">
          <div className="comment-img">
            <Image
              src="/images/client-avatar3.jpg"
              alt="client"
              width={85}
              height={85}
            />
          </div>
          <div className="comment-content">
            <h4>Tom Cruise</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
              minus, saepe porro Link voluptatem, quidem aut libero consequatur
              unde molestiae quae impedit accusantium dolor est corporis!
              Dolores ut dignissimos doloribus?
            </p>
            <span>Dec 19, 2018 - 9:10AM</span>
            <Link href="#">Reply</Link>
          </div>
        </div>
      </div>

      <div className="leave-Link-reply">
        <h3 className="title mt-0">Leave Link Reply</h3>

        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Full Name"
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="E-Mail"
              />
            </div>
          </div>

          <div className="col-lg-12 col-md-12">
            <div className="form-group">
              <textarea
                name="comment"
                cols="30"
                rows="5"
                className="form-control"
                placeholder="Your Comment"
              ></textarea>
            </div>
          </div>

          <div className="col-lg-12 col-md-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
