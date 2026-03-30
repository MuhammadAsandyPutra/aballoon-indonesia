type FooterColumnProps = {
  title: string;
  links: string[];
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="ab-footer-col">
      <div className="ab-footer-col-title">{title}</div>
      <ul>
        {links.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FooterSection() {
  return (
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
          <FooterColumn
            title="Shop"
            links={["All Bouquets", "Best Sellers", "New Arrivals", "Custom Order"]}
          />
          <FooterColumn
            title="Occasions"
            links={["Birthday", "Wedding", "Anniversary", "Corporate"]}
          />
          <FooterColumn
            title="Info"
            links={["About Us", "Delivery Info", "Care Guide", "Contact"]}
          />
        </div>
      </div>

      <div className="ab-footer-bottom">
        <span>© 2025 Aballoon Indonesia. All rights reserved.</span>
        <span>Instagram · WhatsApp</span>
      </div>
    </footer>
  );
}
