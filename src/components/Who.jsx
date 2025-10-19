import React from "react";
import Frame from "../assets/Frame.jpg";

export default function WhoSection() {
  return (
    <section className="w-full flex flex-col justify-center items-center bg-white overflow-hidden">
      {/* ===== Main Content Section ===== */}
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 py-20 px-6 md:px-12 lg:px-20">
        {/* ===== Left Section ===== */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-extrabold text-gray-900 mb-6 underline underline-offset-8 decoration-[#000000]">
            Who Can Use CoSplitz?
          </h2>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            From students and travelers to families and small business owners,{" "}
            <span className="font-semibold text-[#0ea5a4]">CoSplitz</span> makes
            sharing easier for everyone. Whether you’re splitting a trip, a meal,
            or a deal — you belong here.
          </p>
        </div>

        {/* ===== Right Section ===== */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={Frame}
            alt="Who can use CoSplitz"
            className="w-4/5 md:w-4/5 h-auto object-contain rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* ===== CTA Section ===== */}
      <div className="w-full bg-[#DEF8D1] py-20 flex justify-center items-center px-6 md:px-10">
        <div className="max-w-xl text-center flex flex-col items-center gap-6">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 underline underline-offset-8 decoration-[#000000]">
            Ready to Splitz Smarter?
          </h3>

          <p className="text-base md:text-2xl text-gray-700 leading-relaxed">
            Join the <span className="font-semibold text-[#1F8225]">CoSplitz</span> community today and make shared payments effortless.
          </p>

          <button className="bg-[#1F8225] text-white font-semibold text-sm md:text-base px-10 py-4 rounded-full shadow-md hover:bg-[#176b1d] transition-all duration-300">
            JOIN NOW
          </button>
        </div>
      </div>
    </section>
  );
}
