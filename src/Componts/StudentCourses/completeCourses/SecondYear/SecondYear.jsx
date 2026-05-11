import React, { useContext } from 'react'
import { Authcontext } from '../../../../Context/AuthContextProvider';

export default function SecondYear() {
  const { profile } = useContext(Authcontext)
    const CompletedCourses = profile?.data?.completedCourses || []
    const secondYearCourses = CompletedCourses?.filter(
      (course) => course.year === "SECOND_YEAR"
    );
    console.log(secondYearCourses);
  return (
   <div className='grid md:grid-cols-2  grid-cols-1 gap-7 lg:ms-20 p-3'>
  {secondYearCourses?.map((course, index) => (
      <div key={index} className="lg:w-3/4  bg-white shadow-xl  rounded-3xl pb-5">
        <div className="text-center bg-[#3E7BBC] text-white font-semibold p-3 mb-3 rounded-t-3xl">
          <h1 className="text-xl">{course?.courseName}</h1>
        </div>
        <div className=" flex justify-between ms-5 mb-4 text-[#00BA54]">
          <h2 className=" font-semibold text-xl ">Final Grade : {course?.letterGrade}</h2>
        </div>
        <div className="flex justify-between  ms-5 font-semibold text-[#868686]">
          <span>Dr. Mostafa EL-ashry</span>
          <span className='pe-3'>GBA : {course?.gpaPoints}</span>
        </div>
      </div>))}
  
      
    </div>
  )
}
