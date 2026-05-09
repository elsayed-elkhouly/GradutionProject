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
                        <h1 className='font-semibold md:text-3xl text-xl'>Courses Registration</h1>
                    </div>
                    <div className="flex flex-col items-center mt-10 text-xl font-semibold gap-2">
                        <p>First Semester for the Academic Year</p>
                        <p>2025 - 2026</p>
                    </div>
                    <div className="text-xl  font-semibold mt-6 md:p-10 p-3">
                        <p>Student Name: Mohammed Ismail Mohammed</p>
                        <p>Student ID: 123456789</p>
                    </div>
                    <div className="w-full md:w-3/4 mx-auto rounded-xl mb-2 mt-4 border-2 border-gray-300 overflow-hidden">

                        <table className="w-full text-black table-auto">

                            <thead className="bg-[#3E7BBC] text-white text-[10px] md:text-lg">
                                <tr>
                                    <th className="px-1 md:px-6 py-2 md:py-3">
                                        Course Name
                                    </th>

                                    <th className="px-1 md:px-6 py-2 md:py-3">
                                        Code
                                    </th>

                                    <th className="px-1 md:px-6 py-2 md:py-3">
                                        Credit Hrs
                                    </th>

                                    <th className="px-1 md:px-6 py-2 md:py-3">
                                        Doctor
                                    </th>
                                </tr>
                            </thead>

                            <tbody>

                                <tr className="bg-white border-b border-gray-200 text-[10px] md:text-lg font-semibold text-center">

                                    <td className="px-1 md:px-6 py-2 md:py-4 wrap-break-words">
                                        Network Security
                                    </td>

                                    <td className="px-1 md:px-6 py-2 md:py-4">
                                        IT423
                                    </td>

                                    <td className="px-1 md:px-6 py-2 md:py-4">
                                        3
                                    </td>

                                    <td className="px-1 md:px-6 py-2 md:py-4 wrap-break-words">
                                        Dr. Aida Nasr
                                    </td>

                                </tr>
                                <tr className="bg-white border-b border-gray-200 text-[10px] md:text-lg font-semibold text-center">

                                    <td className="px-1 md:px-6 py-2 md:py-4 wrap-break-words">
                                        Network Security
                                    </td>

                                    <td className="px-1 md:px-6 py-2 md:py-4">
                                        IT423
                                    </td>

                                    <td className="px-1 md:px-6 py-2 md:py-4">
                                        3
                                    </td>

                                    <td className="px-1 md:px-6 py-2 md:py-4 wrap-break-words">
                                        Dr. Aida Nasr
                                    </td>

                                </tr>
                                <tr className="bg-white border-b border-gray-200 text-[10px] md:text-lg font-semibold text-center">

                                    <td className="px-1 md:px-6 py-2 md:py-4 wrap-break-words">
                                        Network Security
                                    </td>

                                    <td className="px-1 md:px-6 py-2 md:py-4">
                                        IT423
                                    </td>

                                    <td className="px-1 md:px-6 py-2 md:py-4">
                                        3
                                    </td>

                                    <td className="px-1 md:px-6 py-2 md:py-4 wrap-break-words">
                                        Dr. Aida Nasr
                                    </td>

                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div className="text-xl font-semibold p-6">
                        <p>Total Credit Hrs: 18</p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-around md:gap-10 gap-3 mt-1 mb-20">

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
