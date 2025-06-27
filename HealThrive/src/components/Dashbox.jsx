import React from 'react'

function Dashbox() {
  return (
    <div className="flex flex-wrap items-center justify-center py-12 md:py-25" data-aos="fade-up" data-aos-delay="400" 
  data-aos-duration="800">
        <div className="bg-[#2DCF57] shadow-xl/75 rounded-xl md:rounded-4xl m-4 p-4 w-36 md:p-12 md:w-[20rem] text-center text-white cursor-pointer hover:scale-105 transition-transform duration-300">
            <h2 className='font-bold text-xl md:text-6xl pb-4'>24/7</h2>
            <p>Online Support</p>
        </div>
        <div className="bg-black shadow-xl/75 rounded-xl md:rounded-4xl m-4 p-4 w-34 md:p-12 md:w-[20rem] text-center text-white cursor-pointer hover:scale-105 transition-transform duration-300">
            <h2 className='font-bold text-xl md:text-6xl pb-4'>100+</h2>
            <p>Doctors</p>
        </div>
        <div className="bg-[#2DCF57] shadow-xl/75 rounded-xl md:rounded-4xl m-4 p-4 w-34 md:p-12 md:w-[20rem] text-center text-white cursor-pointer hover:scale-105 transition-transform duration-300">
            <h2 className='font-bold text-xl md:text-6xl pb-4'>1M+</h2>
            <p>Patients</p>
        </div>
        <div className="bg-black shadow-xl/75 rounded-xl md:rounded-4xl m-4 p-4 w-34 md:p-12 md:w-[20rem] text-center text-white cursor-pointer hover:scale-105 transition-transform duration-300">
            <h2 className='font-bold text-xl md:text-6xl pb-4'>5M+</h2>
            <p>Interested</p>
        </div>
    </div>
  )
}

export default Dashbox