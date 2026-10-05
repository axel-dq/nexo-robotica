import Image from "next/image";
import { ReactNode } from "react";
import "../styles/platform_card.css";

export default function PlatformCard({ text, logo, color_bottom, color_top }: { text: ReactNode, logo: string, color_bottom: string, color_top: string }) {
    return (
        <div className={`platform-card flex flex-col items-start justify-start gap-8 px-10 py-20 rounded-3xl max-w-90 min-h-90`}
            style={{ '--bottom': `var(--${color_bottom})`, '--top': `var(--${color_top})`, border: `1px solid var(--${color_bottom})` } as React.CSSProperties}>
            <Image src={logo} alt={text!.toString()} className="h-20 w-auto" />
            <h2 className="text-2xl font-regular text-nexo-white text-start">{text}</h2>
        </div>
    )
}
