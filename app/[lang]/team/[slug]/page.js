
import React from 'react';
import Test from './Test';

const Page = ({ params }) => {
const {slug} = params
console.log(params)
  return (
    <div>page <Test data={params} /> {slug}</div>
  );
};

export default Page;
