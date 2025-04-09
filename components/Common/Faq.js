"use client";

import React from "react";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";

const Faq = () => {
  return (
    <>
      <section className="faq-area ptb-80">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <h2>
              Frequently Asked <span>Question</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-7 col-md-12">
              <Accordion>
                <AccordionItem header="What harsh truths do you prefer to ignore?">
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
                  </p>
                </AccordionItem>

                <AccordionItem header="Is free will real or just an illusion?">
                  <p>
                    In ad velit in ex nostrud dolore cupidatat consectetur ea in
                    ut nostrud velit in irure cillum tempor laboris sed
                    adipisicing eu esse duis nulla non.
                  </p>
                </AccordionItem>

                <AccordionItem header="Is free will real or just an illusion?">
                  <p>
                    In ad velit in ex nostrud dolore cupidatat consectetur ea in
                    ut nostrud velit in irure cillum tempor laboris sed
                    adipisicing eu esse duis nulla non.
                  </p>
                </AccordionItem>

                <AccordionItem header="Is free will real or just an illusion?">
                  <p>
                    In ad velit in ex nostrud dolore cupidatat consectetur ea in
                    ut nostrud velit in irure cillum tempor laboris sed
                    adipisicing eu esse duis nulla non.
                  </p>
                </AccordionItem>

                <AccordionItem header="Is free will real or just an illusion?">
                  <p>
                    In ad velit in ex nostrud dolore cupidatat consectetur ea in
                    ut nostrud velit in irure cillum tempor laboris sed
                    adipisicing eu esse duis nulla non.
                  </p>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="col-lg-5 col-md-12">
              <div
                className="image"
                style={{ backgroundImage: `url(/images/faq-img.jpg)` }}
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-once="true"
                data-aos-duration="1000"
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
