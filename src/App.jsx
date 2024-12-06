import React from 'react'
import './styles/style.css';
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marque from './components/Marque'
import Services from './components/Services'
import Portfolio from './components/portfolio'
import Contact from './components/Contact'
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {
 

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-[113%] sm:w-[100%] min-h-screen bg-zinc-800 text-white'>
  
      <Navbar/>
      <LandingPage/>
      <Marque/>
      <Services/> 
      
      <Contact/>
    </div>
  )
}

export default App
