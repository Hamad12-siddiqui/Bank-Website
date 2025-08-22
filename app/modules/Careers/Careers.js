import Footer from "@/app/component/Footer";
import NavBar from "@/app/component/NavBar";
import React from "react";
import Herosection from "../../component/Careers/Herosection.js";
import Our_Values from "./Our_Values";
import Our_Benefits from "./Our_Benefits";
import Job_Openings from "./Job_Openings";
import Faqs from "../home/Faqs";
import Financial from "../home/Financial";
import { BenefitsData } from "../../constant/OurBenefits.txt.js";


const Careers = () => {
  return (
    <>
      <NavBar />
      <Herosection
        title="Welcome to YourBank  "
        highlight="Careers!"
        description="Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking."
        imageSrc="/images/Image (1).svg"
        heading=""
        className="max-w-sm"
      />
      <Our_Values />
      <Our_Benefits 
       benefitsData={BenefitsData}/>
      <Job_Openings />
      <Faqs />
      <Financial
        titleWhite="Start your Career with"
        titleGreen="YourBank today!"
      />
      <Footer />
    </>
  );
};

export default Careers;
