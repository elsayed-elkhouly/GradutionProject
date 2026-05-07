import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function LayOutCompleted() {
  return (
    <>
      <div className="ps-3 pe-3 container mx-auto">
        <div className=" mt-7 grid md:grid-cols-4 grid-cols-2 gap-2 mb-10">
          <NavLink className='bg-[#B3B3B3] text-white font-semibold md:text-xl text-lg  p-1 md:mb-0 mb-2 rounded-full' to={"firstYear"} >First Year</NavLink>
          <NavLink className='bg-[#B3B3B3] text-white font-semibold md:text-xl text-lg  p-1 md:mb-0 mb-2 rounded-full' to={'secondYear'}>Second Year</NavLink>
          <NavLink className='bg-[#B3B3B3] text-white font-semibold md:text-xl text-lg  p-1 rounded-full' to={'thirdYear'}>Third Year</NavLink>
          <NavLink className='bg-[#B3B3B3] text-white font-semibold md:text-xl text-lg  p-1 rounded-full' to={'FourthYear'}>Fourth Year</NavLink>
        </div>
        <div className="flex justify-between mb-8">
          <h1 className='font-bold md:text-xl text-lg'>Completed Courses</h1>
          <div className="flex-col gap-1 md:text-lg text-sm">
            <h2 className='font-semibold'>Cumulative GPA</h2>
            <span className='font-bold'>3.5 / 4.0</span>
          </div>
        </div>
      </div>
    </>
  )
}