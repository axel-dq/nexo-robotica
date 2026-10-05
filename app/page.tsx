'use client'

import Image from "next/image";
import "./page.css";
import logo from "@assets/images/logo.svg";
import whatsapp from "@assets/images/whatsapp.svg";

import platformFeatures from "@assets/tsx/platforms";
import PlaformCard from "@assets/tsx/platform_card";

export default function Home() {
  return (
    <>
      <a href="#" className="fixed bottom-10 right-10 size-10 z-20"><Image src={whatsapp} alt="whatsapp" /></a>
      <section id="home" className="p-10 lg:px-40 py-10 relative bg-nexo-white z-10 font-aeonik min-h-svh">
        <header className="flex flex-col lg:flex-row gap-5 items-center justify-between text-nexo-black mb-20 text-xl">
          <ul className="flex items-center justify-between flex-wrap gap-5 lg:gap-10 list-none w-full">
            <li className="move-down"><Image src={logo} loading="eager" alt="Logo" className="h-9 w-auto relative right-10" /></li>
            <div className="flex items-center justify-between gap-5 lg:gap-10 flex-wrap">
              <li className="move-down"><a href="/nosotros">Nosotros</a></li>
              <li className="move-down"><a href="#plataformas">Servicios</a></li>
              <li className="move-down"><a href="#footer-social-media">Contacto</a></li>
            </div>
            <li className="bg-nexo-black text-white px-4 py-2 rounded-md lg:ml-20 move-down"><a href="#">Cotización Gratis</a></li>
          </ul>
        </header>
        <div className="lg:max-w-3/5">
          <h1 className="text-3xl lg:text-8xl font-medium mb-10 leading-23">Soluciones <br className="hidden md:block" /> que conectan. <br className="hidden md:block" /> Operaciones <br /> que avanzan</h1>
          <p className="xl:max-w-180 text-xl lg:text-3xl font-normal">Diseñamos, protegemos y hacemos evolucionar <br /> la infraestructura que mantiene en movimiento <br /> a tu organización.</p>
        </div>
      </section >
      <section className="font-aeonik p-10 lg:p-40 bg-nexo-white" id="plataformas">
        <h1 className="text-3xl font-regular text-nexo-black brightness-75 mx-auto w-fit text-center font-bold">Nuestra <br className="md:hidden" /> Plataforma Digital</h1>
        <ul className="flex flex-wrap items-center justify-center gap-10 mt-20 list-none fade-up">
          {platformFeatures.map((feature, index) => (
            <li key={index}>
              <a href={`/plataformas/${feature.slug}`}>
                <PlaformCard text={feature.title} logo={feature.logo} color_bottom={feature.color_light} color_top={feature.color_dark} />
              </a>
            </li>
          ))}
        </ul>
      </section>
      <div className="bg-nexo-black">
        <section className="p-50 flex flex-col items-center justify-center gap-20">
          <p className="text-center text-5xl lg:text-6xl font-bold" id="contact-msg">
            Hablanos de tu proyecto <br /> y como podemos acompañarte</p>
          <a href="#" className="bg-nexo-red-100 px-10 py-5 rounded-xl text-2xl font-bold text-center text-nexo-black">Contactanos ya</a>
        </section>
      </div>
    </>
  )
}
