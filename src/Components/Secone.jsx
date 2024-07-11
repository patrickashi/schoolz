import React, { useEffect, useState } from 'react';
import './animations.css';
import one from "../Assets/one.png";

const Secone = () => {
    
    
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
      setShowContent(true);
    }, []);

    return (
        <div className=" w-full pt-8 pb-24 px-2 md:px-10 lg:px-16 bg-emerald-50">
           <div className="flex flex-col md:flex-row justify-between items-center ">
                <div className=" pt-20 px-2 md:px-10 lg:px-10 w-full md:w-120">
                    <h2 className={`text-3xl  md:text-4xl font-semibold ${showContent ? 'h2-slide-in' : 'hidden-initially'}`}>Education is the best</h2>
                    <h2 className={`text-3xl mb-10 md:text-4xl font-semibold ${showContent ? 'h2-slide-in' : 'hidden-initially'}`}>Key Succes in Life.</h2>
                    
                    <p className={`my-6 text-xl mt-20 md:mt-4 ${showContent ? 'p-slide-in' : 'hidden-initially'}`}>Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                         commodo viverra maecenas  vel facilisis.
                    </p>
            
                    <button className="bg-emerald-500 text-white px-4 py-4 rounded-md mt-40 md:mt-10">
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                            <div>View All Courses</div>
                        </div>
                    </button>
                </div>
                <div className="transition-opacity duration-1000 ease-in-out flex justify-end w-full mt-10 md:mt-0">
                    <img src={one}  alt="img" className="w-full md:w-[500px] h-[500px] object-cover rounded-lg" />
                </div>
           </div>
        </div>
    )
}

export default Secone;