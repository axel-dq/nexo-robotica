import type { MetadataRoute } from 'next'
import platformFeatures from "@assets/tsx/platforms"

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_URL || '';

    const platformSitemaps: MetadataRoute.Sitemap = platformFeatures.map((platform) => {
        return {
            url: `${baseUrl}/plataformas/${platform.slug}`,
            lastModified: new Date(),
            changeFrequency: 'never',
            priority: 0.5,
        }
    })

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'never',
            priority: 1,
        },
        {
            url: `${baseUrl}/nosotros`,
            lastModified: new Date(),
            changeFrequency: 'never',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/proposito-vision-mision`,
            lastModified: new Date(),
            changeFrequency: 'never',
            priority: 0.5,
        },
        ...platformSitemaps
    ]
}
