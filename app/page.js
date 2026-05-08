<<<<<<< HEAD
export default function Lebenslauf() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">
          Lukas Hecher
        </h1>

        <p className="text-xl text-purple-400 mb-8">
          Professioneller Gamer | WoW-Legende | Fortnite-Taktiker | E-Sport-Talent
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-3xl font-semibold mb-2">Profil</h2>
            <p>
              Lukas Hecher ist ein ambitionierter Gamer mit außergewöhnlichem
              Spielverständnis, starker Reaktionszeit und kompromisslosem
              Siegeswillen. Spezialisiert auf World of Warcraft, Fortnite und
              kompetitives Gaming, verbindet er mechanisches Können mit Strategie,
              Teamplay und mentaler Stärke.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-2">Gaming-Erfahrung</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>World of Warcraft: Raid-Erfahrung, PvP, Klassenverständnis und Teamkoordination</li>
              <li>Fortnite: Schnelles Bauen, präzises Aim, Rotationen und Endgame-Strategien</li>
              <li>E-Sport: Fokus auf Kommunikation, Analyse und konstante Verbesserung</li>
              <li>Gaming-Mindset: Ruhig unter Druck, lernfähig und leistungsorientiert</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-2">Skills</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Reaktionsschnelligkeit</li>
              <li>Strategisches Denken</li>
              <li>Teamkommunikation</li>
              <li>Shotcalling</li>
              <li>Map Awareness</li>
              <li>Mechanisches Gameplay</li>
              <li>Analyse von Gegnern und Spielsituationen</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-2">Ziele</h2>
            <p>
              Aufbau einer starken Gaming-Präsenz, Teilnahme an Turnieren,
              Weiterentwicklung im E-Sport-Bereich und Etablierung als ernstzunehmender
              Spieler in der kompetitiven Szene.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-2">Sprachen</h2>
            <ul className="list-disc list-inside">
              <li>Deutsch: Muttersprache</li>
              <li>Englisch: Gaming- und Teamkommunikation</li>
            </ul>
          </section>
=======
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="pageShell">
      <section className="hero sectionCard hotBorder">
        <p className="tag">PROGRAMMIERER · STEFAN · DARK MODE ENERGY</p>
        <h1>
          Ich baue brutale
          <span> Web-Erlebnisse mit Druck.</span>
        </h1>
        <p className="heroText">
          Fokus auf Performance, harte Visuals und saubere Architektur. Diese
          Seite ist extra übertrieben gebaut: dunkelrot, schwarz, dunkelbraun
          und mit mehreren Bereichen für Skills, Projekte und Ausbildung.
        </p>

        <div className="heroActions">
          <Link href="/projekte" className="btn btnPrimary">
            Projekte
          </Link>
          <Link href="/ausbildung" className="btn btnGhost">
            Ausbildung
          </Link>
          <Link href="/kontakt" className="btn btnGhost">
            Kontakt
          </Link>
        </div>

        <div className="stats">
          <article>
            <strong>4</strong>
            <span>Jahre Gymnasium</span>
          </article>
          <article>
            <strong>4</strong>
            <span>Jahre HTL</span>
          </article>
          <article>
            <strong>∞</strong>
            <span>Code-Hunger</span>
          </article>
          <article>
            <strong>24/7</strong>
            <span>Build-Modus</span>
          </article>
          <article>
            <strong>100%</strong>
            <span>Fokus</span>
          </article>
          <article>
            <strong>RED</strong>
            <span>Design-Ton</span>
          </article>
        </div>
      </section>

      <section className="sectionCard">
        <h2>Was dich auf den Seiten erwartet</h2>
        <div className="projects">
          <article className="projectCard">
            <h3>/projekte</h3>
            <p>
              Meine stärksten Arbeiten mit Stack, Rolle und Outcome im
              Showcase-Format.
            </p>
          </article>
          <article className="projectCard">
            <h3>/skills</h3>
            <p>
              Skills als Kategorien: Frontend, Backend, Tools, Deployment und
              Performance.
            </p>
          </article>
          <article className="projectCard">
            <h3>/ausbildung</h3>
            <p>
              Klarer Bildungsweg mit 4 Jahren Gymnasium und 4 Jahren HTL.
            </p>
          </article>
        </div>
      </section>

      <section className="sectionCard contactCard">
        <h2>Direkter Einstieg</h2>
        <p>
          Wenn du direkt starten willst: schau in Projekte oder schreib mir
          direkt.
        </p>
        <div className="heroActions">
          <Link href="/projekte" className="btn btnPrimary">
            Direkt zu Projekte
          </Link>
          <Link href="/kontakt" className="btn btnGhost">
            Direkt zu Kontakt
          </Link>
>>>>>>> 197eb05 (xalas)
        </div>
      </section>
    </main>
  );
}
