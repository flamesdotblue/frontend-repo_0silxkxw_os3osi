import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          <h1 className="text-black text-4xl md:text-6xl font-bold leading-tight">
            Host Everything, Pay Almost Nothing
          </h1>
          <p className="mt-4 text-black text-lg md:text-xl">
            Affordable, scalable infrastructure from €3/mo
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a
              href="#services"
              className="px-6 py-3 rounded-md bg-black text-white hover:shadow-lg transition-all"
            >
              Explore Services
            </a>
            <a
              href="#features"
              className="px-6 py-3 rounded-md border border-gray-300 text-black hover:bg-gray-100 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;