import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Nav = () => {
  return (
    <div>
    <div className='bg-black flex flex-wrap just px-8 py-8 justify-between'>
      <div className='text-white text-3xl'>Todo List</div>
      <div className='flex gap-5'>
      <div className='flex gap-5'>
        <Link  to="/"><button className='text-xl text-white'>Home</button></Link>
      </div>
      <div className='flex gap-5'>
        <Link  to="/Add"><button className='text-xl text-white'>Add todo List</button></Link>
      </div>
      <div className='flex gap-5'>
        <Link  to="/list"><button className='text-xl text-white'>List</button></Link>
      </div>
      </div>
      
    </div>
    <Outlet />
    </div>
  )
}
