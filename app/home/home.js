import React from 'react'
import NavBar from '../component/NavBar'
import Footer from '../component/Footer'
import Our_Products from './Our_Products'
import Use_Cases from './Use_Cases'
import Our_Features from './Our_Features'
import Our_Testimonials from './Our_Testimonials'
import Financial from './Financial'

const home = () => {
  return (
    <div>
        <NavBar/>
        <Our_Products/>
        <Use_Cases/>
        <Our_Features/>
        <Our_Testimonials/>
        <Financial/>
        <Footer />
    </div>
  )
}

export default home