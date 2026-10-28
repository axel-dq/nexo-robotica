'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';

export default function TypewriterList() {
    // Process items once using useMemo to avoid infinite re-renders
    // const processedItems = useMemo(() => {
    //     return items.map((item) => item);
    // }, [items]);

    // Track the current character index for EVERY item simultaneously
    // const [charIndices, setCharIndices] = useState<number[]>(() => items.map(() => 0));

    // useEffect(() => {
    //     // Check if all items are fully typed out
    //     const allFinished = processedItems.every((item, i) => charIndices[i] >= item.content.length);
    //     if (allFinished) return;

    //     const timer = setTimeout(() => {
    //         setCharIndices(prevIndices =>
    //             prevIndices.map((currCharIdx, i) => {
    //                 const targetLength = processedItems[i].content.length;
    //                 // Increment character index if this item isn't finished yet
    //                 return currCharIdx < targetLength ? currCharIdx + 1 : currCharIdx;
    //             })
    //         );
    //     }, speed);

    //     return () => clearTimeout(timer);
    // }, [charIndices, processedItems, speed]);

    const items = [
        {
            label: "Ingeniería e Infraestructura \nTecnológica",
            content: "Tecnología, redes, fibra óptica, seguridad electrónica, automatización y solciones integrales IT/OT.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" height="29px" viewBox="0 -960 960 960" width="29px" fill="#000000"><path d="M196-276q-57-60-86.5-133T80-560q0-78 29.5-151T196-844l48 48q-48 48-72 110.5T148-560q0 63 24 125.5T244-324l-48 48Zm96-96q-39-39-59.5-88T212-560q0-51 20.5-100t59.5-88l48 48q-30 27-45 64t-15 76q0 36 15 73t45 67l-48 48ZM280-80l135-405q-16-14-25.5-33t-9.5-42q0-42 29-71t71-29q42 0 71 29t29 71q0 23-9.5 42T545-485L680-80h-80l-26-80H387l-27 80h-80Zm133-160h134l-67-200-67 200Zm255-132-48-48q30-27 45-64t15-76q0-36-15-73t-45-67l48-48q39 39 58 88t22 100q0 51-20.5 100T668-372Zm96 96-48-48q48-48 72-110.5T812-560q0-63-24-125.5T716-796l48-48q57 60 86.5 133T880-560q0 78-28 151t-88 133Z" /></svg>,
            link: "/plataformas/infraestructura-telecomunicaciones-tecnologia"
        },
        {
            label: "Software, Inteligencia Artificial \ny Soluciones Digitales",
            content: "Desarrollo de aplicaciones, plataformas empresariales, integración de sistemas, IA y transformación digital.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M440-320v-240H320v-80h320v80H520v240h-80ZM40-40v-240h80v-400H40v-240h240v80h400v-80h240v240h-80v400h80v240H680v-80H280v80H40Zm240-160h400v-80h80v-400h-80v-80H280v80h-80v400h80v80ZM120-760h80v-80h-80v80Zm640 0h80v-80h-80v80Zm0 640h80v-80h-80v80Zm-640 0h80v-80h-80v80Zm80-640Zm560 0Zm0 560Zm-560 0Z" /></svg>,
            link: "/plataformas/desarrollo-soluciones-digitales"
        },
        {
            label: "Consultoría estratégica \ny asesoramiento legal",
            content: "Asesoramiento jurídico especializado, contratos tecnológicos, gestión de proyectos y soluciones integrales para empresas.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#1f1f1f"><path d="M80-120v-80h360v-447q-26-9-45-28t-28-45H240l120 280q0 50-41 85t-99 35q-58 0-99-35t-41-85l120-280h-80v-80h247q12-35 43-57.5t70-22.5q39 0 70 22.5t43 57.5h247v80h-80l120 280q0 50-41 85t-99 35q-58 0-99-35t-41-85l120-280H593q-9 26-28 45t-45 28v447h360v80H80Zm585-320h150l-75-174-75 174Zm-520 0h150l-75-174-75 174Zm335-280q17 0 28.5-11.5T520-760q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760q0 17 11.5 28.5T480-720Z" /></svg>,
            link: "/plataformas/consultoria-asesoramiento-legal"
        }
    ];

    return (
        <ol className="whitespace-pre-wrap flex flex-col justify-around  list-none gap-8">
            {items.map((item, index) => {
                // const displayedText = item.content.substring(0, charIndices[index]);
                return (
                    <li
                        key={index}
                        className="flex gap-5 text-balance relative"
                    >
                        <div className="font-bold whitespace-nowrap w-4 relative right-2">{item.icon}</div>
                        <div className="text-sm">
                            <h2 className="uppercase font-bold text leading-4">{item.label}</h2>
                            <div className="font-corporate text-xs">
                                {item.content}
                            </div>
                        </div>
                        <Link className="lg:hidden absolute right-7 top-0 size-6 text-sm bg-nexo-black rounded-full text-nexo-white justify-center items-center flex" href={item.link}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 -960 960 960" width="12px" fill="#F3F3F3"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg>
                        </Link>
                    </li>
                );
            })}
        </ol>
    );
}
