import React from 'react'
import aboutImg from '../assets/Rectangle 15.jpg'


function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8" id="about">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">Why Should you take our services</h1>
      <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl">
        HealThrive is dedicated to providing exceptional healthcare services. Our team of experienced professionals is committed to your well-being, offering personalized care and support.
      </p>
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl">
            <img src={aboutImg} alt="About HealThrive" className="w-full md:w-1/2 rounded-xl mb-6 md:mb-0" />
            <div className="md:ml-8 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2 text-[#2DCF57]">Our Mission</h2>
            <p className="text-gray-700 mb-4">
                At HealThrive, our mission is to empower individuals to achieve optimal health and wellness through comprehensive care and innovative solutions.
            </p>
            <hr />
            <h2 className="text-2xl font-bold mt-4 mb-2 text-[#2DCF57]">Our Vision</h2>
            <p className="text-gray-700 mb-4">
                We envision a world where healthcare is accessible, personalized, and focused on holistic well-being, enabling everyone to thrive in their health journey.
            </p>
            <hr />
            <h2 className="text-2xl font-bold mt-4 mb-2 text-[#2DCF57]">Our Values</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Compassion: We care deeply about our patients and their families.</li>
                <li>Integrity: We uphold the highest standards of honesty and transparency.</li>
                <li>Innovation: We embrace new ideas and technologies to enhance care.</li>
                <li>Collaboration: We work together with patients, families, and healthcare providers.</li>
                <li>Excellence: We strive for the highest quality in everything we do.</li>
            </ul>
            <hr />
            </div>
        </div>
    </div>
  )
}

export default About