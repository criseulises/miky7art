import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.miky7art.com"),
  title: "Miky7Art - Diseño Gráfico & Arte Digital Profesional",
  description: "Transformamos ideas en creaciones visuales únicas. Especialistas en diseño vectorial, ilustración digital, edición fotográfica y portadas profesionales. Soluciones creativas personalizadas para tu marca.",
  keywords: ["diseño gráfico", "arte digital", "ilustración", "diseño vectorial", "edición fotográfica", "portadas", "identidad visual", "Miky7Art", "República Dominicana", "Santo Domingo", "RD"],
  authors: [{ name: "Miky7Art" }],
  creator: "Miky7Art",
  publisher: "Miky7Art",
  openGraph: {
    title: "Miky7Art - Diseño Gráfico & Arte Digital",
    description: "Creaciones visuales únicas y profesionales. Diseño personalizado desde ilustraciones hasta edición fotográfica.",
    url: "https://www.miky7art.com",
    siteName: "Miky7Art",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Miky7Art - Diseño Gráfico & Arte Digital",
    description: "Transformamos ideas en creaciones visuales únicas",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${poppins.variable} antialiased`} style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
