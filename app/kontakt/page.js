export default function KontaktPage() {
  return (
    <main className="pageShell">
      <section className="sectionCard hotBorder contactCard">
        <p className="tag">CONNECT</p>
        <h1 className="pageTitle">Kontakt</h1>
        <p className="heroText">
          Wenn du ein Projekt starten willst: ich bin bereit, von Idee bis Launch.
        </p>
        <a className="mailLink" href="mailto:stefan.dev@futurecode.io">
          stefan.dev@futurecode.io
        </a>
      </section>

      <section className="sectionCard">
        <div className="projects">
          <article className="projectCard">
            <h3>Leistung</h3>
            <p>Frontend, Backend, Design-Fokus und saubere Implementierung.</p>
          </article>
          <article className="projectCard">
            <h3>Arbeitsweise</h3>
            <p>Klar, schnell, direkt mit Fokus auf Qualität.</p>
          </article>
          <article className="projectCard">
            <h3>Verfügbarkeit</h3>
            <p>Flexible Zusammenarbeit für Schul- und Side-Projekte.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
