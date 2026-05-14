import { siteUrl } from '../lib/seo'

export default function sitemap() {
  return [
    { url: siteUrl, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${siteUrl}/services/christmas-decorating`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/services/halloween-decorating`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/services/easter-spring-decorating`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/packages`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/service-areas/upper-west-side`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/contact`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/privacy-policy`, changeFrequency: 'yearly', priority: 0.2 },
  ]
}
