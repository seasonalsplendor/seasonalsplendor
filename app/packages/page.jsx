import styles from '../services/service.module.css'
import JsonLd from '../../components/JsonLd'
import { serviceSchema } from '../../lib/seo'

export const metadata = {
  title: { absolute: 'Packages & Pricing | Seasonal Splendors NYC' },
  description: 'Transparent packages and pricing for seasonal decorating on the Upper West Side. From single-season installs to year-round subscriptions.',
}

const schema = serviceSchema({
  name: 'Seasonal Decorating Packages — Upper West Side NYC',
  description: 'Seasonal exterior decorating packages for Upper West Side brownstones. Single-season installations, multi-season plans, and year-round subscriptions — design, materials, installation, refresh, and removal included.',
  url: '/packages',
  offers: [
    {
      name: 'The Stoop — Entry-Level Installation',
      description: 'One custom door wreath, one swag or side hang, basic stoop styling, installation and removal included.',
      price: '495',
    },
    {
      name: 'The Brownstone — Full Façade Installation',
      description: 'Custom door and window wreaths, full railing and doorway garland, custom ribbon and bows, exterior lighting, stoop urns and styling, mid-season refresh, and removal.',
    },
    {
      name: 'The Block — Three Seasons, One Plan',
      description: 'Three full installations: Halloween, Christmas, Easter. Priority scheduling, mid-season refreshes, and consistent design language across all three seasons.',
    },
    {
      name: 'The Splendor Subscription — Year-Round Elegance',
      description: 'All five seasonal installations, unlimited mid-season refreshes, priority scheduling, annual design review, off-site storage, and a dedicated client manager.',
    },
  ],
})

