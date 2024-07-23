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
                    <h2 className="text-3xl mb-4 md:text-4xl font-semibold">We are Experts Learning Institution</h2>
                    <p className="my-6 text-lg mt-20 md:mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus natus dicta et?</p>

                    <h2 className="text-3xl mb-4 md:text-4xl font-semibold">Our Goal</h2>
                    <p className="my-6 text-lg mt-20 md:mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos veritatis, dolorum nulla itaque nam molestias ducimus eum reiciendis,
                        voluptate reprehenderit modi, provident sit. Odio minima exercitationem maiores pariatur quos?
                    </p>

                    <h2 className="text-3xl mb-4 md:text-4xl font-semibold">Our Mission</h2>
                    <p className="my-6 text-lg mt-20 md:mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ullam similique sint, perferendis vero deserunt, excepturi enim quibusdam
                        quos doloremque quidem explicabo beatae laborum ad perspiciatis, est fugiat dolores obcaecati.
                    </p>

                    <h2 className="text-3xl mb-4 md:text-4xl font-semibold">Our vission</h2>
                    
                    <p className="my-6 text-lg mt-20 md:mt-4">Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                         commodo viverra maecenas  vel facilisis.
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