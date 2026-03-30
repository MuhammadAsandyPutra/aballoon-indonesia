import type { Product } from "./constants";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="ab-product-card">
      <div className={`ab-product-img ${product.colorClass}`}>
        {product.emoji}
        <div className="ab-product-label">{product.label}</div>
      </div>
      <div className="ab-product-info">
        <div className="ab-product-name">{product.name}</div>
        <div className="ab-product-sub">{product.sub}</div>
        <div className="ab-product-footer">
          <div className="ab-product-price">
            <span>Rp</span> {product.price}
          </div>
          <button className="ab-add-btn">+</button>
        </div>
      </div>
    </div>
  );
}
