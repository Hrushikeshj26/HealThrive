import React from 'react'

function Dashbox() {
  return (
    <div className="flex flex-wrap items-center justify-center py-25 w-full ">
        <div className="bg-[#2DCF57] shadow-xl/75 rounded-4xl mx-4 p-12 w-[20rem] text-center text-white cursor-pointer hover:scale-105 transition-transform duration-300">
            <h2 className='font-bold text-6xl pb-4'>24/7</h2>
            <p>Online Support</p>
        </div>
        <div className="bg-black shadow-xl/75 rounded-4xl mx-4 p-12 w-[20rem] text-center text-white cursor-pointer hover:scale-105 transition-transform duration-300">
            <h2 className='font-bold text-6xl pb-4'>100+</h2>
            <p>Doctors</p>
        </div>
        <div className="bg-[#2DCF57] shadow-xl/75 rounded-4xl mx-4 p-12 w-[20rem] text-center text-white cursor-pointer hover:scale-105 transition-transform duration-300">
            <h2 className='font-bold text-6xl pb-4'>1M+</h2>
            <p>Active Patients</p>
        </div>
        <div className="bg-black shadow-xl/75 rounded-4xl mx-4 p-12 w-[20rem] text-center text-white cursor-pointer hover:scale-105 transition-transform duration-300">
            <h2 className='font-bold text-6xl pb-4'>5M+</h2>
            <p>Interested</p>
        </div>
    </div>
  )
}

export default Dashbox