import React from "react";
import NavBar from "@/app/component/NavBar";
import Footer from "@/app/component/Footer";
import Herosection from "@/app/component/Careers/Herosection";
import Our_Benefits from "../Careers/Our_Benefits";
import { Protect } from "../../constant/Protect.txt.js";
import Faqs from "../home/Faqs.js";

const Security = () => {
  return (
    <>
      <NavBar />
      <Herosection
        title="Your Security is Our "
        highlight="Top Priority"
        description="At YourBank, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, your security is our utmost priority."
        imageSrc="/images/Image.svg"
        heading=""
        className="max-w-sm"
      />
      <Our_Benefits
        benefitsData={Protect}
        heading={
          <>
            How We <span className="text-[#CAFF33]">Protect You</span>
          </>
        }
        description={
          <>
            At YourBank, we prioritize the security and confidentiality of your
            financial information. Our state-of-the-art encryption technology
            and stringent data protection measures ensure your assets and
            transactions are safeguarded at all times.
          </>
        }
      />
      <Faqs />
      <Footer />
    </>
  );
};

export default Security;
