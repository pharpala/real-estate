import React from 'react';
import piscina from '../assets/piscina.jpg';
import cocina from '../assets/cocina.jpg';
import apartamento from '../assets/apartamento.jpg';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-300 lg:py-24 py-10 pl-[5%] pr-[5%]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        
        {/* Left: Text Content */}
        <div className="text-left">
          <h1 className="text-white text-5xl font-bold">Find Your Dream Property</h1>
          <p className="mt-4 text-white text-lg">Connecting you with the best options in the market.</p>
          <button
            type="button"
            className="mt-8 py-2 px-6 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            onClick={() => {
              document.getElementById('properties').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get Started
          </button>
        </div>

        {/* Right: Image Collage */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <img src={piscina} alt="Property 1" className="w-full h-full object-cover rounded-lg row-span-2" />
          <img src={cocina} alt="Property 2" className="w-full h-full object-cover rounded-lg" />
          <img src={apartamento} alt="Property 3" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
