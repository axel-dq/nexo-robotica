"use client";

import "./globals.css";
import { aeonik } from "./fonts";
import { corporate } from "./fonts";
import linkedinWhite from "@assets/images/linkedin.png";
import instagram from "@assets/images/instagram.svg";
import logoWhite from "@assets/images/logo-white.svg";
import ExportedImage from "next-image-export-optimizer";

import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      <body className={`m-0 p-0 ${aeonik.variable} ${corporate.variable}`}>
        <main className="flex-1 font-aeonik">
          {children}
          <footer className="flex flex-col items-center justify-center gap-4 pt-10 text-nexo-white bg-[#1a181a]">
            <div className="flex flex-col lg:flex-row px-10 items-start lg:items-center justify-around gap-10 lg:gap-40 w-full pb-20">
              <ExportedImage basePath={process.env.NEXT_PUBLIC_BASE_PATH} placeholder="blur" src={logoWhite} alt="Logo" className="h-auto w-30" />
              <div>
                <h2 className="font-bold mb-5 text-xl text-[#b0b5bf]">Servicios</h2>
                <ul className="list-none flex flex-col gap-2">
                  <li className="text-nexo-white/50"><Link href="/plataformas/infraestructura-telecomunicaciones-tecnologia">Infraestructura, Telecomunicaciones y Tecnología (IT & OT)</Link></li>
                  <li className="text-nexo-white/50"><Link href="/plataformas/desarrollo-soluciones-digitales">Diseño y Marketing Digital</Link></li>
                  <li className="text-nexo-white/50"><Link href="/plataformas/consultoria-asesoramiento-legal">Consultoría y Asesoramiento Legal</Link></li>
                </ul>
              </div>
              <div>
                <h2 className="font-bold mb-5 text-xl text-[#b0b5bf]">nexo.robórtica</h2>
                <ul className="list-none flex flex-col gap-2">
                  <li className="text-nexo-white/50"><Link href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Link></li>
                  <li className="text-nexo-white/50"><Link href="/nosotros">Quienes somos</Link></li>
                  <li className="text-nexo-white/50"><Link href="/#plataformas" onClick={() => document.getElementById('plataformas')?.scrollIntoView({ behavior: 'smooth' })}>Servicios</Link></li>
                </ul>
              </div>
              <div id="footer-social-media" className="flex items-center justify-center gap-4 self-end h-6">
                <Link href="https://www.instagram.com/nexo.robotica/" target="_blank" rel="noopener noreferrer" className="h-full">
                  <ExportedImage basePath={process.env.NEXT_PUBLIC_BASE_PATH} placeholder="blur" src={instagram} alt="Instagram" className="h-full w-auto" />
                </Link>
                <Link href="#" target="_blank" rel="noopener noreferrer" className="h-full">
                  <ExportedImage basePath={process.env.NEXT_PUBLIC_BASE_PATH} placeholder="blur" src={linkedinWhite} alt="LinkedIn" className="h-full w-auto" />
                </Link>
              </div>
            </div>
          </footer>
        </main>
      </body>
    </html >
  );
}
