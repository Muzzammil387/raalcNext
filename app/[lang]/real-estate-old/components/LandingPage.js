"use client"
import React from 'react'
import Image from 'next/image'
import useFetch from '@/app/customHooks/useFetch'
import Loaders from '@/components/Loaders'
import Header from './Header'

const LandingPage = ({lang}) => {
    const { loading, data } = useFetch(`webContents/aboutUs/${lang}`);
    if(loading) return <Loaders />
  return (
    <div>
       <div>
       <Header/>
       </div>
    </div>
  )
}

export default LandingPage