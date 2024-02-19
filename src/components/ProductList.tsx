"use client"

import Button from "./Button"
import ProductItem from "@/components/ProductItem"
import { useProductsQuery } from "@/shopify/generated"
import { FC } from "react"
import { twJoin } from "tailwind-merge"

type ProductListProps = {
	countItems: number
	className?: string
	preview?: boolean
}

const ProductList: FC<ProductListProps> = ({
	countItems,
	className,
	preview
}) => {
	const { data } = useProductsQuery({
		variables: {
			first: countItems
		}
	})

	return (
		<div className={twJoin("space-y-16", className)}>
			{data?.products ? (
				<div className="grid grid-cols-[repeat(4,250px)] place-content-center gap-4">
					{data.products.nodes.map(
						// eslint-disable-next-line @typescript-eslint/no-unused-vars
						({ __typename, seo, description, ...rest }) => (
							<ProductItem key={rest.id} preview={preview} {...rest} />
						)
					)}
				</div>
			) : (
				<span>Not found products</span>
			)}
			{!preview && <Button className="mx-auto">Load More</Button>}
		</div>
	)
}
export default ProductList
