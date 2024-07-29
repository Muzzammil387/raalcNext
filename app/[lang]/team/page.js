
import React from 'react'

export async function generateStaticParams() {
  // Define all possible language codes
  const languages = ['en', 'ar', 'ch', 'ru'];
  
  // Generate the paths for each language
  const paths = languages.map((lang) => ({ lang }));
  return paths;
}

const page = () => {
  return (
   <div className='teampage'>

    <div className='teams'>
    </div>
   </div>
  )
}

export default page