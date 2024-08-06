import React, { useEffect, useState } from 'react';
import './animations.css';
import pic2 from "../Assets/pic2.jpg";
import { useInView } from 'react-intersection-observer';

const Sectwo = () => {
    
    
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.1, // Adjust based on when you want the animation to start
    });

    return (
        <div className=" w-full pt-4 pb-24 px-2 md:px-10 lg:px-10">
           <div className="flex flex-col md:flex-row justify-between items-center ">
                <div className=" py-16 px-2 md:px-10 lg:px-10 w-full md:w-120">
                    <h3
                    ref={ref}
                    className={`transition-opacity duration-1000 ease-in-out text-[#925FE2] font-bold mb-4  ${inView ? 'slide-in-from-left' : 'opacity-0'}`}>About Us</h3>
                    <h2 className="text-3xl mb-4 md:text-4xl font-semibold text-gray-700">We are Experts Learning Institution</h2>
                    <p className="my-6 text-lg mt-20 md:mt-4">We are Experts Learning Institution, dedicated to delivering top-tier education and fostering lifelong learning.</p>

                    <h2 className="text-3xl mb-4 md:text-4xl font-semibold text-gray-700">Our Goal</h2>
                    <p className="my-6 text-lg mt-20 md:mt-4">Our goal is to provide an enriching learning environment that nurtures academic excellence and personal growth,
                        equipping students with the skills and knowledge to succeed in an ever-changing world.
                    </p>

                    <h2 className="text-3xl mb-4 md:text-4xl font-semibold text-gray-700">Our Mission</h2>
                    <p className="my-6 text-lg mt-20 md:mt-4">
                     Our mission is to foster a dynamic and supportive learning community where students are inspired to
                     achieve their full potential. We aim to cultivate critical thinking, creativity, and lifelong learning in every student.
                    </p>

                    <h2 className="text-3xl mb-4 md:text-4xl font-semibold text-gray-700">Our vission</h2>
                    
                    <p className="my-6 text-lg mt-20 md:mt-4">Our vision is to be a leading institution recognized for educational excellence
                        and innovation. We strive to empower students with the knowledge and skills necessary to thrive in an ever-changing world.
                    </p>
            
                    
                </div>
                <div className="transition-opacity duration-1000 ease-in-out flex justify-end w-full md:mt-0">
                    <img src={pic2}  alt="img" className="w-full md:w-[500px] h-[400px] md:h-[800px] object-cover rounded-lg" />
                </div>
           </div>
        </div>
    )
}

export default Sectwo;