import Button from "@/components/Button"
import Typography from "@/components/Typography"
import { FC } from "react"

const NatureFoodSection: FC = () => {
	return (
		<section className="grid aspect-video grid-flow-col grid-cols-2 place-items-center bg-[url(/sections/home/natural-food.png)] bg-cover">
			<div className="max-w-[340px] space-y-3">
				<Typography variant="section">100% Natural Food</Typography>
				<Typography variant="theme">
					Chose the best healthier way of life
				</Typography>
				<Button variant="secondary">Explore Now</Button>
			</div>
		</section>
	)
}

export default NatureFoodSection
