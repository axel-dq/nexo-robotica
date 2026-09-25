'use client'

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import "./page.css";
import logo from "@assets/images/logo.svg";

import platformFeatures from "@assets/tsx/platforms";
import PlaformCard from "@assets/tsx/platform_card";

export default function Home() {
  const lavaLampRef = useRef<HTMLDivElement>(null);
  const [computedStyles, setComputedStyles] = useState<CSSStyleDeclaration | null>(null);

  function randomRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  function animateBubble(bubble: HTMLDivElement) {
    if (!computedStyles) return;

    const duration = randomRange(5000, 15000);

    const colors = [
      computedStyles.getPropertyValue("--color-nexo-blue-100"),
      computedStyles.getPropertyValue("--color-nexo-blue-200"),
      computedStyles.getPropertyValue("--color-nexo-purple-100"),
      computedStyles.getPropertyValue("--color-nexo-purple-200"),
      computedStyles.getPropertyValue("--color-nexo-red-100"),
      computedStyles.getPropertyValue("--color-nexo-red-200"),
      computedStyles.getPropertyValue("--color-nexo-white"),
    ];

    bubble.style.width = `${randomRange(20, 70)}%`;
    bubble.style.bottom = "150%";
    bubble.style.left = `${randomRange(0, 100)}%`;
    bubble.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    bubble.animate([{
      bottom: "-100%",
      borderRadius: `${randomRange(10, 100)}% ${randomRange(10, 100)}% ${randomRange(10, 100)}% ${randomRange(10, 100)}% / ${randomRange(10, 100)}% ${randomRange(10, 100)}% ${randomRange(10, 100)}% ${randomRange(10, 100)}%`,
    }, {
      bottom: "150%",
      width: `${randomRange(0, 100)}%`,
      borderRadius: `${randomRange(10, 100)}% ${randomRange(10, 100)}% ${randomRange(10, 100)}% ${randomRange(10, 100)}% / ${randomRange(10, 100)}% ${randomRange(10, 100)}% ${randomRange(10, 100)}% ${randomRange(10, 100)}%`,
    }], {
      duration: duration,
    });

    setTimeout(() => {
      animateBubble(bubble);
    }, duration);
  }

  function animateBubbles() {
    if (!lavaLampRef.current || !computedStyles) return;

    const bubbles: NodeListOf<HTMLDivElement> = lavaLampRef.current.querySelectorAll(".bubble");
    bubbles.forEach(async (bubble) => {
      animateBubble(bubble);
    })
  }

  useEffect(() => {
    const compStyles = window.getComputedStyle(document.documentElement);
    setComputedStyles(compStyles);

  }, []);

  useEffect(() => {
    animateBubbles();
  }, [computedStyles]);

  return (
    <>
      <section id="home" className="p-15 relative bg-nexo-white z-10 font-aeonik">
        <header className="flex items-center justify-between text-black mb-20 text-xl">
          <Image src={logo} loading="eager" alt="Logo" className="h-12 w-auto" />
          <ul className="flex items-center gap-10 list-none">
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Contacto</a></li>
            <li className="bg-black text-white px-4 py-2 rounded-md ml-20"><a href="#">Cotización Gratis</a></li>
          </ul>
        </header>
        <div className="max-w-3/5">
          <h1 className="text-8xl font-medium mb-10">Soluciones <br className="hidden md:block" /> que conectan. <br className="hidden md:block" /> Operaciones <br /> que avanzan</h1>
          <p className="xl:max-w-180 text-3xl">Diseñamos, protegemos y hacemos evolucionar la infraestructura que mantiene en movimiento a tu organización.</p>
        </div>
        {/* <div ref={lavaLampRef} id="lava-lamp" className="absolute right-0 top-0 bottom-0 h-full w-1/2 -z-10 overflow-hidden">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div> */}
      </section>
      <section className="font-aeonik p-15 bg-nexo-gray">
        <h1 className="text-3xl font-regular text-nexo-white brightness-75 mx-auto w-fit">Nuestra Plataforma Digital</h1>
        <ul className="flex flex-wrap items-center justify-center gap-10 mt-20 list-none">
          {platformFeatures.map((feature, index) => (
            <li key={index}>
              <PlaformCard text={feature.title} logo={feature.logo} color_bottom={feature.color_bottom} color_top={feature.color_top} />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
