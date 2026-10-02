import Image from "next/image";
import face1 from "@assets/images/face.jpeg";
import face2 from "@assets/images/face2.jpeg";
import face3 from "@assets/images/face3.jpeg";

import "./page.css";

export default function Nosotros() {
    return (
        <div className="min-h-svh flex items-center bg-nexo-white p-20">
            <ul className="flex gap-10 p-10 list-none basis-2/3">
                <li className="flex items-center member">
                    <figure>
                        <Image src={face1} alt="Face 1" className="w-full aspect-4/5 object-cover rounded-4xl" loading="eager" />
                        <figcaption className="text-left text-xl text-nexo-gray mt-5">
                            <b className="text-2xl">Ing. Alexander Peraza</b><br />
                            CEO y Generente General
                        </figcaption>
                    </figure>
                </li>
                <li className="member">
                    <figure className="mb-40">
                        <Image src={face2} alt="Face 2" className="w-full aspect-4/5 object-cover rounded-4xl" loading="eager" />
                        <figcaption className="text-left text-xl text-nexo-gray mt-5">
                            <b className="text-2xl">Brisa Gonzales</b><br />
                            Directora de Marketing Digital
                        </figcaption>
                    </figure>
                    <h1 className="text-7xl font-bold">Quienes Somos</h1>
                </li>
                <li className="flex items-center member">
                    <figure>
                        <Image src={face3} alt="Face 3" className="w-full aspect-4/5 object-cover rounded-4xl" loading="eager" />
                        <figcaption className="text-left text-xl text-nexo-gray mt-5">
                            <b className="text-2xl">Dra. Mirta Vera</b><br />
                            Directora de Asuntos Legales y Compliance (CLO)
                        </figcaption>
                    </figure>
                </li>
            </ul>
            <div className="text-5xl text-nexo-white brightness-75 font-bold relative top-20 text-nowrap pointer-events-none select-none">
                {"< >"}
            </div>
            <p className="basis-1/3 self-start mt-50 text-xl">
                Minim et Lorem aliqua nostrud mollit ullamco id consequat ex aute do labore. Eu consectetur officia in ullamco et deserunt et magna irure quis. Voluptate nisi excepteur deserunt proident sit commodo sint culpa ut nulla pariatur ex.
                <a className="font-bold mt-10 block" href="/proposito-vision-mision">Propósito, Visión y Misión <span>⟶</span></a>
            </p>
        </div>
    )
}
