import { getSiteUrl } from '@/lib/site-url'
import { properties } from '@/data/properties'
import type { MetadataRoute } from 'next'

export default function sitemap (): MetadataRoute.Sitemap {
  const base = getSiteUrl()
  const now = new Date()

  const staticRoutes = [
    '',
    '/propiedades',
    '/venta',
    '/alquiler',
    '/tasaciones',
    '/nosotros',
    '/contacto'
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8
  }))

  const propertyRoutes = properties.map((property) => ({
    url: `${base}/propiedades/${property.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7
  }))

  return [...staticRoutes, ...propertyRoutes]
}
