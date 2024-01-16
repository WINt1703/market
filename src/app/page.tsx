import AboutUsSection from "@/app-sections/home/AboutUsSection"
import EcoFriendlySection from "@/app-sections/home/EcoFriendlySection"
import NatureFoodSection from "@/app-sections/home/NatureFoodSection"
import OfferSection from "@/app-sections/home/OffersSection"
import OrganicOfferSection from "@/app-sections/home/OrganicOfferSection"
import OutProductsSection from "@/app-sections/home/OurProductsSection"
import TestimonialSection from "@/app-sections/home/TestimonialSection"
import { FC } from "react"

const Home: FC = () => {
	return (
		<div>
			<NatureFoodSection />
			<OfferSection />
			<AboutUsSection />
			<OutProductsSection />
			<TestimonialSection />
			<OrganicOfferSection />
			<EcoFriendlySection />
		</div>
	)
}

export default Home
