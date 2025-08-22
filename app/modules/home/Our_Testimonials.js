"use client";
import React from "react";
import Slider from "react-slick";
import { TestimonialsData } from "../../constant/Our_Testimonials.txt.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Our_Testimonials = () => {
  // ✅ Custom Next Arrow
  const NextArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="absolute top-1/2 -right-6 sm:-right-10 md:-right-14 lg:-right-16 transform -translate-y-1/2 
                   w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full 
                   bg-[#CAFF33] border border-gray-700 shadow-lg hover:bg-[#b2f02c] transition"
      >
        {/* Right Arrow Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="black"
          className="w-4 h-4 sm:w-6 sm:h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    );
  };

  // ✅ Custom Prev Arrow
  const PrevArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="absolute top-1/2 -left-6 sm:-left-10 md:-left-14 lg:-left-16 transform -translate-y-1/2 
                   w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full 
                   bg-[#CAFF33] border border-gray-700 shadow-lg hover:bg-[#b2f02c] transition"
      >
        {/* Left Arrow Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="black"
          className="w-4 h-4 sm:w-6 sm:h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3, // default desktop
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2500,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // lg se neeche
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640, // sm screens
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="flex justify-center items-center px-4 sm:px-6 lg:px-12 py-8 sm:py-12">
      <div className="w-full max-w-6xl">
        {/* Heading Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 text-white">
          <div className="max-w-2xl text-center md:text-left">
            <h3 className="font-lexend font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">
              <span>Our</span>{" "}
              <span className="text-[#CAFF33]">Testimonials</span>
            </h3>
            <p className="font-lexend font-light text-sm sm:text-base md:text-lg text-[#B3B3B3] mt-2">
              Discover a range of comprehensive and customizable banking
              products at YourBank, designed to suit your unique financial needs
              and aspirations.
            </p>
          </div>
          <div className="flex justify-center items-center rounded-full gap-2 md:gap-4 px-2 py-2 border border-[#262626] bg-[#1C1C1C]">
            <button className="text-xs sm:text-sm md:text-base font-medium px-3 md:px-4 py-2 rounded-full bg-[#CAFF33] text-black">
              For Individuals
            </button>
            <button className="text-xs sm:text-sm md:text-base font-medium px-3 md:px-4 py-2 text-white">
              For Businesses
            </button>
          </div>
        </div>

        {/* Slider Section */}
        <div className="slider-container px-2 sm:px-6 mt-8 sm:mt-12">
          <Slider {...settings}>
            {TestimonialsData.map((item) => (
              <div key={item.id} className="px-2 sm:px-4 py-4 sm:py-6">
                <div className="h-[220px] sm:h-[250px] relative flex flex-col items-center justify-center p-4 sm:p-6 space-y-6 border-t-2">
                  {/* Icon */}
                  <div className="absolute -top-6 bg-black px-2 py-1 ">
                    <img
                      src="/images/Icon.svg"
                      alt="Testimonial"
                      className="w-8 h-8 sm:w-10 sm:h-10"
                    />
                  </div>

                  {/* Content */}
                  <p className="text-center mt-6 text-sm sm:text-base text-white">
                    {item.feedback}
                  </p>
                  <p className="text-center text-[#CAFF33] font-medium text-base sm:text-lg">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Our_Testimonials;
