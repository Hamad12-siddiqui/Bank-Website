import React from "react";

const Job_Openings = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="w-6xl text-white space-y-4 p-4 lg:p-0">
        <h3 className="text-4xl font-medium text-[#CAFF33]">Job Openings</h3>
        <p className="text-[#B3B3B3]">
          Explore exciting job openings at YourBank, where we value talent,
          innovation, and a passion for customer service. Join our team and be
          part of shaping a brighter future in the banking industry
        </p>
        <div className="text-white bg-[#1C1C1C] mt-6 space-x-4 p-6 border border-[#262626] rounded-2xl">
            <h3 className="text-2xl font-medium">Relationship Manager</h3>
            <div className="flex text-[#B3B3B3] mt-4">
                <p className="py-2 px-4  border border-[#262626] bg-black rounded-full">Location: India</p>
                <p className="py-2 px-4  border border-[#262626] bg-black rounded-full"> Department: Retail Banking</p>
            </div>
            <h3 className="text-2xl font-medium text-white mt-6">About This Job</h3>
            <p className="text-[#B3B3B3] mt-3">
              As a Relationship Manager at YourBank, you will be responsible for
              building and maintaining strong relationships with our clients. You
              will work closely with them to understand their financial needs and
              provide tailored solutions to help them achieve their goals.
            </p>
            <div>
                
            </div>
        </div>
      </div>
    </div>
  );
};

export default Job_Openings;
