import Button from "@/components/Button"
import ProductList from "@/components/ProductList"
import Typography from "@/components/Typography"
import { FC } from "react"

const OrganicOfferSection: FC = () => {
	return (
		<section className="bg-primary py-52">
			<div className="mx-auto w-fit space-y-5">
				<div className="flex justify-between">
					<Typography variant="theme" className="text-white">
						<Typography component="span" className="block" variant="section">
							Offer
						</Typography>
						We Offer Organic For You
					</Typography>
					<Button variant="secondary">View All Product</Button>
				</div>
				<ProductList preview countItems={4} />
			</div>
		</section>
	)
}

export default OrganicOfferSection
