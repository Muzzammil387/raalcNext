'use client';

import { usePathname } from 'next/navigation';

export default function SeoTags({ baseUrl, currentLang }) {
  const pathname = usePathname();

  return (
    <>
      <link rel="canonical" href={`${baseUrl}${pathname}`} />
      <link rel="alternate" hreflang="en" href={`${baseUrl}/en${pathname}`} />
      <link rel="alternate" hreflang="ar" href={`${baseUrl}/ar${pathname}`} />
      <link rel="alternate" hreflang="x-default" href={`${baseUrl}${pathname}`} />
    </>
  );
}