import React, { useEffect, useState } from 'react'
import styles from './LayOutCourses.module.css'
import { Link, NavLink } from 'react-router-dom'
import profilephoto from "../../../assets/images/71b48ac3d16520fc208a4a4730a42a706a1fe48f.jpg"
import { Outlet, useLocation } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg';
import { LiaUniversitySolid } from 'react-icons/lia';
import { FcDepartment } from 'react-icons/fc';
import { LuGraduationCap } from 'react-icons/lu';
import { ImProfile } from 'react-icons/im';
import { CiBookmarkCheck } from 'react-icons/ci';
import NavLayOut from '../../NavLayOut/NavLayOut'


export default function LayOutCourses() {
  return (
    <>
      
      <NavLayOut/>
        <div>
          <section className=' flex justify-center items-center gap-8 mt-6'>
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
      
      
    </>
  )
}