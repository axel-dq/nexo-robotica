import "./page.css";
import ExportedImage from "next-image-export-optimizer";
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
        <div className="min-h-svh bg-white flex flex-col justify-stretch items-stretch relative">
            <span className="absolute! after:bg-black! top-5 right-5 lg:right-10 p-2 px-5 rounded-full text-sm md:text-base bg-nexo-black text-nexo-white btn" >
                <Link href="/">
                    Volvé a Home
                </Link>
            </span>

            <ul className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap list-none items-center lg:items-stretch justify-center gap-10 lg:gap-20 grow py-24 lg:py-40 px-6 md:px-10 lg:px-0">
                {
                    info.map((item, i) => (
                        <li key={i} className="w-full sm:w-[80%] md:w-[45%] lg:w-1/4 fade-up rounded-2xl hover:shadow-sm shadow-[#eeeeee] overflow-clip border border-[#e5e8ef] hover:scale-101 transition-all duration-300 pb-10 lg:pb-20">
                            <ExportedImage basePath="/nexo-robotica" placeholder="blur" src={item.image} alt={item.title} loading="eager" className="w-full object-cover transition-all duration-300 ease-out" />
                            <div className="mt-8 lg:mt-20 px-6 lg:px-10">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-10 text-nowrap tracking-tighter">{item.title}</h1>
                                <p className="text-base md:text-lg font-thin text-balance">
                                    {item.description}
                                </p>
                            </div>
                        </li>
                    ))
                }
            </ul>

            <ExportedImage basePath="/nexo-robotica" placeholder="blur" src={logo} alt="Logo" loading="eager" className="w-16 md:w-20 bottom-5 md:bottom-10 right-5 md:right-10 mb-10 ml-auto mr-5 lg:mr-10" />
        </div>
    )
}
