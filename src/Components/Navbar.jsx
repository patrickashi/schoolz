import React, {useState} from "react"
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import { Link } from "react-router-dom";
import ocohstechlogo from "../Assets/ocohstechlogo.png";



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
                <Link to="/">
                    <img className="w-20" src={ocohstechlogo}  size={20} alt="logo" />
                </Link>
            </div>
            
            <div>
                <ul className="hidden mobile:hidden  md:flex lg:flex xl-flex 2xl:flex mx-auto text-gray-800   ">
                    <li className="p-4 hover:underline hover:cursor-pointer">
                        <Link to="/">Home </Link>
                    </li>
                    <li className="p-4 hover:underline hover:cursor-pointer">
                        <Link to="/aboutp">About us</Link>
                    </li>
                    <li className="p-4 hover:underline hover:cursor-pointer">
                        <Link to="/allcoursesp">All Courses</Link>
                    </li>
                    <li className="p-4 hover:underline hover:cursor-pointer">
                        <Link to="/admissionp">Admission</Link>
                    </li>
                    <li className="p-4 hover:underline hover:cursor-pointer">
                        <Link to="/contactp">Contact</Link>
                    </li>
                    
                </ul>

                
            </div>
            <button className="py-2 flex px-2 hover:underline hover:cursor-pointer bg-[#925FE2] rounded-lg text-white" >
                <Link to="http://127.0.0.1:8000/login/"> 
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
                    <img className="w-20" src={ocohstechlogo}  size={20} alt="logo" />
                </div>

                <ul className="flex flex-col p-4 my-6 gap-4 text-black">
                    <li className="p-4 border-l border-[#925FE2]" onClick={() => { handleLinkClick() } }>
                    <Link to="/">Home</Link>
                    </li>
                    <li className="p-4 border-l border-[#925FE2]" onClick={() => { handleLinkClick() } }>
                        <Link to="/aboutp">About Us</Link>
                    </li>
                    <li className="p-4 border-l border-[#925FE2]" onClick={() => { handleLinkClick() } }>
                        <Link to="/allcoursesp">All Courses</Link> 
                    </li>
                    <li className="p-4 border-l border-[#925FE2]" onClick={() => { handleLinkClick() }}>
                        <Link to="/admissionp">Admission</Link>
                    </li>
                    <li className="p-4 border-l border-[#925FE2]" onClick={() => { handleLinkClick() }}>
                        <Link to="/contactp">Contact</Link>
                    </li>
                </ul>

                <button className="py-2 flex px-2 ml-4 hover:underline hover:cursor-pointer bg-[#925FE2] rounded-lg text-white" >
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