'use client'

import platformFeatures from "@assets/tsx/platforms";
import { use, useState, useEffect, useRef } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";

export default function Platform({ params }: { params: Promise<{ platform: string }> }) {
    const { platform } = use(params);
    const data = platformFeatures.find(p => p.slug === platform);

    if (!data) notFound();

    const glowRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number | null>(null);
    const targetRef = useRef({ x: 0, y: 0 });
    const currentRef = useRef({ x: 0, y: 0 });

    const dialogsRef = useRef<HTMLDialogElement[]>([]);
    const addToRefs = (el: HTMLDialogElement) => {
        if (el && !dialogsRef.current.includes(el)) {
            dialogsRef.current.push(el);
        }
    };

    function toogleGlowVisibility(visible: boolean) {
        const glow = glowRef.current;
        if (!glow) return;

        glow.style.opacity = visible ? "1" : "0";
    }

    function onMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const glow = glowRef.current;
        if (!glow) return;

        const parent = glow.parentElement;
        if (!parent) return;

        const rect = parent.getBoundingClientRect();
        targetRef.current = {
            x: e.clientX - rect.left - glow.clientWidth / 2,
            y: e.clientY - rect.top - glow.clientHeight / 2,
        };

        if (rafRef.current) return;

        const animate = () => {
            const glow = glowRef.current;
            if (!glow) return;

            const target = targetRef.current;
            const current = currentRef.current;

            const delay = 0.01;

            current.x += (target.x - current.x) * delay;
            current.y += (target.y - current.y) * delay;

            glow.style.transform = `translate(${current.x}px, ${current.y}px)`;

            rafRef.current = requestAnimationFrame(animate);
        };

        rafRef.current = requestAnimationFrame(animate);
    }

    function onMouseLeave() {
        if (rafRef.current) {
            cancelAnimationFrame(rafRef.current);
            rafRef.current = null;
        }

        toogleGlowVisibility(false);
    }

    let [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        if (scrollPosition > 0) {
            // Lock the scroll position and prevent scrolling
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollPosition}px`;
            document.body.style.width = '100%';
        }

    }, [scrollPosition]);

    function toogleDialog(index: number) {
        const dialog = dialogsRef.current[index];
        if (dialog) {
            if (dialog.open) {
                dialog.close();

                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.width = '';
                window.scrollTo(0, scrollPosition);

                setScrollPosition(0);
            } else {
                setScrollPosition(window.scrollY);
                dialog.showModal();
            }
        }
    }

    return (
        <div className="min-h-svh bg-nexo-black p-10 md:p-20 relative isolate overflow-hidden" onMouseEnter={() => toogleGlowVisibility(true)} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
            <div className="relative inset-0 -z-10">
                <div
                    ref={glowRef}
                    className="absolute left-0 top-0 pointer-events-none will-change-transform size-120 transition-opacity duration-300"
                    style={{
                        background: `radial-gradient(circle, var(--${data.color_light}) 0%, var(--${data.color_dark}) 100%)`,
                        filter: "blur(200px)",
                    }}
                />
            </div>
            <Image src={data.logo} alt={data.title!.toString()} className="h-20 w-auto mx-auto" loading="eager" />
            <ul className="mt-10 list-none flex flex-wrap gap-5 items-center justify-center">
                {data.platform_description.map((desc, index) => (
                    <li key={index} className="bg-white p-10 pt-30 min-h-120 rounded-4xl shadow-md w-full md:w-1/3 max-w-120 relative">
                        <h3 className="text-2xl md:text-3xl font-bold mb-5 w-fit mx-auto">{desc.title}</h3>
                        <p className="text-gray-700">{desc.body}</p>
                        <button className="rounded-full size-10 block font-bold text-nexo-white text-4xl absolute bottom-10 right-10 cursor-pointer hover:scale-125 transition-transform"
                            style={{ backgroundColor: `var(--${data.color_light})` }} onClick={() => toogleDialog(index)}>
                            +
                        </button>
                    </li>
                ))}
            </ul>
            {
                data.platform_description.map((desc, index) => (
                    <dialog key={index} id={`platform-dialog-${index}`}
                        className="bg-white rounded-4xl p-10 pt-30 min-h-120 shadow-md w-9/10 md:w-1/3 max-w-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop:blur-3xl backdrop:bg-nexo-black/30"
                        ref={addToRefs}>
                        <button className="absolute top-5 right-5 rounded-full size-10 text-nexo-white font-bold cursor-pointer" onClick={() => toogleDialog(index)} style={{ backgroundColor: `var(--${data.color_light})` }}>X</button>
                        <h1 className="text-2xl md:text-3xl font-bold mb-5 max-w-2/3">{desc.title}</h1>
                        <div className="w-1/2 ml-auto">
                            <p className="font-bold mb-10">Incluye</p>
                            <ul>
                                {desc.bullets.map((bullet, bulletIndex) => (
                                    <li key={bulletIndex} className="list-disc">{bullet}</li>
                                ))}
                            </ul>
                        </div>
                    </dialog>
                ))
            }
        </div >
    )
}
