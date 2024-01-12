import AboutUsSection from "@/app-sections/home/AboutUsSection"
import NatureFoodSection from "@/app-sections/home/NatureFoodSection"
import OfferSection from "@/app-sections/home/OffersSection"
import OutProductsSection from "@/app-sections/home/OurProductsSection"
import { FC } from "react"

const Home: FC = () => {
	return (
		<div>
			<NatureFoodSection />
			<OfferSection />
			<AboutUsSection />
			<OutProductsSection />
		</div>
	)
}

export default Home
