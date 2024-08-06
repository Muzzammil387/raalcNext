"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import useFetch from '@/app/customHooks/useFetch';
import { StringConvert } from '@/components/StringConvert';

const NewsInner = ({ lang, slug }) => {
  const { loading, data } = useFetch(`news/fetch/${slug}/${lang}`);
  if (loading) return ''  
  const {author_name,author_details,title,description,date} = data?.data
  return (
    <section className="news2 py-5">
      <div className="container mx-auto">
        <div className="news2Main grid grid-cols-[7fr,3fr] gap-6">
          <div className="news2Main__left" style={{ minWidth: '0' }}>
            <div className="cardMain3Box" style={{ minWidth: '0' }}>
              <Swiper
                modules={[Autoplay]}
                slidesPerView={1}
                spaceBetween={0}
                speed={1000}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                className="about2BodySwiper"
                style={{ minWidth: 0 }}
              >
                {Array.isArray(data?.data?.news_images) &&
                  data?.data?.news_images.map((item, index) => {
                    const { image } = item;
                    return (
                      <SwiperSlide key={index}>
                        <div className="cardMain3Box__img">
                          <Image
                            src={image}
                            className="rounded-2xl w-full"
                            alt=""
                            width={500}
                            height={300}
                          />
                        </div>
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
              <div className="cardMain3BoxBody bg-[#FFFDFA] p-4">
                <ul className="list my-4">
                  <li className="flex justify-between text-[.9rem] font-light capitalize text-secondary">
                    <span>Ahmed K.</span> <span className="font-bold">April 29, 2024</span>
                  </li>
                </ul>
                <div className="h3 capitalize text-[1.625rem] font-light leading-[1] mb-3 font-Mluvka">
                  ICCA 2024 Hong Kong: <br /> The Global Arena for Arbitration
                </div>
                <p className="text-[.9rem] text-[#393946]">{StringConvert(description)}</p>
                <div className="bg-[#FFF2DE] py-3 px-5 rounded-lg mt-4">
                  <h4 className="text-secondary capitalize text-[1.5rem] font-Mluvka">
                    Published by {author_name}
                  </h4>
                  <p>{StringConvert(author_details)}</p>
                </div>
              </div>
            </div>
          </div>




          <div className="news2Main__right">
            <div className="cardMain3Box">
              <div className="cardMain3Box__img">
                <Image
                  src="/webImages/news/1.webp"
                  className="rounded-2xl w-full"
                  alt=""
                  width={500}
                  height={300}
                />
              </div>
              <div className="cardMain3BoxBody bg-[#FFFDFA] p-4">
                <ul className="list my-4">
                  <li className="flex justify-between text-[.9rem] font-light capitalize text-secondary">
                    <span>Ahmed K.</span> <span className="font-bold">April 29, 2024</span>
                  </li>
                </ul>
                <div className="h3 capitalize text-[1.625rem] font-light leading-[1] mb-3 font-Mluvka">
                  ICCA 2024 Hong Kong: The Global Arena for Arbitration
                </div>
                <p className="text-[.9rem] text-[#393946]">
                  The International Council for Commercial Arbitration (ICCA) stands as a beacon of excellence in the realm of dispute resolution, fostering ...
                </p>
                <a
                  href="News2.html"
                  className="mt-4 block w-fit border border-secondary rounded-full font-bold capitalize text-center py-2 px-8 mb-4 font-Mluvka"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="cardMain3Box">
              <div className="cardMain3Box__img">
                <Image
                  src="/webImages/news/2.webp"
                  className="rounded-2xl w-full"
                  alt=""
                  width={500}
                  height={300}
                />
              </div>
              <div className="cardMain3BoxBody bg-[#FFFDFA] p-4">
                <ul className="list my-4">
                  <li className="flex justify-between text-[.9rem] font-light capitalize text-secondary">
                    <span>Ahmed K.</span> <span className="font-bold">April 29, 2024</span>
                  </li>
                </ul>
                <div className="h3 capitalize text-[1.625rem] font-light leading-[1] mb-3 font-Mluvka">
                  ICCA 2024 Hong Kong: The Global Arena for Arbitration
                </div>
                <p className="text-[.9rem] text-[#393946]">
                  The International Council for Commercial Arbitration (ICCA) stands as a beacon of excellence in the realm of dispute resolution, fostering ...
                </p>
                <a
                  href="News2.html"
                  className="mt-4 block w-fit border border-secondary rounded-full font-bold capitalize text-center py-2 px-8 mb-4 font-Mluvka"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsInner;
