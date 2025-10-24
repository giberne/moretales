import type { Metadata } from "next";
import { Outfit, DM_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Moretales Archive",
  description: "Archive et portfolio de direction artistique de la marque Moretales Couture. Une vitrine minimaliste présentant les collections Genesis Tale et Pixel Tale.",
  keywords: ["Moretales", "Thomas giberné", "Giberne", "Akisama", "streetwear", "fashion", "archive", "direction artistique", "Genesis Tale", "Pixel Tale"],
  authors: [{ name: "Akisama" }],
  openGraph: {
    title: "Moretales Archive",
    description: "Archive de la marque Moretales Couture",
    url: "https://moretales.akisama.fr",
    siteName: "Moretales Archive",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${outfit.variable} ${dmSans.variable} ${ibmPlexMono.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
