import React from "react";
import Hero from "../assets/object.svg";

export default function WaveBackground() {
  return (
    <div className="relative min-h-screen  w-full bg-gradient-to-b from-white to-green-50 flex items-center justify-center overflow-x-hidden overflow-y-hidden px-4 sm:px-6 md:px-8 lg:px-12">
      {/* ====== Main Content Section ====== */}
      <div className="max-w-7xl w-full  flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16 py-12 md:py-20">
        
        {/* ====== Left Text Section ====== */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight break-words">
            Split Smarter,
            <br className="hidden md:block" />
            <span className="text-[#1F8225]"> Spend Together</span>
          </h1>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed tracking-wide break-words max-w-md mx-auto md:mx-0 px-2 sm:px-0">
            CoSplitz helps you share expenses, organize group payments, and buy
            things together — whether you’re a seller or just need people to
            split costs with. It’s fast, transparent, and built for
            collaboration.
          </p>

          <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 pt-4">
            <button className="w-full sm:w-auto px-8 py-3 bg-[#1F8225] text-white font-semibold rounded-lg shadow-md hover:bg-[#17661C] transition duration-300">
              Get Started
            </button>
            <button className="w-full sm:w-auto px-8 py-3 border border-[#1F8225] text-[#1F8225] font-semibold rounded-lg hover:bg-green-50 transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* ====== Right Image Section ====== */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={Hero}
            alt="App illustration"
            className="w-[80%] sm:w-[70%] md:w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain drop-shadow-lg"
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
}
