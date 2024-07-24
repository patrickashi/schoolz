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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt dolore magna aliqua. Quis
                    ipsum suspendisse ultrices gravida.
                </p>
            </div>

            <div className='flex flex-col md:flex-row justify-evenly gap-10 md:gap-0'>
                <div className=' shadow-md px-20 py-4 rounded-md'>
                    <img src={icon04} className='w-40 md:w-40' alt="img" />
                    <p>Arts & Hummanities(2)</p>
                </div>
                <div className='shadow-md px-20 py-4 rounded-md'>
                    <img src={icon05} className='w-40 md:w-40' alt="img" />
                    <p className='pl-6 md:pl-0 md:text-center'>Business(2)</p>
                </div>
                <div className='shadow-md px-20 py-4 rounded-md'>
                    <img src={graduationicon} className='w-40 md:w-40' alt="img" />
                    <p>Computer Science(4)</p>
                </div>
            </div>

            <div className='flex flex-col md:flex-row justify-evenly gap-10 md:gap-0 mt-10'>
                <div className=' shadow-md px-20 py-4 rounded-md'>
                    <img src={icon01} className='w-40 md:w-40' alt="img" />
                    <p>Data Science(1)</p>
                </div>
                <div className='shadow-md px-20 py-4 rounded-md'>
                    <img src={icon02} className='w-40 md:w-40' alt="img" />
                    <p className='pl-6 md:pl-0 md:text-center'>Language Learning(2)</p>
                </div>
                <div className='shadow-md px-20 py-4 rounded-md'>
                    <img src={icon03} className='w-40 md:w-40' alt="img" />
                    <p>Math & Logic(1)</p>
                </div>
            </div>
        </div>
    )
}

export default Coursecategories;