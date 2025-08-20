import React from 'react'
import NavBar from '../component/NavBar'
import Footer from '../component/Footer'
import Our_Products from './Our_Products'
import HeroSection from './HeroSection'

const home = () => {
  return (
    <div>
        <NavBar/>
        <HeroSection />
        {/* <Our_Products/> */}

 
       
        <Footer />
    </div>
  )
}

export default home