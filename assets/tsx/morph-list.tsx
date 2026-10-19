'use client'

import { useState } from 'react';
import Image from "next/image";

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
        <div className="w-full bg-transparent text-nexo-black pl-50 p-20 pb-4">
            <div className="flex justify-between">
                <h1 className="text-6xl mb-20 font-bold">Sectores <br /> a los que servimos</h1>
                <div className="flex  opacity-50 gap-2">
                    <div>1 /</div>
                    <p className="text-base text-balance whitespace-pre-wrap font-normal font-corporate">Insfraestructura <br />Telecomunicaciones <br />y Tecnología (IT & OT)</p>
                </div>
            </div>
            <div className="flex gap-20 items-center justify-start h-full mt-10">
                <div className="grid h-120 w-auto">
                    {items.map((item, index) => (
                        <Image
                            key={index}
                            src={item.src}
                            alt={item.label}
                            className={`col-start-1 row-start-1 h-120 w-auto rounded-4xl transition-opacity duration-500 ease-in-out ${index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                        />
                    ))}
                </div>
                <ul className="list-none flex flex-col justify-start items-start gap-2">
                    {items.map((item, index) => (
                        <li key={index} className="text-center text-3xl flex flex-col justify-center items-center gap-10 bg-transparent">
                            <button onClick={() => setActiveIndex(index)} className={`cursor-pointer relative hover:scale-105 transition-all duration-300 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-50'}`}>
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <Image src={logo} alt={"Nexo"} className="size-20 ml-auto" />
        </div>
    );
}
