import React from 'react';
import pizza1 from '../assets/1.png';
import pizza2 from '../assets/3.png';
import pizza3 from '../assets/2.png';
import pizza4 from '../assets/4.png';
import pizza5 from '../assets/5.png';
import pizza6 from '../assets/6.png';
import pizza7 from '../assets/7.png';
import pizza8 from '../assets/8.png';

const Produits = () => {
    const produits = [{
        name: "Sicilian",
        price: 19,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, reprehenderit!',
        path: `${pizza1}`
    }, {
        name: "Neopolitan",
        price: 22,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, reprehenderit!',
        path: `${pizza2}`
    }, {
        name: "Chicago",
        price: 10,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, reprehenderit!',
        path: `${pizza3}`
    }, {
        name: "California",
        price: 17,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, reprehenderit!',
        path: `${pizza4}`
    }, {
        name: "detroit",
        price: 14,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, reprehenderit!',
        path: `${pizza5}`
    }, {
        name: "ST. Louis",
        price: 35,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, reprehenderit!',
        path: `${pizza6}`
    }, {
        name: "Carloza",
        price: 8,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, reprehenderit!',
        path: `${pizza7}`
    }, {
        name: "Aegean",
        price: 12.5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, reprehenderit!',
        path: `${pizza8}`
    },]

    const card = produits.map((produit, i) => {
        return (
            <div className="text-center relative py-5 max-w-[300px] mx-auto" key={i}>
                <img src={produit.path} alt={` pizza ${produit.name} `}/>
                <h2 className="text-3xl text-blackviolet font-Signika font-bold">{produit.name}</h2>
                <button className="bg-blackviolet absolute top-0 right-[20px] rounded-full py-2 px-2">
                    <span className="text-beige font-bold">{produit.price} £</span>
                </button>
                <p className="font-semibold text-blackviolet/90">{produit.description}</p>
            </div>
        )
    })

    return (
        <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-4">
            {card}
        </div>
    )
};

export default Produits;
