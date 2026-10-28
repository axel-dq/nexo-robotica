'use client'

import platformFeatures from "@assets/tsx/platforms";
import { use, useState, useEffect, useRef, useCallback } from "react";
import { notFound } from "next/navigation";
import ExportedImage from "next-image-export-optimizer";
import useEmblaCarousel from "embla-carousel-react";

import Link from "next/link";

export default function Platform({ params }: { params: Promise<{ platform: string }> }) {
    const { platform } = use(params);
    const data = platformFeatures.find(p => p.slug === platform);

    if (!data) notFound();

    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'center',
        slidesToScroll: 1,
    });

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const scrollTo = useCallback((index: number) => {
        if (emblaApi) emblaApi.scrollTo(index);
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        setScrollSnaps(emblaApi.scrollSnapList());
        onSelect();

        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', () => {
            setScrollSnaps(emblaApi.scrollSnapList());
            onSelect();
        });
    }, [emblaApi, onSelect]);

    const glowRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number | null>(null);
    const targetRef = useRef({ x: 0, y: 0 });
    const currentRef = useRef({ x: 0, y: 0 });

    const dialogsRef = useRef<HTMLDialogElement[]>([]);
    const addToRefs = (el: HTMLDialogElement | null) => {
        if (el && !dialogsRef.current.includes(el)) {
            dialogsRef.current.push(el);
        }
    };

    function toggleGlowVisibility(visible: boolean) {
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
            const glowEl = glowRef.current;
            if (!glowEl) return;

            const target = targetRef.current;
            const current = currentRef.current;
            const delay = 0.01;

            current.x += (target.x - current.x) * delay;
            current.y += (target.y - current.y) * delay;

            glowEl.style.transform = `translate(${current.x}px, ${current.y}px)`;

            rafRef.current = requestAnimationFrame(animate);
        };

        rafRef.current = requestAnimationFrame(animate);
    }

    function onMouseLeave() {
        if (rafRef.current) {
            cancelAnimationFrame(rafRef.current);
            rafRef.current = null;
        }

        toggleGlowVisibility(false);
    }

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        if (scrollPosition > 0) {
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollPosition}px`;
            document.body.style.width = '100%';
        }
    }, [scrollPosition]);

    function toggleDialog(index: number) {
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
        <div className="min-h-svh bg-nexo-black px-6 py-10 md:p-12 lg:p-20 relative isolate overflow-hidden flex flex-col items-start" onMouseEnter={() => toggleGlowVisibility(true)} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
            <div className="relative inset-0 -z-10">
                <div
                    ref={glowRef}
                    className="absolute left-0 top-0 pointer-events-none will-change-transform size-120 transition-opacity duration-300 hidden lg:block"
                    style={{
                        background: `radial-gradient(circle, var(--${data.color_light}) 0%, var(--${data.color_dark}) 100%)`,
                        filter: "blur(200px)",
                    }}
                />
            </div>

            <Link href="/#plataformas" className="block w-fit p-3 rounded-full text-nexo-white ml-auto font-bold mb-8 md:mb-10 lg:mb-0 glass-btn text-xs md:text-sm">
                Volvé a plataformas
            </Link>

            <ExportedImage basePath="/nexo-robotica" placeholder="blur" src={data.logo} alt={data.title!.toString()} className="h-16 md:h-20 w-auto mx-auto" loading="eager" />

            <div className="grow flex flex-col items-center justify-center w-full">
                {/* Embla Carousel Container */}
                <div className="relative mt-8 md:mt-10 w-full max-w-full">
                    <div className="overflow-hidden w-full -mx-4 p-4" ref={emblaRef}>
                        <div className="flex gap-4 lg:gap-6 first:-ml-4">
                            {data.platform_description.map((desc, index) => (
                                <div
                                    key={index}
                                    className={`flex-[0_0_100%] sm:flex-[0_0_calc((100%-1rem)/2)] lg:flex-[0_0_calc((100%-2rem)/3)] min-w-0 first:pl-4 transition-all duration-300`}
                                >
                                    <div className="bg-white p-6 pt-20 md:p-8 md:pt-30 rounded-4xl shadow-md relative text-balance h-full min-h-88 md:min-h-90 flex flex-col">
                                        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-5 w-fit">{desc.title}</h3>
                                        <p className="text-gray-700 whitespace-pre-wrap text-sm md:text-base mb-12">{desc.body}</p>
                                        <button
                                            className="rounded-full size-10 md:size-12 font-bold text-nexo-white text-3xl md:text-4xl absolute bottom-6 right-6 md:bottom-8 md:right-8 cursor-pointer hover:scale-125 transition-transform flex justify-center items-center"
                                            style={{ backgroundColor: `var(--${data.color_light})` }}
                                            onClick={() => toggleDialog(index)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Controls: Dots + Arrows */}
                    <div className="flex items-center justify-between mt-6 md:mt-8">
                        {/* Pagination Dots */}
                        <div className="flex items-center gap-2">
                            {scrollSnaps.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollTo(index)}
                                    className={`h-2 md:h-3 rounded-full transition-all duration-300 cursor-pointer ${index === selectedIndex
                                        ? "w-6 md:w-8 bg-white"
                                        : "w-2 md:w-3 bg-white/30 hover:bg-white/50"
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Arrows */}
                        {data.platform_description.length > 3 && (
                            <div className="flex gap-2 md:gap-3">
                                <button
                                    onClick={scrollPrev}
                                    className="bg-white/10 hover:bg-white/20 text-white rounded-full size-8 md:size-10 flex items-center justify-center font-bold transition-colors cursor-pointer disabled:invisible"
                                    aria-label="Previous slide"
                                    disabled={selectedIndex === 0}
                                >
                                    ←
                                </button>
                                <button
                                    onClick={scrollNext}
                                    className="bg-white/10 hover:bg-white/20 text-white rounded-full size-8 md:size-10 flex items-center justify-center font-bold transition-colors cursor-pointer disabled:invisible"
                                    aria-label="Next slide"
                                    disabled={selectedIndex === scrollSnaps.length - 1}
                                >
                                    →
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Modals */}
                {data.platform_description.map((desc, index) => (
                    <dialog key={index} id={`platform-dialog-${index}`}
                        className="bg-white rounded-4xl px-6 sm:px-10 pt-16 md:pt-20 pb-10 min-h-[60svh] md:min-h-90 shadow-md w-[90%] md:w-[70%] lg:w-1/3 max-w-200 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop:blur-3xl backdrop:bg-nexo-black/30 starting:scale-0 transition-transform duration-400 scale-100 ease-[cubic-bezier(0.25,1,0.5,1)]"
                        ref={addToRefs}>
                        <button className="absolute top-4 right-4 md:top-5 md:right-5 rounded-full size-10 text-3xl text-nexo-white font-bold cursor-pointer border-none flex items-center justify-center" onClick={() => toggleDialog(index)} style={{ backgroundColor: `var(--${data.color_light})` }}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                        </button>
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-10 max-w-[80%] md:max-w-2/3">{desc.title}</h1>
                        <div>
                            <p className="font-bold mb-3 text-sm md:text-base">Incluye</p>
                            <ul className="text-sm md:text-base">
                                {desc.bullets.map((bullet, bulletIndex) => (
                                    <li key={bulletIndex} className="list-disc ml-4 mb-2">{bullet}</li>
                                ))}
                            </ul>
                        </div>
                    </dialog>
                ))}
            </div>
        </div>
    );
}
