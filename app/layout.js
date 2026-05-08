export const metadata = {
  title: "Next.js Hello World",
  description: "Eine einfache Next.js Website mit Hello World."
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
