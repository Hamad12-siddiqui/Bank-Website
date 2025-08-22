import React from "react";
import NavBar from "../../component/NavBar";
import Footer from "../../component/Footer";
import Our_Products from "./Our_Products";
import HeroSection from './HeroSection'
import Use_Cases from "./Use_Cases";
import Our_Features from "./Our_Features";
import Faqs from "./Faqs";
import Financial from "./Financial";

const home = () => {
  return (
    <div>
      <NavBar />
      <HeroSection/>
      <Our_Products />
      <Use_Cases />
      <Our_Features />
      <Faqs />
      <Financial
        titleWhite="Start your financial journey with"
        titleGreen="YourBank today!"
      />
      <Footer />
    </div>
  );
};

export default home;
