import React from 'react'
import Image from 'next/image'

import { footer, info } from '../constant/footer.txt';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    <div className='max-w-6xl mx-auto'>
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
            {footer.map((items, index) => {
                return (
                <li key={index}>{items.name}</li>
           ) })}
          
        </ul>
    </nav>
   </div>
   <div className='flex gap-4 justify-center mt-9 border-b'>
   {/* <div className='flex gap-1 '>
  <TbMessageCircleFilled className='text-[#CAFF33]' size={20}/>
  <p className='text-white'>hello@skillbirdge.com</p>
   </div>
   <div className='flex gap-1'>
    <FaPhoneAlt  className='text-[#CAFF33]' size={20}/>
    <p className='text-white'>1234567890</p>
   </div>
   <div className='flex gap-1'>
    <FaLocationDot className='text-[#CAFF33]' size={20}/>
    <p className='text-white'>Somewhere in the World</p>
   </div> */}

{info.map((items,index) => {
    return(
        <div key={index} className='flex gap-1 mb-10'>
            <div className='text-[#CAFF33]'>
{items.icon}
</div>
<div className='text-white'>
{items.text}
</div>
        </div>
    )
})}
   </div>
   <div className='border rounded-full mt-10 p-2 flex'>
    <div className='flex gap-2 flex-1'>
    <div className='bg-[#CAFF33] p-2 rounded-full'>
<FaFacebook  size={20}/>
</div>
<div className='bg-[#CAFF33] p-2 rounded-full'>
<FaTwitter size={20} />
</div>
<div className='bg-[#CAFF33] p-2 rounded-full'>
<FaLinkedin size={20} />
</div>
</div>
<div className='text-white flex flex-1 items-center justify-center'>
    <p>YourBank All Rights Reserved</p>
</div>
<div className='text-white flex gap-4 flex-1 justify-end items-center'>
    <p className='border-r pr-4'>
        Privacy Policy
    </p>

    <p className=''>Terms of Service</p>
    </div>
   </div>
   </div>
    </>
  )
}

export default Footer