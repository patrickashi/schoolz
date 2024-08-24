import React from "react"

const Footer = () => {
    return (
        <div className="  duration-200 text-gray-800 ">
            <div className="flex gap-16 flex-col px-2 md:px-10 lg:px-16 py-10 md:flex-row bg-indigo-50 justify-between pb-4">
                <div>
                    <div className="flex align-middle hover:text-black ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 font-semibold align-middle ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                        </svg>

                        <h2 className="font-semibold text-xl ml-2 ">Ocohstech</h2>
                    </div>
                </div>
                <div>
                    <h1 className="font-bold mb-4">Popular Courses</h1>
                    <ul className="flex flex-col gap-2">
                        <li>Algebra & Calculus</li>
                        <li>Business Essentials</li>
                        <li>Business Strategy</li>
                        <li>Data Analysis</li>
                        <li>English Learning</li>
                        <li>History & Philosophy</li>
                    </ul>
                </div>

                <div>
                    <h1 className="font-bold mb-4">Course Categories</h1>
                    <ul className="flex flex-col gap-2">
                        <li>Computer Science</li>
                        <li>Language Learning</li>
                        <li>Math & Logic</li>
                        <li>Arts & Humanities</li>
                        <li>Business</li>
                        <li>Data Science</li>
                    </ul>
                </div>
               
                <div>
                    <h1 className="font-bold mb-4">Contact Us</h1>
                    <ul className="flex flex-col gap-2">
                        <li>Bewo, Bekwarra</li>
                        <li>Cross River, Nigeria</li>
                        <li>70-3890-5049</li>
                        <li>ocohstech@gmail.com</li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-2 md:gap-0 justify-between py-4 px-2 md:px-10 lg:px-16 text-xs bg-indigo-100">
                <div>Pricacy Policy</div>
                <div>© 2024 Ocohstech</div>
            </div>
        </div>
    )
}

export default Footer;