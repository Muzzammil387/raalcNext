"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import useFetch from '@/app/customHooks/useFetch';
import { StringConvert } from '@/components/StringConvert';
import dayjs from 'dayjs';
import Link from 'next/link';

const truncateText = (text, maxLength) => {
  if(text) {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  }
  return text;
};

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
                    return (
                      <SwiperSlide key={index}>
                        <div className="cardMain3Box__img">
                          <Image
                            src={item?.image}
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
                    <span>{author_name}</span> <span className="font-bold">{date}</span>
                  </li>
                </ul>
                <div className="h3 capitalize text-[1.625rem] font-light leading-[1] mb-3 font-Mluvka">
                  {title}
                </div>
                <p className="text-[.9rem] text-[#393946] newdetails">{StringConvert(description)}</p>
                <div className="bg-[#FFF2DE] py-3 px-5 rounded-lg mt-4">
                  <h4 className="text-secondary capitalize text-[1.5rem] font-Mluvka">
                    Published by {author_name}
                  </h4>
                  <div>{StringConvert(author_details)}</div>
                </div>
              </div>
            </div>
          </div>




          <div className="news2Main__right">
            {data?.latest_data.map((item) => {
              const {id,slug,author_name,date,news_images,title} = item

              const maxLength = 300;
              const truncatedText = truncateText(description, maxLength);
              const formattedDate = dayjs(date).format('MMMM D, YYYY');
              return (
                <div className="cardMain3Box" key={id}>
                <div className="cardMain3Box__img">
                  <Image
                    src={news_images[0]}
                    className="rounded-2xl w-full"
                    alt=""
                    width={500}
                    height={300}
                  />
                </div>
                <div className="cardMain3BoxBody bg-[#FFFDFA] p-4">
                  <ul className="list my-4">
                    <li className="flex justify-between text-[.9rem] font-light capitalize text-secondary">
                      <span>{author_name}</span> <span className="font-bold">{formattedDate}</span>
                    </li>
                  </ul>
                  <div className="h3 capitalize text-[1.625rem] font-light leading-[1] mb-3 font-Mluvka">{title}</div>
                  <p className="text-[.9rem] text-[#393946]">{StringConvert(truncatedText)}</p>
                  <Link href={`/news/${slug}`} className='mt-4 block w-fit border border-secondary rounded-full  font-bold capitalize text-center py-2 px-8 mb-4 font-Mluvka ' > Read More </Link>
                </div>
              </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsInner;