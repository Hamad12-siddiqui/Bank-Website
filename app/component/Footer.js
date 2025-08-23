import React from 'react'
import Image from 'next/image'

import { footer, info } from '../constant/footer.txt';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
    <div className='max-w-6xl mx-auto px-4'>
    <div className='border-b '>
    <div className='flex gap-2 justify-center items-center py-6'>
    <Image 
    src = "/images/shape-30.svg"
    alt = "logo"
    width={40}
    height={40}
    />
    <h1 className='text-xl font-medium flex text-white items-center'>
        Your Bank
    </h1>
     </div>
    <nav>
        <ul className='flex flex-wrap gap-4 sm:gap-8 text-white justify-center my-4 sm:my-8 text-sm sm:text-base cursor-pointer'>
                            {footer.map((items, index) => (
                                    <li key={index}>
                                        <Link href={items.href} className="hover:underline focus:underline">
                                            {items.name}
                                        </Link>
                                    </li>
                            ))}
          
        </ul>
    </nav>
   </div>
   <div className='flex flex-col sm:flex-row gap-4 justify-center mt-9 border-b px-2'>
   

{info.map((items,index) => {
    return(
        <div key={index} className='flex gap-1 mb-4 sm:mb-10 items-center cursor-pointer sm:justify-start justify-center'>
            <div className='text-[#CAFF33]'>
{items.icon}
</div>
<a
    href={items.href}
    className='text-white text-xs sm:text-base hover:underline focus:underline'
    target={items.href.startsWith('http') ? '_blank' : undefined}
    rel={items.href.startsWith('http') ? 'noopener noreferrer' : undefined}
>
    {items.text}
</a>
        </div>
    )
})}
   </div>
   <div className=' md:border  rounded-full mt-10 p-2 flex flex-col md:flex-row items-center md:items-stretch gap-4 md:gap-0'>
    <div className='flex gap-2 flex-1 justify-center md:justify-start mb-4 md:mb-0'>
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
<div className='text-white flex flex-1 items-center justify-center text-xs sm:text-base'>
    <p>YourBank All Rights Reserved</p>
</div>
<div className='text-white flex gap-4 flex-1 justify-center md:justify-end items-center text-xs sm:text-base'>
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