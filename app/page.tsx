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
import ContactForm from "@assets/tsx/contact-form";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
    <>
      <Link href="https://wa.me/5491164084666" target="_blank" className="fixed bottom-10 right-10 size-10 z-20 contacto"><ExportedImage basePath={process.env.NEXT_PUBLIC_BASE_PATH} src={whatsapp} alt="whatsapp" placeholder="blur" loading="eager" /></Link>
      <section id="home" className="lg:px-40 lg:py-10 relative bg-nexo-white z-10  min-h-svh">

        {/* Desktop Header */}
        <header className="hidden! lg:flex! flex-col lg:flex-row gap-5 items-center justify-between text-nexo-black mb-35 text-xl glass-btn py-5 px-10 rounded-full move-down hover:transform-none! hover:cursor-default!">
          <ul className="flex items-center justify-between flex-wrap gap-5 lg:gap-10 list-none w-full">
            <li className="move-down"><ExportedImage basePath={process.env.NEXT_PUBLIC_BASE_PATH} placeholder="blur" src={logo} loading="eager" alt="Logo" className="h-7 w-auto right-10" /></li>
            <div className="flex items-center justify-between gap-5 lg:gap-10 flex-wrap">
              <li className="move-down"><Link href="/nosotros">Nosotros</Link></li>
              <li className="move-down"><Link href="/#plataformas" onClick={() => document.getElementById('plataformas')?.scrollIntoView({ behavior: "smooth" })}>Soluciones</Link></li>
              <li className="move-down"><Link href="/#contacto" onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: "smooth" })}>Contacto</Link></li>
            </div>
            <li className="bg-nexo-black text-white px-6 py-2 rounded-full lg:ml-20 move-down text-base btn after:bg-nexo-black!">
              <Link href="https://wa.me/5491164084666" target="_blank" rel="noopener noreferrer" className="contacto">Cotización Gratis</Link>
            </li>
          </ul>
        </header>

        {/* Mobile Header */}
        <header className="lg:hidden block text-nexo-black mb-5 md:mb-20 bg-white text-xl">
          <div className="flex items-center justify-between p-6 md:p-10">
            <ExportedImage basePath={process.env.NEXT_PUBLIC_BASE_PATH} placeholder="blur" src={logo} loading="eager" alt="Logo" className="h-7 md:h-9 w-auto" />
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ transform: mobileMenuOpen ? 'rotate(-90deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease-in-out' }}>
              <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#000000" className="md:size-10"><path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z" /></svg>
            </button>
          </div>
          <div className={`grid transition-all duration-800 ease-out overflow-hidden ${mobileMenuOpen ? 'grid-rows-[1fr] text-nexo-white' : 'grid-rows-[0fr] text-transparent'}`}>
            <ul className={`flex flex-col items-stretch justify-center gap-5 list-none overflow-hidden bg-nexo-black ${mobileMenuOpen ? 'p-4' : 'p-0'} md:p-6 [&>*:not(:last-child)]:border-b-2 [&>*:not(:last-child)]:border-gray-800 [&>*:not(:last-child)]:pb-4`}>
              <li><Link href="/nosotros" className="size-full block">Nosotros</Link></li>
              <li><Link href="#plataformas" className="size-full block">Soluciones</Link></li>
              <li><Link href="#contacto-msg" className="size-full block">Contacto</Link></li>
            </ul>
          </div>
        </header>

        {/* Main Content */}
        <div className="px-6 md:px-10 lg:px-0 pb-10 lg:pb-0 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div className="w-full lg:w-auto">
            <div className="flex items-center justify-end">
              <Link href="https://wa.me/5491164084666" target="_blank" rel="noopener noreferrer" className="contacto text-sm btn w-fit lg:hidden! bg-nexo-black text-white px-3 py-2 rounded-full move-down mb-10 appear-fade after:bg-nexo-black!">
                Cotización Gratis
              </Link>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold lg:font-medium mb-1 lg:mb-10 leading-12 lg:leading-25">
              <span className="appear-fade">Conectar.</span><br />
              <span className="appear-fade">Trasformar.</span><br />
              <span className="appear-fade">Crecer.</span>
            </h1>
            <p className="w-full xl:max-w-180 text-base md:text-xl lg:text-2xl  leading-tight text-balance appear-fade mt-2 lg:mt-10" style={{ animationDelay: '0.8s' }}>
              Integramos tecnología, soluciones digitales y consultoría para acompañar el crecimiento de tu organización.
            </p>
          </div>

          <div className="flex flex-col w-full lg:w-1/4 justify-start mt-10 lg:mt-0 appear-fade">
            <TypewriterList />
            <Link className="hidden! lg:block hover-btn w-fit hover:[&>span]:left-0 mt-10 ml-10" href="/#plataformas" onClick={() => document.getElementById("plataformas")?.scrollIntoView({ behavior: "smooth" })}><span className="relative left-12 transition-all">Conocé más</span></Link>
          </div>
        </div>

        <div className="absolute inset-0 -z-20">
          <LiquidBg />
        </div>
      </section>
      <section className=" p-10 lg:p-40 bg-nexo-white" id="plataformas">
        <h1 className="hidden lg:block text-4xl md:text-5xl lg:text-6xl lg:text-center mb-6 lg:mb-20 leading-8 font-bold">
          Nuestras soluciones
        </h1>
        <ul className="flex flex-wrap items-stretch justify-center gap-10 lg:mt-20 list-none fade-up">
          {platformFeatures.map((feature, index) => (
            <li key={index}>
              <Link href={`/plataformas/${feature.slug}`}>
                <PlaformCard text={feature.title} logo={feature.logo} color_bottom={feature.color_light} color_top={feature.color_dark} link={`/plataformas/${feature.slug}`} />
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="fade-up bg-white">
        <MorphList />
      </section>
      <section className=" bg-nexo-white fade-up" id="como-trabajamos">
        <MorphGallery />
      </section>
      <div className="bg-[#1a181a]">
        <section id="contacto" className="px-5 py-20 lg:p-30 flex flex-col items-center justify-center gap-20">
          <ContactForm />
        </section>
      </div>
    </>
  )
}
