"use client";

import { useEffect } from "react";
import supabase from "../lib/supabase";

const bodyHTML = `
<!-- NAV -->
<nav>
  <a href="#hero" class="nav-logo">Seasonal Splendor</a>
  <ul class="nav-links">
    <li><a href="#intro">About</a></li>
    <li><a href="#packages">Packages</a></li>
    <li><a href="#gallery">Gallery</a></li>
    <li><a href="#faq">FAQ</a></li>
  </ul>
  <a href="/contact" class="nav-cta">Book Consultation</a>
  <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
</nav>

<!-- MOBILE MENU -->
<div class="mobile-menu-backdrop" id="mobileBackdrop"></div>
<div class="mobile-menu" id="mobileMenu" role="dialog" aria-label="Navigation menu">
  <ul class="mobile-menu-links">
    <li><a href="#intro">About</a></li>
    <li><a href="#packages">Packages</a></li>
    <li><a href="#gallery">Gallery</a></li>
    <li><a href="#faq">FAQ</a></li>
  </ul>
  <a href="/contact" class="mobile-menu-cta">Book a Consultation</a>
</div>

<!-- HERO -->
<section id="hero">
  <img class="hero-bg" src="/images/image_01.jpg" alt="New York City brownstone row with ornate iron railings and flowers" loading="eager" />
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <p class="hero-eyebrow">Upper West Side · New York City</p>
    <h1>Brownstone<br /><em>Exterior</em><br />Styling</h1>
    <p class="hero-sub">Seasonal décor installations crafted for the stoops, entries, and façades of Upper West Side brownstones — from holiday wreaths to festive planters that honor the architecture.</p>
    <div class="hero-btns">
      <a href="/contact" class="btn-gold">Book a Consultation</a>
      <a href="#packages" class="btn-gold-outline">View Packages</a>
    </div>
  </div>
  <div class="seasons-badge"><span class="s-num">4</span><span class="s-lbl">Seasons<br>of Beauty</span></div>
  <div class="hero-scroll">Scroll</div>
</section>

<!-- INTRO STRIP -->
<div class="intro-strip">
  <p>"Historic brownstones deserve décor that honors their <span>character</span> — installed with care, removed without a trace."</p>
</div>

<!-- ABOUT -->
<section id="intro">
  <div class="about-images">
    <img class="about-img-single" src="/images/image_02.jpg" alt="Upper West Side brownstone stoop with ornate iron railings" loading="lazy" />
  </div>
  <div class="about-text">
    <p class="section-eyebrow">Our Story</p>
    <h2>Exterior <em>Elegance</em><br />for Every Season</h2>
    <p>Seasonal Splendor specializes in <strong>exterior décor installations</strong> for Upper West Side brownstones. We style the parts of your home that greet the world — stoops, entries, lanterns, railings, and planters — transforming them for each holiday season.</p>
    <p>We understand the architecture. Many UWS brownstones are over a century old, and every installation is planned with their stonework and ironwork in mind. We use <strong>non-damaging, reversible methods</strong> that leave no trace on your building's historic fabric.</p>
    <p>We do not serve any area outside of the Upper West Side. This focus lets us deliver a truly attentive, meticulous service to our neighbors.</p>
    <div class="service-area-pill">Upper West Side, Manhattan — Exclusively</div>
  </div>
</section>

<!-- PACKAGES -->
<section id="packages">
  <div class="packages-header fade-up">
    <p class="section-eyebrow">Curated Services</p>
    <h2>Our Signature<em>Seasonal Packages</em></h2>
    <div class="packages-header-rule"></div>
    <p style="color:var(--muted);font-size:0.9rem;max-width:520px;margin:1.4rem auto 0;line-height:1.75;">All packages are exterior-only, designed for brownstone stoops, entryways, and façades on the Upper West Side.</p>
  </div>
  <div class="packages-grid">
    <div class="pkg-card fade-up">
      <div class="pkg-season-bar">Holiday Entry</div>
      <div class="pkg-body">
        <div class="pkg-name">The Brownstone<br />Entry Package</div>
        <div class="pkg-tagline">A polished, festive entry that makes an impression from the sidewalk.</div>
        <div class="pkg-divider"></div>
        <div class="pkg-includes-label">Includes</div>
        <ul class="pkg-includes">
          <li>Holiday wreath (custom or seasonal)</li>
          <li>Lantern styling with seasonal accents</li>
          <li>Decorative stoop planters</li>
          <li>Ribbon &amp; garland for railings</li>
          <li>Professional installation &amp; removal</li>
        </ul>
        <div class="pkg-price-row">
          <div class="pkg-price-label">Starting at</div>
          <div class="pkg-price">$495</div>
          <div class="pkg-price-note">Includes install + end-of-season removal</div>
        </div>
        <button class="pkg-enquire-link" onclick="window.openModal('Brownstone Entry Package')">Enquire</button>
      </div>
    </div>
    <div class="pkg-card fade-up">
      <div class="pkg-season-bar">Winter · Most Popular</div>
      <div class="pkg-body">
        <div class="pkg-name">The Holiday<br />Signature Package</div>
        <div class="pkg-tagline">A full brownstone exterior transformation for Thanksgiving through New Year's.</div>
        <div class="pkg-divider"></div>
        <div class="pkg-includes-label">Includes</div>
        <ul class="pkg-includes">
          <li>Grand stoop garland with lights</li>
          <li>Wreath on entry door &amp; gate</li>
          <li>Tall planter arrangements with winter greens</li>
          <li>Lantern &amp; railing décor throughout</li>
          <li>Window box winter styling</li>
          <li>Installation, mid-season refresh &amp; removal</li>
        </ul>
        <button class="pkg-enquire-link" onclick="window.openModal('Holiday Signature Package')">Enquire</button>
      </div>
    </div>
    <div class="pkg-card fade-up">
      <div class="pkg-season-bar">All Four Seasons</div>
      <div class="pkg-body">
        <div class="pkg-name">The Four-Season<br />Exterior Package</div>
        <div class="pkg-tagline">Year-round exterior styling: spring florals, summer lush, autumn harvest, winter holiday.</div>
        <div class="pkg-divider"></div>
        <div class="pkg-includes-label">Includes</div>
        <ul class="pkg-includes">
          <li>Spring: fresh florals &amp; seasonal planters</li>
          <li>Summer: lush greenery &amp; bright arrangements</li>
          <li>Autumn: harvest wreaths &amp; pumpkin styling</li>
          <li>Winter/Holiday: full exterior installation</li>
          <li>Four professional install &amp; removal visits</li>
          <li>Priority scheduling &amp; client management</li>
        </ul>
        <button class="pkg-enquire-link" onclick="window.openModal('Four-Season Exterior Package')">Enquire</button>
      </div>
    </div>
  </div>
</section>

<!-- ENQUIRE MODAL -->
<div class="modal-overlay" id="enquireModal">
  <div class="modal">
    <button class="modal-close" onclick="window.closeModal()" aria-label="Close">×</button>
    <div class="modal-eyebrow">Package Enquiry</div>
    <h3 id="modalTitle">Enquire About This Package</h3>
    <form onsubmit="window.handleFormSubmit(event)">
      <input type="hidden" id="modalPackageField" name="package" value="" />
      <div class="form-row">
        <label for="fullName">Full Name</label>
        <input type="text" id="fullName" name="fullName" required placeholder="Jane Smith" />
      </div>
      <div class="form-row">
        <label for="email">Email Address</label>
        <input type="email" id="email" name="email" required placeholder="jane@example.com" />
      </div>
      <div class="form-row">
        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" required placeholder="(212) 555-0100" />
      </div>
      <div class="form-row">
        <label for="address">Brownstone Address (UWS)</label>
        <input type="text" id="address" name="address" required placeholder="123 W 87th St, New York, NY" />
      </div>
      <div class="form-row">
        <label for="season">Preferred Season / Occasion</label>
        <select id="season" name="season" required>
          <option value="" disabled selected>Select a season</option>
          <option>Holiday (Thanksgiving – New Year's)</option>
          <option>Spring</option>
          <option>Summer</option>
          <option>Autumn / Harvest</option>
          <option>All Four Seasons</option>
        </select>
      </div>
      <div class="form-row">
        <label for="notes">Additional Notes</label>
        <textarea id="notes" name="notes" required placeholder="Tell us about your home, any special requests, or questions…"></textarea>
      </div>
      <button type="submit" class="form-submit">Submit Enquiry</button>
    </form>
  </div>
</div>

<!-- HOW IT WORKS -->
<section id="process">
  <div class="process-header fade-up">
    <p class="section-eyebrow">The Process</p>
    <h2>How It <em>Works</em></h2>
  </div>
  <div class="process-steps">
    <div class="step fade-up">
      <div class="step-num">01</div>
      <h4>Consultation</h4>
      <p>We assess your brownstone's exterior, discuss your aesthetic goals, and plan the installation approach.</p>
    </div>
    <div class="step fade-up">
      <div class="step-num">02</div>
      <h4>Design</h4>
      <p>Our team curates a seasonal décor plan tailored to your stoop, entryway, and façade's dimensions and architecture.</p>
    </div>
    <div class="step fade-up">
      <div class="step-num">03</div>
      <h4>Installation</h4>
      <p>Professional installation with non-damaging, reversible methods. No drilling, no damage to stonework or ironwork.</p>
    </div>
    <div class="step fade-up">
      <div class="step-num">04</div>
      <h4>Removal</h4>
      <p>We return at season's end to carefully remove all décor, leaving your home exactly as we found it.</p>
    </div>
  </div>
</section>

<!-- GALLERY -->
<section id="gallery">
  <div class="gallery-header fade-up">
    <p class="section-eyebrow">Exterior Transformations</p>
    <h2>Brownstones <em>We've Styled</em></h2>
  </div>
  <div class="gallery-grid">
    <div class="gallery-col">
      <div class="gallery-item">
        <img src="/images/image_03.jpg" alt="Autumn Harvest Stoop" loading="lazy" />
        <div class="gallery-item-caption">Autumn Harvest Stoop</div>
      </div>
      <div class="gallery-item">
        <img src="/images/image_04.jpg" alt="Luxury Holiday Wreath" loading="lazy" />
        <div class="gallery-item-caption">Luxury Holiday Wreath</div>
      </div>
      <div class="gallery-item">
        <img src="/images/image_05.jpg" alt="Autumn Harvest Entry" loading="lazy" />
        <div class="gallery-item-caption">Autumn Harvest Entry</div>
      </div>
      <div class="gallery-item">
        <img src="/images/image_06.jpg" alt="Brownstone Entry" loading="lazy" />
        <div class="gallery-item-caption">Brownstone Entry</div>
      </div>
    </div>
    <div class="gallery-col">
      <div class="gallery-item">
        <img src="/images/image_07.jpg" alt="Summer Patriotic Wreath" loading="lazy" />
        <div class="gallery-item-caption">Summer Patriotic Wreath</div>
      </div>
      <div class="gallery-item">
        <img src="/images/image_17.jpg" alt="Spring Florals" loading="lazy" />
        <div class="gallery-item-caption">Spring Florals</div>
      </div>
      <div class="gallery-item">
        <img src="/images/image_10.jpg" alt="Wreath Styling" loading="lazy" />
        <div class="gallery-item-caption">Wreath Styling</div>
      </div>
      <div class="gallery-item">
        <img src="/images/image_18.jpg" alt="Easter Decor" loading="lazy" />
        <div class="gallery-item-caption">Easter Decor</div>
      </div>
    </div>
    <div class="gallery-col">
      <div class="gallery-item">
        <img src="/images/image_11.jpg" alt="Lantern &amp; Garland" loading="lazy" />
        <div class="gallery-item-caption">Lantern &amp; Garland</div>
      </div>
      <div class="gallery-item">
        <img src="/images/image_13.jpg" alt="Holiday Exterior" loading="lazy" />
        <div class="gallery-item-caption">Holiday Exterior</div>
      </div>
      <div class="gallery-item">
        <img src="/images/image_14.jpg" alt="Ornate Door Wreath" loading="lazy" />
        <div class="gallery-item-caption">Ornate Door Wreath</div>
      </div>
    </div>
  </div>
</section>

<!-- EXPERTISE -->
<section class="expertise-section">
  <div class="expertise-grid">
    <div class="expertise-text fade-up">
      <p class="section-eyebrow">Our Expertise</p>
      <h2>Designed for <em>Historic<br />Brownstones</em></h2>
      <div class="expertise-rule"></div>
      <p>Many homes in the Upper West Side are over a century old. Seasonal Splendor uses installation methods designed specifically for historic homes — so decorations are placed safely, without damaging stonework, doors, or railings.</p>
      <p>We have maintained a zero-damage record across every installation we have ever completed, including several on Landmarks Preservation Commission–protected blocks.</p>
      <blockquote class="expertise-quote">"Leave no trace except a beautifully styled home."</blockquote>
      <div class="trust-pills">
        <span class="trust-pill">Zero Surface Damage</span>
        <span class="trust-pill">LPC-Compliant</span>
        <span class="trust-pill">Fully Insured</span>
        <span class="trust-pill">Historic-Safe Fixings</span>
        <span class="trust-pill">Sustainably Sourced</span>
      </div>
    </div>
    <div class="expertise-img-wrap fade-up">
      <img src="/images/image_15.jpg" alt="Grand holiday garland arch with red ornaments on classic door" loading="lazy" />
      <div class="expertise-img-caption">
        <p>Leave no trace except a beautifully styled home.</p>
      </div>
    </div>
  </div>
</section>

<!-- FAQ -->
<section id="faq">
  <div class="faq-left fade-up">
    <p class="section-eyebrow">Questions</p>
    <h2>Frequently<br /><em>Asked</em></h2>
  </div>
  <div class="faq-list fade-up">
    <div class="faq-item open">
      <button class="faq-q" onclick="window.toggleFaq(this)">What areas do you serve?</button>
      <div class="faq-a">We serve the Upper West Side of Manhattan exclusively. This focus allows us to provide a truly attentive, high-quality experience for our neighbors. We are not currently taking orders from other neighborhoods.</div>
    </div>
    <div class="faq-item">
      <button class="faq-q" onclick="window.toggleFaq(this)">Do you only style exteriors?</button>
      <div class="faq-a">Yes — we specialize exclusively in exterior styling. This includes stoops, front entries, lanterns, railings, window boxes, and planters. We do not offer interior decorating services at this time.</div>
    </div>
    <div class="faq-item">
      <button class="faq-q" onclick="window.toggleFaq(this)">Do you provide the decorations?</button>
      <div class="faq-a">Yes. We source, deliver, install, and remove all décor. You don't need to purchase or store anything. We handle everything from concept to final removal.</div>
    </div>
    <div class="faq-item">
      <button class="faq-q" onclick="window.toggleFaq(this)">Will you damage my brownstone?</button>
      <div class="faq-a">Never. We use only non-damaging, reversible installation methods — no drilling, no adhesives that harm stonework, and no pressure on historic ironwork beyond its safe tolerance. We leave no trace except a beautifully styled home.</div>
    </div>
    <div class="faq-item">
      <button class="faq-q" onclick="window.toggleFaq(this)">Do you remove decorations at season's end?</button>
      <div class="faq-a">Yes. Removal is included in every package. We return at the end of the season and restore your home to its original condition, with care.</div>
    </div>
    <div class="faq-item">
      <button class="faq-q" onclick="window.toggleFaq(this)">How far in advance should I book?</button>
      <div class="faq-a">Holiday installations (Thanksgiving through New Year's) fill up quickly — we recommend reaching out at least 4–6 weeks in advance to secure your preferred installation window.</div>
    </div>
  </div>
</section>

<!-- CTA -->
<section id="cta">
  <img class="cta-bg" src="/images/image_16.jpg" alt="New York City brownstones in autumn" />
  <div class="cta-overlay"></div>
  <div class="cta-inner fade-up">
    <p class="section-eyebrow">Get Started</p>
    <div class="cta-rule"></div>
    <h2>Transform Your <em>Brownstone</em><br />for the Season</h2>
    <p>From a single seasonal wreath to a full four-season exterior transformation — Seasonal Splendor brings warmth, elegance, and craft to every stoop, entry, and façade on the Upper West Side. Schedule your consultation and discover what your brownstone looks like at its most beautiful.</p>
    <div class="cta-btns">
      <a href="/contact" class="btn-gold">Book a Consultation</a>
      <a href="#packages" class="btn-outline-lt">View Packages</a>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-brand">
    <a href="#hero" class="footer-logo">Seasonal Splendor</a>
    <p>Elegant exterior seasonal styling for Upper West Side brownstones in New York City. Serving our neighborhood exclusively.</p>
    <a href="mailto:info@seasonalsplendors.com" class="email">info@seasonalsplendors.com</a>
  </div>
  <div class="footer-col">
    <h5>Navigate</h5>
    <ul>
      <li><a href="#intro">About</a></li>
      <li><a href="#packages">Packages</a></li>
      <li><a href="#gallery">Gallery</a></li>
      <li><a href="#faq">FAQ</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </div>
  <div class="footer-col">
    <h5>Services</h5>
    <ul>
      <li><a href="#packages">Holiday Entry Package</a></li>
      <li><a href="#packages">Holiday Signature</a></li>
      <li><a href="#packages">Four-Season Exterior</a></li>
    </ul>
  </div>
  <div class="footer-col">
    <h5>Follow Us</h5>
    <a href="https://www.instagram.com/seasonal.splendornyc/" target="_blank" rel="noopener" class="footer-instagram-link">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
      </svg>
      @seasonal.splendornyc
    </a>
    <p style="font-size:0.78rem;margin-top:1.2rem;color:rgba(253,250,247,0.4);">Service Area<br />Upper West Side, Manhattan<br />New York City</p>
  </div>
</footer>
<div class="footer-bottom">
  <span>© 2026 Seasonal Splendor. All rights reserved.</span>
  <a href="/privacy-policy">Privacy Policy</a>
</div>
`;

