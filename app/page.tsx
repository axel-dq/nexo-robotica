'use client'

import Image from "next/image";
import "./page.css";
import logo from "@assets/images/logo.svg";
import whatsapp from "@assets/images/whatsapp.svg";

import platformFeatures from "@assets/tsx/platforms";
import PlaformCard from "@assets/tsx/platform_card";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="#" className="fixed bottom-10 right-10 size-10 z-20"><Image src={whatsapp} alt="whatsapp" /></Link>
      <section id="home" className="p-10 lg:px-40 py-10 relative bg-nexo-white z-10 font-aeonik min-h-svh">
        <header className="flex flex-col lg:flex-row gap-5 items-center justify-between text-nexo-black mb-40 text-xl">
          <ul className="flex items-center justify-between flex-wrap gap-5 lg:gap-10 list-none w-full">
            <li className="move-down"><Image src={logo} loading="eager" alt="Logo" className="h-9 w-auto relative right-10" /></li>
            <div className="flex items-center justify-between gap-5 lg:gap-10 flex-wrap">
              <li className="move-down"><Link href="/nosotros">Nosotros</Link></li>
              <li className="move-down"><Link href="#plataformas">Servicios</Link></li>
              <li className="move-down"><Link href="#footer-social-media">Contacto</Link></li>
            </div>
            <li className="bg-nexo-black text-white px-4 py-2 rounded-md lg:ml-20 move-down"><Link href="#">Cotización Gratis</Link></li>
          </ul>
        </header>
        <div className="lg:max-w-3/5">
          <h1 className="text-3xl lg:text-9xl font-medium mb-10 leading-25">
            <span className="appear-fade">Conetar,</span><br />
            <span className="appear-fade">trasformar,</span><br />
            <span className="appear-fade">crecer.</span>
          </h1>
          <p className="xl:max-w-180 text-xl font-normal leading-tight after-appear-fade">Diseñamos, protegemos y hacemos evolucionar <br /> la infraestructura que mantiene en movimiento <br /> a tu organización.</p>
        </div>
      </section >
      <section className="font-aeonik p-10 lg:p-40 bg-nexo-white" id="plataformas">
        <h1 className="text-3xl font-regular text-nexo-black brightness-75 mx-auto w-fit text-center font-bold">Nuestra <br className="md:hidden" /> Plataforma Digital</h1>
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
      <div className="bg-nexo-black">
        <section className="p-50 flex flex-col items-center justify-center gap-20">
          <p className="text-center text-5xl lg:text-6xl font-bold" id="contact-msg">
            Hablanos de tu proyecto <br /> y como podemos acompañarte</p>
          <Link href="#" className="bg-nexo-red-100 px-10 py-5 rounded-xl text-2xl font-bold text-center text-nexo-black">Contactanos ya</Link>
        </section>
      </div>
    </>
  )
}
