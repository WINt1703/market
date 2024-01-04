import Image from "next/image"
import Link from "next/link"
import type { FC } from "react"
import CartIndicator from "./CartIndicator"
import ProductSearch from "./ProductSearch"
import Typography from "./Typography"

const linkStyle =
  "font-extrabold text-[#274C5B] hover:text-[#5db0d1] active:text-[#036c96]"

const Header: FC = () => {
  return (
    <div className="flex items-center gap-x-24">
      <div className="flex items-center justify-center gap-x-1.5">
        <Image src="/logo.svg" width={30} height={45} alt="logo" />
        <Typography variant="title" className="text-3xl font-bold">
          Organick
        </Typography>
      </div>
      <nav className="space-x-9">
        <Link href="/" className={linkStyle}>
          Home
        </Link>
        <Link href="/about" className={linkStyle}>
          About
        </Link>
        <Link href="/" className={linkStyle}>
          Pages
        </Link>
        <Link href="/shop" className={linkStyle}>
          Shop
        </Link>
        <Link href="/projects" className={linkStyle}>
          Projects
        </Link>
        <Link href="/news" className={linkStyle}>
          News
        </Link>
      </nav>

      <div className="ml-auto flex gap-x-7">
        <ProductSearch />
        <CartIndicator />
      </div>
    </div>
  )
}
export default Header
