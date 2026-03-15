const css = `
  :root {
    --cream: #F4F1EC;
    --cream-dark: #EDE8DF;
    --forest: #2E3B32;
    --charcoal: #3A3A3A;
    --gold: #C3A56B;
    --gold-light: #d4bc8e;
    --white: #FDFBF8;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    font-family: 'Jost', sans-serif;
    background: var(--cream);
    color: var(--charcoal);
    font-weight: 300;
    overflow-x: hidden;
  }

  nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.4rem 4rem;
    background: rgba(244,241,236,0.96);
    backdrop-filter: blur(10px);
    box-shadow: 0 1px 24px rgba(46,59,50,0.08);
  }
  .nav-logo {
    font-family: 'Playfair Display', serif;
    font-size: 1.25rem;
    letter-spacing: 0.04em;
    color: var(--forest);
    text-decoration: none;
  }
  .nav-links {
    display: flex;
    gap: 2.4rem;
    list-style: none;
  }
  .nav-links a {
    font-size: 0.78rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--charcoal);
    text-decoration: none;
    transition: color 0.3s;
  }
  .nav-links a:hover { color: var(--gold); }
  .nav-cta {
    font-size: 0.75rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #000 !important;
    background: var(--gold);
    padding: 0.6rem 1.6rem;
    text-decoration: none;
    transition: background 0.3s !important;
  }
  .nav-cta:hover { background: var(--gold-light) !important; }

  .page-hero {
    padding: 10rem 0 5rem;
    background: var(--forest);
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .page-hero::before {
    content: '';
    position: absolute;
    top: -80px; right: -80px;
    width: 500px; height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(195,165,107,0.08) 0%, transparent 70%);
  }
  .page-hero .eyebrow {
    font-size: 0.68rem;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--gold-light);
    margin-bottom: 0.9rem;
  }
  .page-hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.4rem, 5vw, 4rem);
    font-weight: 400;
    color: var(--cream);
    line-height: 1.1;
  }
  .page-hero h1 em { font-style: italic; color: var(--gold-light); }
  .page-hero p {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.1rem;
    color: rgba(244,241,236,0.6);
    margin-top: 1rem;
  }

  .policy-section {
    padding: 7rem 0;
    background: var(--white);
  }
  .container { max-width: 780px; margin: 0 auto; padding: 0 2.5rem; }

  .policy-body h2 {
    font-family: 'Playfair Display', serif;
    font-size: 1.35rem;
    font-weight: 400;
    color: var(--forest);
    margin: 2.8rem 0 0.8rem;
  }
  .policy-body h2:first-child { margin-top: 0; }
  .divider {
    width: 48px;
    height: 1.5px;
    background: var(--gold);
    margin-bottom: 2.8rem;
  }
  .policy-body p, .policy-body li {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.1rem;
    line-height: 1.85;
    color: #555;
  }
  .policy-body ul {
    padding-left: 1.4rem;
    margin-top: 0.6rem;
  }
  .policy-body li { margin-bottom: 0.4rem; }
  .policy-body a { color: var(--forest); }
  .last-updated {
    font-size: 0.68rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 0.6rem;
  }

  footer {
    background: #1e2820;
    padding: 4rem 0 2.4rem;
    color: rgba(244,241,236,0.5);
  }
  .footer-inner {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 3rem;
    margin-bottom: 3rem;
    max-width: 1140px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 2.5rem;
  }
  .footer-brand-name {
    font-family: 'Playfair Display', serif;
    font-size: 1.3rem;
    color: var(--cream);
    margin-bottom: 1rem;
  }
  .footer-tagline {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1rem;
    line-height: 1.7;
    color: rgba(244,241,236,0.5);
    margin-bottom: 1.4rem;
    max-width: 260px;
  }
  .footer-heading {
    font-size: 0.65rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 1.2rem;
  }
  .footer-links { list-style: none; }
  .footer-links li { margin-bottom: 0.6rem; }
  .footer-links a {
    font-size: 0.85rem;
    color: rgba(244,241,236,0.5);
    text-decoration: none;
    transition: color 0.3s;
  }
  .footer-links a:hover { color: var(--gold-light); }
  .footer-bottom {
    border-top: 1px solid rgba(195,165,107,0.15);
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    max-width: 1140px;
    margin: 0 auto;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  @media (max-width: 900px) {
    nav { padding: 1.2rem 1.8rem; }
    .nav-links { display: none; }
    .footer-inner { grid-template-columns: 1fr 1fr; }
  }
`

export default function PrivacyPolicyPage() {
  return (
    <>
      <style>{css}</style>

      <nav>
        <a href="/" className="nav-logo">Seasonal Splendor</a>
        <ul className="nav-links">
          <li><a href="/#intro">About</a></li>
          <li><a href="/#packages">Packages</a></li>
          <li><a href="/#gallery">Gallery</a></li>
          <li><a href="/#faq">FAQ</a></li>
          <li><a href="/contact" className="nav-cta">Book a Consultation</a></li>
        </ul>
      </nav>

      <div className="page-hero">
        <p className="eyebrow">Legal</p>
        <h1>Privacy <em>Policy</em></h1>
        <p>Last updated: March 2026</p>
      </div>

      <section className="policy-section">
        <div className="container">
          <div className="divider" />
          <div className="policy-body">

            <h2>1. Who We Are</h2>
            <p>Seasonal Splendor is a seasonal home styling service based in the Upper West Side, New York City. We can be reached at <a href="mailto:hello@seasonalsplendor.com">hello@seasonalsplendor.com</a>.</p>

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
            <p>You have the right to request access to, correction of, or deletion of any personal data we hold about you. To make a request, email us at <a href="mailto:hello@seasonalsplendor.com">hello@seasonalsplendor.com</a>.</p>

            <h2>7. Changes to This Policy</h2>
            <p>We may update this policy from time to time. Any changes will be posted on this page with an updated date.</p>

            <h2>8. Contact</h2>
            <p>For any privacy-related questions, please contact us at <a href="mailto:hello@seasonalsplendor.com">hello@seasonalsplendor.com</a>.</p>

          </div>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <div>
            <div className="footer-brand-name">Seasonal Splendor</div>
            <p className="footer-tagline">Elegant seasonal styling for Upper West Side brownstones and apartments in New York City.</p>
            <p style={{ fontSize: '0.78rem', color: 'rgba(244,241,236,0.4)' }}>hello@seasonalsplendor.com</p>
          </div>
          <div>
            <p className="footer-heading">Navigate</p>
            <ul className="footer-links">
              <li><a href="/#intro">About</a></li>
              <li><a href="/#packages">Packages</a></li>
              <li><a href="/#gallery">Gallery</a></li>
              <li><a href="/#faq">FAQ</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="footer-heading">Services</p>
            <ul className="footer-links">
              <li><a href="#">Spring Styling</a></li>
              <li><a href="#">Summer Styling</a></li>
              <li><a href="#">Autumn Décor</a></li>
              <li><a href="#">Holiday Installation</a></li>
              <li><a href="#">Entryway Styling</a></li>
            </ul>
          </div>
          <div>
            <p className="footer-heading">Service Area</p>
            <ul className="footer-links">
              <li><a href="#">Upper West Side</a></li>
              <li><a href="#">New York City</a></li>
            </ul>
            <p className="footer-heading" style={{ marginTop: '1.8rem' }}>Follow</p>
            <ul className="footer-links">
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Seasonal Splendor. All rights reserved.</span>
          <a href="/privacy-policy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
        </div>
      </footer>
    </>
  )
}
