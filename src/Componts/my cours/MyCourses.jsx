import React from 'react'
import profilephoto from './../../assets/images/71b48ac3d16520fc208a4a4730a42a706a1fe48f.jpg'
import { Outlet, useLocation } from 'react-router-dom'



const MyCourses = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      {/* information section  */}

      {pathname.includes("complete") ? <Outlet /> :
        <div>
          <section className=' flex justify-center items-center gap-8'>
            <img src={profilephoto} alt="" className='w-48 h-52 rounded-2xl pt-3' />
            <div>
              <p className='flex py-1  text-[24px] font-semibold items-center'>
                <svg class="w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z" /><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z" /></svg>
                elsayed mohamed elkhouly
              </p>
              <p className='flex py-1 text-[20px] font-medium items-center'>
                <svg class="w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z" /><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z" /></svg>
                elsayed mohamed elkhouly
              </p>
              <p className='flex py-1 text-[20px] font-medium items-center'>
                <svg class="w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z" /><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z" /></svg>
                elsayed mohamed elkhouly
              </p>
              <p className='flex py-1 text-[20px] font-medium items-center'>
                <svg class="w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z" /><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z" /></svg>
                elsayed mohamed elkhouly
              </p>
              <p className='flex py-1 text-[20px] font-medium items-center'>
                <svg class="w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z" /><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z" /></svg>
                elsayed mohamed elkhouly
              </p>
              <p className='flex py-1 text-[20px] font-medium items-center'>
                <svg class="w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z" /><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z" /></svg>
                elsayed mohamed elkhouly
              </p>

            </div>
          </section>
          <div className="w-[710px]  h-1 bg-[#2b4c71] opacity-40 mx-auto my-3"></div>




          <section>

            <h1 className='text-center text-4xl font-semibold my-7 '>My Courses</h1>
            <div className=''>
              {/* name of each tab group should be unique */}
             

            </div>
          </section>

        </div>
      }


    </>

  )
}

export default MyCourses