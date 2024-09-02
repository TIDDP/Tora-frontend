import React from 'react'
import Navbar from './Navbar'
import logo from '../assets/images/logo.svg'


const Header = () => {
  return (
    <div className=' font-bold bg-light-orange '>
      <header className="sticky flex items-center mx-auto top-0 flex-wrap z-[20] justify-between">
     <div className=''>
     <img src={logo} width={100} height={100} />
     </div>
      <Navbar/>
    </header>
    </div>
  )
}

export default Header
