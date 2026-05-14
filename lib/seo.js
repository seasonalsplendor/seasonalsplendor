export const siteUrl = 'https://www.seasonalsplendors.com'

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Seasonal Splendors',
  description: 'Bespoke exterior seasonal decorating for Upper West Side brownstones in New York City. Christmas, Halloween, Easter, and year-round installations — designed, installed, and removed for you.',
  url: siteUrl,
  email: 'info@seasonalsplendors.com',
  areaServed: {
    '@type': 'Place',
    name: 'Upper West Side, Manhattan, New York City, NY',
  },
  serviceType: 'Seasonal Exterior Decorating',
  priceRange: '$$',
}

export function serviceSchema({ name, description, url, offers = [] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${siteUrl}${url}`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Seasonal Splendors',
      url: siteUrl,
    },
    areaServed: { '@type': 'Place', name: 'Upper West Side, Manhattan, New York City' },
    ...(offers.length > 0 && {
      offers: offers.map(o => ({
        '@type': 'Offer',
        name: o.name,
        description: o.description,
        priceCurrency: 'USD',
        ...(o.price && { price: o.price }),
      })),
    }),
  }
}
