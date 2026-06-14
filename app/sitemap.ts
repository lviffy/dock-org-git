import type { MetadataRoute } from 'next';

const BASE_URL = 'https://dockfoundation.org';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/programs', '/news', '/contact'];
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/news' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
