import React from "react";
import loginBg from "../assets/login.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="w-full md:text-base text-2xl h-[800px] flex items-center">
        <div className="w-[40%] absolute hidden md:block ml-[10%]">
          <img src={loginBg} alt="loginBg" />
        </div>
        <div className=" h-full flex ml-[40%] w-full justify-center items-center bg-pink-200">
          <div className="h-[500px] w-full">
            <h3 className="text-center py-8 md:text-2xl text-3xl font-bold">Login</h3>
            <div className="w-full px-[25%]">
              <form action="" className="w-full">
                <div className="w-full relative mt-4">
                  <label htmlFor="" className="absolute -top-10 md:-top-6">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email..."
                    className="w-full px-4 py-1 outline-none rounded-md"
                  />
                </div>
                <div className="w-full relative mt-16">
                  <label htmlFor="" className="absolute -top-10 md:-top-6">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Your Password..."
                    className="w-full px-4 py-1 outline-none rounded-md"
                  />
                </div>
                <button className="my-10 w-full bg-teal-300 py-1 rounded-md">
                  Login
                </button>
              </form>
              <h3 className="text-center">
                You don't have an account?{" "}
                <span className="font-bold">
                  <Link to="/register">Register</Link>
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
