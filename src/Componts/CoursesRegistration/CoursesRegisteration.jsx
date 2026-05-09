import React from 'react'
import LayOutCourses from '../StudentCourses/LayOutCourses/LayOutCourses'
import NavLayOut from '../NavLayOut/NavLayOut'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import { Checkbox } from '@mui/material'
import { Outlet, useNavigate } from 'react-router-dom'


const CoursesRegistration = () => {
  let confirm = useNavigate()
  function toConfirm() {
    confirm('/confirmregistration')
  }
  return (
    <>

      <NavLayOut />
      <div className='mx-auto'>
        <div className="flex justify-center items-center mt-8 text-2xl gap-2">
          <buildStyles className='text-3xl' />
          <h1 className='font-semibold'>Courses Registration</h1>
        </div>


        <div className='text-center mx-auto mt-8 bg-[#3E7BBC] md:max-w-1/3 max-w-55 rounded-2xl p-4'>
          <h1 className='text-white font-semibold text-2xl '>Registration Summary</h1>
          <CircularProgressbar className='md:p-10 md:mt-0 md:mb-0 md:pb-7 mb-4 mt-4' value={20} text={`6 / 18 Hrs`} styles={buildStyles({
            pathColor: "#3E7BBC",
            textColor: "white",
            trailColor: "white",
            textSize: "0.8rem",
            fontWeight: "bolder",

          })} />
          <div className="text-white font-semibold text-2xl">
            <p>Selected Hours</p>
            <p>Total Credit Hours</p>
          </div>

        </div>
        <div className='grid md:grid-cols-2  grid-cols-1 gap-7 mt-10 lg:ms-20 p-3'>
          <div className="lg:w-3/4  bg-white shadow-md shadow-gray-400 border-2 border-gray-400    rounded-3xl pb-5">
            <div className=" text-black font-semibold p-3 mb-3 rounded-t-3xl flex items-center justify-between">
              <h1 className="text-2xl">Data Structure</h1>
              <Checkbox sx={{
                color: "gray",
                "&.Mui-checked": {
                  color: "#00BA54",

                },
              }} />
            </div>
            <div className=" flex flex-col ms-5 mb-4 text-[#868686]">
              <p className=" font-semibold text-lg ">Credit Hours: 3 Hrs</p>
              <p className=" font-semibold text-lg ">Code: CS434</p>
              <p className=" font-semibold text-lg ">Dr. Walid AbdElkhaliq</p>


            </div>

          </div>
          <div className="lg:w-3/4  bg-white shadow-md shadow-gray-400 border-2 border-gray-400  rounded-3xl pb-5">
            <div className=" text-black font-semibold p-3 mb-3 rounded-t-3xl flex items-center justify-between">
              <h1 className="text-2xl">Pattern</h1>
              <Checkbox className='rounded-full' sx={{
                color: "gray",
                "&.Mui-checked": {
                  color: "#00BA54",

                },
              }} />
            </div>
            <div className=" flex  flex-col ms-5 mb-4 text-[#868686]">
              <p className=" font-semibold text-lg ">Credit Hours: 3 Hrs</p>
              <p className=" font-semibold text-lg ">Code: CS434</p>
              <p className=" font-semibold text-lg ">Dr. Marian </p>
            </div>

          </div>

        </div>
        <div className="flex flex-col md:flex-row p-5 justify-center gap-5 mt-2 mb-20">
          <button className='bg-[#3E7BBC] text-white font-semibold text-lg px-6 py-2 rounded-full'>
            Add Course
          </button>
           <button onClick={toConfirm} className='bg-[#3E7BBC] text-white font-semibold text-lg px-6 py-2 rounded-full'>
            confirm registration
          </button>
        </div>
        

      </div>
      
    </>
  )
}

export default CoursesRegistration