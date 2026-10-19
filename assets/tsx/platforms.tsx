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
        title: <p> Infraestructura, <br /> Telecomunicaciones < br /> y Tecnología (IT & OT)</p >,
        logo: logo_telecom,
        color_light: "color-nexo-blue-100",
        color_dark: "color-nexo-blue-200",
        platform_description: [{
            title: "Ingeniería y diseño de proyectos",
            body: "Entendemos lo que necesitás y lo convertimos en un proyecto claro, viable y listo para implementar.",
            bullets: [
                "Diseño y planificación de proyectos.",
                "Auditoría y evaluación técnica.",
                "Implementación, soporte y mantenimiento preventivo."
            ]
        },
        {
            title: "Telecomunicaciones y conectividad",
            body: "Conectamos personas, equipos y sedes para que todo funcione de forma más simple y coordinada.",
            bullets: [
                "Diseño, instalación y mantenimiento de redes.",
                "Certificación de cableado estructurado.",
                "Certificación de cableado estructurado.",
                "Optimización de cobertura Wi-Fi.",
                "Interconexión de sucursales y sitios remotos."
            ]
        }, {
            title: "Infraestructura IT, OT y redes",
            body: "Damos visibilidad y control sobre la infraestructura que sostiene tu negocio.",
            bullets: [
                "Diseño de infraestructura informática.",
                "Segmentación y administración de redes.",
                "Documentación de infraestructura.",
                "Soporte técnico para empresas e industrias."

            ]
        },
        {
            title: "Seguridad electrónica y Ciberseguridad",
            body: "Protegemos la información y los activos de la empresa, asegurando la continuidad del negocio.",
            bullets: [
                "Instalación de sistemas de seguridad perimetral.",
                "Segmentación de redes críticas.",
                "Sistemas de videovigilancia, cámaras IP, alarmas y sensores de seguridad.",
                "Monitoreo de infraestructura tecnológica y evaluación de vulnerabilidades.",
                "Copias de seguridad y recuperación de datos.",
                "Planes de contingencia y continuidad operativa.",
            ]
        },
        {
            title: "Automatización y optimización de procesos",
            body: "Simplificamos procesos, reducimos tareas manuales y minimizamos errores operativos.",
            bullets: [
                "Automatización de procesos y tareas.",
                "Diseño de flujos de trabajos digitales.",
                "Gestión documental digital.",
                "Formularios y circuitos de aprobación.",
                "Integración de herramientas via API.",
                "Tableros de control e indicadores.",
            ]
        }, {
            title: "Formación en Tecnología Cisco",
            body: "Capacitá a tu equipo con formación técnica especializada, 100% online.",
            bullets: [
                "Programas de capacitación a medida.",
                "Redes: CCNA y CCNP.",
                "Automatización: DevNet",
                "Ciberseguridad: CyberOps."
            ]
        }, {
            title: "Equipamiento e integración tecnológica",
            body: "Seleccionamos, integramos y ponemos en marcha el equipamiento que necesita cada proyecto.",
            bullets: [
                "CCTV y videovigilancia.",
                "Racks y gabinetes.",
                "Switches, routers y Access Points.",
                "Workstations, notebooks y monitores.",
                "Impresoras y periféricos.",
                "Fibra óptica y cableado estructurado.",
                "Servidores, almacenamiento y respaldo energético."
            ]
        }],
    }, {
        slug: "desarrollo-soluciones-digitales",
        title: <p>Diseño <br /> y Marketing Digital</p>,
        logo: logo_digital,
        color_light: "color-nexo-purple-100",
        color_dark: "color-nexo-purple-200",
        platform_description: [{
            title: "Branding",
            body: "Creamos identidades de marca con una estrategia visual clara, coherente y pensada para conectar con su público.",
            bullets: [
                "Estrategia de marca.",
                "Logo e identidad visual.",
                "Manual de marca."
            ]
        }, {
            title: "Diseño Web",
            body: "Diseñamos experiencias digitales intuitivas, funcionales y alineadas con los objetivos de cada negocio.",
            bullets: [
                "UX/UI",
                "Sitios Web",
                "Landing pages",
                "E-commerce"
            ]
        }, {
            title: "Contenido Digital",
            body: "Creamos contenido para redes y plataformas digitales que fortalece la presencia de marca y genera conexión con su audiencia.",
            bullets: [
                "Piezas para redes sociales.",
                "Campañas.",
                "Comunicación visual.",
                "Estrategias de contenido.",
                "Posicionamiento SEO.",
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
                "Análisis legal y asesoramiento de proyectos de telecomunicaciones y tecnología.",
                "Gestión documental y administrativa de proyectos.",
                "Coordinación entre áreas técnicas, comerciales y legales.",
                "Acompañamiento en reclamos y conflictos contractuales.",
                "El asesoramiento legal será brindado por profesionales matriculados y/o en articulación con estudios jurídicos especializados, según la naturaleza de cada proyecto."
            ]
        }]
    }
]


export default platformFeatures;
