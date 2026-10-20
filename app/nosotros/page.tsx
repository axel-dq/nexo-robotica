import ExportedImage from "next-image-export-optimizer";
import face1 from "@assets/images/face.png";
import face2 from "@assets/images/face2.png";
import face3 from "@assets/images/face3.png";
import logo from "@assets/images/logo.svg";
import linkedin from "@assets/images/linkedin-blue.png";

import Link from "next/link";

import "./page.css";

export default function Nosotros() {
    return (
        <div className="min-h-svh flex flex-col lg:flex-row items-center bg-nexo-white py-30 lg:p-20">
            <Link className="absolute z-20 top-5 right-10 p-2 px-5 rounded-full bg-black! text-white!" id="back-btn" href="/">Volvé a Home</Link>
            <h1 className="text-5xl font-bold tracking-tight lg:hidden">Quienes Somos</h1>
            <ul className="flex flex-col lg:flex-row justify-stretch gap-10 p-10 list-none lg:basis-4/5">
                {/* Member 1 */}
                <li className="flex flex-col justify-center flex-1 member">
                    <figure>
                        ExportedImage basePath="/nexo-robotica" src={face1} alt="Face 1" className="w-full aspect-4/5 object-cover rounded-4xl" placeholder="blur" loading="eager" />
                        <figcaption className="text-left text-sm text-nexo-gray mt-5 leading-snug">
                            <b className="text-xl">Ing. Alexander Peraza</b><br />
                            CEO y Gerente General
                            <a className="cursor-pointer">ExportedImage basePath="/nexo-robotica" placeholder="blur" src={linkedin} alt="linkedin" className="size-5 ml-2 inline" /></a>
                        </figcaption>
                    </figure>
                </li>

                {/* Member 2 */}
                <li className="flex flex-col justify-between flex-1 member">
                    <figure className="mb-10">
                        ExportedImage basePath="/nexo-robotica" placeholder="blur" src={face2} alt="Face 2" className="w-full aspect-4/5 object-cover rounded-4xl" loading="eager" />
                        <figcaption className="text-left text-sm text-nexo-gray mt-5 leading-snug">
                            <b className="text-xl">Brisa Gonzales</b><br />
                            Directora de Marketing Digital
                            <a className="cursor-pointer">ExportedImage basePath="/nexo-robotica" placeholder="blur" src={linkedin} alt="linkedin" className="size-5 ml-2 inline" /></a>
                        </figcaption>
                    </figure>
                    <h1 className="text-5xl hidden lg:block font-bold tracking-tight">Quienes somos</h1>
                </li>

                {/* Member 3 */}
                <li className="flex flex-col justify-center flex-1 member">
                    <figure>
                        ExportedImage basePath="/nexo-robotica" placeholder="blur" src={face3} alt="Face 3" className="w-full aspect-4/5 object-cover rounded-4xl object-top" loading="eager" />
                        <figcaption className="text-left text-sm text-nexo-gray mt-5 leading-snug">
                            <b className="text-xl">Dra. Mirta Vera</b><br />
                            Directora de Asuntos Legales y Compliance (CLO)
                            <a className="cursor-pointer">ExportedImage basePath="/nexo-robotica" placeholder="blur" src={linkedin} alt="linkedin" className="size-5 ml-2 inline" /></a>
                        </figcaption>
                    </figure>
                </li>
            </ul>
            <div className="lg:basis-1/2 lg:self-start px-10 lg:px-0">
                <p className="lg:w-1/2 mx-auto lg:mt-50 text-xl font-thin">
                    Somos un equipo que combina
                    experiencia, criterio y una mirada
                    integral. Trabajamos cerca de
                    cada cliente para entender
                    el desafío, conectar las áreas
                    necesarias y construir soluciones
                    pensadas para avanzar.
                    <Link className="mt-5 block w-fit px-4 py-2 rounded-full bg-white text-black border border-black font-normal text-sm" href="/proposito-vision-mision">Nuestra filosofía</Link>
                </p>
            </div>
            ExportedImage basePath="/nexo-robotica" placeholder="blur" src={logo} alt="Logo" loading="eager" className="w-20 absolute bottom-15 right-15 hidden lg:block" />
        </div>
    )
}
