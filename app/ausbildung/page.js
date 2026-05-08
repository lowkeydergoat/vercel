const education = [
  {
    title: "Gymnasium",
    duration: "4 Jahre",
    details:
      "Stabile Grundlagen in Mathematik, Logik und strukturiertem Arbeiten."
  },
  {
    title: "HTL",
    duration: "4 Jahre",
    details:
      "Technische Vertiefung mit Fokus auf Programmierung, Systeme und Projektarbeit."
  }
];

export default function AusbildungPage() {
  return (
    <main className="pageShell">
      <section className="sectionCard hotBorder">
        <p className="tag">EDUCATION</p>
        <h1 className="pageTitle">Ausbildung</h1>
        <p className="heroText">
          Mein Weg: 4 Jahre Gymnasium und danach 4 Jahre HTL, mit klarer
          technischer Ausrichtung Richtung Softwareentwicklung.
        </p>
      </section>

      <section className="sectionCard">
        <div className="timeline">
          {education.map((item) => (
            <article key={item.title} className="timelineItem">
              <p className="timelineYear">{item.duration}</p>
              <h3>{item.title}</h3>
              <p>{item.details}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