export default function PackagesPage() {
  return (
    <div className={styles.page}>
      <JsonLd data={schema} />

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
        <span className={styles.heroEyebrow}>Packages & Pricing</span>
        <h1>Packages &amp; <em>Pricing</em></h1>
        <p>We work three ways: a single seasonal installation, a multi-season package, or a year-round subscription. All three include design, materials, installation, mid-season refresh, and removal — no hidden costs, no surprise invoices.</p>
        <a href="/contact" className={styles.btnGold}>Request a Quote</a>
      </div>

      <div className={styles.content}>
        <div className={styles.inner}>

          <div className={styles.section}>
            <h2>Single-Season <em>Packages</em></h2>
            <div className={styles.rule}></div>

            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.35rem', fontWeight: 400, color: '#1C1916', marginBottom: '0.6rem' }}>
              The Stoop — <em style={{ fontStyle: 'italic', color: '#B8963E' }}>Entry-Level Installation</em>
            </h3>
            <p>A focused, refined seasonal piece for homeowners who want the front door to make an impression without dressing the full façade.</p>
            <ul className={styles.list}>
              <li>One custom door wreath</li>
              <li>One swag or side hang</li>
              <li>Basic stoop styling (urns, lanterns, or seasonal accent)</li>
              <li>Installation and removal included</li>
            </ul>
            <p><strong style={{ color: '#1C1916' }}>From $495 · Single season</strong></p>
          </div>

          <div className={styles.section}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.35rem', fontWeight: 400, color: '#1C1916', marginBottom: '0.6rem' }}>
              The Brownstone — <em style={{ fontStyle: 'italic', color: '#B8963E' }}>Full Façade Installation</em>
            </h3>
            <p>The signature Seasonal Splendors installation. Designed to dress the entire front of the home from stoop to balcony.</p>
            <ul className={styles.list}>
              <li>Custom door wreath plus window wreaths</li>
              <li>Full railing and doorway garland</li>
              <li>Custom ribbon and bows</li>
              <li>Exterior lighting (Christmas) or seasonal lighting (Halloween, Easter)</li>
              <li>Stoop urns and styling</li>
              <li>Installation, mid-season refresh, and removal included</li>
            </ul>
            <p><strong style={{ color: '#1C1916' }}>From [contact us for pricing] · Single season</strong></p>
          </div>

          <div className={styles.section}>
            <h2>Multi-Season <em>Package</em></h2>
            <div className={styles.rule}></div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.35rem', fontWeight: 400, color: '#1C1916', marginBottom: '0.6rem' }}>
              The Block — <em style={{ fontStyle: 'italic', color: '#B8963E' }}>Three Seasons, One Plan</em>
            </h3>
            <p>The package designed for homeowners who want the brownstone to look intentional year-round but prefer to skip the off-seasons.</p>
            <ul className={styles.list}>
              <li>Three full installations: Halloween, Christmas, Easter</li>
              <li>Priority scheduling on all three dates</li>
              <li>Mid-season refreshes included on each</li>
              <li>Consistent design language across all three seasons</li>
            </ul>
            <p><strong style={{ color: '#1C1916' }}>From [contact us for pricing] · Annual</strong></p>
          </div>

          <div className={styles.section}>
            <h2>Year-Round <em>Subscription</em></h2>
            <div className={styles.rule}></div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.35rem', fontWeight: 400, color: '#1C1916', marginBottom: '0.6rem' }}>
              The Splendor Subscription — <em style={{ fontStyle: 'italic', color: '#B8963E' }}>Year-Round Elegance</em>
            </h3>
            <p>Our most popular package among returning clients. One decision, every season handled.</p>
            <ul className={styles.list}>
              <li>All five seasonal installations: Easter, Mother&apos;s Day &amp; Spring refresh, Fourth of July styling, Halloween/Autumn, Thanksgiving transition, Christmas</li>
              <li>Unlimited mid-season refreshes</li>
              <li>Priority scheduling and last-minute requests</li>
              <li>Annual design review every January</li>
              <li>Off-site storage of all reusable elements</li>
              <li>Dedicated client manager</li>
            </ul>
            <p><strong style={{ color: '#1C1916' }}>From [contact us for pricing] · Annual investment</strong></p>
          </div>

          <div className={styles.section}>
            <h2>What&apos;s Always <em>Included</em></h2>
            <div className={styles.rule}></div>
            <ul className={styles.list}>
              <li>Custom design consultation</li>
              <li>Premium materials, sourced and curated</li>
              <li>Fully insured installation crew</li>
              <li>Mid-season refresh</li>
              <li>White-glove removal</li>
              <li>Off-site storage of reusable elements</li>
              <li>Photographic record of every installation</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>What&apos;s Not <em>Included</em></h2>
            <div className={styles.rule}></div>
            <p>We&apos;re transparent: certain items are billed separately and disclosed upfront in your proposal.</p>
            <ul className={styles.list}>
              <li>Custom one-of-one floral arrangements outside the standard package</li>
              <li>Specialty lighting (e.g. permanent eave-mounted systems)</li>
              <li>Out-of-area service (we serve UWS exclusively)</li>
            </ul>
          </div>

          <p style={{ fontSize: '0.88rem', color: '#6B5F52' }}>
            Learn more about our individual services:{' '}
            <a href="/services/christmas-decorating" style={{ color: '#B8963E' }}>Christmas decorating</a>,{' '}
            <a href="/services/halloween-decorating" style={{ color: '#B8963E' }}>Halloween decorating</a>,{' '}
            <a href="/services/easter-spring-decorating" style={{ color: '#B8963E' }}>Easter &amp; spring decorating</a>.
            We serve the <a href="/service-areas/upper-west-side" style={{ color: '#B8963E' }}>Upper West Side exclusively</a>.
          </p>

        </div>
      </div>

      <div className={styles.cta}>
        <p style={{ fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#D4AC5A', marginBottom: '1rem' }}>Get Started</p>
        <div className={styles.ctaRule}></div>
        <h2>Request a <em>Quote</em></h2>
        <p>Every installation is priced based on your brownstone&apos;s specific dimensions and scope. Reach out for a fixed-price quote within 48 hours.</p>
        <a href="/contact" className={styles.btnGold}>Request a Quote</a>
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
