"use client";
import { useState, useEffect, useRef } from "react";
import "./page.css";
import pin from "@/assets/location.svg";


type Service = { title: string; description: string; items: string[]; icon: string; color: string };
const services: Service[] = [
  { title: "Ingeniería y diseño de proyectos", description: "Convertimos necesidades complejas en proyectos claros, implementables y preparados para crecer.", icon: "architecture", color: "#d8ff3e", items: ["Diseño, planificación e implementación de proyectos.", "Auditorías técnicas y evaluación de infraestructura.", "Soporte técnico y mantenimiento preventivo."] },
  { title: "Telecomunicaciones y conectividad", description: "Diseñamos redes confiables para que personas, equipos y sedes trabajen como una sola operación.", icon: "settings_input_antenna", color: "#62d8f5", items: ["Diseño, instalación y mantenimiento de redes de telecomunicaciones.", "Certificación, diagnóstico, monitoreo y reparación de fallas.", "Certificación de cableado estructurado.", "Optimización de cobertura Wi-Fi.", "Interconexión de sucursales y sitios remotos."] },
  { title: "Infraestructura IT, OT y redes", description: "Hacemos visible y administrable la infraestructura que sostiene el negocio, desde el puesto hasta la planta.", icon: "account_tree", color: "#ffb86b", items: ["Diseño de infraestructura informática.", "Segmentación y administración de redes.", "Documentación de infraestructura.", "Soporte técnico para empresas e industrias."] },
  { title: "Seguridad electrónica y ciberseguridad", description: "Protegemos espacios, información y continuidad operativa con seguridad diseñada para el contexto real.", icon: "shield_lock", color: "#ff7796", items: ["Instalación de sistemas de seguridad perimetral.", "Segmentación de redes críticas.", "Sistemas de videovigilancia, cámaras IP, alarmas y sensores de seguridad.", "Monitoreo de infraestructura tecnológica y evaluación de vulnerabilidades.", "Copias de seguridad y recuperación de datos.", "Planes de contingencia y continuidad operativa."] },
  { title: "Automatización y optimización de procesos", description: "Diseñamos flujos digitales que reducen el trabajo repetitivo y devuelven tiempo a los equipos.", icon: "account_tree", color: "#ac96ff", items: ["Automatización de procesos y tareas.", "Diseño de flujos de trabajo digitales.", "Gestión digital de documentos.", "Formularios y circuitos de aprobación.", "Integración de herramientas mediante API.", "Tableros de control e indicadores.", "Reducción de tiempos y errores operativos."] },
  { title: "Desarrollo web y soluciones digitales", description: "Construimos experiencias digitales ágiles, claras y preparadas para acompañar el crecimiento de tu marca.", icon: "language", color: "#8fe18f", items: ["Diseño y desarrollo de páginas web institucionales.", "Tiendas online y catálogos digitales.", "Mantenimiento y actualización de sitios web.", "Optimización para dispositivos móviles.", "Posicionamiento básico en buscadores (SEO).", "Seguridad, copias de respaldo y soporte web."] },
  { title: "Marketing digital y comunicación tecnológica", description: "Traducimos capacidades técnicas en mensajes que conectan con las personas y mueven decisiones.", icon: "campaign", color: "#f1a6e5", items: ["Diseño de identidad digital.", "Gestión de redes sociales.", "Creación de contenido institucional y comercial.", "Estrategias de posicionamiento de marca.", "Administración de Google Business Profile.", "Email marketing y comunicación con clientes.", "Análisis de métricas y resultados.", "Creación de presentaciones y material corporativo."] },
  { title: "Consultoría y asesoramiento legal para proyectos", description: "Acompañamos cada proyecto para que sus decisiones técnicas y comerciales también tengan una base legal sólida.", icon: "gavel", color: "#f4cc62", items: ["Análisis legal y asesoramiento de proyectos de telecomunicaciones y tecnología.", "Gestión documental y administrativa de proyectos.", "Coordinación entre áreas técnicas, comerciales y legales.", "Acompañamiento en reclamos y conflictos contractuales.", "El asesoramiento legal será brindado por profesionales matriculados y/o en articulación con estudios jurídicos especializados, según la naturaleza de cada proyecto."] },
];
const Icon = ({ name, className = "" }: { name: string; className?: string }) => <span className={`material-symbols-outlined ${className}`} aria-hidden="true">{name}</span>;

