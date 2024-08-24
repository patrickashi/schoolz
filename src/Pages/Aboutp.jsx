import React from "react"
import auditoriun from "../Assets/audutoriun.jpg";
import classroom from "../Assets/classroom.jpeg";
import Footer from "../Components/Footer";


const Aboutp = () => {
    return(
        <div className="pt-20">
           <div className="relative w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url(${auditoriun})` }}>
                <div className="absolute w-full h-full bg-[#925FE2]">
                    <h1 className="text-white font-bold animate-pulse text-4xl mt-40 md:mt-20 ml-6">About us</h1>
                </div>
           </div>

           <div className="flex flex-col text-sm md:flex-row my-20 justify-between px-2 md:px-10 lg:px-16 gap-8 items-center">
                <div className="w-full md:w-[600px] flex items-center">
                    <p className="text-left md:text-left">
                    Owoche College of Health Sciences and Technology, Bewo, Bekwarra, was established
                    under the Companies and Allied matter Act of 1990 on 24th October, 2013 with
                    a Vision to be a training institution of excellence with clear focus on
                    producing relevant and competent graduates, capable of providing
                    efficient modern primary healthcare services, with the mission to produce
                    highly committed and devoted community/public Health practitioners for
                    the Primary Healthcare tier of the health services, in an environment
                    of highest quality teaching/learning and ethics compatible with
                    patient–centered community practice, and with the philosophy to produce
                    graduates who are scientifically, vocationally, academically, and ethically
                    committed to practicing community interactive healthcare with a view
                    to preventing illness as first priority and essence.
                    </p>
                </div>
                <div className="w-full md:w-[600px]">
                    <img src={classroom} className="w-full rounded-md" alt="img_" />
                </div>
            </div>

           <div className="flex flex-col md:flex-row my-20 justify-between px-2 md:px-10 lg:px-16 gap-8 items-center">
                <div className="w-full md:w-[600px] hidden md:block">
                    <img src={auditoriun} className="w-full rounded-md" alt="img_" />
                </div>
                <div className="w-full md:w-[600px] flex items-center ">
                    <p className="text-left md:text-left">
                    It is sited about 400 Km from Calabar, the state Capital, with land capacity
                    of over 15 hectares. As a rural area with a great quest for educational development,
                    there was a strong desire for the presence of a tertiary institution in the Medical
                    and Allied profession, hence the establishment of Owoche College of Health
                    Sciences and Technology, to train middle manpower for the health sectors.
                    </p>
                </div>
                <div className="w-full md:w-[600px] block md:hidden " >
                    <img src={auditoriun} className="w-full rounded-md" alt="img_" />
                </div>
            </div>
           <Footer/>
        </div>
    )
}

export default Aboutp;