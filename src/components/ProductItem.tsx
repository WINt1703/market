"use client"

import Rating from "./Rating"
import Typography from "./Typography"
import { ProductFragment } from "@/shopify/generated"
import Image from "next/image"
import type { FC } from "react"
import { twJoin } from "tailwind-merge"

type ProductItemProps = {
	preview?: boolean
} & Omit<ProductFragment, "description" | "seo" | "__typename">

const ProductItem: FC<ProductItemProps> = ({
	id,
	totalInventory,
	availableForSale,
	tags,
	priceRange,
	compareAtPriceRange,
	title,
	featuredImage,
	preview
}) => {
	return (
		<div
			className={twJoin(
				"block min-h-[280px] min-w-[250px] space-y-3 rounded-3xl p-3",
				preview ? "bg-white" : "bg-zinc-100"
			)}>
			<div className="flex justify-between">
				<span className="badge badge-primary">{tags[0] || "Organic"}</span>
				{availableForSale ? (
					<span className="badge badge-info text-white">
						{totalInventory} in stock
					</span>
				) : (
					<span className="badge badge-error text-white">Sold out</span>
				)}
			</div>
			<div className="relative mx-auto h-52">
				<Image
					src={featuredImage?.url}
					fill
					alt={featuredImage?.altText ?? ""}
					className={twJoin(
						"object-cover drop-shadow-lg",
						!availableForSale && "grayscale"
					)}
				/>
			</div>
			<Typography variant="title" className="truncate text-sm">
				{title}
			</Typography>

			<hr />
			<div className="flex w-full justify-between text-sm">
				<Typography variant="title" className="text-green-400">
					<span className="mr-1.5 font-normal text-gray-400 line-through">
						{`${priceRange.maxVariantPrice.currencyCode} ${priceRange.maxVariantPrice.amount}`}
					</span>
					{`${compareAtPriceRange.maxVariantPrice.currencyCode} ${compareAtPriceRange.maxVariantPrice.amount}`}
				</Typography>
				<Rating disabled grade={3} name={id} stars={5} />
			</div>
		</div>
	)
}
export default ProductItem
