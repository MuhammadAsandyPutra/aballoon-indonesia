export function HeroSection() {
  return (
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
          Rangkaian bunga premium dengan sentuhan elegan yang dirancang khusus untuk
          membuat setiap momen terasa lebih berkesan dan tak terlupakan.
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
  );
}
