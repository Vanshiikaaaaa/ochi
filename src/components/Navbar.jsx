import React from 'react';
import { Link } from 'react-scroll';


import { RxHamburgerMenu } from "react-icons/rx";

{/* <RxHamburgerMenu /> */}


function Navbar() {
  return (
    <div className= " fixed z-[999] w-[100%] px-9 sm:px-12 py-8 flex justify-between items-center" >
      <div className='logo'><h3 className=' text-xl sm:text-2xl font-medium'>MARCATIX</h3></div>
      <div className='w-3 h-3 sm:hidden block items-center'><RxHamburgerMenu /></div>
      <div className='links sm:flex hidden gap-10'>
      {[
    { name: "Home", href: "home" },
    { name: "Our Services", href: "services" },
    // { name: "Portfolio", href: "portfolio" },
    { name: "Contact Us", href: "contact" }
  ].map((item, index) => (
    <Link
            key={index}
            to={item.href} // Target the section using the 'id' of that section
            smooth={true}  // Smooth scrolling enabled
            duration={500} // Duration for scrolling
            offset={-70}   // Adjust for fixed navbar height
            className="text-md capitalize font-light cursor-pointer hover:text-zinc-400"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar
