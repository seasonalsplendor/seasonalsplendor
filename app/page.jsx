import HomeClient from './HomeClient'
import JsonLd from '../components/JsonLd'
import { localBusinessSchema, serviceSchema } from '../lib/seo'

export const metadata = {
  title: 'Seasonal Splendors | Holiday & Seasonal Decorating, Upper West Side NYC',
  description: 'Bespoke exterior decorating for Upper West Side brownstones. Christmas, Halloween, Easter, and year-round installations — designed, installed, and removed for you.',
}

const homeServiceSchema = serviceSchema({
  name: 'Seasonal Exterior Decorating — Upper West Side',
  description: 'Full-service exterior seasonal decorating for Upper West Side brownstones. Design, installation, refresh, and removal included.',
  url: '/',
})

export default function Home() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={homeServiceSchema} />
      <HomeClient />
    </>
  )
}
