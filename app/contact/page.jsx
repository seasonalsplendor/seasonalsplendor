'use client'

import { useState } from 'react'
import supabase from '../../lib/supabase'

const css = `
  :root {
    --cream: #F4F1EC;
    --cream-dark: #EDE8DF;
    --forest: #2E3B32;
    --forest-light: #3d4f43;
    --charcoal: #3A3A3A;
    --gold: #C3A56B;
    --gold-light: #d4bc8e;
    --stone: #E7E2DA;
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

  /* NAV */
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
    color: var(--forest) !important;
    background: var(--gold);
    padding: 0.6rem 1.6rem;
    text-decoration: none;
    transition: background 0.3s !important;
  }
  .nav-cta:hover { background: var(--gold-light) !important; }

  /* PAGE HERO */
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
  .page-hero .section-label {
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
    font-size: 1.18rem;
    color: rgba(244,241,236,0.7);
    margin-top: 1.2rem;
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.7;
  }

  /* LAYOUT */
  .contact-section {
    padding: 7rem 0;
    background: var(--white);
  }
  .container { max-width: 1140px; margin: 0 auto; padding: 0 2.5rem; }
  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1.6fr;
    gap: 6rem;
    align-items: start;
  }

  /* LEFT INFO */
  .section-label {
    font-size: 0.68rem;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 0.9rem;
  }
  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.8rem, 3vw, 2.6rem);
    font-weight: 400;
    color: var(--forest);
    line-height: 1.15;
    margin-bottom: 1.4rem;
  }
  .section-title em { font-style: italic; }
  .divider {
    width: 48px;
    height: 1.5px;
    background: var(--gold);
    margin: 1.6rem 0;
  }
  .contact-body {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.12rem;
    line-height: 1.85;
    color: #555;
    margin-bottom: 2.4rem;
  }
  .contact-detail {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
  .contact-detail-item {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
  .contact-detail-label {
    font-size: 0.65rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
  }
  .contact-detail-value {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.05rem;
    color: var(--charcoal);
  }

  /* FORM */
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }
  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.4rem;
  }
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .form-group label {
    font-size: 0.65rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--forest);
  }
  .form-group input,
  .form-group select,
  .form-group textarea {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.05rem;
    color: var(--charcoal);
    background: var(--cream);
    border: 1px solid rgba(195,165,107,0.35);
    padding: 0.85rem 1rem;
    outline: none;
    transition: border-color 0.3s;
    width: 100%;
    appearance: none;
  }
  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    border-color: var(--gold);
  }
  .form-group textarea { resize: vertical; min-height: 130px; }
  .form-group select {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23C3A56B' stroke-width='1.5' fill='none'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    padding-right: 2.5rem;
    cursor: pointer;
  }
  .submit-btn {
    display: inline-block;
    font-family: 'Jost', sans-serif;
    font-size: 0.76rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--forest);
    background: var(--gold);
    border: none;
    padding: 1rem 2.8rem;
    cursor: pointer;
    transition: background 0.3s, transform 0.3s;
    align-self: flex-start;
  }
  .submit-btn:hover { background: var(--gold-light); transform: translateY(-2px); }
  .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }

  .form-success {
    padding: 1.4rem 1.8rem;
    background: rgba(46,59,50,0.06);
    border-left: 3px solid var(--gold);
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.1rem;
    color: var(--forest);
    line-height: 1.7;
  }
  .form-error {
    font-size: 0.78rem;
    color: #b94a48;
    margin-top: 0.3rem;
  }

  /* FOOTER */
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
  }

  @media (max-width: 900px) {
    nav { padding: 1.2rem 1.8rem; }
    .nav-links { display: none; }
    .contact-grid { grid-template-columns: 1fr; gap: 3rem; }
    .form-row { grid-template-columns: 1fr; }
    .footer-inner { grid-template-columns: 1fr 1fr; }
  }
`

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    const { error } = await supabase.from('contact_submissions').insert([form])
    if (error) { setStatus('error'); return }
    fetch('https://ecvsbunmfestnrhfgdjl.supabase.co/functions/v1/resend-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`
      },
      body: JSON.stringify(form)
    }).catch(console.error)
    setStatus('success')

  }

  return (
    <>
      <style>{css}</style>

      {/* NAV */}
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

      {/* PAGE HERO */}
      <div className="page-hero">
        <p className="section-label">Get in Touch</p>
        <h1>Let's Transform<br /><em>Your Home</em></h1>
        <p>Tell us about your space and we'll craft a seasonal styling plan just for you.</p>
      </div>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">

            {/* LEFT */}
            <div>
              <p className="section-label">Contact Us</p>
              <h2 className="section-title">We'd Love to<br /><em>Hear From You</em></h2>
              <div className="divider" />
              <p className="contact-body">
                Whether you're ready to book or just exploring options, we're happy to answer questions and help you find the right package for your home.
              </p>
              <div className="contact-detail">
                <div className="contact-detail-item">
                  <span className="contact-detail-label">Email</span>
                  <span className="contact-detail-value">hello@seasonalsplendor.com</span>
                </div>
                <div className="contact-detail-item">
                  <span className="contact-detail-label">Service Area</span>
                  <span className="contact-detail-value">Upper West Side, New York City</span>
                </div>
                <div className="contact-detail-item">
                  <span className="contact-detail-label">Response Time</span>
                  <span className="contact-detail-value">Within 1–2 business days</span>
                </div>
              </div>
            </div>

            {/* RIGHT — FORM */}
            <div>
              {status === 'success' ? (
                <div className="form-success">
                  Thank you for reaching out! We've received your message and will be in touch within 1–2 business days to discuss your seasonal styling.
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input id="name" name="name" type="text" placeholder="Jane Smith" required value={form.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input id="email" name="email" type="email" placeholder="jane@example.com" required value={form.email} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone (optional)</label>
                      <input id="phone" name="phone" type="tel" placeholder="+1 (212) 000-0000" value={form.phone} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="service">Package of Interest</label>
                      <select id="service" name="service" value={form.service} onChange={handleChange}>
                        <option value="">Select a package…</option>
                        <option value="brownstone-entry">Brownstone Entry Package</option>
                        <option value="holiday-signature">Holiday Signature Package</option>
                        <option value="four-season">Four-Season Home Package</option>
                        <option value="not-sure">Not sure yet</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Tell Us About Your Home</label>
                    <textarea id="message" name="message" placeholder="Share details about your space, style preferences, or any questions you have…" required value={form.message} onChange={handleChange} />
                  </div>
                  <button type="submit" className="submit-btn" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Sending…' : 'Send Message'}
                  </button>
                  {status === 'error' && (
                    <p className="form-error">Something went wrong. Please try again.</p>
                  )}
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
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
                <li><a href="https://www.instagram.com/seasonal.splendornyc/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Seasonal Splendor. All rights reserved.</span>
            <a href="/privacy-policy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
          </div>
        </div>
      </footer>
    </>
  )
}
