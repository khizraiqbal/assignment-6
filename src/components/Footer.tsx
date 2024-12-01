// components/Footer.tsx
import React from "react";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 py-8">
          {/* Newsletter Section */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
            <div className="md:w-1/3">
              <h3 className="text-lg font-semibold text-gray-900">Subscribe to our newsletter</h3>
              <p className="text-gray-500 text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="mt-4 md:mt-0 md:w-1/3">
              <form className="flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full md:w-auto flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gray-900 text-white rounded-r-md hover:bg-gray-800"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-gray-500 text-xs mt-2">
                By subscribing you agree to our{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
  
          {/* Links Section */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm text-gray-700 justify-center items-center">
            {/* Logo */}
            <div className="flex justify-center items-center text-center py-6 px-8 border-b ">
            
 
   <Image src="/image/Frame 1.png" alt="logo1" width={26}  height={28} className='md:mb-40 '/> 
 

        <div className="text-3xl font-bold flex justify-center items-center ">
          <span className=" md:mb-40 ">Ddsgnr</span></div>
          
            </div>
  
            {/* Links Columns */}
            <div className=" text-center">
              <h5 className="font-semibold mb-3">Courses</h5>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Business</a></li>
                <li><a href="#" className="hover:underline">Development</a></li>
                <li><a href="#" className="hover:underline">Technology</a></li>
                <li><a href="#" className="hover:underline">Design</a></li>
                <li><a href="#" className="hover:underline">Programming</a></li>
              </ul>
            </div>
  
            <div className=" text-center">
              <h5 className="font-semibold mb-3">Resources</h5>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Career</a></li>
                <li><a href="#" className="hover:underline">Resume</a></li>
                <li><a href="#" className="hover:underline">Learning</a></li>
                <li><a href="#" className="hover:underline">Interview Preparation</a></li>
                <li><a href="#" className="hover:underline">Jobs</a></li>
              </ul>
            </div>
  
            <div className=" text-center">
              <h5 className="font-semibold mb-3">About Us</h5>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Contact</a></li>
                <li><a href="#" className="hover:underline">Help/Support</a></li>
                <li><a href="#" className="hover:underline">FAQ</a></li>
                <li><a href="#" className="hover:underline">Terms and Conditions</a></li>
                <li><a href="#" className="hover:underline">Partners</a></li>
              </ul>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="mt-8 border-t border-gray-300 pt-4 flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs">
            <p>© 2023 Ddsgnr. All rights reserved.</p>
            <ul className="flex space-x-4 mt-2 md:mt-0">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">Cookies Settings</a></li>
            </ul>
            <div className=" text-black flex space-x-4 mt-2 md:mt-0 ">
            <FaFacebookF />
        <FaInstagram />
        <FaTwitter />
        <FaLinkedin />
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  