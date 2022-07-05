import React, {useEffect, useState} from 'react';
import {GiFullPizza} from "react-icons/gi";
import {BsBagCheckFill} from "react-icons/bs";

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(
        () => {
            const handleScroll = () => {
                if (window.scrollY > 0) {
                    setIsScrolled(true);
                } else {
                    setIsScrolled(false);
                }
            }

            window.addEventListener("scroll" , handleScroll);

            return () => {
                window.removeEventListener("scroll" , handleScroll);
            }
        }, []
    );

    return (
        <header className={`${isScrolled ? "fixed top-0 bg-blackviolet z-50" : "absolute top-0 bg-blackviolet/70 w-full z-50 text-beige py-4"}`}>
            <nav className="flex justify-around font-Signika uppercase">
                <div className="flex items-center gap-2 hover:text-jaune">
                    <GiFullPizza className="h-7 w-7 "/>
                    <a href="#" className=" text-lg "> E-food </a>
                </div>
                <div className="hidden md:flex md:items-center md:gap-x-16">
                    <a href="#" className="hover:text-jaune">menu</a>
                    <a href="#" className="hover:text-jaune">best deal</a>
                    <a href="#" className="hover:text-jaune">order</a>
                </div>
                <div className="flex items-center gap-x-2 relative hover:text-jaune">
                    <BsBagCheckFill className="h-5 w-5"/>
                    <a href="#" className="hidden md:block"> pannier </a>
                    <span
                        className="animate-pulse absolute top-0 right-[-10px] md:top-[-5px] md:right-[-15px] text-[8px] bg-rougefoncer rounded-full px-[7px] py-[2px]">1</span>
                </div>
            </nav>
        </header>
    )
}

export default Navbar