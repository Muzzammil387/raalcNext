'use client'
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect } from 'react'

const page = () => {
    // useEffect(() => {
    //     Fancybox.bind('[data-fancybox="gallery"]', {
    //         //
    //     });
    // }, []);
  return (
   <>
       <div class="InnerPageBox1 absolute w-[22rem] h-[22rem] opacity-5 bg-primary left-0 top-[50%]"></div>
    <div class="InnerPageBox2"></div>
    <section class="innerPage1 relative py-10">
        <div class="container mx-auto px-6 border-b-2 border-[#ddd] pb-6">
            <div class="innerPage1_ w-[70%] mx-auto  text-center">
                    <h1 class="font-Mluvka text-[3.3rem] font-bold leading-[1] uppercase mb-3">media gallery</h1>  
            </div>
        </div>
    </section>
    <section class="gallery relative">
        <div class="container mx-auto">
            <div class="galleryMain grid grid-cols-3 gap-6">
                    <Link href="https://testingdigitaldmcc.com/raalc/webImages/gallery/1.webp" data-fancybox="gallery">
                        <Image src="https://testingdigitaldmcc.com/raalc/webImages/gallery/1.webp" class="w-full" width={500} height={500} loading="lazy" alt="portfolio-img" />
                    </Link>
                    <Link href="https://testingdigitaldmcc.com/raalc/webImages/gallery/2.webp" data-fancybox="gallery">
                        <Image src="https://testingdigitaldmcc.com/raalc/webImages/gallery/2.webp" class="w-full" width={500} height={500} loading="lazy" alt="portfolio-img" />
                    </Link>
                    <Link href="https://testingdigitaldmcc.com/raalc/webImages/gallery/3.webp" data-fancybox="gallery">
                        <Image src="https://testingdigitaldmcc.com/raalc/webImages/gallery/3.webp" class="w-full" width={500} height={500} loading="lazy" alt="portfolio-img" />
                    </Link>
                    <Link href="https://testingdigitaldmcc.com/raalc/webImages/gallery/4.webp" data-fancybox="gallery">
                        <Image src="https://testingdigitaldmcc.com/raalc/webImages/gallery/4.webp" class="w-full" width={500} height={500} loading="lazy" alt="portfolio-img" />
                    </Link>
                    <Link href="https://testingdigitaldmcc.com/raalc/webImages/gallery/5.webp" data-fancybox="gallery">
                        <Image src="https://testingdigitaldmcc.com/raalc/webImages/gallery/5.webp" class="w-full" width={500} height={500} loading="lazy" alt="portfolio-img" />
                    </Link>
                    <Link href="https://testingdigitaldmcc.com/raalc/webImages/gallery/6.webp" data-fancybox="gallery">
                        <Image src="https://testingdigitaldmcc.com/raalc/webImages/gallery/6.webp" class="w-full" width={500} height={500} loading="lazy" alt="portfolio-img" />
                    </Link>
            </div>
        </div>
    </section>
   </>
  )
}

export default page