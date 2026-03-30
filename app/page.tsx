"use client";

import { useEffect, useRef } from "react";

export default function HomePage() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  const marqueeItems = [
    "Premium Bouquets",
    "Custom Orders",
    "Same Day Delivery",
    "Wedding Flowers",
    "Birthday Arrangements",
    "Corporate Events",
    "Aballoon Indonesia",
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

        :root {
          --rose: #C96B7A;
          --rose-light: #F5E6E8;
          --rose-dark: #8B3A47;
          --cream: #FAF7F2;
          --warm-white: #FFFDF9;
          --charcoal: #2C2420;
          --taupe: #8C7B74;
          --gold: #BFA07A;
          --gold-light: #F0E8D8;
          --font-display: 'Cormorant Garamond', Georgia, serif;
          --font-body: 'Jost', sans-serif;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: var(--font-body);
          background: var(--warm-white);
          color: var(--charcoal);
          overflow-x: hidden;
        }

        /* NAV */
        .ab-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 4rem;
          background: rgba(255,253,249,0.92);
          backdrop-filter: blur(12px);
          border-bottom: 0.5px solid rgba(191,160,122,0.25);
        }

        .ab-nav-logo {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 400;
          letter-spacing: 0.08em;
          color: var(--charcoal);
        }

        .ab-nav-logo span { color: var(--rose); }

        .ab-nav-links {
          display: flex;
          gap: 2.5rem;
          list-style: none;
        }

        .ab-nav-links a {
          text-decoration: none;
          font-size: 0.8rem;
          font-weight: 400;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--taupe);
          transition: color 0.3s;
        }

        .ab-nav-links a:hover { color: var(--rose); }

        .ab-nav-cta {
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.6rem 1.6rem;
          background: var(--rose);
          color: white;
          border: none;
          border-radius: 2px;
          cursor: pointer;
          transition: background 0.3s;
        }

        .ab-nav-cta:hover { background: var(--rose-dark); }

        /* HERO */
        .ab-hero {
          min-height: 100vh;
          padding-top: 80px;
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .ab-hero-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 6rem 4rem 6rem 6rem;
        }

        .ab-eyebrow {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .ab-eyebrow::before {
          content: '';
          display: block;
          width: 40px;
          height: 0.5px;
          background: var(--gold);
        }

        .ab-eyebrow span {
          font-size: 0.72rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          font-weight: 400;
        }

        .ab-hero-title {
          font-family: var(--font-display);
          font-size: clamp(3rem, 5vw, 4.5rem);
          font-weight: 300;
          line-height: 1.1;
          color: var(--charcoal);
          margin-bottom: 2rem;
        }

        .ab-hero-title em {
          font-style: italic;
          color: var(--rose);
        }

        .ab-hero-desc {
          font-size: 0.95rem;
          line-height: 1.9;
          color: var(--taupe);
          max-width: 400px;
          margin-bottom: 3rem;
          font-weight: 300;
        }

        .ab-hero-actions {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .ab-btn-primary {
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 1rem 2.5rem;
          background: var(--charcoal);
          color: white;
          border: none;
          border-radius: 1px;
          cursor: pointer;
          transition: background 0.3s, transform 0.2s;
        }

        .ab-btn-primary:hover { background: var(--rose-dark); transform: translateY(-1px); }

        .ab-btn-ghost {
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--taupe);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: color 0.3s;
          background: none;
          border: none;
          cursor: pointer;
        }

        .ab-btn-ghost:hover { color: var(--rose); }
        .ab-btn-ghost::after { content: '→'; }

        .ab-hero-stats {
          display: flex;
          gap: 3rem;
          margin-top: 5rem;
          padding-top: 2.5rem;
          border-top: 0.5px solid rgba(140,123,116,0.2);
        }

        .ab-stat-num {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 300;
          color: var(--charcoal);
        }

        .ab-stat-label {
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          color: var(--taupe);
          text-transform: uppercase;
          margin-top: 0.25rem;
        }

        /* HERO RIGHT */
        .ab-hero-right {
          position: relative;
          background: var(--rose-light);
          overflow: hidden;
        }

        .ab-hero-mosaic {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: 60% 40%;
          grid-template-rows: 55% 45%;
          gap: 3px;
        }

        .ab-mosaic-main {
          grid-row: 1 / 3;
          background: linear-gradient(160deg, #D4858F 0%, #C96B7A 40%, #A34A5A 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 7rem;
        }

        .ab-mosaic-top {
          background: linear-gradient(135deg, #E8C4C0 0%, #D9A5A0 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3.5rem;
        }

        .ab-mosaic-bot {
          background: linear-gradient(135deg, #F5E6E8 0%, #EDD4D6 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
        }

        .ab-hero-badge {
          position: absolute;
          bottom: 2.5rem;
          right: 2rem;
          background: white;
          border-radius: 50%;
          width: 100px;
          height: 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 0.62rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--taupe);
          text-align: center;
          line-height: 1.6;
          box-shadow: 0 4px 24px rgba(44,36,32,0.1);
        }

        .ab-hero-badge strong {
          font-family: var(--font-display);
          font-style: italic;
          font-size: 1rem;
          color: var(--rose);
          font-weight: 400;
          display: block;
          margin-bottom: 4px;
        }

        /* MARQUEE */
        .ab-marquee {
          background: var(--charcoal);
          padding: 1rem 0;
          overflow: hidden;
          display: flex;
          white-space: nowrap;
        }

        .ab-marquee-inner {
          display: flex;
          animation: ab-marquee 22s linear infinite;
        }

        @keyframes ab-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .ab-marquee-item {
          display: inline-flex;
          align-items: center;
          gap: 1.5rem;
          padding: 0 2rem;
          font-size: 0.72rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.6);
        }

        .ab-marquee-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--rose);
          flex-shrink: 0;
          display: inline-block;
        }

        /* SECTION SHARED */
        .ab-section-eyebrow {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .ab-section-eyebrow::before {
          content: '';
          display: block;
          width: 32px;
          height: 0.5px;
          background: var(--gold);
        }

        .ab-section-eyebrow span {
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
        }

        .ab-section-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 300;
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }

        .ab-section-title em { font-style: italic; color: var(--rose); }

        .ab-section-body {
          font-size: 0.9rem;
          line-height: 1.9;
          color: var(--taupe);
          font-weight: 300;
          margin-bottom: 2rem;
        }

        /* ABOUT */
        .ab-about {
          padding: 8rem 6rem;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 8rem;
          align-items: center;
          background: var(--cream);
        }

        .ab-about-visual { position: relative; }

        .ab-about-frame {
          width: 100%;
          aspect-ratio: 3/4;
          background: linear-gradient(160deg, #D4858F 0%, #A34A5A 100%);
          border-radius: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 8rem;
          position: relative;
          overflow: hidden;
        }

        .ab-about-frame::after {
          content: '';
          position: absolute;
          inset: 16px;
          border: 0.5px solid rgba(255,255,255,0.3);
          border-radius: 1px;
        }

        .ab-about-accent {
          position: absolute;
          bottom: -1.5rem;
          right: -1.5rem;
          width: 140px;
          height: 140px;
          background: var(--gold-light);
          border: 0.5px solid var(--gold);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          font-size: 0.85rem;
          font-style: italic;
          color: var(--gold);
          text-align: center;
          line-height: 1.6;
          padding: 1rem;
        }

        /* PRODUCTS */
        .ab-products {
          padding: 8rem 6rem;
          background: var(--warm-white);
        }

        .ab-products-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 4rem;
        }

        .ab-view-all {
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--rose);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .ab-view-all::after { content: '→'; }

        .ab-products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
        }

        .ab-product-card {
          position: relative;
          cursor: pointer;
          overflow: hidden;
          background: var(--cream);
          transition: transform 0.4s cubic-bezier(0.25, 0, 0, 1);
        }

        .ab-product-card:hover { transform: translateY(-4px); }

        .ab-product-img {
          aspect-ratio: 3/4;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 6rem;
          position: relative;
          overflow: hidden;
          transition: transform 0.6s cubic-bezier(0.25, 0, 0, 1);
        }

        .ab-product-card:hover .ab-product-img { transform: scale(1.04); }

        .ab-product-img-rose   { background: linear-gradient(160deg, #E8C4C0 0%, #C96B7A 100%); }
        .ab-product-img-purple { background: linear-gradient(160deg, #D4A8C7 0%, #9B6BA3 100%); }
        .ab-product-img-amber  { background: linear-gradient(160deg, #FAC77F 0%, #E8955A 100%); }

        .ab-product-label {
          position: absolute;
          top: 1rem; left: 1rem;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 0.35rem 0.8rem;
          background: white;
          color: var(--charcoal);
          border-radius: 1px;
        }

        .ab-product-info { padding: 1.5rem; }

        .ab-product-name {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 400;
          margin-bottom: 0.25rem;
        }

        .ab-product-sub {
          font-size: 0.78rem;
          color: var(--taupe);
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
        }

        .ab-product-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .ab-product-price {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 400;
        }

        .ab-product-price span {
          font-size: 0.75rem;
          font-family: var(--font-body);
          color: var(--taupe);
          font-weight: 300;
        }

        .ab-add-btn {
          width: 38px;
          height: 38px;
          background: var(--charcoal);
          color: white;
          border: none;
          border-radius: 1px;
          cursor: pointer;
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s;
          flex-shrink: 0;
        }

        .ab-add-btn:hover { background: var(--rose); }

        /* SERVICES */
        .ab-services {
          padding: 8rem 6rem;
          background: var(--charcoal);
          color: white;
        }

        .ab-services .ab-section-title { color: white; }
        .ab-services .ab-section-body { color: rgba(255,255,255,0.5); }
        .ab-services .ab-section-eyebrow::before { background: var(--rose); }
        .ab-services .ab-section-eyebrow span { color: var(--rose); }

        .ab-services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          margin-top: 4rem;
        }

        .ab-service-item {
          padding: 2.5rem;
          background: rgba(255,255,255,0.03);
          border: 0.5px solid rgba(255,255,255,0.08);
          transition: background 0.3s;
        }

        .ab-service-item:hover { background: rgba(255,255,255,0.06); }

        .ab-service-num {
          font-family: var(--font-display);
          font-size: 3rem;
          font-weight: 300;
          color: rgba(201,107,122,0.3);
          margin-bottom: 1.5rem;
          line-height: 1;
        }

        .ab-service-title {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 400;
          color: white;
          margin-bottom: 0.75rem;
        }

        .ab-service-desc {
          font-size: 0.82rem;
          line-height: 1.8;
          color: rgba(255,255,255,0.45);
          font-weight: 300;
        }

        /* TESTIMONIAL */
        .ab-testimonial {
          padding: 8rem 6rem;
          background: var(--rose-light);
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .ab-testimonial::before {
          content: '"';
          position: absolute;
          top: -2rem;
          left: 50%;
          transform: translateX(-50%);
          font-family: var(--font-display);
          font-size: 18rem;
          font-weight: 300;
          color: rgba(201,107,122,0.1);
          line-height: 1;
          user-select: none;
          pointer-events: none;
        }

        .ab-quote-text {
          font-family: var(--font-display);
          font-size: clamp(1.5rem, 3vw, 2.25rem);
          font-weight: 300;
          font-style: italic;
          line-height: 1.5;
          color: var(--charcoal);
          max-width: 700px;
          margin: 0 auto 2rem;
          position: relative;
          z-index: 1;
        }

        .ab-quote-author {
          font-size: 0.78rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--taupe);
        }

        /* CTA */
        .ab-cta {
          padding: 10rem 6rem;
          background: var(--cream);
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 6rem;
          align-items: center;
        }

        .ab-cta-title {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 4vw, 4rem);
          font-weight: 300;
          line-height: 1.1;
        }

        .ab-cta-title em { font-style: italic; color: var(--rose); }

        .ab-cta-right {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .ab-cta-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .ab-btn-rose {
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 1rem 2rem;
          background: var(--rose);
          color: white;
          border: none;
          border-radius: 1px;
          cursor: pointer;
          transition: background 0.3s;
          text-align: center;
          width: 100%;
        }

        .ab-btn-rose:hover { background: var(--rose-dark); }

        .ab-btn-outline {
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 1rem 2rem;
          background: transparent;
          color: var(--charcoal);
          border: 0.5px solid rgba(44,36,32,0.3);
          border-radius: 1px;
          cursor: pointer;
          transition: border-color 0.3s, color 0.3s;
          text-align: center;
          width: 100%;
        }

        .ab-btn-outline:hover { border-color: var(--rose); color: var(--rose); }

        /* FOOTER */
        .ab-footer {
          background: var(--charcoal);
          color: rgba(255,255,255,0.5);
          padding: 4rem 6rem 2.5rem;
        }

        .ab-footer-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 3rem;
          padding-bottom: 3rem;
          border-bottom: 0.5px solid rgba(255,255,255,0.08);
        }

        .ab-footer-brand {
          font-family: var(--font-display);
          font-size: 1.8rem;
          font-weight: 300;
          color: white;
          letter-spacing: 0.06em;
        }

        .ab-footer-brand span { color: var(--rose); }
        .ab-footer-brand .muted { color: rgba(255,255,255,0.3); }

        .ab-footer-tagline {
          font-size: 0.78rem;
          margin-top: 0.5rem;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.3);
        }

        .ab-footer-links {
          display: flex;
          gap: 5rem;
        }

        .ab-footer-col-title {
          font-size: 0.7rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.6);
          margin-bottom: 1.25rem;
        }

        .ab-footer-col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .ab-footer-col ul a {
          text-decoration: none;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.35);
          transition: color 0.3s;
          font-weight: 300;
        }

        .ab-footer-col ul a:hover { color: var(--rose); }

        .ab-footer-bottom {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: rgba(255,255,255,0.2);
        }

        /* FADE-UP ANIMATION */
        @keyframes ab-fade-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .ab-fade-1 { animation: ab-fade-up 0.8s ease 0.10s forwards; opacity: 0; }
        .ab-fade-2 { animation: ab-fade-up 0.8s ease 0.25s forwards; opacity: 0; }
        .ab-fade-3 { animation: ab-fade-up 0.8s ease 0.40s forwards; opacity: 0; }
        .ab-fade-4 { animation: ab-fade-up 0.8s ease 0.55s forwards; opacity: 0; }
        .ab-fade-5 { animation: ab-fade-up 0.8s ease 0.70s forwards; opacity: 0; }
      `}</style>

      {/* NAV */}
      <nav className="ab-nav">
        <div className="ab-nav-logo">
          A<span>b</span>alloon
        </div>
        <ul className="ab-nav-links">
          <li>
            <a href="#products">Collection</a>
          </li>
          <li>
            <a href="#services">Occasions</a>
          </li>
          <li>
            <a href="#">Custom Order</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
        <button className="ab-nav-cta">Order Now</button>
      </nav>

      {/* HERO */}
      <section className="ab-hero">
        <div className="ab-hero-left">
          <div className="ab-eyebrow ab-fade-1">
            <span>Premium Florist · Est. Indonesia</span>
          </div>

          <h1 className="ab-hero-title ab-fade-2">
            Elegant Blooms
            <br />
            for <em>Every</em>
            <br />
            Special Moment
          </h1>

          <p className="ab-hero-desc ab-fade-3">
            Rangkaian bunga premium dengan sentuhan elegan yang dirancang khusus
            untuk membuat setiap momen terasa lebih berkesan dan tak terlupakan.
          </p>

          <div className="ab-hero-actions ab-fade-4">
            <button className="ab-btn-primary">Explore Collection</button>
            <button className="ab-btn-ghost">View Lookbook</button>
          </div>

          <div className="ab-hero-stats ab-fade-5">
            <div>
              <div className="ab-stat-num">500+</div>
              <div className="ab-stat-label">Bouquets Delivered</div>
            </div>
            <div>
              <div className="ab-stat-num">98%</div>
              <div className="ab-stat-label">Happy Customers</div>
            </div>
            <div>
              <div className="ab-stat-num">5★</div>
              <div className="ab-stat-label">Avg. Rating</div>
            </div>
          </div>
        </div>

        <div className="ab-hero-right">
          <div className="ab-hero-mosaic">
            <div className="ab-mosaic-main">🌸</div>
            <div className="ab-mosaic-top">🌷</div>
            <div className="ab-mosaic-bot">🌺</div>
          </div>
          <div className="ab-hero-badge">
            <strong>Fresh</strong>
            Same Day
            <br />
            Delivery
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="ab-marquee">
        <div className="ab-marquee-inner">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="ab-marquee-item">
              <span className="ab-marquee-dot" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section className="ab-about">
        <div className="ab-about-visual">
          <div className="ab-about-frame">🌹</div>
          <div className="ab-about-accent">
            Crafted
            <br />
            with Love
            <br />& Care
          </div>
        </div>
        <div>
          <div className="ab-section-eyebrow">
            <span>Our Philosophy</span>
          </div>
          <h2 className="ab-section-title">
            Beauty is in
            <br />
            the <em>details</em>
          </h2>
          <p className="ab-section-body">
            Setiap rangkaian bunga yang kami ciptakan adalah sebuah karya seni
            yang dirancang dengan penuh dedikasi. Kami memilih bunga segar
            terbaik dan merangkainya dengan tangan yang terampil untuk
            memastikan setiap detail sempurna.
          </p>
          <p className="ab-section-body">
            Dari pemilihan bunga hingga presentasi akhir, kami berkomitmen untuk
            menghadirkan pengalaman premium yang tak tertandingi.
          </p>
          <button className="ab-btn-primary">Our Story</button>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="ab-products">
        <div className="ab-products-header">
          <div>
            <div className="ab-section-eyebrow">
              <span>Signature Collection</span>
            </div>
            <h2 className="ab-section-title" style={{ marginBottom: 0 }}>
              Best Sellers
            </h2>
          </div>
          <a href="#" className="ab-view-all">
            View All
          </a>
        </div>

        <div className="ab-products-grid">
          {[
            {
              emoji: "🌸",
              colorClass: "ab-product-img-rose",
              label: "Best Seller",
              name: "Rose Elegance",
              sub: "Premium Red Rose Bouquet",
              price: "150.000",
            },
            {
              emoji: "💜",
              colorClass: "ab-product-img-purple",
              label: "New Arrival",
              name: "Lavender Dream",
              sub: "Purple Mixed Arrangement",
              price: "185.000",
            },
            {
              emoji: "🌻",
              colorClass: "ab-product-img-amber",
              label: "Seasonal Pick",
              name: "Sunrise Bloom",
              sub: "Warm Tones Wildflower Mix",
              price: "165.000",
            },
          ].map((p) => (
            <div key={p.name} className="ab-product-card">
              <div className={`ab-product-img ${p.colorClass}`}>
                {p.emoji}
                <div className="ab-product-label">{p.label}</div>
              </div>
              <div className="ab-product-info">
                <div className="ab-product-name">{p.name}</div>
                <div className="ab-product-sub">{p.sub}</div>
                <div className="ab-product-footer">
                  <div className="ab-product-price">
                    <span>Rp</span> {p.price}
                  </div>
                  <button className="ab-add-btn">+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="ab-services">
        <div style={{ maxWidth: 500, marginBottom: "1rem" }}>
          <div className="ab-section-eyebrow">
            <span>What We Offer</span>
          </div>
          <h2 className="ab-section-title">
            A full <em>floral</em> experience
          </h2>
          <p className="ab-section-body">
            Dari momen sederhana hingga perayaan besar, kami hadir dengan solusi
            floral yang sempurna.
          </p>
        </div>

        <div className="ab-services-grid">
          {[
            {
              num: "01",
              title: "Custom Bouquets",
              desc: "Rangkaian bunga yang dibuat khusus sesuai selera dan kebutuhan Anda, dirakit dengan tangan oleh ahli kami.",
            },
            {
              num: "02",
              title: "Same-Day Delivery",
              desc: "Pesan sebelum pukul 12 siang dan bouquet Anda akan tiba di tujuan hari itu juga, selalu dalam kondisi segar.",
            },
            {
              num: "03",
              title: "Event Floristry",
              desc: "Dekorasi bunga premium untuk pernikahan, ulang tahun, dan acara korporat yang tak terlupakan.",
            },
          ].map((s) => (
            <div key={s.num} className="ab-service-item">
              <div className="ab-service-num">{s.num}</div>
              <div className="ab-service-title">{s.title}</div>
              <div className="ab-service-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="ab-testimonial">
        <p className="ab-quote-text">
          "Bouquet yang saya pesan jauh melampaui ekspektasi. Setiap detail
          terasa begitu personal dan penuh kasih sayang — seperti menerima
          sebuah karya seni."
        </p>
        <p className="ab-quote-author">
          — Sari Dewi, Jakarta · Pelanggan Setia
        </p>
      </section>

      {/* CTA */}
      <section className="ab-cta">
        <div>
          <h2 className="ab-cta-title">
            Make someone
            <br />
            smile <em>today</em>
          </h2>
        </div>
        <div className="ab-cta-right">
          <p className="ab-section-body" style={{ marginBottom: 0 }}>
            Kirim bouquet spesial untuk orang tersayang sekarang juga. Setiap
            rangkaian bunga kami adalah ungkapan perasaan yang tak terucap
            melalui kata-kata.
          </p>
          <div className="ab-cta-buttons">
            <button className="ab-btn-rose">Order Now via WhatsApp</button>
            <button className="ab-btn-outline">Browse Full Collection</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="ab-footer">
        <div className="ab-footer-top">
          <div>
            <div className="ab-footer-brand">
              A<span>b</span>alloon <span className="muted">Indonesia</span>
            </div>
            <div className="ab-footer-tagline">
              Premium Florist · Handcrafted with Love
            </div>
          </div>

          <div className="ab-footer-links">
            <div className="ab-footer-col">
              <div className="ab-footer-col-title">Shop</div>
              <ul>
                <li>
                  <a href="#">All Bouquets</a>
                </li>
                <li>
                  <a href="#">Best Sellers</a>
                </li>
                <li>
                  <a href="#">New Arrivals</a>
                </li>
                <li>
                  <a href="#">Custom Order</a>
                </li>
              </ul>
            </div>
            <div className="ab-footer-col">
              <div className="ab-footer-col-title">Occasions</div>
              <ul>
                <li>
                  <a href="#">Birthday</a>
                </li>
                <li>
                  <a href="#">Wedding</a>
                </li>
                <li>
                  <a href="#">Anniversary</a>
                </li>
                <li>
                  <a href="#">Corporate</a>
                </li>
              </ul>
            </div>
            <div className="ab-footer-col">
              <div className="ab-footer-col-title">Info</div>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Delivery Info</a>
                </li>
                <li>
                  <a href="#">Care Guide</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="ab-footer-bottom">
          <span>© 2025 Aballoon Indonesia. All rights reserved.</span>
          <span>Instagram · WhatsApp</span>
        </div>
      </footer>
    </>
  );
}
