import React from 'react'
import profilephoto from './../../assets/images/71b48ac3d16520fc208a4a4730a42a706a1fe48f.jpg'
import { Outlet, useLocation } from 'react-router-dom'
import LayOutCourses from '../LayOutCourses/LayOutCourses';



const MyCourses = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      <LayOutCourses />
      <Outlet/>
    </>

  )
}

export default MyCourses