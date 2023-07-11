import React from 'react'
import logo from '../public/blibli.png'

const Navbar = () => {
  return (
    <div className='bg-primary flex justify-center items-center md:justify-start px-10 py-4'>
      <img src={logo} alt="logo" className='w-[75px] h-auto'/>
    </div>
  )
}

export default Navbar