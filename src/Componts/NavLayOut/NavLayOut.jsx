import React from 'react'
import LogoUni from "../../assets/images/8e248382e1e314dffe63ba186b83a73bc8968073.jpg"
export default function NavLayOut() {
  return (
    
       <div className='flex justify-around items-center xl:mt-8 mt-5 md:mt-20 '>
                  <div className='p-2'>
                    < h1 className='md:text-[36px] text-lg font-semibold'>Tanta University</h1>
                    <h2 className='md:text-[24px] text-lg font-medium'>Faculty of Computer and Information</h2>
                  </div>
                  <div className='md:w-[120px] w-1/5'>
                    <img src={LogoUni} alt="" className='w-full' />
                  </div>
                </div>
    
  )
}
