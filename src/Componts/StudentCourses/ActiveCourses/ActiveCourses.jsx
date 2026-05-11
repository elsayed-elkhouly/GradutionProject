import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import Cookies from 'js-cookie'
export default function ActiveCourses() {
async function getprofile() {
    return axios.get("https://university-system-production.up.railway.app/student/profile/me", {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    })

  }
  const { data } = useQuery({
    queryKey: ["profile"],
    queryFn: getprofile
  })
  console.log(data?.data);

  const ActiveCourses = data?.data?.activeCourses || []
  return (
    <>
    <div className="grid md:grid-cols-2  md:gap-8 gap-4 lg:ms-20 md:p-0 p-5 mb-15 ">


      {ActiveCourses?.map((course,index) => (
      <div  key={index} className="lg:w-3/4  bg-white shadow-xl  rounded-3xl pb-5">
        <div className="text-center bg-[#3E7BBC] text-white font-semibold p-3 mb-3 rounded-t-3xl">
          <h1 className="text-xl">{course?.courseName}</h1>
        </div>
        <div className="">
          <h2 className="text-[#868686] font-semibold ps-3 ">{course?.courseCode}</h2>
          <h2 className="text-[#868686] font-semibold ps-3 ">{course?.year}</h2>
          <h2 className="  text-[#0055b0] font-semibold ps-3 ">  <span className='text-[#868686] font-bold'>Hours :</span> {course?.creditHours}</h2>
          
          
        </div>
      </div>))  }                             
      </div>
    </>
  )
}
