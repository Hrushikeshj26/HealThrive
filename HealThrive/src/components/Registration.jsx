import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';

function RegisterForm({onClose}) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="md:min-h-screen h-screen w-full bg-[#EAFFF0] md:p-6 flex items-center justify-center ">
      <div className="bg-white p-28 rounded-2xl shadow-2xl w-full md:max-w-md flex flex-col items-center relative">
        <h2 className="text-3xl font-bold text-center text-[#2DCF57] mb-6">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>

        <form className="space-y-4 w-96 md:w-[25rem] p-6">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded focus:outline-none"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded focus:outline-none"
          />

          <button className="w-full bg-[#2DCF57] text-white py-2 rounded font-semibold hover:bg-[#27b74c]">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <span
            className="text-[#2DCF57] font-semibold cursor-pointer"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </span>
        </p>

        <IoClose className='absolute top-5 right-5 text-3xl text-gray-600 hover:text-gray-800 cursor-pointer'
            onClick={onClose}  // Close the form      

        />
      </div>
    </div>
  );
}

export default RegisterForm;