export default function Home() {
  useEffect(() => {
    // Scroll animations
    const fadeEls = document.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" },
    );
    fadeEls.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add("visible");
      } else {
        observer.observe(el);
      }
    });

    // Hamburger menu
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");
    const mobileBackdrop = document.getElementById("mobileBackdrop");

    function openMobileMenu() {
      hamburger.classList.add("open");
      mobileMenu.classList.add("open");
      mobileBackdrop.classList.add("open");
      hamburger.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    }
    function closeMobileMenu() {
      hamburger.classList.remove("open");
      mobileMenu.classList.remove("open");
      mobileBackdrop.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
    hamburger.addEventListener("click", () => {
      hamburger.classList.contains("open")
        ? closeMobileMenu()
        : openMobileMenu();
    });
    mobileBackdrop.addEventListener("click", closeMobileMenu);
    mobileMenu
      .querySelectorAll("a")
      .forEach((a) => a.addEventListener("click", closeMobileMenu));

    // Global functions for inline handlers
    window.toggleFaq = (btn) => {
      const item = btn.parentElement;
      const wasOpen = item.classList.contains("open");
      document
        .querySelectorAll(".faq-item")
        .forEach((i) => i.classList.remove("open"));
      if (!wasOpen) item.classList.add("open");
    };

    const modalForm = document.querySelector("#enquireModal form");
    const originalFormHTML = modalForm.innerHTML;

    window.openModal = (packageName) => {
      // Restore form if a previous submission replaced it with a success/error message
      const form = document.querySelector("#enquireModal form");
      if (!form.querySelector('button[type="submit"]')) {
        form.innerHTML = originalFormHTML;
      } else {
        form.reset();
      }
      document.getElementById("modalTitle").textContent =
        "Enquire — " + packageName;
      document.getElementById("modalPackageField").value = packageName;
      document.getElementById("enquireModal").classList.add("active");
      document.body.style.overflow = "hidden";
    };

    window.closeModal = () => {
      document.getElementById("enquireModal").classList.remove("active");
      document.body.style.overflow = "";
    };

    window.handleFormSubmit = async (e) => {
      e.preventDefault();
      const submitBtn = e.target.querySelector('button[type="submit"]');
      submitBtn.textContent = "Sending…";
      submitBtn.disabled = true;

      const data = {
        name: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        service: [
          document.getElementById("modalPackageField").value,
          document.getElementById("season").value,
        ]
          .filter(Boolean)
          .join(" — "),
        message: document.getElementById("notes").value,
      };

      const { error } = await supabase
        .from("contact_submissions")
        .insert([data]);

      if (!error) {
        fetch(
          "https://ecvsbunmfestnrhfgdjl.supabase.co/functions/v1/resend-email",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
            },
            body: JSON.stringify(data),
          },
        ).catch(console.error);
      }

      e.target.innerHTML = error
        ? `<p style="color:#b94a48;font-size:0.88rem;">Something went wrong. Please try again.</p>`
        : `<div style="padding:1.4rem 1.8rem;background:rgba(28,58,40,0.06);border-left:3px solid var(--gold);font-family:'Cormorant Garamond',serif;font-size:1.1rem;color:var(--green);line-height:1.7;">Thank you for your enquiry! We'll be in touch within 1–2 business days.</div>`;
    };

    const modal = document.getElementById("enquireModal");
    const onModalClick = (e) => {
      if (e.target === modal) window.closeModal();
    };
    modal.addEventListener("click", onModalClick);

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        window.closeModal();
        closeMobileMenu();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      observer.disconnect();
      document.removeEventListener("keydown", onKeyDown);
      modal.removeEventListener("click", onModalClick);
      delete window.toggleFaq;
      delete window.openModal;
      delete window.closeModal;
      delete window.handleFormSubmit;
    };
  }, []);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: bodyHTML }} />
    </>
  );
}
