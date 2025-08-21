import React from "react";
import {ValuesData} from "../../constant/OurValues.txt.js"

const Our_Values = () => {
  return (
    <div className="flex justify-center items-center mt-15">
      <div className="w-6xl text-white space-y-4 p-4 lg:p-0">
        <h3 className="font-medium text-4xl">
          Our<span className="text-[#CAFF33]"> Values</span>
        </h3>
        <p className="text-[#B3B3B3]">
          At YourBank, our values form the foundation of our organization and
          guide our actions. We believe in upholding the highest standards of
          integrity, delivering exceptional service, and embracing innovation.
          These values define our culture and shape the way we work together to
          achieve our goals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
      {ValuesData.map((item) => (
        <div
          key={item.id}
          className="space-y-4 border-l-2 border-[#CAFF33] pl-4"
        >
          <h3 className="font-medium text-4xl md:text-5xl text-[#4C4C4D]">
            {item.title}
          </h3>
          <p className="text-[#B3B3B3] text-base md:text-lg leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </div>
      </div>
    </div>
  );
};

export default Our_Values;
