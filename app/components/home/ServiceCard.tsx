import type { Service } from "./constants";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="ab-service-item">
      <div className="ab-service-num">{service.num}</div>
      <div className="ab-service-title">{service.title}</div>
      <div className="ab-service-desc">{service.desc}</div>
    </div>
  );
}
