import React from "react";
import { BenefitsData } from "../../constant/OurBenefits.txt.js";

const Our_Benefits = () => {
  return (
    <section className="w-full flex justify-center px-4 md:px-8 lg:px-16 py-12">
      <div className="max-w-6xl w-full md:text-left">
        <h3 className="text-3xl md:text-4xl font-semibold text-white">
          Our <span className="text-[#CAFF33]">Benefits</span>
        </h3>
        <p className="text-[#B3B3B3] mt-3 text-sm md:text-base max-w-3xl">
          At YourBank, we value our employees and are dedicated to their
          well-being and success. We offer a comprehensive range of benefits
          designed to support their personal and professional growth.
        </p>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-10">
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 border-r border-dashed border-[#2C2C2C]"></div>
          <div className="hidden md:block absolute left-0 right-0 top-1/2 border-t border-dashed border-[#2C2C2C]"></div>

          {BenefitsData.map((item) => (
            <div
              key={item.id}
              className="p-5 md:p-6 bg-[#1C1C1C] rounded-2xl shadow-lg flex flex-col text-left"
            >
              <div className="flex items-center gap-4">
                <img src={item.icon} alt={item.title} className="w-15 h-15" />
                <h4 className="text-lg md:text-xl font-medium text-white">
                  {item.title}
                </h4>
              </div>
              <p className="text-[#B3B3B3] mt-3 text-sm md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Our_Benefits;
