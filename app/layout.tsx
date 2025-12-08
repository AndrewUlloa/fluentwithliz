import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import I18nProvider from "@/components/I18nProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileQuickActions from "@/components/MobileQuickActions";
import RouteTransition from "@/components/RouteTransition";
import { DrawerProvider } from "@/components/DrawerProvider";
import MobileMenu from "@/components/MobileMenu";
import { ThemeScript } from "@/components/ThemeScript";
import { ThemeProvider } from "@/components/ThemeProvider";

const kalice = localFont({
  src: "../public/Kalice-Trial-Regular.otf",
  variable: "--font-kalice",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Get the base URL - use VERCEL_URL if available, otherwise fall back to NEXT_PUBLIC_SITE_URL or a default
const getBaseUrl = () => {
  // Vercel automatically provides VERCEL_URL (without protocol)
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  // Allow manual override via environment variable
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  // Fallback (you can update this with your actual Vercel project URL)
  return "https://my-app.vercel.app";
};

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  title: "Fluent with Liz",
  description: "Learn languages fluently with Liz - Your guide to mastering languages and cultural fluency.",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fluent with Liz",
    description: "Learn languages fluently with Liz - Your guide to mastering languages and cultural fluency.",
    url: baseUrl,
    siteName: "Fluent with Liz",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fluent with Liz",
    description: "Learn languages fluently with Liz - Your guide to mastering languages and cultural fluency.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={`${kalice.variable} ${geistMono.variable} antialiased flex flex-col h-full font-sans`}
      >
        <ThemeScript />
        <ThemeProvider>
          <I18nProvider>
            <DrawerProvider>
              <main className="flex-1 overflow-y-auto min-h-0 pb-16 lg:pb-0">
                <RouteTransition header={<Header />}>{children}</RouteTransition>
              </main>
              <Footer />
              <MobileQuickActions />
              <MobileMenu />
            </DrawerProvider>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
