import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const bestigia = localFont({
  src: "../../public/fonts/Bestigia-Regular.ttf",
  variable: "--font-bestigia",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mluevents.com"),
  title: "MLU Events | Modern. Luxury. Unique. | Kigali, Rwanda",
  description:
    "MLU Events Ltd is Kigali's premier event planning and management house dedicated to designing bespoke luxury weddings, social celebrations, and executive corporate summits.",
  keywords: [
    "MLU Events",
    "Luxury Weddings Kigali",
    "Rwandan Traditional Wedding Gusaba",
    "Corporate Events Rwanda",
    "Kigali Event Planner",
    "Executive Summits Kigali",
    "Bespoke Events",
  ],
  authors: [{ name: "MLU Events Ltd" }],
  openGraph: {
    title: "MLU Events | Modern. Luxury. Unique. | Kigali, Rwanda",
    description:
      "Crafting extraordinary weddings, traditional celebrations, and high-impact corporate summits across Rwanda.",
    url: "https://mluevents.com",
    siteName: "MLU Events",
    images: [
      {
        url: "/images/hero-wedding.webp",
        width: 1920,
        height: 1080,
        alt: "MLU Events Luxury Experience",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bestigia.variable} scroll-smooth`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className="bg-[#050708] text-[#E4E6E7] antialiased min-h-screen min-h-[100svh]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EventPlanningBusiness",
              name: "MLU Events Ltd",
              description:
                "Premier event planning and management house in Kigali, Rwanda, specializing in luxury weddings, traditional Gusaba ceremonies, and executive corporate summits.",
              url: "https://mluevents.com",
              telephone: "+250787742477",
              email: "mlueventsrw@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kigali",
                addressCountry: "RW",
              },
              sameAs: [
                "https://instagram.com/mluevents",
                "https://tiktok.com/@mluevents1",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
