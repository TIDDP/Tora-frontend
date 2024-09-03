import menu from '../assets/icons/menu.svg'
import close from '../assets/icons/close.svg'
import { useState } from "react"
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [ isOpen , setIsOpen]= useState(false);
    const toggle = () =>{
         setIsOpen(!isOpen)
    }
  return (
   <>
   <nav className=" w-1/6 flex items-center  m-7 justify-end">
     <div className=" hidden w-full md:flex  justify-between ">
      <Link to='/features'>Features</Link>
       <Link to='/about'>About </Link>
       <Link to='/signup'>SignUp</Link>
     </div>
    <div>
      <button
      onClick={toggle}
      className="md:hidden"
      >
     <img src={isOpen? close : menu} width={30} height={30} />

      </button>
    </div>
   </nav>
      { isOpen &&(
        <div className='flex flex-col items-center basis-full'>
        <Link to='/features'>Features</Link>
        <Link to='/about'>About </Link>
        <Link to='/signup'>SignUp</Link>
        </div>
       )}
       </>
  )
}

export default Navbar
