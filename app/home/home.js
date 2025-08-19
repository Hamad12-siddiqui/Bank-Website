import React from 'react'
import NavBar from '../component/NavBar'
import Footer from '../component/Footer'
import Our_Products from './Our_Products'

const home = () => {
  return (
    <div>
        <NavBar/>
        <Our_Products/>
        {/* <Footer /> */}
    </div>
  )
}

export default home