import ProductList from "@/components/ProductList"
import Typography from "@/components/Typography"
import type { FC } from "react"

const OurProductsSection: FC = () => {
	return (
		<section className="my-32">
			<Typography variant="section" className="text-center">
				Category
			</Typography>
			<Typography variant="theme" className="text-center">
				Out Products
			</Typography>
			<ProductList className="mt-10" countItems={8} />
		</section>
	)
}
export default OurProductsSection
