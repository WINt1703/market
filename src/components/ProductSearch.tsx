"use client"

import { FC, useState } from "react"
import { IoMdSearch } from "react-icons/io"
const ProductSearch: FC = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div
      className={`flex items-center gap-x-3 rounded-full border-2 p-1.5 ${
        toggle ? "border-gray-200" : "border-transparent"
      }`}
    >
      <input
        className={`border-b-2 border-gray-200 text-lime-600 outline-none transition-[width] focus:border-info ${
          toggle ? "ml-3 w-52" : "w-0"
        }`}
      />
      <div
        onClick={() => setToggle((previous) => !previous)}
        className="grid h-11 w-11 place-content-center rounded-full bg-info text-white"
      >
        <IoMdSearch size={25} />
      </div>
    </div>
  )
}
export default ProductSearch
