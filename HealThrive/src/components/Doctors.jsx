import React from 'react'
import doctorsData from '../assets/doctors'

function Doctors() {
  return (
    <div className="flex flex-wrap justify-center items-center p-8" id="doctors">
        <div>
            <h1 className='text-center text-3xl md:text-5xl font-bold mt-12'>Our Doctors</h1>
            <p className='text-center md:text-xl text-gray-900 mt-4'>Meet our team of experienced and compassionate doctors who are dedicated to providing the best care for your mental health.</p>
        </div>
        <div className="flex flex-wrap justify-center items-center p-8">
            {doctorsData.map((doctor, index) => (
                <div key={index} className="shadow-xl/40 bg-white border-1 rounded-lg m-4 p-8 w-[18rem] text- hover:shadow-emerald-600 transition-shadow duration-200 cursor-pointer">
                <img src={doctor.image} alt={doctor.name} className="w-auto h-56 mx-auto mb-4 rounded-full bg-amber-900" />
                <h3 className="text-xl font-bold mb-2">{doctor.name}</h3>
                <p className="text-gray-600">{doctor.specialty}</p>
                <p className="text-gray-500">{doctor.experience}</p>
                <p className="text-yellow-500 font-semibold">Rating: {doctor.rating}</p>
                <p className="text-gray-700 mt-2">{doctor.bio}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Doctors