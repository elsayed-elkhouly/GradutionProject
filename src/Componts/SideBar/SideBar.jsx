import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import profilephoto from './../../assets/images/71b48ac3d16520fc208a4a4730a42a706a1fe48f.jpg'
import NavBar from '../../SubPage/NavBar/NavBar'
const SideBar = () => {
   return (

      <>

         <div className='   flex  mx-auto  '>

            <div className='w-1/4 bg-red-200  '>
               {/* section 1 */}
               <div className=' flex items-center gap-5 justify-center w-[376px] py-[45px] mx-auto'>
                  <img className="w-[87px] h-[87px] rounded-full  bg-auto" src={profilephoto} alt="Rounded avatar" />
                  <div>
                     <h3 className='text-amber-50 text-[20px] font-[600px] capitalize'> elsayed mohamed elkhouly </h3>
                     <p className='text-white  capitalize'> information technology</p></div>
               </div>

               {/* section 2 items  */}

               <div className='  w-[366px] justify-center items-center mx-auto bg-white py-3 rounded-2xl'>

                  <NavLink to={"mycourses"} className={"flex items-center gap-3 hover:bg-amber-200 p-4 mt-3 "}>
                     <svg class="w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z" /><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z" /></svg>
                     <p>My courses</p>
                  </NavLink>
                  <NavLink to={"/Dashbord"} className={"flex items-center gap-3 hover:bg-amber-200 p-4 mt-3 "}>
                     <svg class="w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z" /><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z" /></svg>
                     <p>Dashboard</p>
                  </NavLink>
                  <NavLink className={"flex items-center gap-3 hover:bg-amber-200 p-4 mt-3 "}>
                     <svg class="w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z" /><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z" /></svg>
                     <p>TimeTable</p>
                  </NavLink>
                  <NavLink className={"flex items-center gap-3 hover:bg-amber-200 p-4 mt-3 "}>
                     <svg class="w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z" /><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z" /></svg>
                     <p>Courses Registration</p>
                  </NavLink>
                  <p className='text-blue-600 font-medium p-10 mt-[962px]'>Log out</p>
               </div>
            </div>
            <div className=' w-3/4'>
               <NavBar />
               <Outlet />
            </div>
         </div>









      </>
   )
}

export default SideBar