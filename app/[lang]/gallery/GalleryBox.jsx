'use client'
import React, { useEffect } from 'react'
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import Link from 'next/link';
import Image from 'next/image';
import useFetch from '@/app/customHooks/useFetch';

const GalleryBox = ({lang}) => {
    const { loading, data } = useFetch(`webContents/gallery/${lang}`);
        useEffect(() => {
        Fancybox.bind('[data-fancybox="gallery"]', {
            //
        });
    }, []);
    if (loading) return ''  
    const {header} = data?.data
  return (
    <>
    <section className="innerPage1 relative py-10">
    <div className="container mx-auto px-6 border-b-2 border-[#ddd] pb-6">
        <div className="innerPage1_ w-[70%] mx-auto  text-center">
                <h1 className="font-Mluvka text-[3.3rem] font-bold leading-[1] uppercase mb-3">{header}</h1>  
        </div>
    </div>
</section>
 <section className="gallery relative">
        <div className="container mx-auto">
    <div className="galleryMain grid grid-cols-3 gap-6">
        {data?.data?.gallery_images.map((item,index) => {
            const {image} = item
            return (
            <Link href={image} key={index} data-fancybox="gallery">
                <Image src={image} className="w-full rounded-3xl h-[20rem] object-cover shadow-lg" width={500} height={500} loading="lazy" alt="portfolio-img" />
            </Link>
            )
        })}
            </div>
            </div>
    </section>
    </>
  )
}

export default GalleryBox