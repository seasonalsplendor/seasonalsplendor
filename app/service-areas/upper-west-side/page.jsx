import styles from '../../services/service.module.css'
import JsonLd from '../../../components/JsonLd'
import { localBusinessSchema, siteUrl } from '../../../lib/seo'

export const metadata = {
  title: { absolute: 'Seasonal Decorating on the Upper West Side | All UWS Neighborhoods' },
  description: 'Seasonal Splendors serves brownstone owners across the Upper West Side — Lincoln Square, the Park Blocks, Manhattan Valley, Morningside Heights, and Central Park West.',
}

const uwsSchema = {
  ...localBusinessSchema,
  areaServed: [
    { '@type': 'Place', name: 'Lincoln Square, Upper West Side, Manhattan, New York City' },
    { '@type': 'Place', name: 'The Park Blocks, Upper West Side, Manhattan, New York City' },
    { '@type': 'Place', name: 'Riverside Drive, Upper West Side, Manhattan, New York City' },
    { '@type': 'Place', name: 'Central Park West Corridor, Upper West Side, Manhattan, New York City' },
    { '@type': 'Place', name: 'Manhattan Valley, Upper West Side, Manhattan, New York City' },
    { '@type': 'Place', name: 'Morningside Heights, Upper West Side, Manhattan, New York City' },
  ],
  url: `${siteUrl}/service-areas/upper-west-side`,
}

const neighborhoods = [
  {
    name: 'Lincoln Square',
    range: 'West 60s through 66th',
    desc: 'Pre-war buildings, modern condos with brownstone-style entrances, and the blocks around Lincoln Center.',
  },
  {
    name: 'The Park Blocks',
    range: 'West 67th through 86th',
    desc: 'The classic UWS brownstone corridor between Central Park West and Columbus Avenue.',
  },
  {
    name: 'Riverside Drive & West End',
    range: null,
    desc: 'Limestone, brownstone, and the river-facing façades that wear seasonal styling especially well.',
  },
  {
    name: 'Central Park West Corridor',
    range: null,
    desc: 'Pre-war co-ops, mansions, and the most photographed blocks in the neighborhood.',
  },
  {
    name: 'Manhattan Valley',
    range: 'West 100th through 110th',
    desc: 'The growing northern stretch of the UWS with strong brownstone density.',
  },
  {
    name: 'Morningside Heights',
    range: 'West 110th through 120th',
    desc: 'The university blocks and the brownstones around Morningside Park.',
  },
]

export default function UpperWestSideServiceAreaPage() {
  return (
    <div className={styles.page}>
      <JsonLd data={uwsSchema} />

      <nav>
        <a href="/" className={styles.navLogo}>Seasonal Splendors</a>
        <ul className={styles.navLinks}>
          <li><a href="/#intro">About</a></li>
          <li><a href="/services/christmas-decorating">Christmas</a></li>
          <li><a href="/services/halloween-decorating">Halloween</a></li>
          <li><a href="/services/easter-spring-decorating">Easter</a></li>
          <li><a href="/packages">Packages</a></li>
        </ul>
        <a href="/contact" className={styles.navCta}>Book Consultation</a>
      </nav>

      <div className={styles.hero}>
        <span className={styles.heroEyebrow}>Service Areas</span>
        <h1>Serving the Upper West Side,<br /><em>Block by Block</em></h1>
        <p>Seasonal Splendors is built for one neighborhood. We don&apos;t drive in from Long Island to hang your wreath — we walk to it. Our crews know which brownstones have iron railings deep enough for garland, which doorways need custom-sized wreaths, and which co-op boards have rules worth knowing before installation day.</p>
        <a href="/contact" className={styles.btnGold}>Check Your Block</a>
      </div>

      <div className={styles.content}>
        <div className={styles.inner}>

          <div className={styles.section}>
            <h2>Neighborhoods <em>We Serve</em></h2>
            <div className={styles.rule}></div>
            <ul className={styles.list}>
              {neighborhoods.map(n => (
                <li key={n.name}>
                  <span>
                    <span className={styles.listBold}>{n.name}</span>
                    {n.range && <em style={{ fontStyle: 'normal', color: '#6B5F52', fontSize: '0.88em' }}> ({n.range})</em>}
                    {' '}{n.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.section}>
            <h2>Why <em>Hyperlocal Matters</em></h2>
            <div className={styles.rule}></div>
            <ul className={styles.list}>
              <li><span><span className={styles.listBold}>Faster response.</span> Refresh and repair calls are walking distance, not a drive.</span></li>
              <li><span><span className={styles.listBold}>Building knowledge.</span> We know which co-ops have façade rules, landmark requirements, and seasonal restrictions.</span></li>
              <li><span><span className={styles.listBold}>Crew familiarity.</span> Our installers walk the same blocks every season. Your brownstone is one they recognize.</span></li>
              <li><span><span className={styles.listBold}>A growing portfolio.</span> Every block we serve adds to a body of work we can show prospective clients on your street.</span></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>Our <em>Services</em></h2>
            <div className={styles.rule}></div>
            <p>
              We offer <a href="/services/christmas-decorating" style={{ color: '#B8963E' }}>Christmas &amp; holiday decorating</a>,{' '}
              <a href="/services/halloween-decorating" style={{ color: '#B8963E' }}>Halloween &amp; autumn styling</a>, and{' '}
              <a href="/services/easter-spring-decorating" style={{ color: '#B8963E' }}>Easter &amp; spring installations</a>{' '}
              — as well as <a href="/packages" style={{ color: '#B8963E' }}>multi-season and year-round subscription packages</a>.
              All services are exterior-only, designed for brownstone stoops, entryways, and façades.
            </p>
          </div>

        </div>
      </div>

      <div className={styles.cta}>
        <p style={{ fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#D4AC5A', marginBottom: '1rem' }}>Get Started</p>
        <div className={styles.ctaRule}></div>
        <h2>Check If We Serve <em>Your Block</em></h2>
        <p>We serve the Upper West Side exclusively. Reach out and we&apos;ll confirm coverage for your address and discuss your seasonal styling goals.</p>
        <a href="/contact" className={styles.btnGold}>Book a Consultation</a>
        <a href="/packages" className={styles.btnOutline}>View Packages</a>
      </div>

      <footer>
        <div>
          <a href="/" className={styles.footerLogo}>Seasonal Splendors</a>
          <p className={styles.footerTagline}>Elegant exterior seasonal styling for Upper West Side brownstones in New York City.</p>
          <a href="mailto:info@seasonalsplendors.com" className={styles.footerEmail}>info@seasonalsplendors.com</a>
        </div>
        <div className={styles.footerCol}>
          <h5>Services</h5>
          <ul>
            <li><a href="/services/christmas-decorating">Christmas Decorating</a></li>
            <li><a href="/services/halloween-decorating">Halloween Decorating</a></li>
            <li><a href="/services/easter-spring-decorating">Easter &amp; Spring</a></li>
            <li><a href="/packages">Packages &amp; Pricing</a></li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h5>Navigate</h5>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/service-areas/upper-west-side">Service Areas</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h5>Follow Us</h5>
          <a href="https://www.instagram.com/seasonal.splendornyc/" target="_blank" rel="noopener" className={styles.footerInstagramLink}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
            </svg>
            @seasonal.splendornyc
          </a>
        </div>
      </footer>
      <div className={styles.footerBottom}>
        <span>© 2026 Seasonal Splendors. All rights reserved.</span>
        <a href="/privacy-policy">Privacy Policy</a>
      </div>
    </div>
  )
}
