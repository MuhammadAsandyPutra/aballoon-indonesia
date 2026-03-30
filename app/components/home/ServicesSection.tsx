import { services } from "./constants";
import { SectionEyebrow } from "./SectionEyebrow";
import { ServiceCard } from "./ServiceCard";

export function ServicesSection() {
  return (
    <section id="services" className="ab-services">
      <div style={{ maxWidth: 500, marginBottom: "1rem" }}>
        <SectionEyebrow text="What We Offer" />
        <h2 className="ab-section-title">
          A full <em>floral</em> experience
        </h2>
        <p className="ab-section-body">
          Dari momen sederhana hingga perayaan besar, kami hadir dengan solusi floral
          yang sempurna.
        </p>
      </div>

      <div className="ab-services-grid">
        {services.map((service) => (
          <ServiceCard key={service.num} service={service} />
        ))}
      </div>
    </section>
  );
}
