"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { motion } from "framer-motion";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { FiPlus } from "react-icons/fi";

import CurrencySelector from "../../constant/CountrySelector";

const currencyRates = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.78,
  INR: 83,
};

const HeroSection = () => {
  // State for input values and result
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [result, setResult] = useState(null);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");

  // Exchange logic using hardcoded rates
  const handleExchange = () => {
    const value = Number(fromValue) || 0;
    const rateFrom = currencyRates[fromCurrency] || 1;
    const rateTo = currencyRates[toCurrency] || 1;
    // Convert from 'fromCurrency' to USD, then to 'toCurrency'
    const exchanged = ((value / rateFrom) * rateTo).toFixed(2);
    setResult(`${fromValue} ${fromCurrency} = ${exchanged} ${toCurrency}`);
    setToValue(exchanged);
  };

  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row  md:mt-20 gap-8 mt-10 lg:gap-16 relative px-4 lg:px-0">
      {/* Left Section */}
      <div className="w-full lg:w-[50%] mb-10 lg:mb-0">
        {/* Banner */}
        <div className="flex gap-1 items-center border  bg-[#262626] py-2 rounded-full px-2 max-w-76 sm:justify-start justify-center">
          <HiMiniCheckBadge className="text-[#CAFF33] " />
          <p className="text-white sm:text-md text-sm  ">No LLC Required, No Credit Check.</p>
        </div>

        {/* Hero Text */}
        <div>
          <h1 className="text-3xl lg:text-5xl text-white mt-5 sm:text-start text-center">
            Welcome to YourBank Empowering Your{" "}
            <span className="text-[#CAFF33]">Financial Journey</span>
          </h1>
          <p className="text-[#B3B3B3] mt-5 text-sm lg:text-base sm:text-start text-center">
            At YourBank, our mission is to provide comprehensive banking
            solutions that empower individuals and businesses to achieve their
            financial goals. We are committed to delivering personalized and
            innovative services that prioritize our customers' needs.
          </p>

          {/* CTA */}
          
          <div className="bg-[#CAFF33] max-w-36  mx-auto sm:mx-0 rounded-full  text-black flex justify-center py-3 mt-10 cursor-pointer hover:opacity-90 transition ">
            <p>Open Account</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="border w-full lg:w-[40%] z-40 relative ">
        <div className="">
          <h1 className="text-white mt-8 md:mt-12 px-4">Your Transactions</h1>
          {/* Transaction Notifications Stack */}
          <div className="relative h-32 w-full px-4 mt-4 flex flex-col items-start">
            {/* Top notification (most visible) */}
            <motion.div
              className="absolute left-0 right-0 top-0 z-30"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
                <div className="flex flex-1 justify-between items-center bg-[#232323] rounded-xl px-4 py-3 shadow-lg">
                  <div className="bg-[#CAFF33] p-2 flex items-center rounded-full mr-3">
                    <FaArrowRightArrowLeft className="text-black text-lg" />
                  </div>
                  <div className="text-white flex flex-col">
                    <p className="text-xs text-[#B3B3B3]">Transaction</p>
                    <p className="font-semibold">Joel Kenley</p>
                  </div>
                  <div className="flex-1 flex items-center justify-end text-white">
                    <p className="font-semibold">-$68.00</p>
                  </div>
                </div>
              </motion.div>
              {/* Second notification (lower, faded) */}
              <motion.div
                className="absolute left-0 right-0 top-10 z-20 opacity-70"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 0.7 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="flex flex-1 justify-between items-center bg-[#232323] rounded-xl px-4 py-3">
                  <div className="bg-[#CAFF33] p-2 flex items-center rounded-full mr-3">
                    <FaArrowRightArrowLeft className="text-black text-lg" />
                  </div>
                  <div className="text-white flex flex-col">
                    <p className="text-xs text-[#B3B3B3]">Transaction</p>
                    <p className="font-semibold">Mark Smith</p>
                  </div>
                  <div className="flex-1 flex items-center justify-end text-white">
                    <p className="font-semibold">-$68.00</p>
                  </div>
                </div>
              </motion.div>
              {/* Third notification (lowest, most faded) */}
              <motion.div
                className="absolute left-0 right-0 top-20 z-10 opacity-40"
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: 0, opacity: 0.4 }}
                transition={{ duration: 0.9, delay: 0.4 }}
              >
                <div className="flex flex-1 justify-between items-center bg-[#232323] rounded-xl px-4 py-3">
                  <div className="bg-[#CAFF33] p-2 flex items-center rounded-full mr-3">
                    <FaArrowRightArrowLeft className="text-black text-lg" />
                  </div>
                  <div className="text-white flex flex-col">
                    <p className="text-xs text-[#B3B3B3]">Transaction</p>
                    <p className="font-semibold">Lenen Roy</p>
                  </div>
                  <div className="flex-1 flex items-center justify-end text-white">
                    <p className="font-semibold">-$68.00</p>
                  </div>
                </div>
              </motion.div>
            </div>
          <p className="text-white px-4 mt-5">Exchange Money </p>
          <div className="flex flex-col md:flex-row w-full mx-auto pl-1.5">
            <div className="w-full md:w-1/2">
              <div className="border mt-4 p-3">    
                <CurrencySelector value={fromCurrency} onChange={setFromCurrency} />
              </div>
              <div className="border p-3">
                <input
                  type="number"
                  placeholder="1234"
                  className="text-white outline-none w-full"
                  value={fromValue}
                  onChange={e => setFromValue(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div>
                <div className="border mt-4 p-3">    
                  <CurrencySelector value={toCurrency} onChange={setToCurrency} />
                </div>
                <div className="border p-3">
                  <input
                    type="number"
                    placeholder="1234"
                    className="text-white outline-none w-full"
                    value={toValue}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Center the Exchange button */}
          <div className="flex w-full justify-center">
            <button
              className="w-full md:w-[90%] bg-[#22251B] text-[#CAFF33] rounded-full py-3 mt-8 mb-4 font-semibold hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-[#CAFF33]"
              onClick={handleExchange}
            >
              Exchange
            </button>
          </div>
          {/* Show exchanged result at the bottom */}
          {result !== null && (
            <div className="w-full flex justify-center mb-4 ">
              <p className="text-[#CAFF33] font-bold">{result}</p>
            </div>
          )}
          
            <div className="flex items-center bg-[#22251B] rounded-xl shadow-lg w-56 px-4 py-3 gap-3 absolute md:-top-10 -top-14 md:-left-16 -left-4 ">
              <div className="bg-[#CAFF33] flex items-center justify-center w-10 h-10 rounded-full">
                <FiPlus className="text-black text-xl" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-white text-lg font-semibold">+ $5000,00</p>
                <p className="text-[#B3B3B3] text-sm bg-[#232323] px-2 py-0.5 rounded mt-1 w-fit">Monthly Income</p>
              </div>
            </div>
        </div>
      </div>
      <div className="absolute right-0 lg:-right-24 top-0 z-0 hidden md:block">
        <Image 
          src="/images/Group.svg"
          alt="positions"
          width={220}
          height={220}
          className="w-[180px] h-[180px] lg:w-[300px] lg:h-[300px]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
