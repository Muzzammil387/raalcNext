"use client"
import React, { useEffect } from 'react'

const Test = (data) => {
    useEffect(() => {
        console.log('Params:', data);
      }, [data]);
  return (
    <div>Test</div>
  )
}

export default Test