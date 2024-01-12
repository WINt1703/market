"use client"

import data from "../../data.json"
import Button from "./Button"
import ProductItem from "@/components/ProductItem"
import { FC, useState } from "react"
import { twJoin } from "tailwind-merge"

type ProductListProps = {
	countItems: number
	className?: string
}

const ProductList: FC<ProductListProps> = ({ countItems, className }) => {
	const [products] = useState(data.products.slice(0, countItems))

	return (
		<div className={twJoin("space-y-16", className)}>
			<div className="grid grid-cols-[repeat(4,250px)] place-content-center gap-4">
				{products.map((p) => (
					<ProductItem key={p.id} {...p} />
				))}
			</div>
			<Button className="mx-auto">Load More</Button>
		</div>
	)
}
export default ProductList
