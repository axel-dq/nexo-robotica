'use client'

import { useState } from 'react';
import ExportedImage from "next-image-export-optimizer";

import consorcio from "@assets/images/sectores-servimos/consorcio.webp";
import ecommerce from "@assets/images/sectores-servimos/ecommerce.webp";
import empresas from "@assets/images/sectores-servimos/empresas.webp";
import estudios from "@assets/images/sectores-servimos/estudios.webp";
import industrias from "@assets/images/sectores-servimos/industrias.webp";
import telecom from "@assets/images/sectores-servimos/telecom.webp";
import logo from "@assets/images/logo-telecom.svg";

export default function MorphList() {
    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        { src: consorcio, label: "Consorcios" },
        { src: ecommerce, label: "E-commerce" },
        { src: empresas, label: "Empresas" },
        { src: estudios, label: "Estudios" },
        { src: industrias, label: "Industrias" },
        { src: telecom, label: "Telecomunicaciones" },
    ];

    return (
        <div className="w-full bg-transparent text-nexo-black px-6 py-12 md:px-12 lg:pl-50 lg:p-20 lg:pb-4">

            <div className="flex flex-col-reverse lg:flex-row justify-between gap-6 lg:gap-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 lg:mb-20 tracking-tight font-bold">
                    Sectores <br /> a los que servimos
                </h1>
                <div className="flex opacity-50 ml-auto gap-2">
                    <div>1 /</div>
                    <p className="text-sm md:text-base text-balance whitespace-pre-wrap font-normal font-corporate">
                        Insfraestructura <br />Telecomunicaciones <br />y Tecnología (IT & OT)
                    </p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center justify-start h-full mt-6 lg:mt-10">

                <div className="grid h-64 md:h-96 lg:h-120 w-full md:w-4/5 lg:w-auto">
                    {items.map((item, index) => (
                        <ExportedImage
                            basePath={process.env.NEXT_PUBLIC_BASE_PATH}
                            placeholder="blur"
                            key={index}
                            src={item.src}
                            alt={item.label}
                            className={`col-start-1 row-start-1 h-full lg:h-120 w-full lg:w-auto object-cover rounded-4xl transition-opacity duration-500 ease-in-out ${index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                        />
                    ))}
                </div>

                <ul className="list-none flex flex-wrap flex-col justify-center lg:justify-start items-center lg:items-start gap-2 w-full lg:w-auto mt-4 lg:mt-0">
                    {items.map((item, index) => (
                        <li key={index} className="text-center font-bold lg:font-normal text-xl md:text-2xl lg:text-3xl flex flex-col justify-center items-center gap-10 bg-transparent">
                            <button onClick={() => setActiveIndex(index)} className={`cursor-pointer relative hover:scale-105 transition-all duration-300 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-20'}`}>
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>

            </div>

            <ExportedImage basePath={process.env.NEXT_PUBLIC_BASE_PATH} placeholder="blur" src={logo} alt={"Nexo"} className="size-16 lg:size-20 ml-auto mt-10 lg:mt-0" />
        </div>
    );
}
