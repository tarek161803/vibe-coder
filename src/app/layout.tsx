import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Press_Start_2P } from "next/font/google";
import { ServiceWorker } from "@/components/ServiceWorker";
import "./globals.css";

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

const title = "Vibe Coder · Every crash is a lesson";
const description =
  "Jump and slide past React, Docker, Git and 1,100 more technologies. Crash into one and learn what it is.";

export const metadata: Metadata = {
  // Absolute base for the og:image / og:url links. Set NEXT_PUBLIC_SITE_URL in production;
  // without it Next.js falls back to the Vercel deployment URL, or localhost in dev.
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined,
  title,
  description,
  applicationName: "Vibe Coder",
  authors: [{ name: "itarek99", url: "https://github.com/itarek99" }],
  keywords: ["vibe coder", "endless runner", "pixel game", "learn programming", "developer tools", "tech stack"],
  // The share image comes from ./opengraph-image.tsx (and ./twitter-image.tsx).
  openGraph: {
    type: "website",
    siteName: "Vibe Coder",
    title,
    description,
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    site: "@tarek161803",
    creator: "@tarek161803",
  },
  appleWebApp: {
    capable: true,
    title: "Vibe Coder",
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  themeColor: "#05060d",
  width: "device-width",
  initialScale: 1,
  // Draw under the notch / home indicator; .safe-shell pads content back inside the safe area.
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${pressStart.variable} ${jetbrains.variable} h-full antialiased`}>
      <body className="h-full">
        {children}
        <ServiceWorker />
      </body>
    </html>
  );
}
