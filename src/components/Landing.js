import React from 'react';
import landingImg from '../assets/landingImg.jpg';
import Arrow from '../assets/Arrow.png';
import {FaArrowAltCircleDown} from 'react-icons/fa';

const Landing = () => {
    return (
        <div className="relative">
            <p className="hidden lg:block lg:absolute lg:top-1/2 lg:transform lg:translate-y-[-50%] text-beige text-3xl w-[50px] font-Kanit left-[20px]">Food
                is Love</p>
            <img src={Arrow}
                 className="hidden lg:block lg:absolute lg:top-1/2 lg:left-[80px] lg:text-white lg:h-72 lg:w-auto"
                 alt="" />
            <img src={landingImg} className="object-cover h-[60vh] w-full md:h:[80vh] lg:h-screen"
                 alt="Pizza italien homemade" />
            <img src={Arrow} className=" hidden lg:block lg:absolute lg:top-1/2 lg:h-72 lg:right-[95px] lg:scale-x-[-1]"
                 alt="" />
            <p className="hidden lg:block lg:text-beige lg:text-3xl lg:font-Kanit lg:text-right lg:absolute lg:top-1/2 lg:right-[40px] lg:transform lg:translate-y-[-50%]">Food <br/> is <br/> Life
            </p>
            <button
                className="absolute bg-blackviolet text-white font-Kanit  tracking-wide px-4 py-2 rounded-3xl bottom-1/2 right-1/2 transform translate-x-[50%]
                md:text-2xl md:tracking-wider md:px-5 md:py-4 lg:translate-x-[50%] lg:bottom-[6rem] hover:transform hover:scale-[1.1]">Explore
                now
            </button>

            <div className="flex items-center justify-center">
                <button
                    className="animate-bounce absolute bottom-[2rem]  text-white text-blackviolet bg-white rounded-full">
                    <FaArrowAltCircleDown className="h-10 w-10"/>
                </button>
            </div>
        </div>
    );
};

export default Landing;
