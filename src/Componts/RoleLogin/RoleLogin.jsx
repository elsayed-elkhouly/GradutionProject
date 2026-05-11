import React, { useEffect, useState } from 'react'
import styles from './RoleLogin.module.css'
import { Link, Navigate } from 'react-router-dom'
import logo from '../../assets/images/83d3d5ce85ea24624a5a039533e8d889a9d00c17.jpg'
import StudentLogo from '../../assets/images/b923e212ba9dfa0896462c7a83af2c23f60df610.jpg'
import AdimnLogo from '../../assets/images/be2df7ea1edfb35f78608c21a836f05bb7fce050.jpg'

export default function RoleLogin() {

  return (
    <>
      <div className={`h-screen  overflow-hidden flex-col justify-center content-center ${styles.role}`}>
        <div className="container mx-auto w-full absolute top-9 left-2">
          <img src={logo} className='rounded-full w-20  ' alt="logo" />
        </div>
        <div className=" container mx-auto mb-5 mt-4  md:w-100 w-70   text-center p-2  bg-linear-to-b from-[#0f7ed3] to-[#83a3d4] 
               border-3 border-white
               text-[#1d1c1c] text-2xl 
               rounded-xl 
               shadow-md">
          <h1 className='font-medium md:text-2xl text-sm'>Choose Your Account Type</h1>
        </div>
        <div className=" container mx-auto flex justify-center items-center p-3 md:gap-12 gap-4 md:text-xl     ">
          <Link to={'/loginAdmin'}>
            <div className="text-center overflow-hidden  w-full bg-linear-to-b from-white to-[#beaf9a]
            backdrop-blur-md 
            border border-white/40 
            rounded-3xl 
            shadow-xl ">
              <img className='md:w-80 w-50 md:h-65 h-40 rounded-t-2xl hover:scale-105 transition-all duration-300' src={AdimnLogo} />
              <h1 className='p-5 font-bold'>Admin</h1>
            </div>
          </Link>
          <Link to={'/loginStudent'}>
            <div className="text-center overflow-hidden  w-full bg-linear-to-b from-white to-[#beaf9a]
            backdrop-blur-md 
            border border-white/40 
            rounded-3xl 
            shadow-xl ">
              <img className='md:w-80 w-50 md:h-65 h-40 rounded-t-2xl hover:scale-105 transition-all duration-300' src={StudentLogo} />
              <h1 className='p-5 font-bold'>Student</h1>
            </div>
          </Link>
        </div>
        
      </div>
    </>
  )
}