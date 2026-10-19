import "./page.css";
import Image from "next/image";
import mision from "@assets/images/mision.webp";
import proposito from "@assets/images/proposito.webp";
import vision from "@assets/images/vision.webp";

import logo from "@assets/images/logo.svg";

import Link from "next/link";

export default function PropositoVisionMision() {
    const info = [
        {
            title: "Propósito",
            description: "Transformar la complejidad tecnológica en sistemas unificados, robustos y de impecable claridad estructural.",
            image: proposito,
        },
        {
            title: "Visión",
            description: "Consolidarnos como el referente indiscutible en consultoría e infraestructura tecnológica de alta gama, marcando un nuevo estándar corporativo donde la robustez operativa se fusiona con el servicio integral.",
            image: vision,
        },
        {
            title: "Misión",
            description: "Acompañar a las organizaciones a través de una consultoría estratégica y técnica de alta gama, diseñando y unificando su infraestructura física y sus ecosistemas digitales bajo un estándar de máxima precisión.",
            image: mision,
        },
    ]

    return (
        <div className="min-h-svh bg-white flex flex-col justify-stretch items-stretch">
            <Link className="absolute z-20 top-5 right-10 p-2 px-5 rounded-full bg-black! text-white!" href="/">Volvé a Home</Link>
            <ul className="flex flex-col lg:flex-row list-none items-stretch justify-center gap-20 grow py-40">
                {
                    info.map((item, i) => (
                        <li key={i} className="w-1/4 fade-up rounded-2xl hover:shadow-sm shadow-[#eeeeee] overflow-clip border border-[#e5e8ef] hover:scale-101 transition-all duration-300 pb-20">
                            <Image src={item.image} alt={item.title} loading="eager" className="w-full object-cover transition-all duration-300 ease-out" />
                            <div className="mt-20 px-10">
                                <h1 className="text-6xl font-bold mb-10 text-nowrap tracking-tighter">{item.title}</h1>
                                <p className="text-lg font-thin text-balance">
                                    {item.description}
                                </p>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <Image src={logo} alt="Logo" loading="eager" className="w-20 bottom-10 right-10 mb-10 ml-auto mr-10" />
        </div>
    )
}
