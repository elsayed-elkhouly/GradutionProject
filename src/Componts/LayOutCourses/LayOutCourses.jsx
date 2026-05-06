import React, { useEffect, useState } from 'react'
import styles from './LayOutCourses.module.css'
import { Link, NavLink } from 'react-router-dom'
import profilephoto from './../../assets/images/71b48ac3d16520fc208a4a4730a42a706a1fe48f.jpg'
import { Outlet, useLocation } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg';
import { LiaUniversitySolid } from 'react-icons/lia';
import { FcDepartment } from 'react-icons/fc';
import { LuGraduationCap } from 'react-icons/lu';
import { ImProfile } from 'react-icons/im';
import { CiBookmarkCheck } from 'react-icons/ci';

export default function LayOutCourses() {
  return (
    <>
      
        <div>
          <section className=' flex justify-center items-center gap-8'>
            <img src={profilephoto} alt="" className='w-48 h-52 rounded-2xl pt-3' />
            <div>
              <p className='flex py-1   text-[24px] font-semibold items-center'>
                <div className='pe-2 text-2xl'><CgProfile /> </div>
                Mohammed ismail moahmed
              </p>
              <p className='flex py-1 text-[20px] font-medium items-center'>
                <div className='pe-2 text-2xl'><LiaUniversitySolid /> </div>
                Faculty of Computer and Information
              </p>
              <p className='flex py-1 text-[20px] font-medium items-center'>
                <div className='pe-2 text-2xl'><FcDepartment /> </div>
                Information Technology
              </p>
              <p className='flex py-1 text-[20px] font-medium items-center'>
                <div className='pe-2 text-2xl'><LuGraduationCap /> </div>
                Fourth-year Student
              </p>
              <p className='flex py-1 text-[20px] font-medium items-center'>
                <div className='pe-2 text-2xl'><ImProfile /> </div>
                Student ID: 2022476
              </p>
              <p className='flex py-1 text-[20px] font-medium items-center'>
                <div className='pe-2 text-2xl'><CiBookmarkCheck /> </div>
                Total GBA: 3.7 / 4.0
              </p>
            </div>
          </section>
          <div className="w-[710px] h-0.5 bg-[#3E7BBC] mx-auto my-3"></div>

        </div>
      
      <div className="flex gap-1 items-center justify-center">
        <svg width="27" height="27" className='pt-1' viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.25 3.375H9C10.1935 3.375 11.3381 3.84911 12.182 4.69302C13.0259 5.53693 13.5 6.68153 13.5 7.875V23.625C13.5 22.7299 13.1444 21.8714 12.5115 21.2385C11.8786 20.6056 11.0201 20.25 10.125 20.25H2.25V3.375Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M24.75 3.375H18C16.8065 3.375 15.6619 3.84911 14.818 4.69302C13.9741 5.53693 13.5 6.68153 13.5 7.875V23.625C13.5 22.7299 13.8556 21.8714 14.4885 21.2385C15.1214 20.6056 15.9799 20.25 16.875 20.25H24.75V3.375Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

        <h1 className='text-black font-semibold text-3xl'>My Courses</h1>
      </div>
      <div className="md:flex  justify-center items-center mt-7 md:gap-7 mb-10">
        <div className="md:mb-0 mb-4">
          <NavLink className='bg-[#B3B3B3] text-white font-semibold  text-xl ps-8 pe-8 p-1 rounded-full' to={"."} end>Active Courses</NavLink>
        </div>      <div className="">
          <NavLink className='bg-[#B3B3B3] text-white font-semibold text-xl ps-3 pe-3 p-1 rounded-full' to={'complete'}>Completed Courses</NavLink>
        </div>
      </div>
    </>
  )
}