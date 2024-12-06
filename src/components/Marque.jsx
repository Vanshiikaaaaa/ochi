import React from 'react'
import {motion} from 'framer-motion'

function marque() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed = " .1"className='  sm:w-full w-[100%] sm:py-20 py-16  bg-[#004D43] sm:rounded-tl-3xl rounded-tl-xl sm:rounded-tr-3xl rounded-tr-xl'>
     <div className="text  flex whitespace-nowrap overflow-hidden py-5">
      <motion.h1 initial = {{x: "0"}} animate = {{x: "-100%"}} transition = {{repeat: Infinity, ease: "linear", duration: 10}} className='sm:text-[10vw] text-[16vw] leading-none font-medium uppercase pb-4 pr-10'>We Are Marcatix.</motion.h1>
      <motion.h1 initial = {{x: "0"}} animate = {{x: "-100%"}} transition = {{repeat: Infinity, ease: "linear", duration: 10}} className='sm:text-[10vw] text-[16vw] leading-none font-medium uppercase pb-4 pr-10'>We Are Marcatix.</motion.h1>
      <motion.h1 initial = {{x: "0"}} animate = {{x: "-100%"}} transition = {{repeat: Infinity, ease: "linear", duration: 10}} className='sm:text-[10vw] text-[16vw] leading-none font-medium uppercase pb-4 pr-10'>We Are Marcatix.</motion.h1>
      <motion.h1 initial = {{x: "0"}} animate = {{x: "-100%"}} transition = {{repeat: Infinity, ease: "linear", duration: 10}} className='sm:text-[10vw] text-[16vw] leading-none font-medium uppercase pb-4 pr-10'>We Are Marcatix.</motion.h1>
      <motion.h1 initial = {{x: "0"}} animate = {{x: "-100%"}} transition = {{repeat: Infinity, ease: "linear", duration: 10}} className='sm:text-[10vw] text-[16vw] leading-none font-medium uppercase pb-4 pr-10'>We Are Marcatix.</motion.h1>
      <motion.h1 initial = {{x: "0"}} animate = {{x: "-100%"}} transition = {{repeat: Infinity, ease: "linear", duration: 10}} className='sm:text-[10vw] text-[16vw] leading-none font-medium uppercase pb-4 pr-10'>We Are Marcatix.</motion.h1>
      
     </div>
    </div>
  )
}

export default marque
