import "./page.css";
import bgSimple from "@assets/images/background-simple.png";
import Image from "next/image";
import mision from "@assets/images/mision.png";
import proposito from "@assets/images/proposito.png";
import vision from "@assets/images/vision.png";

import logo from "@assets/images/logo.svg";

export default function PropositoVisionMision() {
    return (
        <div className="min-h-svh bg-nexo-white flex flex-col justify-stretch items-stretch"
            style={{ backgroundImage: `url(${bgSimple.src})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "bottom" }}>
            <a className="absolute top-5 right-10 font-bold" href="/">← Volvé a Home</a>
            <div className="flex justify-stretch">
                <Image src={proposito} alt="Propósito" loading="eager" className="w-1/3 object-cover" />
                <Image src={vision} alt="Visión" loading="eager" className="w-1/3 object-cover" />
                <Image src={mision} alt="Misión" loading="eager" className="w-1/3 object-cover" />
            </div>
            <ul className="flex list-none items-start py-15">
                <li className="flex-1 p-10 fade-up">
                    <h1 className="text-6xl font-bold mb-10 text-nowrap">Propósito</h1>
                    <span className="text-6xl font-bold absolute top-11 right-30">{">"}</span>
                    <p className="text-lg w-4/5 text-balance">
                        Transformar la complejidad tecnológica
                        en sistemas unificados, robustos
                        y de impecable claridad estructural.
                    </p>
                </li>
                <li className="flex-1 p-10 fade-up">
                    <h1 className="text-6xl font-bold mb-10">Visión</h1>
                    <span className="text-6xl font-bold absolute top-11 right-30">{">"}</span>
                    <p className="text-lg w-4/5 text-balance">
                        Consolidarnos como el referente indiscutible
                        en consultoría e infraestructura tecnológica
                        de alta gama, marcando un nuevo estándar
                        corporativo donde la robustez operativa
                        se fusiona con el servicio integral.
                    </p>
                </li>
                <li className="flex-1 p-10 fade-up">
                    <h1 className="text-6xl font-bold mb-10">Misión</h1>
                    <p className="text-lg w-4/5 text-balance">
                        Acompañar a las organizaciones
                        a través de una consultoría estratégica
                        y técnica de alta gama, diseñando
                        y unificando su infraestructura física
                        y sus ecosistemas digitales bajo
                        un estándar de máxima precisión.
                    </p>
                </li>
            </ul>
            <Image src={logo} alt="Logo" loading="eager" className="w-20 absolute bottom-10 right-10" />
        </div>
    )
}
