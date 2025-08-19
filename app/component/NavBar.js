import React from 'react'

const NavBar = () => {
  return (
    <div className='w-full flex justify-center items-center'>
        <div className='w-[85%] border-2 flex justify-between items-center'>
            <div className=' flex items-center gap-2'>
                <img
                src="/images/shape-30.svg"
                alt="Logo"
                className='w-10 h-10'
                />
                <h3 className='text-lg font-semibold'>your Bank</h3>
            </div>

        </div>
    </div>
  )
}

export default NavBar