import React from 'react'
import Image from 'next/image';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    
<div >
      {/* Top Bar */}

      <div className=" hidden md:flex justify-between items-center p-4 bg-gray-100 text-sm ">
        <span>Phone Number: 956-742-458-678</span>
        <span>Email: info@ddsgnr.com</span>
        <div className="flex space-x-4">
        <FaFacebookF />
        <FaInstagram />
        <FaTwitter />
        <FaLinkedin />

        </div>
</div>

{/* Header Section */}
<header className="flex justify items-center py-6 px-8 border-b ">
 
   <Image src="/image/Frame 1.png" alt="logo1" width={26}  height={28} className='max-w-' /> 
 

        <div className="text-3xl font-bold flex  ">
          <span className=" mr-72 ">Ddsgnr</span></div>
        <nav className="hidden md:flex  justify-end items-end space-x-5 text-gray-600 text-[20px] ">
        
          <a href="#" className="hover:text-black hover:underline">Home</a>
          <a href="#" className="hover:text-black hover:underline  ">Courses</a>
          <a href="#" className="hover:text-black hover:underline">Services</a>
          <a href="#" className="hover:text-black hover:underli+ne">Achievement</a>
          <a href="#" className="hover:text-black hover:underline">About Us</a>
          <a href="#" className="hover:text-black hover:underline">Testimonial</a>
          <div className='flex space-x-8'> 
          <button className="text-gray- 600 hover:text-black">Login</button>
          <button className="bg-black text-white p-1 rounded-md">Sign Up</button>
        
        </div>
          
        </nav>
        <div className='text-4xl  md:hidden '>&#8801;</div>
      </header>

     

   
   </div>
    )
}

export default Navbar