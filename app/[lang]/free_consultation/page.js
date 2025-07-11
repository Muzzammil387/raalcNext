import React from 'react'
// import ServicesMain from './ServicesMain';
import config from "../../services/config.json";
import axios from 'axios';

export async function generateMetadata({ params, searchParams }) {
  const { lang } = params;

  const baseUrl = `${config.websiteRootUrl}`;
}

const page = ({ params }) => {
  const { lang } = params;
  return (
    <div>
     
    </div>
  )
}

export default page