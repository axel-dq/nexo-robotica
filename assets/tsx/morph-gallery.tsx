import { useRef, useState } from 'react';
import follow from "@assets/images/como-trabajamos/acompanamos.webp";
import design from "@assets/images/como-trabajamos/disenamos.webp";
import relieve from "@assets/images/como-trabajamos/relevamos.webp";
import implement from "@assets/images/como-trabajamos/implementamos.webp";

import followMobile from "@assets/images/como-trabajamos/mobile/acompanamos.webp";
import designMobile from "@assets/images/como-trabajamos/mobile/disenamos.webp";
import relieveMobile from "@assets/images/como-trabajamos/mobile/relevamos.webp";
import implementMobile from "@assets/images/como-trabajamos/mobile/implementamos.webp";

import ExportedImage from "next-image-export-optimizer";

const images = [
    { src: relieve, srcMobile: relieveMobile, alt: 'Relevamos', label: "Detectamos la necesidad \n y el contexto" },
    { src: design, srcMobile: designMobile, alt: 'Diseñamos', label: "Definimos la solución" },
    { src: implement, srcMobile: implementMobile, alt: 'Implementamos', label: "Ponemos la solución en marcha" },
    { src: follow, srcMobile: followMobile, alt: 'Acompañamos', label: "Seguimos a tu lado" },
];

export default function MorphGallery() {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLUListElement>(null);

    const handleScroll = () => {
        if (!scrollContainerRef.current) return;
        const scrollLeft = scrollContainerRef.current.scrollLeft;
        const width = scrollContainerRef.current.clientWidth;
        const newIndex = Math.round(scrollLeft / width);
        if (newIndex !== activeIndex) {
            setActiveIndex(newIndex);
        }
    };

    const handleButtonClick = (index: number) => {
        setActiveIndex(index);
        if (scrollContainerRef.current && window.innerWidth < 1024) {
            const width = scrollContainerRef.current.clientWidth;
            scrollContainerRef.current.scrollTo({
                left: width * index,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="relative size-full overflow-hidden  min-h-[80svh] lg:min-h-0 lg:h-200 bg-transparent flex flex-col">

            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-2 lg:mb-20 tracking-tight font-bold relative z-20 mx-auto w-fit mt-15 text-nexo-white shrink-0 pointer-events-none">
                Como trabajamos
            </h1>

            <div className="absolute inset-0 brightness-75 z-0 pointer-events-none">
                {images.map((image, index) => (
                    <div key={index} className={`absolute inset-0 flex items-end justify-center transition-opacity duration-500 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}>
                        <ExportedImage
                            basePath="/nexo-robotica"
                            placeholder="blur"
                            src={image.src}
                            alt={image.alt}
                            className="absolute inset-0 w-full h-full object-cover hidden lg:block"
                        />
                        <ExportedImage
                            basePath="/nexo-robotica"
                            placeholder="blur"
                            src={image.srcMobile}
                            alt={image.alt}
                            className="absolute inset-0 w-full h-full object-cover lg:hidden"
                        />
                    </div>
                ))}
            </div>

            {/* Contenedor que ocupa el resto del espacio */}
            <div className="relative z-10 flex-1 w-full flex flex-col">

                <ul
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    // flex-1 asegura que ocupe todo el espacio sobrante
                    className="flex-1 flex flex-row items-center justify-start lg:justify-center w-full gap-0 lg:gap-16 xl:gap-20 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden bg-transparent text-nexo-white text-3xl md:text-4xl font-bold touch-pan-x"
                >
                    {images.map((image, index) => (
                        // h-full expande el área interactiva del swipe a todo el contenedor
                        <li key={index} className="relative shrink-0 w-full h-full lg:w-80 text-center flex flex-col justify-center items-center snap-center px-6 lg:px-0 snap-always">

                            <button
                                onClick={() => handleButtonClick(index)}
                                className={`cursor-pointer relative hover:scale-105 transition-all duration-300 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-40 lg:opacity-50'}`}
                            >
                                {image.alt}
                            </button>

                            <div className="h-20 lg:h-24 mt-4 lg:mt-8 flex items-start justify-center w-full">
                                <p className={`text-base md:text-lg text-[#9ea7b9] text-balance whitespace-pre-wrap font-normal transition-opacity duration-400 ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                                    {image.label}
                                </p>
                            </div>

                        </li>
                    ))}
                </ul>

                {/* Los puntos ahora tienen posición absoluta para no afectar el centrado de los textos */}
                <div className="absolute bottom-8 left-0 right-0 flex lg:hidden justify-center gap-2 z-20 pointer-events-none">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleButtonClick(index)}
                            // pointer-events-auto permite hacer click en los botones aunque el contenedor ignore clicks
                            className={`h-2 rounded-full transition-all duration-300 pointer-events-auto ${activeIndex === index ? 'w-8 bg-white' : 'w-2 bg-white/40'}`}
                            aria-label={`Ir a slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
