import logo_telecom from "@assets/images/logo-telecom-white.svg";
import logo_digital from "@assets/images/logo-digital-white.svg";
import logo_legal from "@assets/images/logo-legal-white.svg";

import { ReactNode } from "react";

export type PlatformFeature = {
    slug: string;
    title: ReactNode;
    logo: string;
    color_light: string;
    color_dark: string;
    platform_description: {
        title: string;
        body: string;
        bullets: string[];
    }[]
}

const platformFeatures: PlatformFeature[] = [
    {
        slug: "infraestructura-telecomunicaciones-tecnologia",
        title: <p> Infraestructura, <br /> Telecomunicaciones < br /> y Tecnología(IT & OT)</p >,
        logo: logo_telecom,
        color_light: "color-nexo-blue-100",
        color_dark: "color-nexo-blue-200",
        platform_description: [{
            title: "Ingeniería y diseño de proyectos",
            body: "Convertimos necesidades complejas en soluciones en proyectos claros, implementables y preparados para crecer.",
            bullets: [
                "Diseño, planificación e implementación de proyectos.",
                "Auditoría técnica y evaluación de proyectos.",
                "Soporte técnico y mantenimiento preventivo."
            ]
        },
        {
            title: "Telecomunicaciones y conectividad",
            body: "Diseñamos redes para que personas, equipos y sedes trabajen como una sola operación.",
            bullets: []
        }, {
            title: "Infraestructura IT, OT y redes",
            body: "Hacemos visible y administrable la infraestrucutra que sostiene el negocio.",
            bullets: [
                "Irure minim eu id velit culpa.",
                "Enim aliqua sunt consequat id sunt.",
                "Pariatur velit aliqua consectetur id."
            ]
        }],
    }, {
        slug: "desarrollo-soluciones-digitales",
        title: <p>Desarrollo <br /> y Soluciones <br /> Digitales</p>,
        logo: logo_digital,
        color_light: "color-nexo-purple-100",
        color_dark: "color-nexo-purple-200",
        platform_description: [{
            title: "Desarrollo de soluciones digitales",
            body: "Creamos soluciones digitales a medida, con un enfoque en la experiencia del usuario y la eficiencia operativa.",
            bullets: [
                "Quis reprehenderit exercitation irure ea nulla.",
                "Ea pariatur irure labore exercitation ipsum officia amet.",
                "Incididunt in exercitation fugiat ut nostrud minim occaecat est exercitation sint irure aute.",
                "Fugiat non culpa duis ex quis id cillum labore laborum non commodo commodo."
            ]
        }],
    }, {
        slug: "consultoria-asesoramiento-legal",
        title: <p>Consultoría <br /> y Asesoramiento <br /> Legal</p>,
        logo: logo_legal,
        color_light: "color-nexo-red-100",
        color_dark: "color-nexo-red-200",
        platform_description: [{
            title: "Consultoría y Asesoramiento Legal",
            body: "Ofrecemos servicios de consultoría y asesoramiento legal especializado en las áreas de derecho corporativo, propiedad intelectual y cumplimiento normativo.",
            bullets: [
                "Ea ut qui dolor quis culpa commodo ipsum.",
                "Anim sunt irure culpa excepteur mollit sint proident est labore anim ex.",
                "Velit nostrud commodo laboris adipisicing."
            ]
        }]
    }
]


export default platformFeatures;
