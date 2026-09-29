"use client";

import "./globals.css";
import { aeonik } from "./fonts";
import whatsappWhite from "@assets/images/whatsapp-white.svg";
import linkedinWhite from "@assets/images/linkedin.png";
import instagram from "@assets/images/instagram.svg";
import logo from "@assets/images/logo.svg";
import logoWhite from "@assets/images/logo-white.svg";
import Image from "next/image";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      <body className={`m-0 p-0 ${aeonik.variable}`}>
        <main className="flex-1">
          {children}
          <footer className="flex flex-col items-center justify-center gap-4 pt-10 text-nexo-white bg-nexo-black">
            <div id="footer-social-media" className="flex items-center justify-center gap-4 self-end h-10 mx-auto lg:mx-0 lg:mr-20  mb-10">
              <a href="#" target="_blank" rel="noopener noreferrer" className="h-full">
                <Image src={instagram} alt="Instagram" className="h-full w-auto" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="h-full">
                <Image src={linkedinWhite} alt="LinkedIn" className="h-full w-auto" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="h-full">
                <Image src={whatsappWhite} alt="WhatsApp" className="h-full w-auto" />
              </a>
            </div>
            <div className="flex flex-col lg:flex-row px-10 items-start lg:items-center justify-center gap-10 lg:gap-40 w-full pb-20">
              <Image src={logoWhite} alt="Logo" className="h-auto w-50" />
              <div>
                <h2 className="font-bold mb-5 text-xl">Servicios</h2>
                <ul className="list-none flex flex-col gap-2">
                  <li className="text-nexo-white/50"><a href="#">Infraestructura, Telecomunicaciones y Tecnología (IT & OT)</a></li>
                  <li className="text-nexo-white/50"><a href="#">Desarrollo y Soluciones Digitales</a></li>
                  <li className="text-nexo-white/50"><a href="#">Consultoría y Asesoramiento Legal</a></li>
                </ul>
              </div>
              <div>
                <h2 className="font-bold mb-5 text-xl">nexo.robórtica</h2>
                <ul className="list-none flex flex-col gap-2">
                  <li className="text-nexo-white/50"><a href="#">Home</a></li>
                  <li className="text-nexo-white/50"><a href="#">Quienes somos</a></li>
                  <li className="text-nexo-white/50"><a href="#">Servicios</a></li>
                  <li className="text-nexo-white/50"><a href="#">Contactos</a></li>
                </ul>
              </div>
            </div>
            <div className="bg-nexo-white w-full p-20">
              <Image src={logo} alt="Logo" className="h-auto w-4/5 lg:w-1/4 mx-auto" />
            </div>
          </footer>
        </main>
      </body>
    </html>
  );
}
