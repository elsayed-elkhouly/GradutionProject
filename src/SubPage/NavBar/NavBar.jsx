import React from 'react'
import LogoUni from "./../../assets/images/8e248382e1e314dffe63ba186b83a73bc8968073.jpg"
const NavBar = () => {
  return (
    <div className='flex justify-around items-center gap-x-80 mt-[54px]'>
<div>
 < h1 className='text-[36px] font-semibold'>Tanta University</h1>
<h2 className='text-[24px] font-medium'>Faculty of Computer and Information</h2>
</div>
 <div className='w-[120px]'>


  <img src={LogoUni} alt="" className='w-full' />
 </div>
  
    </div>
  )
}

export default NavBar