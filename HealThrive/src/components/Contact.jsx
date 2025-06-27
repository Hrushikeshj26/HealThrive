import React from 'react'

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center h-[50rem] md:min-h-screen md:p-8 p-2 w-full" id="contact">
        <div className="bg-black rounded-3xl p-8 md:p-18 w-full md:max-w-6xl flex md:flex-row flex-col gap-16 text-white shadow-xl/85 shadow-gray-900">
            <div className="w-full mb-8">
                <p className="mb-6 text-gray-300">Need a doctor’s counsealing?</p>
                <h1 className='text-4xl font-bold'>Request a Call Back <br /> Today Now</h1>
                <p className="text-lg mt-4 text-gray-300">
                    Fill out the form below and our team will get back to you as soon as possible.
                </p>
                <div className="flex items-center mt-6">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPVyF2B1boxeXbzbBJSD4hZvHQxZ8uwXJWPw&s" alt="doctors-img" className='w-12 h-auto rounded-full mr-4' />
                    <p>Our Doctors are waiting <br />for your service.</p>
                </div>
            </div>
            <form className="w-full max-w-lg text-white">
                <div className="mb-4">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" />
                </div>
                <div className="mb-4">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="message">Message</label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-white focus:outline-none focus:shadow-outline" id="message" rows="4" placeholder="Your Message"></textarea>
                </div>
                <button className="bg-[#2DCF57] hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Requst Now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact