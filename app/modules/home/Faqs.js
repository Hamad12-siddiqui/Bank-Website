"use client";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FAQs } from "../../constant/Faqs.txt.js"; // 👈 txt ki jagah js/ts file ho

const Faqs = () => {
  const [showAll, setShowAll] = useState(false);

  // agar showAll false h to sirf pehle 4 dikhayenge warna sab
  const visibleFaqs = showAll ? FAQs : FAQs.slice(0, 4);

  return (
    <div className="max-w-6xl mx-auto mt-16">
      <div className="space-y-4">
        <p className="text-[#B3B3B3]">
          Still you have any questions? Contact our Team via
          support@yourbank.com
        </p>

        <h1 className="text-white text-4xl ">
          <span className="text-[#CAFF33]">Frequently</span> Asked Questions
        </h1>
      </div>

      <div className="flex flex-col items-center mt-8">
      <div className="flex flex-wrap gap-4 mt-6">
        {visibleFaqs.map((faq) => (
          <div
            key={faq.id}
            className="border border-[#262626] rounded-lg w-full md:w-[48%] bg-[#0d0d0d]"
          >
            <h1 className="border-b border-[#262626] max-w-lg mx-auto mt-4 text-white px-4 py-2">
              {faq.question}
            </h1>
            <p className="py-6 px-8 max-w-4xl mx-auto text-[#666666]">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      {!showAll && (
        <div
          onClick={() => setShowAll(true)}
          className="flex justify-center items-center text-white gap-2 border-2 border-[#262626] bg-[#1C1C1C] w-[200px] mt-6 py-2 rounded-full cursor-pointer hover:bg-[#262626]"
        >
          <button>Load All FAQ’s</button>
          <MdKeyboardArrowDown size={22} />
        </div>
      )}
    </div>
    </div>
  );
};

export default Faqs;
