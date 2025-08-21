import Herosection from '@/app/component/Careers/Herosection'
import { mission } from '@/app/constant/Mission.txt'
import Image from 'next/image'
import React from 'react'

const Mission = () => {
  return (
    <>
      <Herosection
        title="Where Banking Meet"
        highlight=" Excelence"
        description="At YourBank, we believe that banking should be more than just transactions. It should be an experience that empowers individuals and businesses to thrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. With a focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. Join us on this exciting journey and discover a new level of banking excellence."
        imageSrc="/images/right-img.svg"  
        heading='Welcome to YourBank'
      />
      <div className='max-w-6xl mx-auto mt-20'>
        <div className='max-w-5xl text-white sm:text-start text-center  '>
            <h1 className='text-[#CAFF33] text-3xl md:text-5xl'>Mission & Vision</h1>
            <p className='mt-3 text-sm md:text-base'>We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development</p>
        </div>
            <div className='flex flex-col gap-16 mt-16'>

            {mission.map((items, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className={`flex flex-col md:${isEven ? 'flex-row' : 'flex-row-reverse'} gap-6 md:gap-10 items-center`}
                  >
                    <div className='flex-1 flex justify-center relative w-full md:w-auto'>
                      <div className={`${isEven ? 'border-l right-13' : 'border-r left-13'} border-[#CAFF33] absolute h-20 md:h-40 top-16 md:top-32 hidden md:block`}></div>
                      <Image
                        src={items.img}
                        alt='img'
                        width={350}
                        height={350}
                        className='w-full max-w-xs md:max-w-md h-auto object-contain'
                      />
                    </div>
                    <div className='flex-1 flex flex-col text-white justify-center text-center sm:text-start w-full md:w-auto mt-4 md:mt-0'>
                      <h1 className='text-xl md:text-3xl mb-2 md:mb-4'>{items.title}</h1>
                      <p className='text-xs md:text-sm max-w-xl'>{items.subtitle}</p>
                    </div>
                  </div>
                );
              })}
          </div>
      </div>
    </>
  )
}

export default Mission