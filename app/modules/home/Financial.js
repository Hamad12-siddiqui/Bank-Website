import React from "react";

const Financial = () => {
  return (
    <div className="flex justify-center items-center px-4 sm:px-6 lg:px-12 mb-10">
      <div className="w-full max-w-6xl border border-[#262626] flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10 py-10 px-6 rounded-2xl bg-[#1C1C1C] bg-[url('/images/bg.svg')] bg-no-repeat bg-left-top">
        <div className="flex-1 text-center md:text-left space-y-4">
          <h3 className="font-medium text-2xl sm:text-3xl lg:text-4xl leading-snug">
            <span className="text-white">Start your financial journey with </span>
            <span className="text-[#CAFF33]">YourBank today!</span>
          </h3>
          <p className="text-sm sm:text-base text-[#B3B3B3]">
            Ready to take control of your finances? Join YourBank now, and let us
            help you achieve your financial goals with our tailored solutions and
            exceptional customer service.
          </p>
        </div>
        <div className="flex-shrink-0">
          <button className="bg-[#CAFF33] text-black font-medium rounded-full px-6 py-3 md:px-8 md:py-4 hover:bg-[#b2e92b] transition">
            Open Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Financial;
