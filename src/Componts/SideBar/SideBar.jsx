import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import profilephoto from './../../assets/images/71b48ac3d16520fc208a4a4730a42a706a1fe48f.jpg'
import NavBar from '../../SubPage/NavBar/NavBar'
import styles from './SideBar.module.css'

import { IoMdBook } from "react-icons/io";
import { FiHome } from "react-icons/fi";
import { IoCalendarClearOutline, IoDocumentTextOutline } from 'react-icons/io5'

const SideBar = () => {
   return (
      <div className="flex h-screen overflow-hidden">

         <div className="bg-[#3E7BBC] h-screen">

            <div className='flex items-center gap-3 justify-center w-[376px] py-[45px] mx-auto'>
               <img
                  className="w-[87px] h-[87px] rounded-full"
                  src={profilephoto}
                  alt="profile"
               />

               <div>
                  <h3 className='text-amber-50 text-[20px] font-semibold capitalize'>
                     elsayed mohamed elkhouly
                  </h3>
                  <p className='text-white capitalize'>
                     information technology
                  </p>
               </div>
            </div>

            <div className='justify-center items-center mx-auto w-10/12 bg-white py-3 rounded-2xl'>

               <NavLink
                  to={"mycourses"}
                  className={({ isActive }) =>
                     `flex items-center gap-3 p-4 mt-3 ${
                        isActive ? "bg-blue-500 text-white rounded-lg" : ""
                     }`
                  }
               >
                  <IoMdBook className='text-xl' />
                  <p>My courses</p>
               </NavLink>

               <NavLink
                  to={"/Dashbord"}
                  className={({ isActive }) =>
                     `flex items-center gap-3 p-4 mt-3 ${
                        isActive ? "bg-blue-500 text-white rounded-lg" : ""
                     }`
                  }
               >
                  <FiHome className='text-xl' />
                  <p>Dashboard</p>
               </NavLink>

               <NavLink
                  to={"/TimeTable"}
                  className={({ isActive }) =>
                     `flex items-center gap-3 p-4 mt-3 ${
                        isActive ? "bg-blue-500 text-white rounded-lg" : ""
                     }`
                  }
               >
                  <IoCalendarClearOutline className='text-xl' />
                  <p>TimeTable</p>
               </NavLink>

               <NavLink
                  to={"/CoursesRegistration"}
                  className={({ isActive }) =>
                     `flex items-center gap-3 p-4 mt-3 ${
                        isActive ? "bg-blue-500 text-white rounded-lg" : ""
                     }`
                  }
               >
                  <IoDocumentTextOutline className='text-xl' />
                  <p>Courses Registration</p>
               </NavLink>

               <p className='text-blue-600 font-medium p-10 mt-32'>
                  Log out
               </p>

            </div>
         </div>
         <div className="w-3/4 h-screen overflow-y-auto">

            <NavBar />
            <Outlet />

         </div>

      </div>
   )
}

export default SideBar