import React from "react";
import { UseCases } from "../constant/Use_Cases.txt.js";

const Use_Cases = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-6xl space-y-4">
        <div className="space-y-2">
          <h3 className="font-medium text-[40px] text-[#CAFF33]">Use Cases</h3>
          <p className="font-light text-[18px] text-[#B3B3B3]">
            At YourBank, we cater to the diverse needs of individuals and
            businesses alike, offering a wide range of financial solutions
          </p>
        </div>

        <div className="mt-8">
          <div className="w-[600px] border-2 bg-[url('/images/bg.svg')] bg-no-repeat bg-left-top flex flex-col justify-center items-center rounded-xl bg-[#1A1A1A]">
            {/* yaha grid banai */}
            <div className="grid grid-cols-2 gap-6 p-12">
              {UseCases.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col justify-center items-center border-2 border-[#262626] py-7 bg-black"
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-15 h-15 mx-auto"
                  />
                  <p className="font-normal text-[20px] text-center mt-2 text-white">
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
