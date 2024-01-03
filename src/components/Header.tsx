import Image from "next/image"
import Link from "next/link"
import type { FC } from "react"
import CartIndicator from "./CartIndicator"
import ProductSearch from "./ProductSearch"
import Typography from "./Typography"

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
        <Link href="/" className="font-extrabold text-[#274C5B]">
          Home
        </Link>
        <Link href="/about" className="font-extrabold text-[#274C5B]">
          About
        </Link>
        <Link href="/" className="font-extrabold text-[#274C5B]">
          Pages
        </Link>
        <Link href="/shop" className="font-extrabold text-[#274C5B]">
          Shop
        </Link>
        <Link href="/projects" className="font-extrabold text-[#274C5B]">
          Projects
        </Link>
        <Link href="/news" className="font-extrabold text-[#274C5B]">
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
