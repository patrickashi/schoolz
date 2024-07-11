import React, {useState} from "react"
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
// import blackbullLogo from "../Assets/blackbullLogo.jpg"
import { Link } from "react-router-dom";



const  Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        // the opposite of nav
        setNav(!nav)
    }

    const handleLinkClick = (sectionId) => {
        setNav(!nav); // Close the navbar
        if (sectionId) {
          document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' }); // Scroll to the section
        }
      };
      
    return ( 
        <div className="flex justify-between items-center fixed top-0 left-0 right-0 z-50 py-2 px-2 md:px-6 bg-white  text-black">
            <div>
                {/* <img className="w-40"  size={20} alt="logo" /> */}
                <Link to="/">
                    <div className="flex align-middle ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 font-semibold align-middle text-emerald-500 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                        </svg>

                        <h2 className=" font-semibold text-2xl  text-emerald-500">Starschoolz</h2>
                    </div>
                </Link>
            </div>
            
            <div>
                <ul className="hidden mobile:hidden  md:flex lg:flex xl-flex 2xl:flex mx-auto  ">
                    <li className="p-4 hover:underline hover:cursor-pointer">
                        <Link to="/Servicesp">Home </Link>
                    </li>
                    <li className="p-4 hover:underline hover:cursor-pointer">
                        <Link to="/Projectsp">About us</Link>
                    </li>
                    <li className="p-4 hover:underline hover:cursor-pointer">
                        <Link to="/Aboutusp">All Courses</Link>
                    </li>
                    <li className="p-4 hover:underline hover:cursor-pointer">
                        <Link to="/Aboutusp">Blog Classic</Link>
                    </li>
                    <li className="p-4 hover:underline hover:cursor-pointer">
                        <Link to="/Aboutusp">Pages</Link>
                    </li>
                    <li className="p-4 hover:underline hover:cursor-pointer">
                        <Link to="/Aboutusp">Contact</Link>
                    </li>
                    
                </ul>

                
            </div>
            <button className="py-2 flex px-2 hover:underline hover:cursor-pointer bg-emerald-500 rounded-lg text-white" >
                <Link to=""> 
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                        <div>Sign in</div>
                    </div>
                </Link>
            </button>

            {/* <button className="block md:hidden p-4 hover:underline hover:cursor-pointer bg-emerald-500 text-white rounded-lg text-xs">Sign in</button> */}

            <div onClick={handleNav} className="mobile:block md:hidden 2xl:hidden lg:hidden xl:hidden z-20">
                {nav ? <AiOutlineClose className="text-black z-80" size={20}/> : <AiOutlineMenu className="text-black " size={20}/>} 
            </div>

            {/* toggle menu */}
            <div className={nav ? "fixed left-0 top-0 h-full w-[90%] ease-out duration-500 bg-white" : "fixed left-[-100%]"}>

                <div className="flex align-middle mt-4 ml-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-emerald-500 font-semibold align-middle ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                    </svg>

                    <h2 className="text-emerald-500 font-semibold text-2xl">Starschoolz</h2>
                </div>

                <ul className="flex flex-col p-4 my-6 gap-4 text-black">
                    <li className="p-4 border-l border-blue-600" onClick={() => { handleLinkClick() } }>
                    <Link to="/Servicesp">Home</Link>
                    </li>
                    <li className="p-4 border-l border-green-600" onClick={() => { handleLinkClick() } }>
                        <Link to="/Projectsp">About Us</Link>
                    </li>
                    <li className="p-4 border-l border-red-600" onClick={() => { handleLinkClick() } }>
                        <Link to="/Aboutusp">All Courses</Link> 
                    </li>
                    <li className="p-4 border-l border-red-600" onClick={() => { handleLinkClick() } }>
                        <Link to="/Aboutusp">Blog</Link> 
                    </li>
                    <li className="p-4 border-l border-red-600" onClick={() => { handleLinkClick() } }>
                        <Link to="/Aboutusp">Pages</Link> 
                    </li>
                    <li className="p-4 border-l border-pink-600" onClick={() => { handleLinkClick() }}>
                        <Link to="/Quotep">Contact</Link>
                    </li>
                </ul>

                <button className="py-2 flex px-2 ml-4 hover:underline hover:cursor-pointer bg-emerald-500 rounded-lg text-white" >
                    <Link to=""> 
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                            <div>Sign in</div>
                        </div>
                    </Link>
                </button>

               
            </div>
        </div>
     );
}
 
export default Navbar;