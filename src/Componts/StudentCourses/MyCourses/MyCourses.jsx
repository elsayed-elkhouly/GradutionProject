import React, { useContext } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import LayOutCourses from '../LayOutCourses/LayOutCourses';
import { Authcontext } from '../../../Context/AuthContextProvider';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Cookies from 'js-cookie';


const MyCourses = () => {

  

  return (
    <>
      <LayOutCourses />
      <div className="flex gap-1 items-center justify-center">
        <svg width="27" height="27" className='pt-1' viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.25 3.375H9C10.1935 3.375 11.3381 3.84911 12.182 4.69302C13.0259 5.53693 13.5 6.68153 13.5 7.875V23.625C13.5 22.7299 13.1444 21.8714 12.5115 21.2385C11.8786 20.6056 11.0201 20.25 10.125 20.25H2.25V3.375Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M24.75 3.375H18C16.8065 3.375 15.6619 3.84911 14.818 4.69302C13.9741 5.53693 13.5 6.68153 13.5 7.875V23.625C13.5 22.7299 13.8556 21.8714 14.4885 21.2385C15.1214 20.6056 15.9799 20.25 16.875 20.25H24.75V3.375Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <h1 className='text-black font-semibold text-3xl'>My Courses</h1>
      </div>
      <div className="flex flex-col md:flex-row  justify-center items-center mt-7 md:gap-7 mb-10">
        <div className="md:mb-0 mb-4">
          <NavLink className='bg-[#B3B3B3] text-white font-semibold  text-xl ps-8 pe-8 p-1 rounded-full' to={"."} end>Active Courses</NavLink>
        </div>
        <div className="">
          <NavLink className='bg-[#B3B3B3] text-white font-semibold text-xl ps-3 pe-3 p-1 rounded-full' to={'complete'}>Completed Courses</NavLink>
        </div>
      </div>

      <Outlet />
    </>

  )
}

export default MyCourses