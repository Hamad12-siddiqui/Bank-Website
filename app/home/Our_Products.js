import React from "react";
import { OurProducts } from "../constant/Out_Products.txt.js";

const Our_Products = () => {
  return (
    <div className="flex justify-center items-center px-4 md:px-8 lg:px-16 py-12">
      <div className="w-full max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 text-white">
          <div className="max-w-2xl">
            <h3 className="font-lexend font-medium text-[32px] md:text-[40px] lg:text-[48px] leading-snug">
              <span>Our</span>{" "}
              <span className="text-[#CAFF33]">Products</span>
            </h3>
            <p className="font-lexend font-light text-[16px] md:text-[18px] text-[#B3B3B3] mt-2">
              Discover a range of comprehensive and customizable banking
              products at YourBank, designed to suit your unique financial needs
              and aspirations.
            </p>
          </div>
          <div className="flex justify-center items-center rounded-full gap-2 md:gap-4 px-2 py-2 border border-[#262626] bg-[#1C1C1C]">
            <button className="text-sm md:text-lg font-medium px-3 md:px-4 py-2 rounded-full bg-[#CAFF33] text-black">
              For Individuals
            </button>
            <button className="text-sm md:text-lg font-medium px-3 md:px-4 py-2">
              For Businesses
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {OurProducts.map((product) => (
            <div
              key={product.id}
              className="text-white text-center flex flex-col items-center justify-start pr-4 space-y-4 border-r border-[#262626] last:border-none"
            >
              <img
                src={product.icon}
                alt={product.title}
                className="w-14 h-14 md:w-16 md:h-16 object-contain"
              />
              <p className="text-lg md:text-xl font-medium">{product.title}</p>
              <p className="text-sm md:text-base text-[#B3B3B3] leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Our_Products;
