import { marqueeItems } from "./constants";

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="ab-marquee">
      <div className="ab-marquee-inner">
        {items.map((item, i) => (
          <div key={`${item}-${i}`} className="ab-marquee-item">
            <span className="ab-marquee-dot" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
