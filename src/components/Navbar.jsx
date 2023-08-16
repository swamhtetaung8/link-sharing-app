import React from 'react'
import {NavLink,Link} from "react-router-dom"
import {FaLink,FaRegUserCircle} from "react-icons/fa"
const Navbar = () => {
  return (
    <div className=' bg-white p-3 flex justify-between items-center rounded-lg'>
      <h1 className=' text-4xl font-bold'>devlinks</h1>
      <div className='flex gap-5 items-center'>
        <NavLink to="/" className={({isActive,isPending})=> isPending ? "" : isActive? "px-5 py-2 text-indigo-600 bg-indigo-50 rounded-lg font-medium duration-150 hover:bg-indigo-100 active:bg-indigo-200 flex items-center gap-2":"px-5 py-2 flex items-center gap-2 text-gray-600 font-medium"}>
        <FaLink/>
            <span>Links</span>
        </NavLink>
        <NavLink to="/profile-detail" className={({isActive,isPending})=> isPending ? " " : isActive? "px-5 py-2 text-indigo-600 bg-indigo-50 rounded-lg font-medium duration-150 hover:bg-indigo-100 active:bg-indigo-200 flex items-center gap-2":"px-5 py-2 flex items-center gap-2 text-gray-600 font-medium"}>
            <FaRegUserCircle/>
            <span>Profile Details</span>
        </NavLink>
      </div>
      <Link to="/preview" className='px-5 py-2 text-indigo-600 rounded-lg font-medium duration-150 border border-indigo-600 active:bg-indigo-100 active:border-indigo-400'>
        Preview
      </Link>
    </div>
  )
}

export default Navbar
