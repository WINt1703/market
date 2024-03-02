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

const OfferSection: FC = () => {
	return (
		<section className="flex justify-center gap-x-8 py-40">
			<CardOfferWrapper backgroundName="bg-[url(/sections/home/offer-flesh-fruit.png)]">
				<div className="flex flex-col justify-center pl-5 ">
					<Typography className="text-white" variant="section">
						Natural!!
					</Typography>
					<Typography className="max-w-52 text-4xl text-white" variant="theme">
						Get Garden Fresh Fruits
					</Typography>
				</div>
			</CardOfferWrapper>
			<CardOfferWrapper backgroundName="bg-[url(/sections/home/offer-discount-vegetable.png)]">
				<div className="flex flex-col justify-center pl-5 ">
					<Typography variant="section">Offer!!</Typography>
					<Typography
						className="max-w-[350px] text-balance text-4xl"
						variant="theme">
						Get 10% off on Vegetables
					</Typography>
				</div>
			</CardOfferWrapper>
		</section>
	)
}

export default OfferSection
