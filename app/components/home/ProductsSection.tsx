import { products } from "./constants";
import { ProductCard } from "./ProductCard";
import { SectionEyebrow } from "./SectionEyebrow";

export function ProductsSection() {
  return (
    <section id="products" className="ab-products">
      <div className="ab-products-header">
        <div>
          <SectionEyebrow text="Signature Collection" />
          <h2 className="ab-section-title" style={{ marginBottom: 0 }}>
            Best Sellers
          </h2>
        </div>
        <a href="#" className="ab-view-all">
          View All
        </a>
      </div>

      <div className="ab-products-grid">
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </section>
  );
}
