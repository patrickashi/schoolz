import React from "react"
import auditoriun from "../Assets/auditoriun.jpg";
import classroom from "../Assets/classroom.jpeg";
import Footer from "../Components/Footer";
import schoolgate from "../Assets/schoolgate.jpg";
import verificarion from "../Assets/verification.png";
import ict_building from "../Assets/ict_building.jpg";


const Aboutp = () => {
    return(
        <div className="pt-20">
           <div className="relative w-full h-64 bg-cover bg-center">
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
                    <img src={schoolgate} className="w-full rounded-md" alt="img_" />
                </div>
            </div>

           <div className="flex flex-col md:flex-row my-20 justify-between px-2 md:px-10 lg:px-16 gap-8 items-center">
                <div className="w-full md:w-[600px] hidden md:block">
                    <img src={ict_building} className="w-full rounded-md" alt="img_" />
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
                    <img src={ict_building} className="w-full rounded-md" alt="img_" />
                </div>
            </div>

            <div className="px-2 md:px-16 my-10 w-full flex flex-col md:flex-row gap-6 ">
                {/* box1 */}
                <div className="w-full md:w-[500px]">
                    <div className="w-full md:w-[400px]">
                        <p className="mb-10 font-semibold">
                            The college is uniquely designed with serene environment to make study easy
                            with tastely furnished infrastructure which include:
                        </p>
                    </div>
                    <div className="flex align-middle justify-start gap-4 mb-2">
                        <img src={verificarion} className="w-6 h-6 object-cover rounded-full" alt="img" />
                        <div className="text-sm">
                            <p>Administrative block hosting 14 offices and a mini-conference room with internet pots.</p>
                        </div>
                    </div>
                    <div className="flex align-middle justify-start gap-4 mb-2">
                        <img src={verificarion} className="w-6 h-6 object-cover rounded-full" alt="img" />
                        <div className="text-sm">
                            <p>Spacious Examination hall of 140 sitting capacity with internet pots.</p>
                        </div>
                    </div>
                    <div className="flex align-middle justify-start gap-4 mb-2">
                        <img src={verificarion} className="w-6 h-6 object-cover rounded-full" alt="img" />
                        <div className="text-sm">
                            <p>E – library with over 5000 hard copies of various field of medical practice,
                                108 sitting capacity, 36 laptops loaded with over 10, 000 soft copies of
                                medical and allied profession.
                            </p>
                        </div>
                    </div>
                    <div className="flex align-middle justify-start gap-4 mb-2">
                        <img src={verificarion} className="w-6 h-6 object-cover rounded-full" alt="img" />
                        <div className="text-sm">
                            <p>A newly completed Pharmacy Department hosting 6 spacious, well aerated
                                and illuminated class rooms, each adequate to accomodate 100 students,
                                14 offices, Staff common room, 23 water closet system.
                            </p>
                        </div>
                    </div>
                    <div className="flex align-middle justify-start gap-4 mb-2">
                        <img src={verificarion} className="w-6 h-6 object-cover rounded-full" alt="img" />
                        <div className="text-sm">
                            <p>Science block hosting well equipped physics and chemistry laboratories and 8
                                well furnished offices.
                            </p>
                        </div>
                    </div>
                    <div className="flex align-middle justify-start gap-4 mb-2">
                        <img src={verificarion} className="w-6 h-6 object-cover rounded-full" alt="img" />
                        <div className="text-sm">
                            <p>Standard Canteen with 28 sitting capacity.</p>
                        </div>
                    </div>
                    <div className="flex align-middle justify-start gap-4 mb-2">
                    <img src={verificarion} className="w-6 h-6 object-cover rounded-full" alt="img" />
                        <div className="text-sm">
                            <p>Well equipped Pharmacy Laboratory with state of the art facilities.</p>
                        </div>
                    </div> 
                    <div className="flex align-middle justify-start gap-4 mb-2">
                    <img src={verificarion} className="w-6 h-6 object-cover rounded-full" alt="img" />
                        <div className="text-sm">
                            <p>World class Biology demonstration room with various anatomical charts,
                                models and simulators, and a demonstration ground with models of incinerators,
                                Abattoir, under water well etc.
                            </p>
                        </div>
                    </div> 
                    <div className="flex align-middle justify-start gap-4 mb-2">
                    <img src={verificarion} className="w-6 h-6 object-cover rounded-full" alt="img" />
                        <div className="text-sm">
                            <p>Audio – visual room with photo – makers, magnifiers, cutters, mobile and
                                over – head projectors.
                            </p>
                        </div>
                    </div> 
                    <div className="flex align-middle justify-start gap-4 mb-2">
                    <img src={verificarion} className="w-6 h-6 object-cover rounded-full" alt="img" />
                        <div className="text-sm">
                            <p>Environmental Health museum. </p>
                        </div>
                    </div> 
                    <div className="flex align-middle justify-start gap-4 mb-2">
                    <img src={verificarion} className="w-6 h-6 object-cover rounded-full" alt="img" />
                        <div className="text-sm">
                            <p>Professor Olukoye Ransome Kuti’s block (Community Health Block) hosting 5
                                spacious, well aerated and illuminated class rooms each adequate to accomodate
                                100 students and 4 offices.
                            </p>
                        </div>
                    </div> 
                    <div className="flex align-middle justify-start gap-4 mb-2">
                    <img src={verificarion} className="w-6 h-6 object-cover rounded-full" alt="img" />
                        <div className="text-sm">
                            <p>9 additional class rooms, well aerated, illuminated, each adequate to
                                accomodate 100 students.
                            </p>
                        </div>
                    </div> 
                    <div className="flex align-middle justify-start gap-4 mb-2">
                    <img src={verificarion} className="w-6 h-6 object-cover rounded-full" alt="img" />
                        <div className="text-sm">
                            <p>Bore – hole with 20,500 Litres capacity over – head tanks that reticulates
                                the entire school.
                            </p>
                        </div>
                    </div> 
                    <div className="flex align-middle justify-start gap-4 mb-2">
                    <img src={verificarion} className="w-6 h-6 object-cover rounded-full" alt="img" />
                        <div className="text-sm">
                            <p>We are connected to National Grid with back-up from 25 KVA,
                                100 KVA and other numerous departmental generating plants.
                            </p>
                        </div>
                    </div> 
                    <div className="flex align-middle justify-start gap-4 mb-2">
                    <img src={verificarion} className="w-6 h-6 object-cover rounded-full" alt="img" />
                        <div className="text-sm">
                            <p>School PHC clinic with total bed capacity of 8, GOPD, labour room,
                                consulting rooms, palpation room, family planning unit, Pharmacy/dispensary,
                                injection/dressing room  to treat minor ailments with referal of severely
                                ill students and neighbouring communities to the mother clinic
                                (OWOCHE CLINIC AND MATERNITY HOME LIMITED) at Itekpa, Bekwarra.
                            </p>
                        </div>
                    </div> 
                    <div className="flex align-middle justify-start gap-4 mb-2">
                    <img src={verificarion} className="w-6 h-6 object-cover rounded-full" alt="img" />
                        <div className="text-sm">
                            <p>
                                2 male hostels, 4 female hostels and staff quarters, with Ultra-modern
                                160 capacity Female Hostel undergoing construction.
                            </p>
                        </div>
                    </div> 
                    <div className="flex align-middle justify-start gap-4 mb-2">
                    <img src={verificarion} className="w-6 h-6 object-cover rounded-full" alt="img" />
                        <div className="text-sm">
                            <p>Students Laundry unit/Kitchen.</p>
                        </div>
                    </div> 
                    <div className="flex align-middle justify-start gap-4 mb-2">
                    <img src={verificarion} className="w-6 h-6 object-cover rounded-full" alt="img" />
                        <div className="text-sm">
                            <p>Recreational facilities for indoor/outdoor games. The school has a
                                complete squad of male and female football team.
                            </p>
                        </div>
                    </div> 
                    <div className="flex align-middle justify-start gap-4 mb-2">
                        <img src={verificarion} className="w-6 h-6 object-cover rounded-full" alt="img" />
                        <div className="text-sm">
                            <p>It is secured with perimeter fence and astute security personnel
                                linked to other conventional security organizations.
                            </p>
                        </div>
                    </div> 
                    <div className="flex align-middle justify-start gap-4 mb-2">
                        <img src={verificarion} className="w-6 h-6 object-cover rounded-full" alt="img" />
                        <div className="text-sm">
                            <p>A new administrative block hosting 12 offices and 5000 capacity Auditorium,
                                72 capacity ICT training unit, and a CBT centre wired by MTN with
                                internet speed of 60 mbps. 
                            </p>
                        </div>
                    </div> 
                </div>
                {/* box2 */}
                <div className=" border-none md:border-l px-2 w-full md:w-[500px]">
                    <div className="w-full ">
                        <p className="mb-10 font-semibold">
                            We have attained the following accreditations:
                        </p>
                    </div>
                    <div className="flex align-middle justify-start gap-4 mb-2">
                        <img src={verificarion} className="w-6 h-6 object-cover rounded-full" alt="img" />
                        <div className="text-sm">
                            <p>Environment Health Officers Registration Council of Nigeria(EHORECON)</p>
                        </div>
                    </div>
                    <div className="flex align-middle justify-start gap-4 mb-2">
                        <img src={verificarion} className="w-6 h-6 object-cover rounded-full" alt="img" />
                        <div className="text-sm">
                            <p>West African Health Examination Board(WAHEB)</p>
                        </div>
                    </div>
                    <div className="flex align-middle justify-start gap-4 mb-2">
                        <img src={verificarion} className="w-6 h-6 object-cover rounded-full" alt="img" />
                        <div className="text-sm">
                            <p>Health Record Officers Registration Board of Nigeria(HRORBN)- Fully
                                Accredited
                            </p>
                        </div>
                    </div>
                    <div className="flex align-middle justify-start gap-4 mb-2">
                        <img src={verificarion} className="w-6 h-6 object-cover rounded-full" alt="img" />
                        <div className="text-sm">
                            <p>Community Health Practisioners Registration Board of Nigeria(CHPRBN)- Fully
                                Accredited
                            </p>
                        </div>
                    </div>
                    <div className="flex align-middle justify-start gap-4 mb-2">
                        <img src={verificarion} className="w-6 h-6 object-cover rounded-full" alt="img" />
                        <div className="text-sm">
                            <p>Medical Laboratory Science Council of Nigeria(MLSCN)- Fully Accredited</p>
                        </div>
                    </div>
                    <div className="flex align-middle justify-start gap-4 mb-2">
                        <img src={verificarion} className="w-6 h-6 object-cover rounded-full" alt="img" />
                        <div className="text-sm">
                            <p>Optometrist and Dispensing Optician Registration Board of Nigeria. </p>
                        </div>

                    </div>
                </div>
                
                
            </div>
           <Footer/>
        </div>
    )
}

export default Aboutp;