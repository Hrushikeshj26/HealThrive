import React from 'react'
import heroimg from '../assets/doctor7.png'

function Hero() {
  return ( 
    <div className='flex justify-between items-center m-auto w-full' id='home' data-aos="flip-up" data-aos-delay="500" 
  data-aos-duration="800">
        <div className='flex flex-col justify-center items-center md:items-start'>
            <h1 className='text-4xl md:text-6xl font-bold'>We Will Help <br /> You To Improve <br /> Your Mental Health</h1>
            <p className='p-4 md:p-0 md:text-xl text-gray-700 mt-4'>Your health, our priority. Experience the best in healthcare. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className='flex mt-8'>
                <button className='bg-[#2DCF57] text-white md:px-6 md:py-3 px-4 py-4 rounded md:text-xl font-semibold mr-4 cursor-pointer hover:bg-[#4e9e64]'>Get Appointment</button>
                <button className='md:px-6 md:py-3 px-4 py-4 rounded md:text-xl font-semibold border-black border-2 hover:bg-[#2DCF57] hover:text-white cursor-pointer'>Find Specialist</button> 
            </div>
        </div>
        <div className='bg-[#2DCF57] w-[600px] h-[600px] rounded-full overflow-hidden hidden md:block'>
            <img 
            className='w-full h-full object-cove'
            src={heroimg} 
            alt="doctor-img" />
        </div>
    </div>
  )
}

export default Hero