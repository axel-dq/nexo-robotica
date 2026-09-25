import logo_telecom from "@assets/images/logo-telecom.svg";
import logo_digital from "@assets/images/logo-digital.svg";
import logo_legal from "@assets/images/logo-legal.svg";

import { ReactNode } from "react";

export type PlatformFeature = {
    title: ReactNode;
    logo: string;
    color_bottom: string;
    color_top: string;
}

const platformFeatures: PlatformFeature[] = [
    {
        title: <p>Infraestructura, <br /> Telecomunicaciones <br /> y Tecnología (IT & OT)</p>,
        logo: logo_telecom,
        color_bottom: "color-nexo-blue-100",
        color_top: "color-nexo-blue-200",
    }, {
        title: <p>Desarrollo <br /> y Soluciones <br /> Digitales</p>,
        logo: logo_digital,
        color_bottom: "color-nexo-purple-100",
        color_top: "color-nexo-purple-200",
    }, {
        title: <p>Consultoría <br /> y Asesoramiento <br /> Legal</p>,
        logo: logo_legal,
        color_bottom: "color-nexo-red-100",
        color_top: "color-nexo-red-200",
    }
]


export default platformFeatures;
