'use client'
import React, { useEffect } from 'react'
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import Link from 'next/link';
import Image from 'next/image';

const GalleryBox = () => {
        useEffect(() => {
        Fancybox.bind('[data-fancybox="gallery"]', {
            //
        });
    }, []);
  return (
    <div className="galleryMain grid grid-cols-3 gap-6">
                    <Link href="https://testingdigitaldmcc.com/raalc/webImages/gallery/1.webp" data-fancybox="gallery">
                        <Image src="https://testingdigitaldmcc.com/raalc/webImages/gallery/1.webp" className="w-full" width={500} height={500} loading="lazy" alt="portfolio-img" />
                    </Link>
                    <Link href="https://testingdigitaldmcc.com/raalc/webImages/gallery/2.webp" data-fancybox="gallery">
                        <Image src="https://testingdigitaldmcc.com/raalc/webImages/gallery/2.webp" className="w-full" width={500} height={500} loading="lazy" alt="portfolio-img" />
                    </Link>
                    <Link href="https://testingdigitaldmcc.com/raalc/webImages/gallery/3.webp" data-fancybox="gallery">
                        <Image src="https://testingdigitaldmcc.com/raalc/webImages/gallery/3.webp" className="w-full" width={500} height={500} loading="lazy" alt="portfolio-img" />
                    </Link>
                    <Link href="https://testingdigitaldmcc.com/raalc/webImages/gallery/4.webp" data-fancybox="gallery">
                        <Image src="https://testingdigitaldmcc.com/raalc/webImages/gallery/4.webp" className="w-full" width={500} height={500} loading="lazy" alt="portfolio-img" />
                    </Link>
                    <Link href="https://testingdigitaldmcc.com/raalc/webImages/gallery/5.webp" data-fancybox="gallery">
                        <Image src="https://testingdigitaldmcc.com/raalc/webImages/gallery/5.webp" className="w-full" width={500} height={500} loading="lazy" alt="portfolio-img" />
                    </Link>
                    <Link href="https://testingdigitaldmcc.com/raalc/webImages/gallery/6.webp" data-fancybox="gallery">
                        <Image src="https://testingdigitaldmcc.com/raalc/webImages/gallery/6.webp" className="w-full" width={500} height={500} loading="lazy" alt="portfolio-img" />
                    </Link>
            </div>
  )
}

export default GalleryBox