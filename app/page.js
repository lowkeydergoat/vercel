const technologies = ["Next.js", "React", "JavaScript", "CSS"];

export default function HomePage() {
  return (
    <main className="container">
      <h1>Hello World</h1>
      <p>Willkommen auf deiner Next.js-Website.</p>

      <section className="techSection">
        <h2>Technologien</h2>
        <ul>
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
