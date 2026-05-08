const skillGroups = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "JavaScript", "CSS", "Responsive UI"]
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "REST APIs", "SQL Basics"]
  },
  {
    title: "Tools",
    items: ["Git", "Docker", "VS Code / Cursor", "Figma", "Postman"]
  },
  {
    title: "Mindset",
    items: ["Sauberer Code", "Lernspeed", "Teamarbeit", "Fehleranalyse"]
  }
];

export default function SkillsPage() {
  return (
    <main className="pageShell">
      <section className="sectionCard hotBorder">
        <p className="tag">STACK</p>
        <h1 className="pageTitle">Skills & Tech DNA</h1>
      </section>

      <section className="sectionCard gridTwo">
        {skillGroups.map((group) => (
          <article key={group.title} className="timelineItem">
            <h3>{group.title}</h3>
            <div className="chips">
              {group.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
