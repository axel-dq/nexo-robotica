import Image from "next/image";
import face1 from "@assets/images/face.png";
import face2 from "@assets/images/face2.png";
import face3 from "@assets/images/face3.png";
import logo from "@assets/images/logo.svg";

import "./page.css";

export default function Nosotros() {
    return (
        <div className="min-h-svh flex items-center bg-nexo-white p-20">
            <Link className="absolute top-15 right-15 font-bold" href="/">← Volvé a Home</Link>
            <ul className="flex gap-10 p-10 list-none basis-55/100">
                <li className="flex items-center member">
                    <figure>
                        <Image src={face1} alt="Face 1" className="w-full aspect-4/5 object-cover rounded-4xl" loading="eager" />
                        <figcaption className="text-left text-sm text-nexo-gray mt-5 leading-snug">
                            <b className="text-xl">Ing. Alexander Peraza</b><br />
                            CEO y Generente General
                        </figcaption>
                    </figure>
                </li>
                <li className="member">
                    <figure className="mb-10">
                        <Image src={face2} alt="Face 2" className="w-full aspect-4/5 object-cover rounded-4xl" loading="eager" />
                        <figcaption className="text-left text-sm text-nexo-gray mt-5 leading-snug">
                            <b className="text-xl">Brisa Gonzales</b><br />
                            Directora de Marketing Digital
                        </figcaption>
                    </figure>
                    <h1 className="text-5xl font-bold tracking-tight">Quienes Somos</h1>
                </li>
                <li className="flex items-center member">
                    <figure>
                        <Image src={face3} alt="Face 3" className="w-full aspect-4/5 object-cover rounded-4xl object-top" loading="eager" />
                        <figcaption className="text-left text-sm text-nexo-gray mt-5 leading-snug">
                            <b className="text-xl">Dra. Mirta Vera</b><br />
                            Directora de Asuntos Legales y Compliance (CLO)
                        </figcaption>
                    </figure>
                </li>
            </ul>
            <div className="basis-1/2 self-start">
                <p className="w-1/2 mx-auto mt-50 text-xl">
                    Somos un equipo que combina
                    experiencia, criterio y una mirada
                    integral. Trabajamos cerca de
                    cada cliente para entender
                    el desafío, conectar las áreas
                    necesarias y construir soluciones
                    pensadas para avanzar.
                    <Link className="font-bold mt-10 block" href="/proposito-vision-mision">Propósito, Visión y Misión  <span>⟶</span></Link>
                </p>
            </div>
            <Image src={logo} alt="Logo" loading="eager" className="w-20 absolute bottom-15 right-15" />
        </div>
    )
}
