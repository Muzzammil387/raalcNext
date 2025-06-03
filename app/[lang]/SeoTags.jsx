'use client';

import { usePathname } from 'next/navigation';

export default function SeoTags({ baseUrl, currentLang }) {
  const pathname = usePathname();
   const cleanPath = pathname.replace(/^\/(en|ar|ru|ch)(\/|$)/, '/');

  return (
    <>
      <link rel="canonical" href={`${baseUrl}${pathname}`} />
      <link rel="alternate" hreflang="en" href={`${baseUrl}/en${cleanPath}`} />
      <link rel="alternate" hreflang="ar" href={`${baseUrl}/ar${cleanPath}`} />
      <link rel="alternate" hreflang="x-default" href={`${baseUrl}${cleanPath}`} />
    </>
  );
}