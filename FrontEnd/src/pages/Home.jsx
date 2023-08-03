import React from 'react'
import homeBg from '../assets/home-bg.png'
import homeMd from '../assets/home-md.png'

const Home = () => {
  return (
    <main className="w-full z-0 overflow-hidden font-Josefin">
      <section className="w-full h-[800px] bg-pink-50">
        <div className="relative h-full flex justify-end">
          <div className="absolute left-10 lg:left-32 top-16 lg:top-[30%] font-bold">
            <h2 className="text-5xl lg:text-7xl text-teal-400 uppercase">
              Thrift <span>Fashion</span>
            </h2>
            <p className="hidden lg:block w-[80%] lg:w-[50%] text-lg text-gray-500 pt-3 ml-4">
              When determined to create a unique style from the past, we bring
              forth magical fashion that is unparalleled and impossible to
              replicate!
            </p>
          </div>
          <img
            src={homeBg}
            alt=""
            className="h-[800px] hidden lg:block w-auto object-cover"
          />
          <img
            src={homeMd}
            alt=""
            className="h-[500px] absolute right-0 bottom-0 block lg:hidden w-auto object-cover"
          />
          <button
            type="button"
            className="text-white absolute left-10 lg:left-32 top-48 lg:top-[480px] lg:ml-4 bg-teal-400 duration-500 hover:bg-teal-300 hover:mb-2 font-medium rounded-lg text-lg px-5 py-2 text-center mr-2 mb-2"
          >
            Follow Us
          </button>
        </div>
      </section>
    </main>
  );
}

export default Home