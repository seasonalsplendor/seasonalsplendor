import styles from '../service.module.css'
import JsonLd from '../../../components/JsonLd'
import { serviceSchema } from '../../../lib/seo'

export const metadata = {
  title: { absolute: 'Easter & Spring Decorating Service NYC | Wreaths & Door Styling' },
  description: 'Custom Easter and spring decorating for Upper West Side brownstones. Handmade wreaths, door swags, and floral styling, installed and removed for you.',
}

const schema = serviceSchema({
  name: 'Easter & Spring Decorating Service — Upper West Side NYC',
  description: 'Custom Easter and spring exterior decorating for Upper West Side brownstones. Handmade wreaths, door swags, spring window boxes, and stoop urns — installed and removed by Seasonal Splendors.',
  url: '/services/easter-spring-decorating',
  offers: [
    { name: 'Easter & Spring Installation', description: 'Handmade Easter wreaths, door swags, spring window boxes with tulips and hyacinths, stoop urns, installation and removal.' },
  ],
})

export default function EasterSpringDecoratingPage() {
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
        <span className={styles.heroEyebrow}>Easter & Spring</span>
        <h1>Easter &amp; Spring Decorating for<br /><em>Upper West Side Brownstones</em></h1>
        <p>Spring on the Upper West Side is brief and worth marking. Seasonal Splendors creates Easter and spring installations that feel collected and earthy — burlap, evergreen, speckled eggs, dried wheat, fresh florals — far from the plastic pastels that fill most front doors in April.</p>
        <a href="/contact" className={styles.btnGold}>Book a Spring Consultation</a>
      </div>

      <div className={styles.content}>
        <div className={styles.inner}>

          <div className={styles.section}>
            <h2>What&apos;s <em>Included</em></h2>
            <div className={styles.rule}></div>
            <ul className={styles.list}>
              <li><span><span className={styles.listBold}>Handmade Easter Wreaths.</span> Burlap, evergreen, natural eggs, and the kind of texture that photographs beautifully against a dark brownstone door.</span></li>
              <li><span><span className={styles.listBold}>Door Swags &amp; Side Hangs.</span> The quieter, more architectural cousin of the wreath.</span></li>
              <li><span><span className={styles.listBold}>Spring Window Boxes.</span> Tulips, hyacinths, daffodils, and seasonal greens.</span></li>
              <li><span><span className={styles.listBold}>Stoop Urns.</span> Fresh florals matched to your home&apos;s palette.</span></li>
              <li><span><span className={styles.listBold}>Mother&apos;s Day Refresh (Optional).</span> A spring refresh in May for clients on multi-season packages.</span></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>Booking <em>Calendar</em></h2>
            <div className={styles.rule}></div>
            <p>Easter installations are scheduled for the two weeks before Easter Sunday. Spring-only clients can book independent floral refreshes through May.</p>
          </div>

          <div className={styles.section}>
            <h2>Why Spring Done <em>Well Matters</em></h2>
            <div className={styles.rule}></div>
            <p>A front door tells your guests everything before they ring the bell. After a long Manhattan winter, the right spring installation signals warmth, attention, and care — to neighbors, to visitors, and to the people who live inside.</p>
          </div>

          <p style={{ fontSize: '0.88rem', color: '#6B5F52' }}>
            See our full year-round offering:{' '}
            <a href="/services/christmas-decorating" style={{ color: '#B8963E' }}>Christmas decorating</a>,{' '}
            <a href="/services/halloween-decorating" style={{ color: '#B8963E' }}>Halloween decorating</a>, and{' '}
            <a href="/packages" style={{ color: '#B8963E' }}>multi-season packages</a>.
          </p>

        </div>
      </div>

      <div className={styles.cta}>
        <p style={{ fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#D4AC5A', marginBottom: '1rem' }}>Get Started</p>
        <div className={styles.ctaRule}></div>
        <h2>Book a <em>Spring Consultation</em></h2>
        <p>Spring installations book in the weeks leading up to Easter. Get in touch early to secure your date.</p>
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
