import React from 'react'
import phoneLayout from "../assets/phonelayout.png"
import { useSelector } from 'react-redux'
import { Skeleton } from '@mantine/core';
const Phone = () => {
  const {links} = useSelector(state=>state.userInfo);
  console.log(links)
  return (
    <div className=' flex-[0.3] bg-white p-5 rounded-lg relative flex items-center justify-center'>
      <img src={phoneLayout} className='w-[500px] h-[540px] object-contain text-center' alt="" />
      <div className="absolute top-0 flex flex-col items-center w-full h-full px-32 py-16">
        <Skeleton animate={false} height={80} circle mb="xl" />
        <Skeleton animate={false} height={14} radius="xl" width="70%" />
        <Skeleton animate={false} height={8} mt={10} mb={30} radius="xl" width="50%" />
        {links.map(link=>(
          link.added ? (
            <h1>Link</h1>
          ):(
            <Skeleton animate={false} height={40} mb={15} radius="md" width="90%" />
          )
        ))}
      </div>
    </div>
  )
}

export default Phone
