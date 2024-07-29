import Image from 'next/image';
import React from 'react';

export async function generateStaticParams() {
  // Define your static paths
  return [
    { params: { lang: 'en', slug: '1' } },
    { params: { lang: 'ar', slug: '2' } },
    { params: { lang: 'ch', slug: '3' } },
    { params: { lang: 'ru', slug: '4' } },
  ];
}

const Page = ({ params }) => {
  const { lang, slug } = params;

  return (
    <div className='teampage'>
      <div className='container mx-auto'>
        <div className='teams'>
          <div className='teams__left'>
            <Image src={"https://testingdigitaldmcc.com/raalc/webImages/team/2.png"} className='w-full' width={10} height={10} alt='' />
          </div>
          <div className='teams__Right'>
            <h1>{`Team ${slug} (${lang})`}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
