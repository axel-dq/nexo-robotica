import { useEffect, useRef, useState } from 'react';
import follow from "@assets/images/como-trabajamos/acompanamos.webp";

import design from "@assets/images/como-trabajamos/disenamos.webp";
import relieve from "@assets/images/como-trabajamos/relevamos.webp";
import implement from "@assets/images/como-trabajamos/implementamos.webp";


const images = [
    { src: relieve, alt: 'Relevamos', label: "Detectamos la necesidad \n y el contexto" },
    { src: design, alt: 'Diseñamos', label: "Definimos la solución" },
    { src: implement, alt: 'Implementamos', label: "Ponemos la solución en marcha" },
    { src: follow, alt: 'Acompañamos', label: "Seguimos a tu lado" },
];

export default function MorphGallery() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="relative size-full overflow-hidden font-aeonik h-200 bg-transparent">
            <h1 className="text-6xl font-regular text-nexo-white mt-10 mx-auto w-fit text-center font-bold relative z-20 tracking-tighter">Como trabajamos</h1>

            <div className="absolute inset-0 brightness-75">
                {images.map((image, index) => (
                    <div key={index} className={`absolute inset-0 flex items-end justify-center transition-opacity duration-400 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}>
                        <img
                            key={index}
                            src={image.src.src}
                            alt={image.alt}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            <ul className="relative z-10 flex items-center gap-20 justify-center size-full bg-transparent text-nexo-white text-4xl font-bold p-10">
                {images.map((image, index) => (
                    <li key={index} className="relative w-80 text-center flex flex-col justify-center items-center gap-10 bg-transparent">
                        <button onClick={() => setActiveIndex(index)} className={`cursor-pointer relative hover:scale-105 transition-all duration-300 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-50'}`}>
                            {image.alt}
                        </button>
                        <p className={`text-lg text-[#9ea7b9] text-balance absolute top-30 z-20 transition-opacity duration-400 whitespace-pre-wrap font-normal ${activeIndex == index ? 'opacity-100' : 'opacity-0'}`}>{image.label}</p>
                    </li>
                ))}
            </ul>
        </div >
    );
}
