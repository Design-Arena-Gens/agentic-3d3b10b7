import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Intelliwave ? Agence de cr?ation de chatbots sur mesure",
  description:
    "Intelliwave con?oit des chatbots IA sur mesure. Design minimaliste, UX soign?e et int?gration rapide.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
