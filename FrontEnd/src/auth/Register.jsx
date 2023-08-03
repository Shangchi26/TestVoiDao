import React from 'react'
import registerBg from '../assets/register.png'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
      <div className="w-full md:text-base text-2xl h-[800px] flex items-center">
        <div className="h-full flex md:mr-[40%] w-full justify-center items-center bg-pink-200">
          <div className="h-[720px] w-full">
            <h3 className="text-center py-8 md:text-2xl text-3xl font-bold">
              Register
            </h3>
            <div className="w-full px-[25%]">
              <form action="">
                <div className="w-full relative mt-4">
                  <label htmlFor="" className="absolute -top-6">
                    Full name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Full Name..."
                    className="w-full px-4 py-1 outline-none rounded-md"
                  />
                </div>
                <div className="w-full relative mt-12">
                  <label htmlFor="" className="absolute md:-top-6 -top-10">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email..."
                    className="w-full px-4 py-1 outline-none rounded-md"
                  />
                </div>
                <div className="w-full relative mt-12">
                  <label htmlFor="" className="absolute md:-top-6 -top-10">
                    Phone number
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Your Phone Number..."
                    className="w-full px-4 py-1 outline-none rounded-md"
                  />
                </div>
                <div className="w-full relative mt-12">
                  <label htmlFor="" className="absolute md:-top-6 -top-10">
                    User name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your User Name..."
                    className="w-full px-4 py-1 outline-none rounded-md"
                  />
                </div>
                <div className="w-full relative mt-12">
                  <label htmlFor="" className="absolute md:-top-6 -top-10">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Your Password..."
                    className="w-full px-4 py-1 outline-none rounded-md"
                  />
                </div>
                <button className="my-10 w-full bg-teal-300 py-1 rounded-md">
                  Register
                </button>
              </form>
              <h3 className="text-center">
                You have an account?{" "}
                <span className="font-bold">
                  <Link to="/login">Login</Link>
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div className="w-[40%] absolute hidden md:block ml-[50%]">
          <img src={registerBg} alt="loginBg" />
        </div>
      </div>
    </>
  );
}

export default Register