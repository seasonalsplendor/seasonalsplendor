import styles from './page.module.css'

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.page}>

      <nav>
        <a href="/" className={styles.navLogo}>Seasonal Splendor</a>
        <ul className={styles.navLinks}>
          <li><a href="/#intro">About</a></li>
          <li><a href="/#packages">Packages</a></li>
          <li><a href="/#gallery">Gallery</a></li>
          <li><a href="/#faq">FAQ</a></li>
          <li><a href="/contact" className={styles.navCta}>Book a Consultation</a></li>
        </ul>
      </nav>

      <div className={styles.pageHero}>
        <p className={styles.eyebrow}>Legal</p>
        <h1>Privacy <em>Policy</em></h1>
        <p>Last updated: March 2026</p>
      </div>

      <section className={styles.policySection}>
        <div className={styles.container}>
          <div className={styles.divider} />
          <div className={styles.policyBody}>

            <h2>1. Who We Are</h2>
            <p>Seasonal Splendor is a seasonal home styling service based in the Upper West Side, New York City. We can be reached at <a href="mailto:info@seasonalsplendors.com">info@seasonalsplendors.com</a>.</p>

            <h2>2. Information We Collect</h2>
            <p>When you submit our contact form, we collect:</p>
            <ul>
              <li>Your name and email address</li>
              <li>Phone number (if provided)</li>
              <li>Your message and package preferences</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information you provide solely to:</p>
            <ul>
              <li>Respond to your enquiry or consultation request</li>
              <li>Communicate about our services and scheduling</li>
            </ul>
            <p>We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

            <h2>4. Data Storage</h2>
            <p>Contact form submissions are stored securely. We retain your information only as long as necessary to fulfil your request or as required by law.</p>

            <h2>5. Cookies</h2>
            <p>Our website does not use tracking or advertising cookies. We may use essential cookies required for the site to function correctly.</p>

            <h2>6. Your Rights</h2>
            <p>You have the right to request access to, correction of, or deletion of any personal data we hold about you. To make a request, email us at <a href="mailto:info@seasonalsplendors.com">info@seasonalsplendors.com</a>.</p>

            <h2>7. Changes to This Policy</h2>
            <p>We may update this policy from time to time. Any changes will be posted on this page with an updated date.</p>

            <h2>8. Contact</h2>
            <p>For any privacy-related questions, please contact us at <a href="mailto:info@seasonalsplendors.com">info@seasonalsplendors.com</a>.</p>

          </div>
        </div>
      </section>

      <footer>
        <div className={styles.footerBrand}>
          <a href="/" className={styles.footerLogo}>Seasonal Splendor</a>
          <p>Elegant exterior seasonal styling for Upper West Side brownstones in New York City. Serving our neighborhood exclusively.</p>
          <a href="mailto:info@seasonalsplendors.com" className={styles.footerEmail}>info@seasonalsplendors.com</a>
        </div>
        <div className={styles.footerCol}>
          <h5>Navigate</h5>
          <ul>
            <li><a href="/#intro">About</a></li>
            <li><a href="/#packages">Packages</a></li>
            <li><a href="/#gallery">Gallery</a></li>
            <li><a href="/#faq">FAQ</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h5>Services</h5>
          <ul>
            <li><a href="/#packages">Holiday Entry Package</a></li>
            <li><a href="/#packages">Holiday Signature</a></li>
            <li><a href="/#packages">Four-Season Exterior</a></li>
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
          <p style={{ fontSize: '0.78rem', marginTop: '1.2rem', color: 'rgba(253,250,247,0.4)' }}>Service Area<br />Upper West Side, Manhattan<br />New York City</p>
        </div>
      </footer>
      <div className={styles.footerBottom}>
        <span>© 2026 Seasonal Splendor. All rights reserved.</span>
        <a href="/privacy-policy">Privacy Policy</a>
      </div>

    </div>
  )
}
