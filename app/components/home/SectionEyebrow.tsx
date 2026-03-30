type SectionEyebrowProps = {
  text: string;
  className?: string;
};

export function SectionEyebrow({ text, className }: SectionEyebrowProps) {
  const cssClass = className ? `ab-section-eyebrow ${className}` : "ab-section-eyebrow";

  return (
    <div className={cssClass}>
      <span>{text}</span>
    </div>
  );
}
