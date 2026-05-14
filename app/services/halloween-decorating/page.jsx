import styles from '../service.module.css'
import JsonLd from '../../../components/JsonLd'
import { serviceSchema } from '../../../lib/seo'

export const metadata = {
  title: { absolute: 'Halloween Decorating Service NYC | Elegant Halloween Decor for Brownstones' },
  description: 'Sophisticated Halloween decorating for Upper West Side brownstones. Carved pumpkins, hay, lanterns, and styling — installed and removed by Seasonal Splendors.',
}

const schema = serviceSchema({
  name: 'Halloween Decorating Service — Upper West Side NYC',
  description: 'Professional Halloween and autumn exterior decorating for Upper West Side brownstones. Hand-carved pumpkins, hay bales, lanterns, mums, and seasonal florals — installed and removed by Seasonal Splendors.',
  url: '/services/halloween-decorating',
  offers: [
    { name: 'Halloween Entry Installation', description: 'Hand-carved pumpkins, hay bales, warm-bulb lighting, seasonal florals, wreath, and door styling. Installation and removal included.' },
  ],
})

export default function HalloweenDecoratingPage() {
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
        <span className={styles.heroEyebrow}>Halloween & Autumn</span>
        <h1>Halloween Decorating for<br /><em>Upper West Side Brownstones</em></h1>
        <p>There are two ways to do Halloween on a brownstone stoop. The first involves a blow-up ghost and a polyester spiderweb. The second involves carved pumpkins, lantern light, hay bales, and a stoop that becomes the most photographed corner on the block. Seasonal Splendors does the second.</p>
        <a href="/contact" className={styles.btnGold}>Reserve Your Halloween Date</a>
      </div>

      <div className={styles.content}>
        <div className={styles.inner}>

          <div className={styles.section}>
            <h2>What&apos;s <em>Included</em></h2>
            <div className={styles.rule}></div>
            <ul className={styles.list}>
              <li><span><span className={styles.listBold}>Hand-Carved Pumpkins.</span> Real pumpkins for that one perfect photograph; durable ceramic options for the homes that want a longer season.</span></li>
              <li><span><span className={styles.listBold}>Hay Bales &amp; Corn Stalks.</span> Sized and arranged for your stoop, not generic.</span></li>
              <li><span><span className={styles.listBold}>Scarecrow &amp; Figure Styling.</span> Charming, never garish.</span></li>
              <li><span><span className={styles.listBold}>Warm-Bulb Lighting.</span> String lights, lanterns, and the soft glow that makes a stoop look like a film set.</span></li>
              <li><span><span className={styles.listBold}>Mums, Gourds &amp; Seasonal Florals.</span> The supporting cast that makes everything feel intentional.</span></li>
              <li><span><span className={styles.listBold}>Wreaths &amp; Door Styling.</span> Custom wreaths designed for the season.</span></li>
              <li><span><span className={styles.listBold}>Thanksgiving Transition (Optional).</span> For subscription clients, we transition the autumn installation into a Thanksgiving setup without a full redesign.</span></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>Booking <em>Calendar</em></h2>
            <div className={styles.rule}></div>
            <p>Halloween installations are scheduled for the last week of September through mid-October. Take-down occurs the first week of November — or transitions directly to Thanksgiving styling for clients on the multi-season package.</p>
          </div>

          <div className={styles.section}>
            <h2>Why This Works for <em>Brownstones</em></h2>
            <div className={styles.rule}></div>
            <ul className={styles.list}>
              <li>The architecture deserves atmosphere, not gimmicks.</li>
              <li>Children still get the thrill. Adults get the photograph.</li>
              <li>All materials are weather-rated for Manhattan autumn.</li>
              <li>Mid-season pumpkin replacement available on request.</li>
            </ul>
          </div>

          <p style={{ fontSize: '0.88rem', color: '#6B5F52' }}>
            Planning ahead?{' '}
            <a href="/services/christmas-decorating" style={{ color: '#B8963E' }}>See our Christmas decorating service</a>{' '}
            or explore our <a href="/packages" style={{ color: '#B8963E' }}>multi-season packages</a>.
          </p>

        </div>
      </div>

      <div className={styles.cta}>
        <p style={{ fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#D4AC5A', marginBottom: '1rem' }}>Get Started</p>
        <div className={styles.ctaRule}></div>
        <h2>Reserve Your <em>Halloween Date</em></h2>
        <p>Halloween installations book early. Reach out now to secure your preferred installation window.</p>
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