export default function Home() {
  const [selected, setSelected] = useState<Service | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pinRef = useRef<HTMLObjectElement | null>(null);

  function resizeCanvas() {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Get the device pixel ratio (defaults to 1 for standard screens, 2+ for Retina)
    const dpr = window.devicePixelRatio || 1;

    // Get the size of the canvas in CSS pixels
    const rect = canvas.getBoundingClientRect();

    // Set the actual internal drawing size (scaled for high-DPI)
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    // Scale the drawing context so you can still draw using normal CSS pixel coordinates
    ctx.scale(dpr, dpr);

    drawCanvas(); // Redraw the canvas content after resizing
  }

  function drawCanvas() {
    const locations = [
      { x: 0.55, y: 0.52 },
      { x: 0.45, y: 0.35 },
      { x: 0.32, y: 0.7 },
      { x: 0.4, y: 1.03 },
      { x: 0.45, y: 0.1 },
      { x: 0.78, y: 0.18 },
    ]

    if (!canvasRef.current) return;

    const width = canvasRef.current.width;
    const height = canvasRef.current.height;
    let ctx = canvasRef.current.getContext("2d");

    if (!ctx) return;

    ctx.clearRect(0, 0, width, height);

    const pinPath = pinRef.current!.contentDocument!.querySelector("path")?.getAttribute("d");
    const svgPath = new Path2D(pinPath!);

    const targetSize = 48;

    // 2. Calculate the scale factor based on the viewBox size (960)
    const viewBoxSize = 960;
    const scale = targetSize / viewBoxSize;

    for (const [i, { x, y }] of locations.entries()) {
      const posX = width * 0.9 * x;
      const posY = height * 0.9 * y;

      locations.slice(i + 1).forEach(({ x: other_x, y: other_y }) => {
        if (x == other_x && y == other_y) return; // Skip drawing a line to itself

        const pinOffset = targetSize / 2; // Offset to the center of the pin

        const otherPosX = width * 0.9 * other_x + pinOffset;
        const otherPosY = height * 0.9 * other_y;

        ctx.lineWidth = 3;
        ctx.setLineDash([5, 5]); // Set dashed line pattern
        ctx.lineDashOffset += 0.01;
        ctx.beginPath();
        ctx.moveTo(posX + pinOffset, posY);
        ctx.lineTo(otherPosX, otherPosY);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
        ctx.stroke();
      });

      ctx.save();
      ctx.translate(posX, posY);
      ctx.scale(scale, scale);
      ctx.fillStyle = "#db3232";
      ctx.fill(svgPath);
      ctx.restore();
    };

    requestAnimationFrame(drawCanvas);
  }

  useEffect(() => {
    window.addEventListener("resize", resizeCanvas);

    resizeCanvas();
    drawCanvas();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    }
  }, []);

  return <main className="min-h-screen bg-[#111411] text-[#111411]">
    <section className="min-h-[72vh] px-6 py-6 bg-transparent text-[#f4f3ee] sm:px-10 lg:px-16">
      <div className="flex justify-between border-b border-white/20 pb-5 text-xs uppercase tracking-[0.24em] text-white/65 px-6 py-6">
        <span>Nexo Robótica</span><span>Servicios integrales / 2026</span>
      </div>
      <div className="flex h-min">
        <div className="flex-col justify-between">
          <div className="max-w-5xl py-20">
            <p className="mb-7 text-xs uppercase tracking-[0.3em] text-[#d8ff3e]">Tecnología con criterio</p>
            <h1 className="font-serif text-[clamp(3.7rem,10vw,9.5rem)] leading-[0.86]">
              Ideas que conectan.<br />
              <em className="text-[#d8ff3e] bg-linear-to-r from-[#d8ff3e] to-[#d8ff3e] text-underline-anim">
                Operaciones que avanzan.
              </em>
            </h1>
            <p className="mt-10 max-w-md text-lg text-white/65">
              Diseñamos, protegemos y hacemos evolucionar la infraestructura que mantiene en movimiento a tu organización.
            </p>
          </div>
          <div className="border-t border-white/20 pt-5 text-xs uppercase tracking-[0.18em] text-white/55">
            Elegí un área para explorar
          </div>
        </div>
        <div id="argentina-container" className="self-stretch flex-1 relative">
          <canvas ref={canvasRef} className="absolute inset-0 size-full" />
          <object id="pin-svg" type="image/svg+xml" data={pin.src} ref={pinRef} className="hidden"></object>
        </div>
      </div>
    </section>
    <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28 bg-[#f4f3ee] text-[#111411]">
      <div className="mb-12">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#657030]">
          Lo que hacemos
        </p>
        <h2 className="font-serif text-5xl tracking-tighter sm:text-7xl">
          Una mirada completa<br /><em className="text-[#657030]">a tu próxima etapa.</em>
        </h2>
      </div>
      <div className="flex flex-wrap gap-3">{services.map((service, index) =>
        <button key={service.title} type="button" onClick={() => setSelected(service)} style={{ "--accent": service.color } as React.CSSProperties} className="group relative flex cursor-pointer min-h-64 min-w-[min(100%,16rem)] flex-1 basis-56 flex-col justify-between overflow-hidden border border-[#111411]/20 bg-[#e9e8e1] p-6 text-left transition hover:-translate-y-2 hover:shadow-[8px_8px_0_#111411]">
          <Icon name={service.icon} className="absolute text-[9rem] text-(--accent) opacity-70 transition group-hover:scale-110 text-9xl!" />
          <span className="relative z-10 flex justify-between text-xs tracking-[0.2em] text-[#111411]/55"><span>{String(index + 1).padStart(2, "0")}</span><span className="text-xl">↗</span>
          </span>
          <span className="relative z-10 max-w-56 font-serif text-2xl leading-none">{service.title}</span>
        </button>)}
      </div>
    </section>
    <footer className="flex justify-between border-t border-[#111411]/20 px-6 py-6 text-xs uppercase tracking-[0.18em] text-[#5f625c]">
      <span>Nexo Robótica</span>
      <span>Soluciones para un mundo conectado</span>
    </footer>

    {
      selected && <div id="selected" className="fixed transition-all duration-300 ease-in-out inset-0 z-50 overflow-y-auto bg-[#111411] p-6 text-[#f4f3ee] sm:p-10 lg:p-16" style={{ "--accent": selected.color } as React.CSSProperties} role="dialog" aria-modal="true">
        <div className="mx-auto flex min-h-full max-w-7xl flex-col"><div className="flex justify-between border-b border-white/20 pb-5 text-xs uppercase tracking-[0.2em] text-white/60">
          <span>Servicio / detalle</span>
          <button type="button" onClick={() => { document.getElementById("selected")?.classList.add("remove"); setTimeout(() => setSelected(null), 500) }} className="text-white hover:text-(--accent) flex items-center gap-2 cursor-pointer" aria-label="Cerrar detalle">Cerrar <b className="text-3xl">×</b>
          </button>
        </div>
          <div className="grid flex-1 content-center gap-14 py-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <Icon name={selected.icon} className="mb-10 text-8xl text-(--accent)" />
              <p className="mb-5 text-xs uppercase tracking-[0.3em] text-(--accent)">Servicio especializado</p>
              <h2 className="font-serif text-5xl leading-[0.9] tracking-tighter sm:text-7xl">{selected.title}</h2>
              <p className="mt-8 max-w-lg text-lg text-white/65">{selected.description}</p>
            </div>
            <div className="border-t border-white/20 pt-5">
              <p className="mb-8 text-xs uppercase tracking-[0.3em] text-white/45">Incluye</p>
              <ul className="space-y-5">{selected.items.map((item) => <li key={item} className="flex gap-4 text-lg text-white/85">
                <span className="mt-2 h-2 w-2 shrink-0 bg-(--accent)" />{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    }
  </main>;
}
