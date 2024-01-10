import AboutUsSection from "@/app-sections/home/AboutUsSection"
import NatureFoodSection from "@/app-sections/home/NatureFoodSection"
import OfferSection from "@/app-sections/home/OffersSection"
import { FC } from "react"

const Home: FC = () => {
	return (
		<div>
			<NatureFoodSection />
			<OfferSection />
			<AboutUsSection />
		</div>
	)
}

export default Home
