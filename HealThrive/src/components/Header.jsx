import React from 'react'

function Header() {
  return (
      <div className="flex justify-between w-full items-center py-8 ">
        <h1 className='md:text-4xl font-bold text-[#2DCF57] cursor-pointer'>HealThrive</h1>
        <ul className="flex flex-wrap space-x-6 font-semibold text-xl cursor-pointer">
            <li className='hover:text-[#2DCF57]' >Home</li>
            <li className='hover:text-[#2DCF57]' >About</li>
            <li className='hover:text-[#2DCF57]' >Doctors</li>
            <li className='hover:text-[#2DCF57]' >Services</li>
            <li className='hover:text-[#2DCF57]' >Contact</li>
        </ul>
        <div className="flex justify-end font-semibold ">
          <button className="px-4 py-2 rounded text-xl border-black border-2 hover:bg-blue-300 mr-2 cursor-pointer">Login</button>
          <button className="bg-[#2DCF57] text-white px-4 py-2 rounded ml-2 text-xl cursor-pointer">Sign Up</button>
        </div>
      </div>  
  )
}

export default Header