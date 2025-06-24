import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Dashbox from './components/Dashbox'
import Services from './components/Services'
import Getappo from './components/Getappo'

function App() {
  {/* bg-white min-h-screen h-screen w-full*/}
  return (
      <div className="absolute-z-10 inset-0 h-full w-full bg-[#ecf8ef]
        bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] 
        bg-[size:20px_20px]">
        <div className='bg-[#EAFFF0] min-h-screen h-screen px-28 flex flex-col justify-center items-center'>
          <Header />
          <Hero />
        </div>
        <Dashbox />
        <div className='max-h-[55rem] h-screen'>
          <h1 className='text-center text-5xl font-bold mt-12'>Our Services</h1>
          <p className='text-center text-xl text-gray-900 mt-4'>We provide a wide range of services to cater to your healthcare needs. <br />
          From general consultations to specialized treatments, we have you covered.</p>
            <Services />
        </div>
        <div className='h-screen flex flex-col justify-center items-center'>
           <Getappo />
        </div>
      </div>
  )
}

export default App
