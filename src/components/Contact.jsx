import React from 'react'
import Swal from 'sweetalert2'
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import paperplane from '../assets/paperplane.png'

function Contact() {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "bd36e9b5-d3cd-448c-8101-179ebb5cef0f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Submitted!!",
        text: "We'll get back to you shortly!",
        icon: "success"
      });
    }
  };


  return (
    <div id='contact' className= 'sm:w-full w-[100%] min-h-[100vh] '>
      <h1 className='mt-[6rem] text-center text-6xl font-semibold '>Contact Us</h1>
      <p className='text-center sm:text-xl text-lg mt-5 sm:mx-0 mx-5'>For any queries or to get in touch with us fill the below form </p>
      <img className='sm:w-[250px] w-[190px] absolute right-[10%] ' src={paperplane} alt="" />
      <div className='flex sm:flex-row flex-col mt-[9rem] justify-between '>
      <form onSubmit={onSubmit} className='sm:ml-[9rem] ml-[2rem]  flex flex-col sm:w-[30vw] w-[90vw] ' action="">
        <label className='mr-5 sm:text-lg text-sm mb-3 text-zinc-400' htmlFor="name">Name :</label>
        <input className='bg-zinc-700 mb-3 p-2 rounded-lg outline-none' type='text' placeholder='Enter Your Name' id='name' name='name' required/>
        <label className='mr-5 sm:text-lg text-sm mb-3  text-zinc-400' htmlFor="name">Email :</label>
        <input className='bg-zinc-700 mb-3 p-2 rounded-lg outline-none' type="email" placeholder='Enter Your E-mail' id='name' name='email' required/>
        <label className='mr-5 sm:text-lg text-sm mb-3 capitalize  text-zinc-400' htmlFor="name">Any social media handle (Instagram, LinkedIn, Youtube etc) :</label>
        <input className='bg-zinc-700 mb-3 p-2 rounded-lg outline-none' type="text" placeholder='Link/Username' id='name' name='socialmedia'/>
        <input className=' rounded-lg sm:w-[20%] w-[31%] m-auto py-1 bg-blue-600 font-medium mt-7 cursor-pointer'  type="submit" value="Submit" />
      </form>

      <div className='sm:w-[30vw] w-[113vw] h-[37vh] mr-[5rem] sm:mt-0 mt-11 sm:border-l-2 border-l-0 sm:border-t-0 border-t-2 border-zinc-500'>
        <div className='flex items-center gap-2 ml-11 mt-11 cursor-pointer hover:text-zinc-400 '><FaInstagram className='text-3xl'/>
        <h2 className='sm:text-2xl text-xl font-semibold'><a target='_blank' href="https://tailwindcss.com/docs/align-items">Instagram</a></h2></div>
        <div className='flex items-center gap-2 ml-11 cursor-pointer mt-7 hover:text-zinc-400 '><MdOutlineMail className='text-3xl'/>
        <h2 className='sm:text-2xl text-xl font-semibold'>E-mail</h2></div>
        <div className='flex items-center gap-2 ml-11 cursor-pointer mt-7 hover:text-zinc-400 '><IoLogoLinkedin className='text-3xl'/>
        <h2 className='sm:text-2xl text-xl font-semibold'>LinkedIn</h2></div>
      
      </div>

      </div>

      
      
     
      
    </div>
  )
}

export default Contact
