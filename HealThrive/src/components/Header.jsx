import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5"; // Optional: Close icon
import RegisterForm from './Registration'; // Importing the registration form component

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  return (
    <div className="w-full px-6 py-8 relative" >
      <div className="flex justify-between items-center">
        <h1 className='text-2xl md:text-4xl font-bold text-[#2DCF57] cursor-pointer'>HealThrive</h1>
        
        {/* Hamburger icon */}
        <div className="md:hidden text-3xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoClose /> : <GiHamburgerMenu />}
        </div>

        {/* Desktop Menu */}
        <ul className="space-x-6 font-semibold text-xl cursor-pointer md:flex hidden">
          <a href="#home"><li className='hover:text-[#2DCF57]'>Home</li></a>
          <a href="#about"><li className='hover:text-[#2DCF57]'>About</li></a>
          <a href="#doctors"><li className='hover:text-[#2DCF57]'>Doctors</li></a>
          <a href="#services"><li className='hover:text-[#2DCF57]'>Services</li></a>
          <a href="#contact"><li className='hover:text-[#2DCF57]'>Contact</li></a>
        </ul>

        {/* Desktop Buttons */}
        <div className="font-semibold hidden md:flex">
          <button className="px-4 py-2 rounded text-xl border-black border-2 hover:bg-blue-300 mr-4 cursor-pointer"
            onClick={() => setShowRegisterForm(true)}
          >Login</button>
          <button className="bg-[#2DCF57] text-white px-4 py-2 rounded text-xl cursor-pointer" onClick={() => setShowRegisterForm(true)}>Sign Up</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`md:hidden mt-6 space-y-4 transition-all duration-500 transform ${
    menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
  }`}>
          <ul className="flex flex-col gap-2 font-semibold text-lg items-center">
            <a href="#home"><li className='hover:text-[#2DCF57]'>Home</li></a>
            <a href="#about"><li className='hover:text-[#2DCF57]'>About</li></a>
            <a href="#doctors"><li className='hover:text-[#2DCF57]'>Doctors</li></a>
            <a href="#services"><li className='hover:text-[#2DCF57]'>Services</li></a>
            <a href="#contact"><li className='hover:text-[#2DCF57]'>Contact</li></a>
          </ul>
          <div className="flex flex-col mt-4 gap-3">
            <button className="px-4 py-2 rounded text-lg border-black border-2 hover:bg-blue-300 cursor-pointer" onClick={() => setShowRegisterForm(true)}>Login</button>
            <button className="bg-[#2DCF57] text-white px-4 py-2 rounded text-lg cursor-pointer" onClick={() => setShowRegisterForm(true)}>Sign Up</button>
          </div>
        </div>
      )}
      
      {/* Registration Form Modal */}
      {showRegisterForm && (
        <div className="fixed inset-0 z-50 w-screen h-full bg-[#EAFFF0]">
          <div className="md:p-8 rounded-lg shadow-lg w-full">
            <RegisterForm onClose={() => setShowRegisterForm(false)}/>
            <button 
              className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-gray-800"
              onClick={() => setShowRegisterForm(false)}
            >
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
