import { Spin } from 'antd'
import React from 'react'

const Loaders = () => {
  return (
    <div className='loader bg-[#fff] absolute w-full top-0 left-0 h-screen grid place-items-center z-[999999]'>
<Spin size="large" />
    </div>
  )
}

export default Loaders