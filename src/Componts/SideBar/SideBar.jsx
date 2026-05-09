import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import profilephoto from './../../assets/images/71b48ac3d16520fc208a4a4730a42a706a1fe48f.jpg'
import styles from './SideBar.module.css'
import { FiHome } from "react-icons/fi";
import { IoCalendarClearOutline, IoDocumentTextOutline } from 'react-icons/io5'
import { IoMdBook, IoMdMenu } from "react-icons/io";

const SideBar = () => {
   const [open, setOpen] = useState(false);

  const closeSidebar = () => setOpen(false);

   return (
       <div className="flex h-screen overflow-hidden">
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-[#3E7BBC] text-white flex items-center justify-between p-4 z-50">
        <h2 className="font-bold">Student Dashboard</h2>

        <IoMdMenu
          className="text-3xl cursor-pointer"
          onClick={() => setOpen(true)}
        />
      </div>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 lg:hidden z-40"
          onClick={closeSidebar}
        />
      )}
      <div
        className={`fixed lg:static top-0 left-0 h-screen bg-[#3E7BBC] z-50 transition-transform duration-300
        w-[300px] lg:w-[376px]
        ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <div className="lg:hidden flex justify-end p-4">
          <button
            onClick={closeSidebar}
            className="text-white text-2xl"
          > 
            ✕
          </button>
        </div>
        <div className="flex items-center gap-3 justify-center py-[45px] mx-auto">
          <img
            className="w-[87px] h-[87px] rounded-full"
            src={profilephoto}
            alt="profile"
          />

          <div>
            <h3 className="text-amber-50 text-[20px] font-semibold capitalize">
              elsayed mohamed elkhouly
            </h3>
            <p className="text-white capitalize">
              information technology
            </p>
          </div>
        </div>
        <div className="justify-center items-center mx-auto w-10/12 bg-white py-3 rounded-2xl">
          <NavLink
            to={"mycourses"}
            onClick={closeSidebar}
            className={({ isActive }) =>
              `flex items-center gap-3 p-4 mt-3 ${
                isActive ? "bg-blue-500 text-white rounded-lg" : ""
              }`
            }
          >
            <IoMdBook className="text-xl" />
            <p>My courses</p>
          </NavLink>

          <NavLink
            to={"/CoursesRegistration"}
            onClick={closeSidebar}
            className={({ isActive }) =>
              `flex items-center gap-3 p-4 mt-3 ${
                isActive ? "bg-blue-500 text-white rounded-lg" : ""
              }`
            }
          >
            <IoDocumentTextOutline className="text-xl" />
            <p>Courses Registration</p>
          </NavLink>

          <p className="text-blue-600 font-medium p-10 mt-36 cursor-pointer">
            Log out
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 h-screen overflow-y-auto mt-16 md:mt-0">
        <Outlet />
      </div>

    </div>
   )
}

export default SideBar