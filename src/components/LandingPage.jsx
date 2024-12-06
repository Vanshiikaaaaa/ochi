import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import { Link } from 'react-scroll';

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className=' sm:w-full w-[100%] sm:h-screen h-[70vh] bg-zinc-800 pt-2' id='home'>
     <div className="textstructure sm:mt-44 mt-28 pl-10">
      {["we create", "eye opening", "presentations"].map((item, index)=>{
       return <div className="masker">
        <div className='w-fit flex items-center'>
        <h1 className='uppercase sm:text-[6vw] text-[8vw]  leading-[9vw] sm:leading-[6.2vw] tracking-tighter font-medium'>{item}</h1>
        </div>
      </div>
      })}
      

     </div>
     <div className='border-t-2 border-zinc-700 mt-14 sm:mt-28 flex items-center sm:justify-between justify-center flex-col sm:flex-row py-5 sm:px-20 px-2 '>
      {["For agencies and companies", "From content creators to businesses "].map((item, index)=>(
        <p className='text-md font-light tracking-tight text-white sm:leading-none leading-9 text-left '>{item}</p>
      ))}
      <div className='start flex items-center gap-3 group mt-5'>
      <div className='border-[2px] border-zinc-700 px-5 py-2 rounded-full font-medium capitalize transition duration-300 group-hover:bg-white group-hover:text-black hover:font-medium'><Link
            to="services" // Target section id
            smooth={true}  // Enable smooth scroll
            duration={500} // Duration of the scroll (500ms)
            offset={-70}   // Adjust the offset if you have a fixed navbar
            
          >
            View our Services
          </Link></div>
      <div className="relative w-8 h-8 rounded-full border-2 border-zinc-700 flex items-center justify-center overflow-hidden">
          {/* Splash Effect */}
          <div className="absolute inset-0 rounded-full bg-white scale-0 group-hover:scale-100 transition-transform duration-300 ease-out "></div>
          
          {/* Icon */}
          <span className="relative text-white rotate-[40deg] group-hover:text-black transition duration-300">
          <Link
            to="services" // Target section id
            smooth={true}  // Enable smooth scroll
            duration={500} // Duration of the scroll (500ms)
            offset={-70}   // Adjust the offset if you have a fixed navbar
            
          >
            <FaArrowUpLong />
          </Link>
          
          </span>
        </div>
      
      </div>
     </div>
    </div>
    
  )
}

export default LandingPage
