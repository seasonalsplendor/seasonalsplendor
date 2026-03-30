'use client'

import { useEffect } from 'react'
import Masonry from 'react-masonry-css'

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

  /* ── NAV ── */
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

  /* ── HERO ── */
  #hero {
    position: relative;
    height: 100vh;
    min-height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .hero-bg {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(160deg, rgba(46,59,50,0.62) 0%, rgba(46,59,50,0.3) 50%, rgba(195,165,107,0.18) 100%),
      url('/hero_bg_landscape.jpg') center/cover no-repeat;
    transform: scale(1.04);
    animation: heroZoom 14s ease-out forwards;
  }
  @keyframes heroZoom {
    from { transform: scale(1.04); }
    to   { transform: scale(1.00); }
  }
  .hero-content {
    position: relative;
    text-align: center;
    color: var(--white);
    padding: 0 2rem;
    animation: heroFade 1.4s 0.3s ease both;
  }
  @keyframes heroFade {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .hero-eyebrow {
    font-family: 'Jost', sans-serif;
    font-size: 0.72rem;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--white);
    font-weight: 600;
    margin-bottom: 1.2rem;
  }
  .hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(3.2rem, 7vw, 6rem);
    font-weight: 400;
    line-height: 1.05;
    margin-bottom: 1.2rem;
    letter-spacing: -0.01em;
  }
  .hero-title em { font-style: italic; color: var(--gold-light); }
  .hero-subtitle {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.05rem, 2vw, 1.35rem);
    font-weight: 300;
    letter-spacing: 0.04em;
    color: rgba(253,251,248,0.82);
    max-width: 520px;
    margin: 0 auto 2.6rem;
    line-height: 1.7;
  }
  .hero-btn {
    display: inline-block;
    font-size: 0.76rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #000;
    background: var(--gold);
    padding: 1rem 2.8rem;
    text-decoration: none;
    transition: background 0.3s, transform 0.3s;
  }
  .hero-btn:hover { background: var(--gold-light); transform: translateY(-2px); }
  .hero-scroll {
    position: absolute;
    bottom: 2.4rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: rgba(253,251,248,0.5);
    font-size: 0.65rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    animation: bounce 2.5s infinite;
  }
  .hero-scroll::after {
    content: '';
    width: 1px;
    height: 44px;
    background: linear-gradient(to bottom, rgba(195,165,107,0.7), transparent);
  }
  @keyframes bounce {
    0%,100% { transform: translateX(-50%) translateY(0); }
    50%      { transform: translateX(-50%) translateY(6px); }
  }

  /* ── SECTION UTILITY ── */
  section { padding: 7rem 0; }
  .container { max-width: 1140px; margin: 0 auto; padding: 0 2.5rem; }
  .section-label {
    font-size: 0.68rem;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 0.9rem;
  }
  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 3.5vw, 3rem);
    font-weight: 400;
    line-height: 1.15;
    color: var(--forest);
    margin-bottom: 1.4rem;
  }
  .section-title em { font-style: italic; }
  .section-body {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.18rem;
    line-height: 1.85;
    color: #555;
    max-width: 600px;
  }
  .divider {
    width: 48px;
    height: 1.5px;
    background: var(--gold);
    margin: 1.6rem 0;
  }

  /* ── INTRO ── */
  #intro { background: var(--white); }
  .intro-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
    align-items: center;
  }
  .intro-image {
    position: relative;
  }
  .intro-image img {
    width: 100%;
    height: 540px;
    object-fit: cover;
    display: block;
  }
  .intro-image::before {
    content: '';
    position: absolute;
    top: -20px; left: -20px;
    right: 20px; bottom: 20px;
    border: 1.5px solid var(--gold);
    z-index: 0;
  }
  .intro-image img { position: relative; z-index: 1; }
  .intro-badge {
    position: absolute;
    bottom: -1.5rem;
    right: -1.5rem;
    z-index: 2;
    width: 110px; height: 110px;
    background: var(--forest);
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1rem;
  }
  .intro-badge span:first-child {
    font-family: 'Playfair Display', serif;
    font-size: 1.9rem;
    color: var(--gold);
    line-height: 1;
  }
  .intro-badge span:last-child {
    font-size: 0.58rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(244,241,236,0.7);
    margin-top: 0.3rem;
  }

  /* ── PACKAGES ── */
  #packages { background: var(--forest); }
  #packages .section-title { color: var(--cream); }
  #packages .section-label { color: var(--gold-light); }
  #packages .section-body { color: rgba(244,241,236,0.65); }
  #packages .divider { background: var(--gold); }
  .packages-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 4rem;
  }
  .package-card {
    background: var(--forest-light);
    padding: 3rem 2.4rem;
    position: relative;
    overflow: hidden;
    transition: background 0.35s;
    cursor: default;
    border-radius: 12px;
  }
  .package-card::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 3px;
    background: var(--gold);
    transform: scaleX(0);
    transition: transform 0.4s;
  }
  .package-card:hover { background: #364a3d; }
  .package-card:hover::after { transform: scaleX(1); }
  .package-season {
    font-size: 0.65rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 1rem;
  }
  .package-name {
    font-family: 'Playfair Display', serif;
    font-size: 1.45rem;
    color: var(--cream);
    margin-bottom: 1.4rem;
    line-height: 1.25;
  }
  .package-includes {
    font-size: 0.68rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 0.9rem;
  }
  .package-list {
    list-style: none;
  }
  .package-list li {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1rem;
    color: rgba(244,241,236,0.72);
    padding: 0.4rem 0;
    border-bottom: 1px solid rgba(195,165,107,0.12);
    display: flex;
    align-items: center;
    gap: 0.7rem;
  }
  .package-list li::before {
    content: '—';
    color: var(--gold);
    font-size: 0.75rem;
    flex-shrink: 0;
  }
  .package-cta {
    display: inline-block;
    margin-top: 2rem;
    font-size: 0.7rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--gold);
    text-decoration: none;
    border-bottom: 1px solid var(--gold);
    padding-bottom: 2px;
    transition: color 0.3s;
  }

  /* ── HOW IT WORKS ── */
  #how { background: var(--cream-dark); }
  .steps-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    margin-top: 4rem;
    position: relative;
  }
  .steps-grid::before {
    content: '';
    position: absolute;
    top: 2rem;
    left: 12.5%;
    right: 12.5%;
    height: 1px;
    background: linear-gradient(to right, transparent, var(--gold), var(--gold), transparent);
    z-index: 0;
  }
  .step {
    text-align: center;
    position: relative;
    z-index: 1;
  }
  .step-num {
    width: 4rem; height: 4rem;
    border-radius: 50%;
    background: var(--white);
    border: 1.5px solid var(--gold);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.8rem;
    font-family: 'Playfair Display', serif;
    font-size: 1.15rem;
    color: var(--gold);
    transition: background 0.3s, color 0.3s;
  }
  .step:hover .step-num { background: var(--gold); color: var(--white); }
  .step-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.15rem;
    color: var(--forest);
    margin-bottom: 0.8rem;
  }
  .step-body {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.05rem;
    color: #666;
    line-height: 1.7;
  }

  /* ── GALLERY ── */
  #gallery { background: var(--white); padding: 7rem 0; }
  .gallery-header { text-align: center; margin-bottom: 4rem; }
  .gallery-header .section-body { margin: 0 auto; text-align: center; }
  .masonry-grid {
    display: flex;
    gap: 6px;
    width: 100%;
  }
  .masonry-col { display: flex; flex-direction: column; gap: 6px; }
  .gallery-item {
    overflow: hidden;
    position: relative;
  }
  .gallery-item img {
    width: 100%; height: auto;
    display: block;
    transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94);
  }
  .gallery-item:hover img { transform: scale(1.06); }
  .gallery-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(46,59,50,0.7) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.4s;
    display: flex;
    align-items: flex-end;
    padding: 1.5rem;
  }
  .gallery-item:hover .gallery-overlay { opacity: 1; }
  .gallery-label {
    font-size: 0.68rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--cream);
  }

  /* ── BROWNSTONE SECTION ── */
  #brownstone {
    background: var(--forest);
    position: relative;
    overflow: hidden;
  }
  #brownstone::before {
    content: '';
    position: absolute;
    top: -80px; right: -80px;
    width: 500px; height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(195,165,107,0.08) 0%, transparent 70%);
  }
  .brownstone-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
    align-items: center;
  }
  #brownstone .section-title { color: var(--cream); }
  #brownstone .section-label { color: var(--gold-light); }
  #brownstone .section-body { color: rgba(244,241,236,0.7); }
  #brownstone .divider { background: var(--gold); }
  .brownstone-image img {
    width: 100%;
    height: 520px;
    object-fit: cover;
    filter: brightness(0.88) contrast(1.05);
  }
  .brownstone-quote {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 1.5rem;
    color: var(--gold-light);
    line-height: 1.6;
    margin-top: 2.4rem;
    padding-left: 1.5rem;
    border-left: 2px solid var(--gold);
  }

  /* ── FAQ ── */
  #faq { background: var(--stone); }
  .faq-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-top: 4rem;
  }
  .faq-item {
    background: var(--white);
    padding: 2rem 2.2rem;
    border-bottom: 2px solid transparent;
    transition: border-color 0.3s;
    cursor: pointer;
  }
  .faq-item:hover { border-color: var(--gold); }
  .faq-q {
    font-family: 'Playfair Display', serif;
    font-size: 1.08rem;
    color: var(--forest);
    margin-bottom: 0.8rem;
  }
  .faq-a {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.05rem;
    color: #666;
    line-height: 1.7;
  }

  /* ── CTA ── */
  #cta {
    position: relative;
    background:
      linear-gradient(rgba(46,59,50,0.78), rgba(46,59,50,0.78)),
      url('https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=1600&q=80') center/cover no-repeat;
    text-align: center;
    padding: 9rem 2rem;
  }
  #cta .section-label { color: var(--gold-light); }
  #cta .section-title { color: var(--cream); margin: 0 auto 1.2rem; }
  #cta .section-body { color: rgba(244,241,236,0.7); margin: 0 auto 3rem; text-align: center; }
  #cta .divider { margin: 1.6rem auto; }
  .cta-btn {
    display: inline-block;
    font-size: 0.76rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #000;
    background: var(--gold);
    padding: 1.15rem 3.2rem;
    text-decoration: none;
    transition: background 0.3s, transform 0.3s;
    margin: 0 0.6rem;
  }
  .cta-btn:hover { background: var(--gold-light); transform: translateY(-2px); }
  .cta-btn.outline {
    background: transparent;
    color: var(--cream);
    border: 1px solid rgba(195,165,107,0.6);
  }
  .cta-btn.outline:hover { background: rgba(195,165,107,0.1); }

  /* ── FOOTER ── */
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

  /* ── SCROLL REVEAL ── */
  .reveal {
    opacity: 0;
    transform: translateY(32px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .reveal-delay-1 { transition-delay: 0.1s; }
  .reveal-delay-2 { transition-delay: 0.2s; }
  .reveal-delay-3 { transition-delay: 0.3s; }
  .reveal-delay-4 { transition-delay: 0.4s; }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    nav { padding: 1.2rem 1.8rem; }
    .nav-links { display: none; }
    .intro-grid, .brownstone-inner { grid-template-columns: 1fr; gap: 3rem; }
    .packages-grid { grid-template-columns: 1fr; gap: 2px; }
    .steps-grid { grid-template-columns: 1fr 1fr; }
    .steps-grid::before { display: none; }
    .gallery-grid { grid-template-columns: 1fr 1fr; grid-template-rows: auto; }
    .gallery-item:nth-child(1), .gallery-item:nth-child(4) { grid-column: span 1; }
    .faq-grid { grid-template-columns: 1fr; }
    .footer-inner { grid-template-columns: 1fr 1fr; }
    .intro-image::before { display: none; }
  }
`

const bodyHTML = `

<!-- NAV -->
<nav id="main-nav">
  <a href="#hero" class="nav-logo">Seasonal Splendor</a>
  <ul class="nav-links">
    <li><a href="#intro">About</a></li>
    <li><a href="#packages">Packages</a></li>
    <li><a href="#gallery">Gallery</a></li>
    <li><a href="#faq">FAQ</a></li>
    <li><a href="/contact" class="nav-cta">Book a Consultation</a></li>
  </ul>
</nav>

<!-- HERO -->
<section id="hero">
  <div class="hero-bg"></div>
  <div class="hero-content">
    <p class="hero-eyebrow">Upper West Side · New York City</p>
    <h1 class="hero-title">Seasonal<br><em>Splendor</em></h1>
    <p class="hero-subtitle">Elegant seasonal styling for brownstones and apartments across the Upper West Side.</p>
    <a href="/contact" class="hero-btn">Book a Consultation</a>
  </div>
  <div class="hero-scroll">Scroll</div>
</section>

<!-- BRAND INTRO -->
<section id="intro">
  <div class="container">
    <div class="intro-grid">
      <div class="intro-image reveal">
        <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=80" alt="Elegant interior living room">
        <div class="intro-badge">
          <span>4</span>
          <span>Seasons of Beauty</span>
        </div>
      </div>
      <div class="reveal reveal-delay-2">
        <p class="section-label">Our Story</p>
        <h2 class="section-title">A Beautiful Home<br>for <em>Every Season</em></h2>
        <div class="divider"></div>
        <p class="section-body">
          Seasonal Splendor creates thoughtfully designed décor installations that bring warmth, charm, and elegance to your home throughout the year.
        </p>
        <p class="section-body" style="margin-top:1.2rem;">
          Our team provides a full-service decorating experience — from design and sourcing to installation and seasonal refresh. We specialize in Upper West Side homes, where historic architecture and timeless interiors deserve décor that complements their character.
        </p>
        <a href="#cta" style="display:inline-block; margin-top:2.4rem; font-size:0.76rem; letter-spacing:0.16em; text-transform:uppercase; color:var(--forest); text-decoration:none; border-bottom:2px solid var(--gold); padding-bottom:3px;">Begin Your Transformation</a>
      </div>
    </div>
  </div>
</section>

<!-- PACKAGES -->
<section id="packages">
  <div class="container">
    <div class="reveal" style="text-align:center;">
      <p class="section-label">Curated Services</p>
      <h2 class="section-title" style="color:var(--cream); margin:0 auto;">Our Signature<br><em>Seasonal Packages</em></h2>
      <div class="divider" style="margin:1.6rem auto;"></div>
    </div>
    <div class="packages-grid">
      <div class="package-card reveal reveal-delay-1">
        <p class="package-season">Year-Round Entry</p>
        <h3 class="package-name">The Brownstone<br>Entry Package</h3>
        <p class="package-includes">Includes</p>
        <ul class="package-list">
          <li>Seasonal wreath</li>
          <li>Lantern styling</li>
          <li>Decorative planters</li>
          <li>Installation &amp; removal</li>
        </ul>
        <a href="/contact" class="package-cta">Enquire</a>
      </div>
      <div class="package-card reveal reveal-delay-2">
        <p class="package-season">Winter</p>
        <h3 class="package-name">The Holiday<br>Signature Package</h3>
        <p class="package-includes">Includes</p>
        <ul class="package-list">
          <li>Christmas tree styling</li>
          <li>Mantel garland</li>
          <li>Staircase décor</li>
          <li>Entryway wreath</li>
        </ul>
        <a href="/contact" class="package-cta">Enquire</a>
      </div>
      <div class="package-card reveal reveal-delay-3">
        <p class="package-season">All Four Seasons</p>
        <h3 class="package-name">The Four-Season<br>Home Package</h3>
        <p class="package-includes">Includes</p>
        <ul class="package-list">
          <li>Spring refresh</li>
          <li>Summer styling</li>
          <li>Autumn harvest décor</li>
          <li>Winter holiday installation</li>
        </ul>
        <a href="/contact" class="package-cta">Enquire</a>
      </div>
    </div>
  </div>
</section>

<!-- HOW IT WORKS -->
<section id="how">
  <div class="container">
    <div class="reveal" style="text-align:center;">
      <p class="section-label">The Process</p>
      <h2 class="section-title" style="text-align:center;">How It <em>Works</em></h2>
      <div class="divider" style="margin:1.6rem auto;"></div>
    </div>
    <div class="steps-grid">
      <div class="step reveal reveal-delay-1">
        <div class="step-num">01</div>
        <h3 class="step-title">Consultation</h3>
        <p class="step-body">We learn about your home, style preferences, and seasonal goals.</p>
      </div>
      <div class="step reveal reveal-delay-2">
        <div class="step-num">02</div>
        <h3 class="step-title">Design</h3>
        <p class="step-body">Our team curates décor tailored specifically to your space.</p>
      </div>
      <div class="step reveal reveal-delay-3">
        <div class="step-num">03</div>
        <h3 class="step-title">Installation</h3>
        <p class="step-body">Professional installation handled with meticulous care.</p>
      </div>
      <div class="step reveal reveal-delay-4">
        <div class="step-num">04</div>
        <h3 class="step-title">Seasonal Refresh</h3>
        <p class="step-body">We return to remove décor or prepare for the next season.</p>
      </div>
    </div>
  </div>
</section>

<!-- GALLERY_PLACEHOLDER -->

<!-- BROWNSTONE EXPERTISE -->
<section id="brownstone">
  <div class="container">
    <div class="brownstone-inner">
      <div class="reveal">
        <p class="section-label">Our Expertise</p>
        <h2 class="section-title">Designed for<br><em>Historic Brownstones</em></h2>
        <div class="divider"></div>
        <p class="section-body">
          Many homes in the Upper West Side are over a century old. Seasonal Splendor uses installation methods designed specifically for historic homes — so decorations are placed safely, without damaging stonework, doors, or railings.
        </p>
        <blockquote class="brownstone-quote">
          Leave no trace except a beautifully styled home.
        </blockquote>
      </div>
      <div class="brownstone-image reveal reveal-delay-2">
        <img src="/images/historic_brownstone_image copy.jpg" alt="Upper West Side brownstone">
      </div>
    </div>
  </div>
</section>

<!-- FAQ -->
<section id="faq">
  <div class="container">
    <div class="reveal" style="text-align:center;">
      <p class="section-label">Questions</p>
      <h2 class="section-title" style="text-align:center;">Frequently<br><em>Asked</em></h2>
      <div class="divider" style="margin:1.6rem auto;"></div>
    </div>
    <div class="faq-grid">
      <div class="faq-item reveal reveal-delay-1">
        <h3 class="faq-q">What areas do you serve?</h3>
        <p class="faq-a">Our primary focus is the Upper West Side of Manhattan, where we specialize in brownstones and classic apartment buildings.</p>
      </div>
      <div class="faq-item reveal reveal-delay-2">
        <h3 class="faq-q">Do you provide the decorations?</h3>
        <p class="faq-a">Yes — we source and install all décor. You don't need to own or store anything. We handle everything from concept to removal.</p>
      </div>
      <div class="faq-item reveal reveal-delay-1">
        <h3 class="faq-q">Do you remove decorations at season's end?</h3>
        <p class="faq-a">Yes, we return at the end of each season to carefully remove all décor, leaving your home exactly as we found it.</p>
      </div>
      <div class="faq-item reveal reveal-delay-2">
        <h3 class="faq-q">How far in advance should I book?</h3>
        <p class="faq-a">Holiday installations book several weeks in advance. We recommend reaching out early to secure your preferred dates, especially for Thanksgiving and Christmas.</p>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section id="cta">
  <div class="container">
    <p class="section-label">Get Started</p>
    <h2 class="section-title">Transform Your Home<br><em>for the Season</em></h2>
    <div class="divider"></div>
    <p class="section-body">Schedule your consultation today and discover what your home looks like at its most beautiful.</p>
    <div style="margin-top:0.5rem;">
      <a href="/contact" class="cta-btn">Book a Consultation</a>
      <a href="#packages" class="cta-btn outline">View Packages</a>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="container">
    <div class="footer-inner">
      <div>
        <div class="footer-brand-name">Seasonal Splendor</div>
        <p class="footer-tagline">Elegant seasonal styling for Upper West Side brownstones and apartments in New York City.</p>
        <p style="font-size:0.78rem; color:rgba(244,241,236,0.4);">hello@seasonalsplendor.com</p>
      </div>
      <div>
        <p class="footer-heading">Navigate</p>
        <ul class="footer-links">
          <li><a href="#intro">About</a></li>
          <li><a href="#packages">Packages</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div>
        <p class="footer-heading">Services</p>
        <ul class="footer-links">
          <li><a href="#">Spring Styling</a></li>
          <li><a href="#">Summer Styling</a></li>
          <li><a href="#">Autumn Décor</a></li>
          <li><a href="#">Holiday Installation</a></li>
          <li><a href="#">Entryway Styling</a></li>
        </ul>
      </div>
      <div>
        <p class="footer-heading">Service Area</p>
        <ul class="footer-links">
          <li><a href="#">Upper West Side</a></li>
          <li><a href="#">New York City</a></li>
        </ul>
        <p class="footer-heading" style="margin-top:1.8rem;">Follow</p>
        <ul class="footer-links">
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Seasonal Splendor. All rights reserved.</span>
      <span><a href="/privacy-policy" style="color:inherit; text-decoration:none;">Privacy Policy</a></span>
    </div>
  </div>
</footer>
`

const galleryImages = [
  { src: '/images/autum-entry.jpg', alt: 'Autumn Entry' },
  { src: 'https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=600&q=80', alt: 'Holiday Interiors' },
  { src: '/images/brownstone_stoop.jpg', alt: 'Brownstone Stoop' },
  { src: '/images/spring_floral.webp', alt: 'Spring Florals' },
  { src: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=600&q=80', alt: 'Winter Holiday' },
  { src: '/images/dining_table.avif', alt: 'Dining Styling' },
]

export default function Home() {
  useEffect(() => {
    // Scroll reveal
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          observer.unobserve(e.target)
        }
      })
    }, { threshold: 0.12 })
    reveals.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const [before, after] = bodyHTML.split('<!-- GALLERY_PLACEHOLDER -->')

  return (
    <>
      <style>{css}</style>
      <div dangerouslySetInnerHTML={{ __html: before }} />
      <section id="gallery">
        <div className="container">
          <div className="gallery-header reveal">
            <p className="section-label">Seasonal Transformations</p>
            <h2 className="section-title">Homes <em>We've Styled</em></h2>
            <div className="divider" style={{ margin: '1.6rem auto' }} />
            <p className="section-body">Each installation is curated for the character of the home and the beauty of the season.</p>
          </div>
        </div>
        <div className="container">
          <Masonry breakpointCols={{ default: 3, 768: 2, 480: 1 }} className="masonry-grid" columnClassName="masonry-col">
            {galleryImages.map((img) => (
              <div key={img.src} className="gallery-item">
                <img src={img.src} alt={img.alt} />
                <div className="gallery-overlay"><span className="gallery-label">{img.alt}</span></div>
              </div>
            ))}
          </Masonry>
        </div>
      </section>
      <div dangerouslySetInnerHTML={{ __html: after }} />
    </>
  )
}
