import React from 'react'
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#EAFFF0] text-white py-8 flex flex-col items-center w-full">
     <div className="flex flex-row items-start w-full max-w-6xl">
        <div className="flex flex-col items-start w-full">
            <h2 className="text-2xl font-bold mb-4 text-[#2DCF57]">HealThrive</h2>
            <p className="text-gray-600 w-full md:w-3/4">
                Your health is our priority. We are committed to providing the best healthcare services to help you thrive. Our team of dedicated professionals is here to support you on your journey to better health.
            </p>
            <div className="flex justify-center mt-4">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-500 transition-colors duration-200">
                    <FaFacebook className="text-2xl" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-500 transition-colors duration-200 ml-4">
                    <FaLinkedin className="text-2xl" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-500 transition-colors duration-200 ml-4">
                    <FaInstagram className="text-2xl" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-500 transition-colors duration-200 ml-4">
                    <FaTwitter className="text-2xl" />  
                </a>
            </div>
        </div>
        <div className="mt-8 md:mt-0 md:ml-8 w-full md:w-1/3">
            <h3 className='text-black font-bold text-lg' >Quick Links</h3>
            <ul className="list-none mt-2 cursor-pointer">
                <li className="text-gray-600 hover:text-blue-500 transition-colors duration-200">Home</li>
                <li className="text-gray-600 hover:text-blue-500 transition-colors duration-200">About Us</li>
                <li className="text-gray-600 hover:text-blue-500 transition-colors duration-200">Services</li>
                <li className="text-gray-600 hover:text-blue-500 transition-colors duration-200">Contact</li>
                <li className="text-gray-600 hover:text-blue-500 transition-colors duration-200">Privacy Policy</li>
            </ul>
        </div>
        <div className="mt-8 md:mt-0 md:ml-8 w-full md:w-1/3">
            <h3 className='text-black font-bold text-lg'>Services</h3>
            <ul className="list-none mt-2 cursor-pointer">
                <li className="text-gray-600 hover:text-blue-500 transition-colors duration-200">General Consultation</li>
                <li className="text-gray-600 hover:text-blue-500 transition-colors duration-200">Specialized Treatments</li>
                <li className="text-gray-600 hover:text-blue-500 transition-colors duration-200">Emergency Care</li>
                <li className="text-gray-600 hover:text-blue-500 transition-colors duration-200">Health Check-ups</li>
                <li className="text-gray-600 hover:text-blue-500 transition-colors duration-200">Wellness Programs</li>
            </ul>
        </div>
        <div className="mt-8 md:mt-0 md:ml-8 w-full md:w-1/3">
            <h3 className='text-black font-bold text-lg'>Location</h3>
            <p className="text-gray-600 mt-2">
                123 HealThrive St,<br />
                Wellness City, HC 12345<br />
            </p>
        </div>
     </div>
     <hr className="w-6xl border-gray-900 mt-16" />
     <p className="text-center text-gray-600 mt-4">
       &copy; {new Date().getFullYear()} HealThrive. All rights reserved.
     </p>
    </footer>
  )
}

export default Footer