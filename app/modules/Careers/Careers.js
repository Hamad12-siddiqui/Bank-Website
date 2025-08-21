import Footer from '@/app/component/Footer'
import NavBar from '@/app/component/NavBar'
import React from 'react'
import Herosection from './Herosection'
import Our_Values from './Our_Values'
import Our_Benefits from './Our_Benefits'
import Job_Openings from './Job_Openings'

const Careers = () => {
  return (
    <>
    <NavBar/>
    <Herosection/>
    <Our_Values/>
    <Our_Benefits/>
    <Job_Openings/> 
    <Footer/>
    </>
  )
}

export default Careers