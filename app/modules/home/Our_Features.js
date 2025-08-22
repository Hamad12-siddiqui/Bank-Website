"use client";
import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FeaturesData } from "../../constant/Our_Features.txt.js";

const Our_Features = () => {
  const [selected, setSelected] = useState("Online Banking");

  return (
    <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl w-full space-y-6">
        <h2 className="font-medium text-3xl sm:text-4xl lg:text-5xl text-center lg:text-left">
          <span className="text-white">Our </span>
          <span className="text-[#CAFF33]">Features</span>
        </h2>
        <p className="font-light text-base sm:text-lg lg:text-xl text-[#B3B3B3] max-w-3xl sm:text-start text-center">
          Experience a host of powerful features at YourBank, including seamless
          online banking, secure transactions, and personalized financial
          insights, all designed to enhance your banking experience.
        </p>
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          <div className="w-full lg:w-64  border-2 flex flex-col px-4 py-6 space-y-3 bg-[#1C1C1C] rounded-xl">
            {Object.keys(FeaturesData).map((category) => (
              <button
                key={category}
                onClick={() => setSelected(category)}
                className={`py-2 px-4 rounded-full border border-[#262626] transition-colors duration-200 ${
                  selected === category
                    ? "bg-[#1A1A1A] text-[#CAFF33] border-[#CAFF33]"
                    : "bg-[#1A1A1A] text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="flex-1 p-4 sm:p-6 rounded-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {FeaturesData[selected].map((feature, index) => (
                <div
                  key={index}
                  className="space-y-3 border-2 border-[#262626] p-4 sm:p-6 rounded-xl bg-[#1C1C1C]"
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-white text-lg sm:text-xl font-medium">
                      {feature.title}
                    </h4>
                    <GoArrowUpRight
                      size={22}
                      className="text-[#CAFF33] shrink-0"
                    />
                  </div>
                  <p className="text-[#B3B3B3] text-sm sm:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Our_Features;
