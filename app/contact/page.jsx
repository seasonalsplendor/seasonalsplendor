"use client";

import { useState } from "react";
import supabase from "../../lib/supabase";
import styles from "./page.module.css";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    address: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    const { error } = await supabase.from("contact_submissions").insert([form]);
    if (error) {
      setStatus("error");
      return;
    }
    fetch(
      "https://ecvsbunmfestnrhfgdjl.supabase.co/functions/v1/resend-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(form),
      },
    ).catch(console.error);
    setStatus("success");
  };

  return (
    <div className={styles.page}>
      <nav>
        <a href="/" className={styles.navLogo}>
          Seasonal Splendor
        </a>
        <ul className={styles.navLinks}>
          <li>
            <a href="/#intro">About</a>
          </li>
          <li>
            <a href="/#packages">Packages</a>
          </li>
          <li>
            <a href="/#gallery">Gallery</a>
          </li>
          <li>
            <a href="/#faq">FAQ</a>
          </li>
          <li>
            <a href="/contact" className={styles.navCta}>
              Book a Consultation
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles.pageHero}>
        <p className={styles.sectionLabel}>Get in Touch</p>
        <h1>
          Let's Transform
          <br />
          <em>Your Home</em>
        </h1>
        <p>
          Tell us about your space and we'll craft a seasonal styling plan just
          for you.
        </p>
      </div>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            <div>
              <p className={styles.sectionLabel}>Contact Us</p>
              <h2 className={styles.sectionTitle}>
                We'd Love to
                <br />
                <em>Hear From You</em>
              </h2>
              <div className={styles.divider} />
              <p className={styles.contactBody}>
                Whether you're ready to book or just exploring options, we're
                happy to answer questions and help you find the right package
                for your home.
              </p>
              <div className={styles.contactDetail}>
                <div className={styles.contactDetailItem}>
                  <span className={styles.contactDetailLabel}>Email</span>
                  <span className={styles.contactDetailValue}>
                    info@seasonalsplendors.com
                  </span>
                </div>
                <div className={styles.contactDetailItem}>
                  <span className={styles.contactDetailLabel}>
                    Service Area
                  </span>
                  <span className={styles.contactDetailValue}>
                    Upper West Side, New York City
                  </span>
                </div>
                <div className={styles.contactDetailItem}>
                  <span className={styles.contactDetailLabel}>
                    Response Time
                  </span>
                  <span className={styles.contactDetailValue}>
                    Within 1–2 business days
                  </span>
                </div>
              </div>
            </div>

            <div>
              {status === "success" ? (
                <div className={styles.formSuccess}>
                  Thank you for reaching out! We've received your message and
                  will be in touch within 1–2 business days to discuss your
                  seasonal styling.
                </div>
              ) : (
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Full Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Jane Smith"
                        required
                        value={form.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email Address</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="jane@example.com"
                        required
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (212) 000-0000"
                        required
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="service">Package of Interest</label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={form.service}
                        onChange={handleChange}
                      >
                        <option value="" disabled>Select a package…</option>
                        <option value="brownstone-entry">
                          Brownstone Entry Package
                        </option>
                        <option value="holiday-signature">
                          Holiday Signature Package
                        </option>
                        <option value="four-season">
                          Four-Season Exterior Package
                        </option>
                        <option value="not-sure">Not Sure Yet</option>
                      </select>
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="address">Brownstone Address (UWS)</label>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      placeholder="123 W 87th St, New York, NY"
                      required
                      value={form.address}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="message">Tell Us About Your Home</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Share details about your space, style preferences, or any questions you have…"
                      required
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? "Sending…" : "Send Message"}
                  </button>
                  {status === "error" && (
                    <p className={styles.formError}>
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className={styles.footerBrand}>
          <a href="/" className={styles.footerLogo}>
            Seasonal Splendor
          </a>
          <p>
            Elegant exterior seasonal styling for Upper West Side brownstones in
            New York City. Serving our neighborhood exclusively.
          </p>
          <a
            href="mailto:info@seasonalsplendors.com"
            className={styles.footerEmail}
          >
            info@seasonalsplendors.com
          </a>
        </div>
        <div className={styles.footerCol}>
          <h5>Navigate</h5>
          <ul>
            <li>
              <a href="/#intro">About</a>
            </li>
            <li>
              <a href="/#packages">Packages</a>
            </li>
            <li>
              <a href="/#gallery">Gallery</a>
            </li>
            <li>
              <a href="/#faq">FAQ</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h5>Services</h5>
          <ul>
            <li>
              <a href="/#packages">Holiday Entry Package</a>
            </li>
            <li>
              <a href="/#packages">Holiday Signature</a>
            </li>
            <li>
              <a href="/#packages">Four-Season Exterior</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h5>Follow Us</h5>
          <a
            href="https://www.instagram.com/seasonal.splendornyc/"
            target="_blank"
            rel="noopener"
            className={styles.footerInstagramLink}
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="17.5"
                cy="6.5"
                r="0.8"
                fill="currentColor"
                stroke="none"
              />
            </svg>
            @seasonal.splendornyc
          </a>
          <p
            style={{
              fontSize: "0.78rem",
              marginTop: "1.2rem",
              color: "rgba(253,250,247,0.4)",
            }}
          >
            Service Area
            <br />
            Upper West Side, Manhattan
            <br />
            New York City
          </p>
        </div>
      </footer>
      <div className={styles.footerBottom}>
        <span>© 2026 Seasonal Splendor. All rights reserved.</span>
        <a href="/privacy-policy">Privacy Policy</a>
      </div>
    </div>
  );
}
