import Link from "next/link"
import type { FC } from "react"
import CartIndicator from "./CartIndicator"
import Logo from "./Logo"
import ProductSearch from "./ProductSearch"

const linkStyle =
  "font-extrabold text-primary hover:text-primary-100 active:text-primary-300"

const Header: FC = () => {
  return (
    <div className="flex items-center gap-x-24">
      <Logo />
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
