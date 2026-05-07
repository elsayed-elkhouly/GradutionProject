import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import LayOutCompleted from '../LayOutCompleted/LayOutCompleted'
export default function CompletedCourses() {
    
  return (
    <div className='container mx-auto text-center mt-5'>
      <LayOutCompleted/>
      <Outlet/>
    </div>
  )
}
