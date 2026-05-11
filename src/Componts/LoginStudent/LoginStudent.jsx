import React, { useContext } from 'react'
import logoUni from '../../assets/images/8e248382e1e314dffe63ba186b83a73bc8968073 (1).png'
import logo from '../../assets/images/Adobe Express - file.png'
import { FaArrowLeft } from 'react-icons/fa'
import { SiSpringsecurity } from 'react-icons/si'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Authcontext } from '../../Context/AuthContextProvider'
import z from 'zod'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import toast from 'react-hot-toast'
import Cookies from "js-cookie";




const LoginStudent = () => {
  const { insertToken } = useContext(Authcontext)
    const navigate = useNavigate()

  const schame = z.object({
    studentCode: z.string("studentId is required"),
    nationalId: z.string("nationalId is required")
  })

  const { register, handleSubmit, formState: { errors } } = useForm({

    defaultValues: {
      studentCode: "",
      nationalId: ""
    },
    resolver: zodResolver(schame)
  })
  async function Signin(values) {

    try {
      const { data } = await axios.post("https://university-system-production.up.railway.app/student/signin", values);
      console.log(data);

      toast.success(data.message);
      insertToken(data.token);
      Cookies.set("token", data.token, { expires: 1 });

      navigate("/");
    } catch (error) {
       console.log("Message:", error.response?.data?.message);
      toast.error(error.response?.data?.message);
    }
  }
  return (
    <>

      <div className='flex justify-center items-center min-h-screen ss relative'>
        <div className='absolute top-2  md:w-36 w-20  md:left-3 left-0 '>
          <img src={logo} alt="" className='mx-auto' />
        </div>
        <div className='  relative w-109.5 h-130.25 shadow-2xl from-[rgba(74,144,194,0.85)] to-[rgba(230,220,203,0.8)] backdrop-blur-xl  rounded-2xl border-white border-2 p-5 mt-15'>
          <Link to={'/roleLogin'}><FaArrowLeft className='text-2xl cursor-pointer ' /></Link>
          <div className='flex justify-center items-center flex-col '>
            <div className='w-20 rounded-4xl'>
              <img src={logoUni} alt="" className='bg-white mt-1 border-white rounded-full object-cover' />
            </div>
            <h2 className='text-xl text-center font-semibold py-3'>Student Service Gateway</h2>
            <p className='font-semibold text-[18px] pb-6'>Tanta University</p>
          </div>
          <form onSubmit={handleSubmit(Signin)} className="max-w-sm mx-auto">
            <div className="mb-5 md:ms-9 ">
              <label className="floating-label">
                <span>Student ID</span>
                <input type="text" placeholder="Student ID" {...register("studentCode")} className="input input-md border-white border focus:border-amber-50 focus:outline-0  bg-transparent rounded-xl" />
                {errors.studentCode && <p className="text-red-500">{errors.studentCode.message}</p>}
              </label>
            </div>
            <div className="mb-5 md:ms-9">
              <label className="floating-label ">
                <span >National ID</span>
                <input {...register("nationalId")} type="text" placeholder="National ID" className="input input-md border-white border focus:border-amber-50 focus:outline-0 bg-transparent rounded-xl" />
                {errors.nationalId && <p className="text-red-500">{errors.nationalId.message}</p>}
              </label>
            </div>
            <button type='submit' className="my-5 py-2  btn btn-soft bg-linear-to-b from-[#32140E] to-[#7D4A40] w-full rounded-2xl text-white font-bold text-[18px] ">Login</button>
          </form>
          <p className=' flex items-center justify-center text-[#FF5047] gap-1.5 text-[16px] font-semibold'><SiSpringsecurity /> Privacy Policy and Data Security</p>
        </div>
      </div>




    </>
  )
}

export default LoginStudent