'use client'

import ExportedImage from "next-image-export-optimizer";
import "./page.css";
import logo from "@assets/images/logo.svg";
import whatsapp from "@assets/images/whatsapp.svg";

import platformFeatures from "@assets/tsx/platforms";
import PlaformCard from "@assets/tsx/platform_card";
import LiquidBg from "@assets/tsx/liquid-bg";
import MorphGallery from "@assets/tsx/morph-gallery";
import MorphList from "@assets/tsx/morph-list";
import TypewriterList from "@assets/tsx/typewritter";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const typewriterItems = [
    "Insfraestructura \nTelecomunicaciones \ny Tecnología (IT & OT)",
    "Diseño y Marketing \nDigital",
    "Consultoría y \nAsesoramiento Legal"
  ]


  return (
    <>
      <Link href="#" className="fixed bottom-10 right-10 size-10 z-20"><ExportedImage src={whatsapp} alt="whatsapp" placeholder="blur" loading="eager" /></Link>
      <section id="home" className="lg:px-40 lg:py-10 relative bg-nexo-white z-10 font-aeonik min-h-svh">
        <header className="hidden! lg:flex! flex-col lg:flex-row gap-5 items-center justify-between text-nexo-black mb-35 text-xl glass-btn py-5 px-10 rounded-full move-down hover:transform-none! hover:cursor-default!">
          <ul className="flex items-center justify-between flex-wrap gap-5 lg:gap-10 list-none w-full">
            <li className="move-down"><ExportedImage placeholder="blur" src={logo} loading="eager" alt="Logo" className="h-7 w-auto right-10" /></li>
            <div className="flex items-center justify-between gap-5 lg:gap-10 flex-wrap">
              <li className="move-down"><Link href="/nosotros">Nosotros</Link></li>
              <li className="move-down"><Link href="/#plataformas">Soluciones</Link></li>
              <li className="move-down"><Link href="/#footer-social-media">Contacto</Link></li>
            </div>
            <li className="bg-nexo-black text-white px-6 py-2 rounded-full lg:ml-20 move-down text-base"><Link href="#">Cotización Gratis</Link></li>
          </ul>
        </header>
        <header className="lg:hidden block text-nexo-black mb-20 bg-white text-xl">
          <div className="flex items-center justify-between p-10">
            <ExportedImage placeholder="blur" src={logo} loading="eager" alt="Logo" className="h-9 w-auto" />
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ transform: mobileMenuOpen ? 'rotate(-90deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease-in-out' }}>
              <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z" /></svg>
            </button>
          </div>
          <div className={`grid transition-all duration-800 ease-out overflow-hidden ${mobileMenuOpen ? 'grid-rows-[1fr] text-nexo-white' : 'grid-rows-[0fr] text-transparent'}`}>
            <ul className="flex flex-col items-stretch justify-center gap-5 list-none overflow-hidden bg-nexo-black p-2 [&>*:not(:last-child)]:border-b-2 [&>*:not(:last-child)]:pb-2">
              <li><Link href="/nosotros" className="size-full block">Nosotros</Link></li>
              <li><Link href="#plataformas" className="size-full block">Servicios</Link></li>
              <li><Link href="#footer-social-media" className="size-full block">Contacto</Link></li>
            </ul>
          </div>
        </header>
        <div className="px-10 lg:px-0 flex justify-between">
          <div>
            <h1 className="text-6xl lg:text-9xl font-bold lg:font-medium mb-10 lg:leading-25">
              <span className="appear-fade">Conectar.</span><br />
              <span className="appear-fade">Trasformar.</span><br />
              <span className="appear-fade">Crecer.</span>
            </h1>
            <p className="xl:max-w-180 text-2xl font-aeonik leading-tight text-balance after-appear-fade mt-10">Integramos tecnología, soluciones digitales y consultoría para acompañar el crecimiento de tu organización.</p>
          </div>
          <div className="flex w-1/5 justify-start">
            <TypewriterList items={typewriterItems} />
          </div>
          <Link href="#" className="w-fit block lg:hidden bg-nexo-black text-white px-4 py-2 rounded-md lg:ml-20 move-down mt-10 after-appear-fade" style={{ animationDelay: '2s' }}>Cotización Gratis</Link>
        </div>
        <div className="absolute inset-0 -z-20">
          <LiquidBg />
        </div>
      </section >
      <section className="font-aeonik p-10 lg:p-40 bg-nexo-white" id="plataformas">
        <h1 className="text-6xl font-regular text-nexo-black brightness-75 mx-auto w-fit text-center font-bold mb-5">Nuestras soluciones</h1>
        <ul className="flex flex-wrap items-center justify-center gap-10 mt-20 list-none fade-up">
          {platformFeatures.map((feature, index) => (
            <li key={index}>
              <Link href={`/plataformas/${feature.slug}`}>
                <PlaformCard text={feature.title} logo={feature.logo} color_bottom={feature.color_light} color_top={feature.color_dark} />
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="fade-up bg-white">
        <MorphList />
      </section>
      <section className="font-aeonik bg-nexo-white fade-up" id="como-trabajamos">
        <MorphGallery />
      </section>
      <div className="bg-[#1a181a]">
        <section className="px-5 py-20 lg:p-30 flex flex-col items-center justify-center gap-20">
          <p className="text-center text-2xl lg:text-6xl font-bold" id="contact-msg">
            Hablanos de tu proyecto <br className="hidden md:block" /> y como podemos acompañarte</p>
          {/* <Link href="#" className="bg-nexo-red-100 px-10 py-5 rounded-xl text-2xl font-bold text-center text-nexo-black">Contános tu proyecto</Link> */}
          <form className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-10 [&_input]:bg-[#b0b5bf] [&_label]:text-nexo-white [&_input]:text-nexo-black [&_input]:text-lg [&_textarea]:bg-[#b0b5bf] [&_textarea]:text-nexo-black [&_textarea]:text-lg [&_textarea]:border [&_input]:border [&_input]:border-[#dfe0e8] [&_textarea]:border-[#dfe0e8]">
            <div className="w-full">
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" name="name" placeholder="Tu nombre" className="w-full p-2 rounded-md mt-2 mb-5 placeholder:brightness-150" />
            </div>
            <div className="w-full">
              <label htmlFor="email">Correo</label>
              <input type="email" id="email" name="email" placeholder="tuCorreo@gmail.com" className="w-full p-2 rounded-md mt-2 mb-5" />
            </div>
            <div className="w-full">
              <label htmlFor="message">Mensaje</label>
              <textarea id="message" name="message" placeholder="Escribe tu mensaje aquí..." className="w-full p-2 rounded-md mt-2 mb-5 h-50"></textarea>
            </div>
            <button type="submit" className="bg-nexo-red-100 px-10 py-2 rounded-full text-2xl font-bold text-center text-nexo-black cursor-pointer hover:brightness-75 transition-all">Enviar</button>
          </form>
        </section>
      </div>
    </>
  )
}
