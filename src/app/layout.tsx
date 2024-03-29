import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"

export const metadata: Metadata = {
  title: "Organick",
  description: "Best organic market",
}

const defaultFont = Roboto({
  weight: "400",
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={defaultFont.className}>{children}</body>
    </html>
  )
}
