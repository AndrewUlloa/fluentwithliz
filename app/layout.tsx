import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import I18nProvider from "@/components/I18nProvider";
import Header from "@/components/Header";
import MobileQuickActions from "@/components/MobileQuickActions";
import RouteTransition from "@/components/RouteTransition";
import { DrawerProvider } from "@/components/DrawerProvider";
import MobileMenu from "@/components/MobileMenu";

const kalice = localFont({
  src: "../public/Kalice-Trial-Regular.otf",
  variable: "--font-kalice",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fluent with Liz",
  description: "Learn languages fluently with Liz - Your guide to mastering languages and cultural fluency.",
  metadataBase: new URL("https://fluentwithliz.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fluent with Liz",
    description: "Learn languages fluently with Liz - Your guide to mastering languages and cultural fluency.",
    url: "https://fluentwithliz.com",
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
    <html lang="en" className="h-full">
      <body
        className={`${kalice.variable} ${geistMono.variable} antialiased flex flex-col h-full font-sans`}
      >
        <I18nProvider>
          <DrawerProvider>
            <main className="flex-1 overflow-hidden pb-16 lg:pb-0">
              <RouteTransition header={<Header />}>{children}</RouteTransition>
            </main>
            <MobileQuickActions />
            <MobileMenu />
          </DrawerProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
