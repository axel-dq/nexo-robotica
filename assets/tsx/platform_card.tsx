import ExportedImage from "next-image-export-optimizer";
import { ReactNode } from "react";
import "../styles/platform_card.css";

export default function PlatformCard({ text, logo, color_bottom, color_top, link }: { text: ReactNode, logo: string, color_bottom: string, color_top: string, link: string }) {
    return (
        <div className={`relative platform-card flex flex-col items-start justify-start gap-8 px-10 py-20 rounded-3xl max-w-90 h-90`}
            style={{ '--bottom': `var(--${color_bottom})`, '--top': `var(--${color_top})`, border: `1px solid var(--${color_bottom})` } as React.CSSProperties}>
            <ExportedImage basePath="/nexo-robotica" placeholder="blur" src={logo} alt={text!.toString()} className="h-20 w-auto" />
            <h2 className="text-2xl font-regular text-nexo-white text-start">{text}</h2>
            <div className="lg:hidden absolute right-7 bottom-7 size-6 text-sm bg-nexo-white rounded-full text-nexo-black justify-center items-center flex">
                <svg xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 -960 960 960" width="12px" fill="#000000"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg>
            </div>
        </div>
    )
}
