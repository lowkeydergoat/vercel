import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Stefan | Brutal CV",
  description: "Übertriebene mehrseitige CV-Website in dunkelrot/schwarz."
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <div className="globalBg" aria-hidden />
        <header className="topNavWrap">
          <nav className="topNav">
            <Link href="/" className="brand">
              STEFAN.DEV
            </Link>
            <div className="navLinks">
              <Link href="/">Home</Link>
              <Link href="/projekte">Projekte</Link>
              <Link href="/skills">Skills</Link>
              <Link href="/ausbildung">Ausbildung</Link>
              <Link href="/kontakt">Kontakt</Link>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
