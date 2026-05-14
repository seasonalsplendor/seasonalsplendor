import './globals.css'
import { localBusinessSchema, siteUrl } from '../lib/seo'
import JsonLd from '../components/JsonLd'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Seasonal Splendors | Holiday & Seasonal Decorating, Upper West Side NYC',
    template: '%s | Seasonal Splendors',
  },
  description: 'Bespoke exterior decorating for Upper West Side brownstones. Christmas, Halloween, Easter, and year-round installations — designed, installed, and removed for you.',
  openGraph: {
    siteName: 'Seasonal Splendors',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
        <JsonLd data={localBusinessSchema} />
      </head>
      <body>{children}</body>
    </html>
  )
}
