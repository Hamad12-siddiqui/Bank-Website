import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { OurFeatures } from "../../constant/Our_Features.txt.js";

const Our_Features = () => {
  return (
    <div className="flex justify-center items-center px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl w-full space-y-4">
        <h2 className="font-medium text-3xl sm:text-4xl lg:text-[40px] ">
          <span className="text-white">Our </span>
          <span className="text-[#CAFF33]">Features</span>
        </h2>
        <p className="font-light text-base sm:text-lg lg:text-[18px] text-[#B3B3B3] pr-25">
          Experience a host of powerful features at YourBank, including seamless
          online banking, secure transactions, and personalized financial
          insights, all designed to enhance your banking experience
        </p>
        <div className="flex flex-col lg:flex-row gap-10 mt-10">
  {/* Left Buttons */}
  <div className="w-full lg:w-[250px] h-auto border-2 flex flex-col py-8 space-y-4 bg-[#1C1C1C] rounded-lg">
    <button className="text-[#CAFF33] border border-[#262626] py-2 px-6 rounded-full bg-[#1A1A1A]">
      Online Banking
    </button>
    <button className="text-white border border-[#262626] py-2 px-6 rounded-full bg-[#1A1A1A]">
      Financial Tools
    </button>
    <button className="text-white border border-[#262626] py-2 px-6 rounded-full bg-[#1A1A1A]">
      Customer Support
    </button>
  </div>

  {/* Right Features Grid */}
  <div className="flex-1 border-2 p-6 rounded-lg">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {OurFeatures.map((feature, index) => (
        <div key={index} className="space-y-4">
          {/* Title with Icon */}
          <div className="flex justify-between items-center">
            <h4 className="text-white text-xl font-normal">{feature.title}</h4>
            <GoArrowUpRight size={20} className="text-[#CAFF33]" />
          </div>

          {/* Description */}
          <p className="text-[#B3B3B3] text-base">{feature.description}</p>
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
