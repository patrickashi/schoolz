import React, { useEffect, useState } from 'react';
import './animations.css';
import lovetolearn from "../Assets/lovetolearn.jpg";
import arduino from "../Assets/Arduino.jpg";
import books from "../Assets/books.jpg";

const Secthree = () => {


    return(
        <div className='w-full pt-8 pb-24 px-2 md:px-10 lg:px-16 bg-indigo-50'>
            <div>
            
                <div>
                    <h2 className='px-2 text-4xl mt-10 text-start md:text-center'>Our Featured Courses</h2>
                    <p className='px-2 md:px-10 py-4 text-start md:text-center mb-16 '>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt dolore magna aliqua. Quis
                        ipsum suspendisse ultrices gravida.
                    </p>
                </div>

                {/* box1 */}
                <div className="bg-white my-6 mx-2 md:mx-6 flex flex-col md:flex-row px-6 py-6 rounded-md">
                    <div>
                        <img src={lovetolearn} className='w-full md:w-80 rounded-md' alt="img" />
                    </div>
                    <div className='w-full md:w-[500px] ml-0 md:ml-6 mt-6 md:mt-0 justify-start pt-6  '>
                        <button className='bg-[#925FE2] text-white px-4 py- flex justify-start '>Computer Science</button>
                        <p className='mt-2 font-semibold text-start text-md'>Software Development</p>
                        <p className='mt-2 text-start'>Praestat neque vita proposito causamque suadeas deprehensus
                            turpis tam gratiam audiunt beatos Erechthei patria ambulet
                            tuis puerum eris boves nimis officia instructus dare chrysippo multo…
                        </p>
                        <p className='text-start mt-4 text-[#925FE2]'><span className='font-semibold text-gray-800'>Instructor:</span> Alan Smith</p>
                    </div>
                </div>

                 {/* box2 */}
                 <div className="bg-white my-6 mx-2 md:mx-6 flex flex-col md:flex-row px-6 py-6 rounded-md">
                    <div>
                        <img src={books} className='w-full md:w-80 rounded-md' alt="img" />
                    </div>
                    <div className='w-full md:w-[500px] ml-0 md:ml-6 mt-6 md:mt-0 justify-start pt-6  '>
                        <button className='bg-[#925FE2] text-white px-4 py- flex justify-start '>Business</button>
                        <p className='mt-2 font-semibold text-start text-md'>Business Essentials</p>
                        <p className='mt-2 text-start'>Praestat neque vita proposito causamque suadeas deprehensus
                            turpis tam gratiam audiunt beatos Erechthei patria ambulet
                            tuis puerum eris boves nimis officia instructus dare chrysippo multo…
                        </p>
                        <p className='text-start mt-4 text-[#925FE2]'><span className='font-semibold text-gray-800'>Instructor: </span>John Doe</p>
                    </div>
                </div>

                 {/* box3 */}
                 <div className="bg-white my-6 mx-2 md:mx-6 flex flex-col md:flex-row px-6 py-6 rounded-md">
                    <div>
                        <img src={lovetolearn} className='w-full md:w-80 rounded-md' alt="img" />
                    </div>
                    <div className='w-full md:w-[500px] ml-0 md:ml-6 mt-6 md:mt-0 justify-start pt-6  '>
                        <button className='bg-[#925FE2] text-white px-4 py- flex justify-start '>Arts & Hummanities</button>
                        <p className='mt-2 font-semibold text-start text-md'>History And Philosophy</p>
                        <p className='mt-2 text-start'>Praestat neque vita proposito causamque suadeas deprehensus
                            turpis tam gratiam audiunt beatos Erechthei patria ambulet
                            tuis puerum eris boves nimis officia instructus dare chrysippo multo…
                        </p>
                        <p className='text-start mt-4 text-[#925FE2]'><span className='font-semibold text-gray-800'>Instructor:</span> Adam Smith</p>
                    </div>
                </div>

                 {/* box4 */}
                 <div className="bg-white my-6 mx-2 md:mx-6 flex flex-col md:flex-row px-6 py-6 rounded-md">
                    <div>
                        <img src={books} className='w-full md:w-80 rounded-md' alt="img" />
                    </div>
                    <div className='w-full md:w-[500px] ml-0 md:ml-6 mt-6 md:mt-0 justify-start pt-6  '>
                        <button className='bg-[#925FE2] text-white px-4 py- flex justify-start '>Language Learning</button>
                        <p className='mt-2 font-semibold text-start text-md'>English Learning</p>
                        <p className='mt-2 text-start'>Praestat neque vita proposito causamque suadeas deprehensus
                            turpis tam gratiam audiunt beatos Erechthei patria ambulet
                            tuis puerum eris boves nimis officia instructus dare chrysippo multo…
                        </p>
                        <p className='text-start mt-4 text-[#925FE2]'><span className='font-semibold text-gray-800'>Instructor:</span> Osha Aniseya</p>
                    </div>
                </div>

                 {/* box5 */}
                 <div className="bg-white my-6 mx-2 md:mx-6 flex flex-col md:flex-row px-6 py-6 rounded-md">
                    <div>
                        <img src={arduino} className='w-full md:w-80 rounded-md' alt="img" />
                    </div>
                    <div className='w-full md:w-[500px] ml-0 md:ml-6 mt-6 md:mt-0 justify-start pt-6  '>
                        <button className='bg-[#925FE2] text-white px-4 py- flex justify-start '>Programming</button>
                        <p className='mt-2 font-semibold text-start text-md'>Arduino Programming</p>
                        <p className='mt-2 text-start'>Praestat neque vita proposito causamque suadeas deprehensus
                            turpis tam gratiam audiunt beatos Erechthei patria ambulet
                            tuis puerum eris boves nimis officia instructus dare chrysippo multo…
                        </p>
                        <p className='text-start mt-4 text-[#925FE2]'><span className='font-semibold text-gray-800'>Instructor: </span>Patrick Ashi</p>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <button className="bg-[#925FE2] text-white px-4 py-4 rounded-md mt-20 md:mt-10">
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