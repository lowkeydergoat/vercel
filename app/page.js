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
        </div>
      </section>
    </main>
  );
}
