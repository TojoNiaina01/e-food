import React from 'react';
import {GiFullPizza} from "react-icons/gi";
import {SiFacebook, SiInstagram, SiTwitter, SiWhatsapp} from "react-icons/si";

const Footer = () => {
    return (
        <footer className="bg-blackviolet/90 text-beige mt-3 flex justify-around py-5">
            <section className="flex flex-col justify-center items-center gap-2">
                <GiFullPizza className="h-24 w-24"/>
                <h2 className="uppercase text-3xl font-semibold font-Signika tracking-wide">e-food</h2>
            </section>
            <section className="flex flex-col gap-2">
                <h2 className="text-xl uppercase text-center">nos enseigne</h2>
                <div>
                    <p>- Andravoahangy Rue de jean patrick</p>
                    <p>IVJ 1015 TER</p>
                </div>
                <div>
                    <p>- Apandrana Rue de l'avenue de Rasoa</p>
                    <p>Bis 92 HJK</p>
                </div>
                <div>
                    <p>- Ankadifotsy Rue de la liberté</p>
                    <p>55 BIS II ankadifotsy</p>
                </div>
            </section>
            <section className="flex flex-col gap-2">
                <h2 className="text-xl uppercase text-center">Nous Contactez</h2>
                <div className="flex flex-col gap-y-2 text-center">
                    <div className="flex gap-x-5">
                        <SiFacebook className="h-7 w-7 text-blue-400 cursor-pointer"/>
                        <SiInstagram className="h-7 w-7 text-pink-400 cursor-pointer"/>
                        <SiTwitter className="h-7 w-7 text-blue-300 cursor-pointer"/>
                        <SiWhatsapp className="h-7 w-7 text-green-400 cursor-pointer"/>
                    </div>
                    <p className="tracking-wider">(+261)343403434</p>
                    <p className="tracking-wider">(+261)343403434</p>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
