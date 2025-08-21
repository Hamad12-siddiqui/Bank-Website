import React from "react";

const Herosection = () => {
  return (
    <div className="flex justify-center items-center mt-5">
      <div className="w-6xl flex-col lg:flex p-6 rounded-lg bg-[#1C1C1C] bg-[url(/images/right.svg)] bg-no-repeat bg-right-top lg:relative">
        <div className="w-full lg:w-[500px] h-auto space-y-4 p-8 rounded-2xl rounded-tr-none bg-black lg:absolute">
          <h3 className="text-white font-medium text-4xl">
            Welcome to<span className="text-[#CAFF33]"> YourBank</span> Careers!
          </h3>
          <p className="text-[#B3B3B3]">
            Join our team and embark on a rewarding journey in the banking
            industry. At YourBank, we are committed to fostering a culture of
            excellence and providing opportunities for professional growth. With
            a focus on innovation, customer service, and integrity, we strive to
            make a positive impact in the lives of our customers and
            communities. Join us today and be a part of our mission to shape the
            future of banking.
          </p>
        </div>
        <div className="w-full lg:w-3xl ml-0 lg:ml-83 ">
            <img
              src="/images/Image.svg"
              alt="Hero"
              className="w-full h-auto"
            />

        </div>
      </div>
    </div>
  );
};

export default Herosection;
