import React from 'react'
import NavBar from '../component/NavBar'
import Footer from '../component/Footer'
import Our_Products from './Our_Products'
import Use_Cases from './Use_Cases'

const home = () => {
  return (
    <div>
        <NavBar/>
        <Our_Products/>
        <Use_Cases/>
        <Footer />
    </div>
  )
}

export default home