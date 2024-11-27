import React, { useEffect, useState } from 'react';
import './animations.css';
import ocohstech_background from "../Assets/ocohstech_background.webp";

const Secthree = () => {


    return(
        <div className='w-full pt-8 pb-24 px-2 md:px-10 lg:px-16 bg-indigo-50'>
            <div>
            
                <div>
                    <h2 className='px-2 text-4xl mt-10 text-start md:text-center'>Our Courses</h2>
                    <p className='px-2 md:px-10 py-4 text-start md:text-center mb-16 '>
                    Our featured courses provide a comprehensive curriculum designed to equip
                    students with the skills and knowledge necessary for success in their chosen fields.
                    </p>
                </div>

                {/* box1 */}
                <div className="bg-white my-6 mx-2 md:mx-6 flex flex-col md:flex-row px-6 py-6 rounded-md">
                    <div>
                        <img src={ocohstech_background} className='w-60 rounded-md' alt="img" />
                    </div>
                    <div className='w-full md:w-[500px] ml-0 md:ml-6 mt-6 md:mt-0 justify-start pt-6  '>
                        <button className='bg-[#925FE2] text-white px-4 py- flex justify-start '>Medical</button>
                        <p className='mt-2 font-semibold text-start text-md'>Community Health</p>
                        <p className='mt-2 text-start'>Community Health focuses on promoting and protecting the health of populations through education, prevention, and health services. It equips students with skills to address public health issues, implement programs, and improve overall community well-being.
                        </p>
                        <p className='text-start mt-4 text-[#925FE2]'><span className='font-semibold text-gray-800'>HOD:</span></p>
                    </div>
                </div>

                 {/* box2 */}
                 <div className="bg-white my-6 mx-2 md:mx-6 flex flex-col md:flex-row px-6 py-6 rounded-md">
                    <div>
                        <img src={ocohstech_background} className='w-60 rounded-md' alt="img" />
                    </div>
                    <div className='w-full md:w-[500px] ml-0 md:ml-6 mt-6 md:mt-0 justify-start pt-2  '>
                        <button className='bg-[#925FE2] text-white px-4 flex justify-start '>Medical</button>
                        <p className='mt-2 font-semibold text-start text-md'>Medical Laboratory Science </p>
                        <p className='mt-2 text-start'>Medical Laboratory Science trains students to analyze human samples for diagnosing and treating diseases. It combines theory with hands-on practice in areas like microbiology, hematology, and clinical chemistry, preparing graduates for vital roles in healthcare and research.
                        </p>
                        <p className='text-start mt-4 text-[#925FE2]'><span className='font-semibold text-gray-800'>HOD: </span></p>
                    </div>
                </div>

                 {/* box3 */}
                 <div className="bg-white my-6 mx-2 md:mx-6 flex flex-col md:flex-row px-6 py-6 rounded-md">
                    <div>
                        <img src={ocohstech_background} className='w-60 rounded-md' alt="img" />
                    </div>
                    <div className='w-full md:w-[500px] ml-0 md:ml-6 mt-6 md:mt-0 justify-start pt-2  '>
                        <button className='bg-[#925FE2] text-white px-4 py- flex justify-start '>Medical</button>
                        <p className='mt-2 font-semibold text-start text-md'>Pharmacy</p>
                        <p className='mt-2 text-start'>Pharmacy focuses on the study of drugs and their effects, preparing students to dispense
                            medications and counsel patients. It combines science and healthcare to ensure safe and effective use of medicines,
                            contributing to improved patient outcomes.
                        </p>
                        <p className='text-start mt-4 text-[#925FE2]'><span className='font-semibold text-gray-800'>HOD:</span></p>
                    </div>
                </div>

                 {/* box4 */}
                 <div className="bg-white my-6 mx-2 md:mx-6 flex flex-col md:flex-row px-6 py-6 rounded-md">
                    <div>
                        <img src={ocohstech_background} className='w-60 rounded-md' alt="img" />
                    </div>
                    <div className='w-full md:w-[500px] ml-0 md:ml-6 mt-6 md:mt-0 justify-start pt-2  '>
                        <button className='bg-[#925FE2] text-white px-4 text-start '>Medical</button>
                        <p className='mt-2 font-semibold text-start text-md'>Dispensary & Optometry Technician</p>
                        <p className='mt-2 text-start'>This course trains students to assist in dispensing medications and providing basic eye care services.
                            It combines skills in pharmacy support and optometry to prepare graduates for roles in healthcare settings.
                        </p>
                        <p className='text-start mt-4 text-[#925FE2]'><span className='font-semibold text-gray-800'>HOD:</span></p>
                    </div>
                </div>

                

                <div className='flex justify-start md:justify-center '>
                    <button className="bg-[#925FE2] text-white px-4 py-4 rounded-md mt-20 md:mt-10 ml-2 md:ml-0">
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                            <div>View All Courses</div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Secthree;