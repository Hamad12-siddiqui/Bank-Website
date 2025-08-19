import React from 'react'
import Image from 'next/image'
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TbMessageCircleFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <>
    <div className='max-w-7xl mx-auto'>
    <div className='border-b '>
    <div className='flex gap-2  justify-center  '>
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
        <ul className='flex gap-8 text-white justify-center my-8  '>
            <li className=''>
                Home
            </li>
           <li> Careers</li>
           <li>About</li>
           <li>Security</li>
        </ul>
    </nav>
   </div>
   <div className='flex gap-4 justify-center mt-9'>
   <div className='flex gap-1 '>
  <TbMessageCircleFilled className='text-[#CAFF33]' size={20}/>
  <p className='text-white'>hello@skillbirdge.com</p>
   </div>
   <div className='flex gap-1'>
    <FaPhone className='text-[#CAFF33]' size={20}/>
    <p className='text-white'>1234567890</p>
   </div>
   <div className='flex gap-1'>
    <FaLocationDot className='text-[#CAFF33]' size={20}/>
    <p className='text-white'>Somewhere in the World</p>
   </div>
   </div>
   </div>
    </>
  )
}

export default Footer