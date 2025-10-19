import React from "react";
import Hand from "../assets/hands.svg";
import arrow from "../assets/arrowdown.svg";
import work1 from "../assets/work1.svg";
import work2 from "../assets/work2.svg";
import work3 from "../assets/work3.svg";

export default function Work() {
  return (
    <section className="w-full flex flex-col justify-center items-center bg-[#F7F5F9] py-16 px-4 md:px-10">
      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center underline decoration-black mb-12">
        How It Works
      </h2>

      {/* Main Layout */}
      <div className="w-full max-w-screen-xl flex flex-col md:flex-row justify-between items-center gap-16">
        {/* Left Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={Hand} alt="Helping Hand" className="max-w-sm w-full h-auto" />
        </div>

        {/* Steps Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-start items-stretch gap-10">
          {/* Step 1 */}
          <div className="flex items-start gap-6">
            <div className="flex flex-col items-center text-center">
              <p className="text-lg font-semibold text-gray-700">1</p>
              <img src={arrow} alt="Arrow Down" className="h-24 md:h-28" />
            </div>
            <div className="flex flex-col bg-white rounded-2xl p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <img src={work1} alt="Create a Splitz" className="w-10 h-10" />
                <p className="text-2xl md:text-3xl font-bold text-gray-900">
                  Create a Splitz
                </p>
              </div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Start a shared payment as an organizer or join one to split a cost easily.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-6">
            <div className="flex flex-col items-center text-center">
              <p className="text-lg font-semibold text-gray-700">2</p>
              <img src={arrow} alt="Arrow Down" className="h-24 md:h-28" />
            </div>
            <div className="flex flex-col bg-white rounded-2xl p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <img src={work2} alt="Invite & Connect" className="w-10 h-10" />
                <p className="text-2xl md:text-3xl font-bold text-gray-900">
                  Invite & Connect
                </p>
              </div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Invite friends or connect with others looking to share the same expense.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-6">
            <div className="flex flex-col items-center text-center">
              <p className="text-lg font-semibold text-gray-700">3</p>
              <img src={arrow} alt="Arrow Down" className="h-24 md:h-28" />
            </div>
            <div className="flex flex-col bg-white rounded-2xl p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <img src={work3} alt="Pay & Track Together" className="w-10 h-10" />
                <p className="text-2xl md:text-3xl font-bold text-gray-900">
                  Pay & Track Together
                </p>
              </div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                CoSplitz handles the money safely until everyone’s in — no awkward chasing for payments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
