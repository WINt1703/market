import Typography from "../../components/Typography"
import Button from "@/components/Button"
import Image from "next/image"
import type { FC } from "react"

type FoodBenefitsProps = {
	image: string
	title: string
	description: string
}

const FoodBenefits: FC<FoodBenefitsProps> = ({ description, image, title }) => {
	return (
		<div className="relative flex items-center space-x-3">
			<Image
				src={image}
				className="h-[70px] rounded-xl bg-white p-4"
				width={70}
				height={70}
				alt={title}
			/>
			<div className="block max-w-[50%]">
				<Typography variant={"title"} className="text-xl">
					{title}
				</Typography>
				<Typography variant={"description"}>{description}</Typography>
			</div>
		</div>
	)
}

const AboutUsSection: FC = () => {
	return (
		<section className="relative flex items-center bg-gray-100 py-40">
			<Image
				src="/about-us-home-preview.png"
				width={700}
				height={700}
				className="justify-self-center"
				alt="flowers"
			/>
			<div>
				<Typography variant="section">About Us</Typography>
				<Typography variant="theme" className="max-w-[70%]">
					We Believe in Working Accredited Farmers
				</Typography>
				<Typography variant="description" className="max-w-[75%]">
					Simply dummy text of the printing and typesetting industry. Lorem had
					ceased to been the industry&apos;s standard dummy text ever since the
					1500s, when an unknown printer took a galley.
				</Typography>
				<div className="my-8 space-y-8">
					<FoodBenefits
						image="/organic-foods-only-home-preview.svg"
						title="Organic Foods Only"
						description="Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
					/>
					<FoodBenefits
						image="/quality-standards-home-preview.svg"
						title="Quality Standards"
						description="Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
					/>
				</div>
				<Button>Shop Now</Button>
			</div>
		</section>
	)
}
export default AboutUsSection
