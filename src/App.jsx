
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MyCourses from './Componts/my cours/MyCourses'
import Layout from './Layout/Layout'
import DashBoard from './Componts/DashBoard/DashBoard'
import Complete from './SubPage/compeletcours/Complete'
import SideBar from './Componts/SideBar/SideBar'

function App() {
  const router = createBrowserRouter([{
    path: "", element: <SideBar />, children: [
      { path: "mycourses", element: <MyCourses />,children:[{
        path:"complete",element:<Complete/>
      }]},
      { path: "Dashbord", element:<DashBoard/> },


    ]
  }])

  return (
    <RouterProvider router={router} />
  )
}

export default App
