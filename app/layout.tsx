import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import Footer from "@/components/footer";
import EventbriteInitializer from "@/components/hooks/eventbrite-initializer";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Cue The Light Academy',
  description: 'Let Your Voice Be Heard — A Communication and Confidence Workshop',
  openGraph: {
    title: 'Cue The Light Academy',
    description: 'Let Your Voice Be Heard — A Communication and Confidence Workshop',
    url: 'https://cuethelight.co.uk',
    siteName: 'Cue The Light Academy',
    images: [
      {
        url: 'https://cuethelight.co.uk/og-image.jpeg', // Must be an absolute URL
        width: 1200,
        height: 630,
        alt: 'Headshot of Suzan Kanyinsola',
      },
    ],
    locale: 'en_UK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cue The Light Academy',
    description: 'Let Your Voice Be Heard — A Communication and Confidence Workshop',
    images: ['https://cuethelight.co.uk/og-image.jpeg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        <EventbriteInitializer />
        <div className="min-h-screen bg-background overflow-x-hidden relative">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
