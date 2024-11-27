import React, { useEffect, useState } from 'react';
import './animations.css';
import graduationicon from "../Assets/graduationicon.png";
import icon01 from "../Assets/icon01.png";
import icon02 from "../Assets/icon02.png";
import icon03 from "../Assets/icon03.png";
import icon04 from "../Assets/icon04.png";
import icon05 from "../Assets/icon05.png";


const Coursecategories = () => {
    return (
        <div className='w-full pt-8 pb-24 px-2 md:px-10 lg:px-16 '>
            <div>
                <h2 className='px-2 text-4xl mt-10 text-start md:text-center'>All Course Categories</h2>
                <p className='px-2 md:px-10 py-4 text-start md:text-center mb-16 '>
                    Our Courses categories encompasses a comprehensive range of educational programs
                    and subjects offered across various fields, providing learners with diverse opportunities
                    to acquire knowledge, skills, and qualifications in multiple disciplines.
                </p>
            </div>

            <div className='flex flex-col md:flex-row justify-evenly gap-10 md:gap-0'>
                <div className=' shadow-md px-20 py-4 rounded-md'>
                    <img src={icon04} className=' md:w-40' alt="img" />
                    <p className='text-center'>Community Health(2)</p>
                </div>
                <div className='shadow-md px-20 py-4 rounded-md'>
                    <img src={icon05} className=' md:w-40' alt="img" />
                    <p className='text-center'>Community Health Extension Worker(CHEW)</p>
                </div>
                <div className='shadow-md px-20 py-4 rounded-md'>
                    <img src={graduationicon} className=' md:w-40' alt="img" />
                    <p className='text-center'>Junior Community Health Extension Worker(JCHEW)</p>
                </div>
            </div>

            <div className='flex flex-col md:flex-row justify-evenly gap-10 md:gap-0 mt-10'>
                <div className=' shadow-md px-20 py-4 rounded-md'>
                    <img src={icon01} className=' md:w-40' alt="img" />
                    <p className='text-center'>Medical Laboratory Science(1)</p>
                </div>
                <div className='shadow-md px-20 py-4 rounded-md'>
                    <img src={icon02} className=' md:w-40' alt="img" />
                    <p className='text-center'>Pharmacy Technician(1)</p>
                </div>
                <div className='shadow-md px-20 py-4 rounded-md'>
                    <img src={icon03} className=' md:w-40' alt="img" />
                    <p className='text-center'>Dispensary & Optpmetry Technician(1)</p>
                </div>
            </div>
        </div>
    )
}

export default Coursecategories;