import React from "react";
import { UseCases, financialStats } from "../../constant/Use_Cases.txt.js";

const Use_Cases = () => {
  return (
    <div className="flex justify-center items-center px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl w-full space-y-10">
        <div className="space-y-2 text-center lg:text-left">
          <h3 className="font-medium text-3xl sm:text-4xl lg:text-[40px] text-[#CAFF33]">
            Use Cases
          </h3>
          <p className="font-light text-base sm:text-lg lg:text-[18px] text-[#B3B3B3]">
            At YourBank, we cater to the diverse needs of individuals and
            businesses alike, offering a wide range of financial solutions
          </p>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-between mt-8 gap-20">
          <div className="flex-1 border-2 bg-[url('/images/bg.svg')] bg-no-repeat bg-left-top flex flex-col justify-center items-center rounded-xl bg-[#1A1A1A]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 sm:p-8">
              {UseCases.map((item) => (
                <div
                  key={item.id}
                  className="w-full sm:w-[220px] h-[140px] sm:h-[160px] flex flex-col justify-center items-center border-2 border-[#262626] rounded-2xl py-5 sm:py-7 bg-black"
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-12 h-12 sm:w-15 sm:h-15 mx-auto"
                  />
                  <p className="font-normal text-lg sm:text-xl text-center mt-2 text-white">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <h3 className="font-medium text-xl sm:text-2xl text-white">
              For Individuals
            </h3>
            <p className="font-light text-base sm:text-lg text-[#B3B3B3]">
              For individuals, our mortgage services pave the way to
              homeownership, and our flexible personal loans provide vital
              support during various life milestones. We also prioritize
              retirement planning, ensuring a financially secure future for our
              customers
            </p>
            <div className="flex flex-col sm:flex-row justify-between mt-8 divide-y sm:divide-y-0 sm:divide-x-2 divide-dashed divide-[#262626]">
              {financialStats.map((item, index) => (
                <div
                  key={index}
                  className="px-2 py-4 sm:py-0 space-y-2 sm:space-y-4 flex flex-col items-start"
                >
                  <h3 className="font-medium text-3xl sm:text-4xl text-[#CAFF33]">
                    {item.percentage}%
                  </h3>
                  <p className="font-light text-base sm:text-lg text-[#B3B3B3]">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
            <button className="mt-6 sm:mt-10 px-6 py-3 bg-[#1C1C1C] text-black rounded-full">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-between mt-12 gap-20">
          <div className="flex-1 space-y-4 order-2 lg:order-1">
            <h3 className="font-medium text-xl sm:text-2xl text-white">
              For Business
            </h3>
            <p className="font-light text-base sm:text-lg text-[#B3B3B3]">
              For businesses, our tailored financial solutions empower growth
              and sustainability. From business loans to investment planning,
              we help organizations thrive while maintaining financial
              stability.
            </p>
            <div className="flex flex-col sm:flex-row justify-between mt-8 divide-y sm:divide-y-0 sm:divide-x-2 divide-dashed divide-[#262626]">
              {financialStats.map((item, index) => (
                <div
                  key={index}
                  className="px-2 py-4 sm:py-0 space-y-2 sm:space-y-4 flex flex-col items-start"
                >
                  <h3 className="font-medium text-3xl sm:text-4xl text-[#CAFF33]">
                    {item.percentage}%
                  </h3>
                  <p className="font-light text-base sm:text-lg text-[#B3B3B3]">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
            <button className="mt-6 sm:mt-10 px-6 py-3 text-white bg-[#1C1C1C]  rounded-full">
              Learn More
            </button>
          </div>
          <div className="flex-1 border-2 bg-[url('/images/right.svg')] bg-no-repeat bg-right-top flex flex-col justify-center items-center rounded-xl bg-[#1A1A1A] order-1 lg:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 sm:p-8">
              {UseCases.map((item) => (
                <div
                  key={item.id}
                  className="w-full sm:w-[220px] h-[140px] sm:h-[160px] flex flex-col justify-center items-center border-2 border-[#262626] rounded-2xl py-5 sm:py-7 bg-black"
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-12 h-12 sm:w-15 sm:h-15 mx-auto"
                  />
                  <p className="font-normal text-lg sm:text-xl text-center mt-2 text-white">
                    {item.title}
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

export default Use_Cases;
