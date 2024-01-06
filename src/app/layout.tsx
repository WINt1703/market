import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Newsletter from "@/components/Newsletter"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import { FC, PropsWithChildren } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Organick",
  description: "Best organic market",
}

const defaultFont = Roboto({
  weight: "400",
  subsets: ["latin"],
})

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={defaultFont.className}>
        <div className="mx-[120px] my-[50px]">
          <Header />
        </div>
        {children}
        <div className="my-20 flex justify-center">
          <Newsletter />
        </div>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
