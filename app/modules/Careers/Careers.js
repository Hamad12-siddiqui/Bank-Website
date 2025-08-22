import Footer from "@/app/component/Footer";
import NavBar from "@/app/component/NavBar";
import React from "react";
import Herosection from "./Herosection";
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
      <Herosection />
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
