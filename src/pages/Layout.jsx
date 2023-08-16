import React from 'react'
import Navbar from '../components/Navbar'
import Phone from '../components/Phone'

const Layout = ({children}) => {
  return (
    <div className='p-5 space-y-5 '>
      <Navbar/>
      <div className="flex gap-5">
        <Phone/>
        <div className=' bg-white p-5 flex-[0.7] rounded-lg'>
        {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
