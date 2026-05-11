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
import LoginAdmin from './Componts/LoginAdmin/LoginAdmin'
import LoginStudent from './Componts/LoginStudent/LoginStudent'
import RoleLogin from './Componts/RoleLogin/RoleLogin'
import AuthContextProvider from './Context/AuthContextProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import ProtectedRouts from './Componts/ProtectedRoutes/ProtectedRouts'

const client = new QueryClient();

function App() {
  const router = createBrowserRouter([
    {
      path: "", element:<ProtectedRouts > <SideBar /> </ProtectedRouts>, children: [
        { path: "", element: <ProtectedRouts > <LayOutCourses /> </ProtectedRouts> },
        { 
          path: "myCourses", element: <ProtectedRouts > <MyCourses /> </ProtectedRouts>, children: [
            { index: true, element: <ProtectedRouts > <ActiveCourses /> </ProtectedRouts> },
            { path: "activeCourses", element: <ProtectedRouts > <ActiveCourses /> </ProtectedRouts> },
            {
              path: "complete", element: <ProtectedRouts > <CompletedCourses /> </ProtectedRouts>, children: [
                { path: "firstYear", element: <ProtectedRouts > <FirstYear /> </ProtectedRouts> },
                { path: "secondYear", element: <ProtectedRouts > <SecondYear /> </ProtectedRouts> },
                { path: "thirdYear", element: <ProtectedRouts > <ThirdYear /> </ProtectedRouts> },
                { path: "fourthYear", element: <ProtectedRouts > <FourthYear /> </ProtectedRouts> },
              ]
            },
          ]
        },

        { path: "coursesregistration", element: <CoursesRegisteration /> },
        { path: "confirmRegistration", element: <ConfirmRegistration /> },


      ]
    },
    { path: "/loginStudent", element: <LoginStudent /> },
    { path: "/loginAdmin", element: <LoginAdmin /> },
    { path: "/rolelogin", element: <RoleLogin /> }
  ])

  return (
    <QueryClientProvider client={client}>
      <AuthContextProvider>
        <Toaster />
        <RouterProvider router={router} />
      </AuthContextProvider>
    </QueryClientProvider>
  )
}

export default App
