const projects = [
  {
    name: "Inferno Dashboard",
    stack: "Next.js, Node.js, PostgreSQL",
    result: "Schnelles Admin-Panel mit klaren KPIs, Dark-UX und stabilen Deployments."
  },
  {
    name: "Arena Match Platform",
    stack: "React, WebSocket, Express",
    result: "Realtime-Plattform mit Live-Updates und starker Performance unter Last."
  },
  {
    name: "Portfolio Forge",
    stack: "Next.js, CSS, Motion UI",
    result: "Visuell markante Portfolio-Site mit hoher Wiedererkennung."
  },
  {
    name: "CodeOps Toolchain",
    stack: "Docker, CI/CD, GitHub Actions",
    result: "Automatisierter Build- und Release-Prozess mit weniger Fehlern."
  }
];

export default function ProjektePage() {
  return (
    <main className="pageShell">
      <section className="sectionCard hotBorder">
        <p className="tag">SHOWCASE</p>
        <h1 className="pageTitle">Projekte mit Impact</h1>
        <p className="heroText">
          Keine Standard-Baukasten-Sachen, sondern technische Umsetzung mit
          Fokus auf Wirkung, Tempo und Klarheit.
        </p>
      </section>

      <section className="sectionCard">
        <div className="projects projectsWide">
          {projects.map((project) => (
            <article key={project.name} className="projectCard">
              <h3>{project.name}</h3>
              <p className="metaLine">{project.stack}</p>
              <p>{project.result}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
