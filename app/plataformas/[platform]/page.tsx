import platformFeatures from "@assets/tsx/platforms";
import Component from "./component";

export default function PlatformPage({ params }: { params: Promise<{ platform: string }> }) {
    // Used as a client component to be able o use generateStaticParams
    return <Component params={params} />;
}


export async function generateStaticParams() {
    return platformFeatures.map((platform) => ({
        platform: platform.slug,
    }));
}
