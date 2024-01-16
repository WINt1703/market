import Typography from "@/components/Typography"
import Image from "next/image"
import { FC } from "react"

const EcoFriendlySection: FC = () => {
	return (
		<section className="relative h-[900px]">
			<Image
				fill
				className="!w-[50%] object-cover"
				src="/sections/home/eco-friendly.png"
				alt="eco friendly"
			/>
			<div className="absolute left-[48%] top-1/4 h-fit w-full max-w-[550px] space-y-4 rounded-xl bg-white p-10 ">
				<Typography variant="section">Eco Friendly</Typography>
				<Typography variant="theme">
					Econis is a Friendly Organic Store
				</Typography>
				<Typography variant="description">
					<Typography component="span" className="text-lg" variant="title">
						Start with Our Company First
					</Typography>
					<br />
					Sed ut perspiciatis unde omnis iste natus error sit voluptat
					accusantium doloremque laudantium. Sed ut perspiciatis.
				</Typography>

				<Typography variant="description">
					<Typography component="span" className="text-lg" variant="title">
						Learn How to Grow Yourself{" "}
					</Typography>
					<br />
					Sed ut perspiciatis unde omnis iste natus error sit voluptat
					accusantium doloremque laudantium. Sed ut perspiciatis.
				</Typography>

				<Typography variant="description">
					<Typography component="span" className="text-lg" variant="title">
						Farming Strategies of Today{" "}
					</Typography>
					<br />
					Sed ut perspiciatis unde omnis iste natus error sit voluptat
					accusantium doloremque laudantium. Sed ut perspiciatis.
				</Typography>
			</div>
		</section>
	)
}

export default EcoFriendlySection
