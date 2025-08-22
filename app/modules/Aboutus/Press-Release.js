import { cards } from '@/app/constant/Press.txt'
import Image from 'next/image'
import React from 'react'

const PressRelease = () => {
  return (
    <>
  <div className='max-w-6xl mx-auto mt-10 px-4 sm:px-6 lg:px-8'>
    <div className='text-center sm:text-start'>
      <h1 className='text-[#CAFF33] text-2xl sm:text-3xl font-bold'>
        Press Releases
      </h1>
      <p className='text-white my-6 sm:my-10 text-base sm:text-lg'>
        Stay updated with the latest happenings and exciting developments at YourBank through our press releases.
      </p>
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
      {cards.map((items, index) => (
        <div
          key={index}
          className='border p-4 sm:p-5 rounded-2xl bg-[#181818] flex flex-col h-full shadow-md transition-transform duration-300 hover:scale-105'
        >
          <Image src={items.img} alt="card image" width={500} height={300} className='w-full h-48 object-cover rounded-md mb-4' />
          <h1 className='text-white text-lg sm:text-xl my-4 sm:my-6 max-w-lg mx-auto  font-semibold'>{items.title}</h1>
          <div className='flex flex-wrap gap-2 sm:gap-3 max-w-sm  mb-4'>
            <p className='border rounded-full px-3 py-1 text-xs sm:text-sm text-[#B3B3B3] bg-[#222]'>
              {items.btn1}
            </p>
            <p className='border rounded-full px-3 py-1 text-xs sm:text-sm text-[#B3B3B3] bg-[#222]'>
              {items.btn2}
            </p>
          </div>
          <p className='text-[#B3B3B3] mt-2 sm:mt-2 max-w-lg mx-auto text-sm sm:text-base'>{items.subtitle}</p>
        </div>
      ))}
    </div>
         
  </div>
    </>
  )
}

export default PressRelease