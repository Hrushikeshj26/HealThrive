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

function App() {
  return (
      <div className="w-full min-h-screen">
        <div className='bg-[#EAFFF0] min-h-[100dvh] w-full px-4 md:px-28 flex flex-col justify-center items-center'>
          <Header />
          <Hero />
        </div>
        <Dashbox />
        <div className='max-h-[55rem] bg-white flex flex-col justify-center items-center '>
          <h1 className='text-center text-5xl font-bold mt-12'>Our Services</h1>
          <p className='text-center text-xl text-gray-900 mt-4'>We provide a wide range of services to cater to your healthcare needs. <br />
          From general consultations to specialized treatments, we have you covered.</p>
            <Services />
        </div>
        <div className='h-[30rem] w-full text-white flex flex-col justify-center items-center my-16'>
           <Getappo />
        </div>
        <Testimonials/>
        <About/>
        <Contact/>
        <Footer/>
      </div>
  )
}

export default App
