import Button from "@/components/Button"
import Typography from "@/components/Typography"
import { FC, PropsWithChildren } from "react"

const CardOfferWrapper: FC<PropsWithChildren & { backgroundName: string }> = ({
	children,
	backgroundName
}) => {
	return (
		<div
			className={`${backgroundName} flex aspect-video w-[500px] flex-row rounded-xl bg-cover bg-center`}>
			{children}
		</div>
	)
}

const Home: FC = () => {
	return (
		<div>
			{/* Nature food section */}
			<div className="grid aspect-video grid-flow-col grid-cols-2 place-items-center bg-natural-food bg-cover">
				<div className="max-w-[340px] space-y-3">
					<Typography variant="section">100% Natural Food</Typography>
					<Typography variant="theme">
						Chose the best healthier way of life
					</Typography>
					<Button variant="secondary">Explore Now</Button>
				</div>
			</div>
			{/* Offers section */}
			<div className="flex justify-center gap-x-8 py-40">
				<CardOfferWrapper backgroundName="bg-fresh-fruits-offer">
					<div className="flex flex-col justify-center pl-5 ">
						<Typography className="text-white" variant="section">
							Natural!!
						</Typography>
						<Typography
							className="max-w-52 text-4xl text-white"
							variant="theme">
							Get Garden Fresh Fruits
						</Typography>
					</div>
				</CardOfferWrapper>
				<CardOfferWrapper backgroundName="bg-vegetables-discount">
					<div className="flex flex-col justify-center pl-5 ">
						<Typography variant="section">Offer!!</Typography>
						<Typography
							className="max-w-[350px] text-balance text-4xl"
							variant="theme">
							Get 10% off on Vegetables
						</Typography>
					</div>
				</CardOfferWrapper>
			</div>
		</div>
	)
}

export default Home
