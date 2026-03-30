import { SectionEyebrow } from "./SectionEyebrow";

export function AboutSection() {
  return (
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
        <SectionEyebrow text="Our Philosophy" />
        <h2 className="ab-section-title">
          Beauty is in
          <br />
          the <em>details</em>
        </h2>
        <p className="ab-section-body">
          Setiap rangkaian bunga yang kami ciptakan adalah sebuah karya seni yang
          dirancang dengan penuh dedikasi. Kami memilih bunga segar terbaik dan
          merangkainya dengan tangan yang terampil untuk memastikan setiap detail
          sempurna.
        </p>
        <p className="ab-section-body">
          Dari pemilihan bunga hingga presentasi akhir, kami berkomitmen untuk
          menghadirkan pengalaman premium yang tak tertandingi.
        </p>
        <button className="ab-btn-primary">Our Story</button>
      </div>
    </section>
  );
}
