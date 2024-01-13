"use client"

import Rating from "./Rating"
import Typography from "./Typography"
import Product from "@/types/Product"
import Image from "next/image"
import type { FC } from "react"
import { twJoin } from "tailwind-merge"

type ProductItemProps = {
	preview?: boolean
} & Omit<Product, "description">

const ProductItem: FC<ProductItemProps> = ({
	id,
	image,
	name,
	price,
	tag,
	discount,
	rating,
	preview
}) => {
	return (
		<div
			className={twJoin(
				"block min-h-[280px] min-w-[250px] space-y-3 rounded-3xl p-3",
				preview ? "bg-white" : "bg-zinc-100"
			)}>
			<span className="badge badge-primary">{tag}</span>
			<div className="relative mx-auto h-52">
				<Image
					src={image}
					fill
					alt={name}
					className="object-cover drop-shadow-lg"
				/>
			</div>
			<Typography variant="title" className="truncate text-sm">
				{name}
			</Typography>

			<hr />
			<div className="flex w-full justify-between text-sm">
				{discount ? (
					<Typography variant="title" className="text-green-400">
						<span className="font-normal text-gray-400 line-through">
							${price}
						</span>{" "}
						${price - discount}
					</Typography>
				) : (
					<Typography variant="title">${price}</Typography>
				)}
				<Rating disabled grade={rating} name={name + id} stars={5} />
			</div>
		</div>
	)
}
export default ProductItem
