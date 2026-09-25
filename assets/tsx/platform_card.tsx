import Image from "next/image";
import { ReactNode } from "react";

export default function PlatformCard({ text, logo, color_bottom, color_top }: { text: ReactNode, logo: string, color_bottom: string, color_top: string }) {
    return (
        <div className={`flex flex-col items-start justify-start gap-8 px-10 py-20 rounded-lg max-w-90 min-h-120`}
            style={{ backgroundImage: `linear-gradient(to top, var(--${color_bottom}), var(--${color_top}))`, border: `2px solid var(--${color_bottom})` }}>
            <Image src={logo} alt={text!.toString()} className="h-20 w-auto" />
            <h2 className="text-2xl font-medium text-nexo-white text-start">{text}</h2>
        </div>
    )
}
