import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Amber Educational Consultant",
  description: "Visa consultant",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}
      >
        {children}

        {/* Floating WhatsApp Button (Global) */}
        <a
          href="https://wa.me/923291406836?text=Hello%20Amber%20Consultants,%20I%20need%20guidance%20for%20study%20abroad."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl text-white shadow-xl transition hover:bg-green-600"
        >
          💬
        </a>

        <Analytics />
      </body>
    </html>
  )
}
