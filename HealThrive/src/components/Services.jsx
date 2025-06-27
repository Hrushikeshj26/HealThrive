import React from 'react'
import servicesData from '../assets/data'

function Services() {
  return (
    <div className="flex flex-wrap justify-center items-center p-8" id="services" data-aos="fade-right" data-aos-delay="500" 
  data-aos-duration="800" >
      {servicesData.map((service, index) => (
        <div key={index} className="shadow-xl/40 bg-white border-1 rounded-lg m-4 p-6 w-[25rem] text-center hover:shadow-emerald-600 transition-shadow duration-200 cursor-pointer">
          <img src={service.photo} alt={service.title} className="w-auto h-25 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">{service.title}</h3>
          <p className="text-gray-600">{service.info}</p>
        </div>
      ))}
    </div>
  )
}

export default Services