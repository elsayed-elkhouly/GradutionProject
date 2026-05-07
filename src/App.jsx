import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MyCourses from './Componts/StudentCourses/MyCourses/MyCourses'
import Layout from './Layout/Layout'

import SideBar from './Componts/SideBar/SideBar'
import ActiveCourses from './Componts/StudentCourses/ActiveCourses/ActiveCourses'
import FirstYear from './Componts/StudentCourses/completeCourses/FirstYear/FirstYear'
import SecondYear from './Componts/StudentCourses/completeCourses/SecondYear/SecondYear'
import ThirdYear from './Componts/StudentCourses/completeCourses/ThirdYear/ThirdYear'
import FourthYear from './Componts/StudentCourses/completeCourses/FourthYear/FourthYear'
import LayOutCourses from './Componts/StudentCourses/LayOutCourses/LayOutCourses'
import CompletedCourses from './Componts/StudentCourses/completeCourses/Complete'
import CoursesRegisteration from './Componts/CoursesRegistration/CoursesRegisteration'
import ConfirmRegistration from './Componts/CoursesRegistration/confirmRegistration/ConfirmRegistration'


function App() {
  const router = createBrowserRouter([{
    path: "", element: <SideBar />, children: [
      { path: "", element: <LayOutCourses /> },
      {path:"myCourses",element:<MyCourses/>,children:[
      {index:true , element:<ActiveCourses/>},
      {path:"activeCourses",element:<ActiveCourses/>},
      {path:"complete",element:<CompletedCourses/>,children:[
        {path:"firstYear",element:<FirstYear/>},
        {path:"secondYear",element:<SecondYear/>},
        {path:"thirdYear",element:<ThirdYear/>},
        {path:"fourthYear",element:<FourthYear/>},
      ]},
    ]},
      
      { path: "coursesregistration", element:<CoursesRegisteration/> },
        {path:"confirmRegistration",element:<ConfirmRegistration/>},


    ]
  }])

  return (
    <RouterProvider router={router} />
  )
}

export default App
