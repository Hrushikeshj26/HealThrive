import React from 'react'

function Header() {
  return (
      <div className="flex justify-between w-full items-center py-8">
        <h1 className='text-4xl font-bold text-[#2DCF57]'>oxcare</h1>
        <ul className="flex space-x-6 font-semibold text-xl">
            <li>Home</li>
            <li>About</li>
            <li>Doctors</li>
            <li>Services</li>
            <li>Contact</li>
        </ul>
        <div className="flex justify-end font-semibold">
          <button className="px-4 py-2 rounded text-xl border-black border-2 hover:bg-blue-300 mr-2">Login</button>
          <button className="bg-[#2DCF57] text-white px-4 py-2 rounded ml-2 text-xl">Sign Up</button>
        </div>
      </div>  
  )
}

export default Header