import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MyCourses from './Componts/my cours/MyCourses'
import Layout from './Layout/Layout'
import DashBoard from './Componts/DashBoard/DashBoard'
import Complete from './componts/compeletcours/Complete'
import SideBar from './Componts/SideBar/SideBar'
import ActiveCourses from './Componts/ActiveCourses/ActiveCourses'
import FirstYear from './componts/FirstYear/FirstYear'
import SecondYear from './componts/SecondYear/SecondYear'
import ThirdYear from './componts/ThirdYear/ThirdYear'
import FourthYear from './componts/FourthYear/FourthYear'


function App() {
  const router = createBrowserRouter([{
    path: "", element: <SideBar />, children: [
      {path:"myCourses",element:<MyCourses/>,children:[
      {index:true , element:<ActiveCourses/>},
      {path:"activeCourses",element:<ActiveCourses/>},
      {path:"complete",element:<Complete/>,children:[
        {path:"firstYear",element:<FirstYear/>},
        {path:"secondYear",element:<SecondYear/>},
        {path:"thirdYear",element:<ThirdYear/>},
        {path:"fourthYear",element:<FourthYear/>},
      ]},
    ]},
      
      { path: "Dashbord", element:<DashBoard/> },


    ]
  }])

  return (
    <RouterProvider router={router} />
  )
}

export default App
