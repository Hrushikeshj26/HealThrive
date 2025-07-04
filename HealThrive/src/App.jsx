import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Dashbox from './components/Dashbox'
import Services from './components/Services'
import Getappo from './components/Getappo'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Doctors from './components/Doctors'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';

import { useEffect } from 'react';


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,  // animation duration in ms
      once: true       // animate only once
    });
  }, []);
  
  return (
      <div className="flex flex-col w-full overflow-hidden">
        <div className='bg-[#EAFFF0] min-h-[100vh] md:px-28 flex flex-col justify-center items-center'>
          <Header />
          <Hero />
        </div>
        <Dashbox />
        <div className='md:max-h-[55rem] bg-white flex flex-col justify-center items-center '>
          <h1 className='text-center text-3xl md:text-5xl font-bold mt-12'>Our Services</h1>
          <p className='text-center md:text-xl text-gray-900 mt-4'>We provide a wide range of services to cater to your healthcare needs. <br />
          From general consultations to specialized treatments, we have you covered.</p>
            <Services />
        </div>
        <div className='h-[30rem] hidden md:w-full text-white md:flex flex-col justify-center items-center my-16'>
           <Getappo />
        </div>
        <Testimonials/>
        <About/>
        <Doctors/>
        <Contact />
        <Footer/>
      </div>
  )
}

export default App
