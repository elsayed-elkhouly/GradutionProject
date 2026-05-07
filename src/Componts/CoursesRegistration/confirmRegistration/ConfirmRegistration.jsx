import React from 'react'
import NavLayOut from '../../NavLayOut/NavLayOut'
import { IoDocumentTextOutline, IoPrintOutline } from 'react-icons/io5'
import { MdOutlineFileDownload } from 'react-icons/md'
import { FiPrinter } from 'react-icons/fi'

export default function ConfirmRegistration() {
    return (
        <div>
            <>
                <NavLayOut />
                <div className='mx-auto'>
                    <div className="flex justify-center items-center mt-8 gap-2">
                        <IoDocumentTextOutline className='text-3xl' />
                        <h1 className='font-semibold text-3xl'>Courses Registration</h1>
                    </div>
                    <div className="flex flex-col items-center mt-10 text-xl font-semibold gap-2">
                        <p>First Semester for the Academic Year</p>
                        <p>2025 - 2026</p>
                    </div>
                    <div className="text-xl font-semibold mt-6 p-10">
                        <p>Student Name: Mohammed Ismail Mohammed</p>
                        <p>Student ID: 123456789</p>
                    </div>
                    <div class="relative overflow-x-auto md:w-3/4 mx-auto rounded-xl mb-2 border-3 border-gray-300">
                        <table class="w-full text-sm text-left rtl:text-right  text-black">
                            <thead class="text-md text-white bg-[#3E7BBC] text-lg">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Course Name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Code
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Credit Hrs
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Doctor
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b border-gray-200 text-lg font-semibold">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        Network Security
                                    </th>
                                    <td class="px-6 py-4">
                                        IT423
                                    </td>
                                    <td class="px-6 py-4">
                                        3
                                    </td>
                                    <td class="px-6 py-4">
                                        Dr. Aida Nasr
                                    </td>
                                </tr>
                                <tr class="bg-white border-b border-gray-200 text-lg font-semibold">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        Network
                                    </th>
                                    <td class="px-6 py-4">
                                        IT322
                                    </td>
                                    <td class="px-6 py-4">
                                        3
                                    </td>
                                    <td class="px-6 py-4">
                                        Dr. Arwa Essam
                                    </td>
                                </tr>
                                <tr class="bg-white border-b border-gray-200 text-lg font-semibold">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        Network
                                    </th>
                                    <td class="px-6 py-4">
                                        IT322
                                    </td>
                                    <td class="px-6 py-4">
                                        3
                                    </td>
                                    <td class="px-6 py-4">
                                        Dr. Arwa Essam
                                    </td>
                                </tr>
                                <tr class="bg-white border-b border-gray-200 text-lg font-semibold">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        Network
                                    </th>
                                    <td class="px-6 py-4">
                                        IT322
                                    </td>
                                    <td class="px-6 py-4">
                                        3
                                    </td>
                                    <td class="px-6 py-4">
                                        Dr. Arwa Essam
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div className="text-xl font-semibold p-10">
                        <p>Total Credit Hrs: 18</p>
                    </div>
                    <div className="flex justify-around gap-10 mt-3 mb-5">
                        
                        <button className='bg-[#3E7BBC] text-white font-semibold text-lg px-6 py-2 rounded-full'>
                           <div className="flex justify-center items-center gap-2">
                             <MdOutlineFileDownload />
                            Download
                           </div>
                        </button>
                        <button className='bg-[#3E7BBC] text-white font-semibold text-lg px-6 py-2 rounded-full'>
                             <div className="flex justify-center items-center gap-2">
                                <FiPrinter />
                                print
                             </div>
                        </button>
                    </div>

                </div>
            </>

        </div>
    )
}
