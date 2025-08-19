import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <>
    <div className='flex gap-2 '>
    <Image 
    src = "/images/shape-30.svg"
    alt = "logo"
    width={40}
    height={40}
    />
    <h1 className='text-xl font-medium flex text-white  items-center'>
        Your Bank
    </h1>
     </div>
    <nav>
        <ul className='flex gap-8 text-white'>
            <li>
                Home
            </li>
           <li> Careers</li>
           <li>About</li>
           <li>Security</li>
        </ul>
    </nav>
   
    </>
  )
}

export default Footer