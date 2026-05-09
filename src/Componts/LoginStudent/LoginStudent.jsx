import React from 'react'
import logoUni from '../../assets/images/8e248382e1e314dffe63ba186b83a73bc8968073 (1).png'
import logo from '../../assets/images/Adobe Express - file.png'
import { FaArrowLeft } from 'react-icons/fa'
import { SiSpringsecurity } from 'react-icons/si'





const LoginStudent = () => {
  return (
    <>

      <div className='flex justify-center items-center min-h-screen ss relative'>
        <div className='absolute top-2  md:w-36 w-20  md:left-3 left-0 '>
          <img src={logo} alt="" className='mx-auto' />
        </div>
        <div className='  relative w-109.5 h-130.25 shadow-2xl from-[rgba(74,144,194,0.85)] to-[rgba(230,220,203,0.8)] backdrop-blur-xl  rounded-2xl border-white border-2 p-5 mt-15'>
          <FaArrowLeft className='text-2xl cursor-pointer ' />
          <div className='flex justify-center items-center flex-col '>
            <div className='w-20 rounded-4xl'>
              <img src={logoUni} alt="" className='bg-white mt-1 border-white rounded-full object-cover' />
            </div>
            <h2 className='text-xl text-center font-semibold py-3'>Student Service Gateway</h2>
            <p className='font-semibold text-[18px] pb-6'>Tanta University</p>
          </div>
          <form class="max-w-sm mx-auto">
            <div class="mb-5 md:ms-9 ">
              <label className="floating-label">
                <span>Student ID</span>
                <input type="text" placeholder="Student ID" className="input input-md border-white border focus:border-amber-50 focus:outline-0  bg-transparent rounded-xl" />
              </label>
            </div>
            <div class="mb-5 md:ms-9">
              <label className="floating-label ">
                <span >National ID</span>
                <input type="text" placeholder="National ID" className="input input-md border-white border focus:border-amber-50 focus:outline-0 bg-transparent rounded-xl" />
              </label>
            </div>
            <button className="my-5 py-2  btn btn-soft bg-linear-to-b from-[#32140E] to-[#7D4A40] w-full rounded-2xl text-white font-bold text-[18px] ">Login</button>
          </form>
          <p className=' flex items-center justify-center text-[#FF5047] gap-1.5 text-[16px] font-semibold'><SiSpringsecurity /> Privacy Policy and Data Security</p>
        </div>
      </div>




    </>
  )
}

export default LoginStudent