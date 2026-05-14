import styles from '../service.module.css'
import JsonLd from '../../../components/JsonLd'
import { serviceSchema } from '../../../lib/seo'

export const metadata = {
  title: { absolute: 'Christmas Decorating Service NYC | Brownstone Holiday Decor, Upper West Side' },
  description: 'Professional Christmas decorating for Upper West Side brownstones. Garlands, wreaths, lighting, and bows — designed, installed, and removed by Seasonal Splendors.',
}

const schema = serviceSchema({
  name: 'Christmas Decorating Service — Upper West Side NYC',
  description: 'Professional Christmas and holiday exterior decorating for Upper West Side brownstones. Garlands, wreaths, exterior lighting, ribbon, window boxes, and stoop styling — installed and removed by Seasonal Splendors.',
  url: '/services/christmas-decorating',
  offers: [
    { name: 'The Stoop — Entry-Level Christmas Installation', description: 'Custom door wreath, swag or side hang, basic stoop styling, installation and removal included.' },
    { name: 'The Brownstone — Full Façade Christmas Installation', description: 'Custom wreaths, full garland, ribbon, exterior lighting, stoop urns, mid-season refresh, and removal.' },
  ],
})

export default function ChristmasDecoratingPage() {
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
        <span className={styles.heroEyebrow}>Christmas & Holiday</span>
        <h1>Christmas Decorating for<br /><em>Upper West Side Brownstones</em></h1>
        <p>The Upper West Side is at its most beautiful in December. A row of brownstones dressed in evergreen, ribbon, and warm light is the New York winter most people only see in films. Seasonal Splendors makes that feeling effortless for the homeowners who live inside it.</p>
        <a href="/contact" className={styles.btnGold}>Reserve Your Christmas Date</a>
      </div>

      <div className={styles.content}>
        <div className={styles.inner}>

          <div className={styles.section}>
            <h2>What&apos;s <em>Included</em></h2>
            <div className={styles.rule}></div>
            <ul className={styles.list}>
              <li><span><span className={styles.listBold}>Garland.</span> Fresh or premium artificial garland for railings, doorways, and balconies — lit with warm white or vintage-glow bulbs.</span></li>
              <li><span><span className={styles.listBold}>Wreaths.</span> Custom-designed wreaths for the front door, every window, and the balcony. Handmade, sized for your home, and refreshed mid-season.</span></li>
              <li><span><span className={styles.listBold}>Exterior Lighting.</span> Restrained, classic lighting that respects the architecture. No icicle lights, no oversaturated color — just warm light on stone.</span></li>
              <li><span><span className={styles.listBold}>Velvet Ribbon &amp; Bows.</span> Hand-tied in custom colors to match your home and palette.</span></li>
              <li><span><span className={styles.listBold}>Window Boxes.</span> Winter greens, magnolia, berries, and seasonal accents.</span></li>
              <li><span><span className={styles.listBold}>Stoop Styling.</span> Urns, miniature evergreens, lanterns, and the small details that finish the picture.</span></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>How It <em>Works</em></h2>
            <div className={styles.rule}></div>
            <ul className={styles.list}>
              <li><span><span className={styles.listBold}>1. Consultation.</span> We visit your brownstone, photograph the exterior, and design a custom installation.</span></li>
              <li><span><span className={styles.listBold}>2. Proposal.</span> Fixed-price quote within 48 hours.</span></li>
              <li><span><span className={styles.listBold}>3. Installation.</span> Typically the week after Thanksgiving, completed in 3–4 hours by a 2–3 person crew.</span></li>
              <li><span><span className={styles.listBold}>4. Refresh.</span> One mid-season refresh included (mid-December).</span></li>
              <li><span><span className={styles.listBold}>5. Removal.</span> Clean takedown the second week of January. Reusable elements stored off-site for next year.</span></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>Booking <em>Calendar</em></h2>
            <div className={styles.rule}></div>
            <p>Christmas installations book solid by early October. Reserve your installation date by August for first choice. Returning clients have priority through July.</p>
          </div>

          <div className={styles.section}>
            <h2>Why Brownstone Owners Trust <em>Seasonal Splendors</em></h2>
            <div className={styles.rule}></div>
            <ul className={styles.list}>
              <li>We respect the architecture — no plastic, no inflatables, no oversaturated color.</li>
              <li>Fully insured installation crews.</li>
              <li>Materials sourced for both beauty and durability through a Manhattan winter.</li>
              <li>Mid-season refresh included as standard.</li>
              <li>Take-down, transport, and off-site storage handled entirely by us.</li>
            </ul>
          </div>

          <p style={{ fontSize: '0.88rem', color: '#6B5F52' }}>
            Also interested in year-round styling? See our{' '}
            <a href="/services/halloween-decorating" style={{ color: '#B8963E' }}>Halloween decorating</a>,{' '}
            <a href="/services/easter-spring-decorating" style={{ color: '#B8963E' }}>Easter &amp; spring decorating</a>, and{' '}
            <a href="/packages" style={{ color: '#B8963E' }}>full packages</a>.
          </p>

        </div>
      </div>

      <div className={styles.cta}>
        <p style={{ fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#D4AC5A', marginBottom: '1rem' }}>Get Started</p>
        <div className={styles.ctaRule}></div>
        <h2>Reserve Your <em>Christmas Date</em></h2>
        <p>Installation slots fill quickly. Reach out early to secure your preferred installation window for this holiday season.</p>
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
