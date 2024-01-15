"use client"

import data from "../../../data.json"
import Carousel from "@/components/Carousel/Carousel"
import Rating from "@/components/Rating"
import Typography from "@/components/Typography"
import Image from "next/image"
import { FC } from "react"

const TestimonialSection: FC = () => {
	return (
		<section className="flex h-[900px] flex-col bg-testimonial bg-cover py-20">
			<div className="flex flex-col items-center justify-center gap-y-4">
				<Typography className="text-center" variant="theme">
					<Typography variant="section" component="span">
						Testimonial
					</Typography>
					<br />
					What Our Customer Saying?
				</Typography>
				<Carousel
					autoScroll
					slideTime={2500}
					slideId="testimonial_carousel"
					data={data.home_team}
					template={(p) => (
						<div className="mx-auto flex max-w-[500px] flex-col items-center gap-y-4">
							<Image
								alt={p.name}
								width={100}
								height={100}
								className="h-20 w-20 rounded-full object-cover"
								src={p.avatar}
							/>
							<Rating
								name="testimonial_rating"
								stars={5}
								disabled
								grade={p.rating}
							/>
							<Typography className="text-center" variant="description">
								{p.description}
								<br />
								<br />
								<Typography
									variant="title"
									className="text-xl"
									component="span">
									{p.name}
								</Typography>
								<br />
								{p.position}
							</Typography>
						</div>
					)}
				/>
			</div>
			<div className="mt-auto flex justify-center gap-x-10">
				<div className="flex h-40 w-40 flex-col justify-center rounded-full border-4 border-white bg-gray-200 text-center outline outline-4 outline-info">
					<Typography variant="title" className="text-4xl">
						100%
					</Typography>
					<Typography variant="title">Organic</Typography>
				</div>
				<div className="flex h-40 w-40 flex-col justify-center rounded-full border-4 border-white bg-gray-200 text-center outline outline-4 outline-info">
					<Typography variant="title" className="text-4xl">
						285
					</Typography>
					<Typography variant="title">Active Product</Typography>
				</div>
				<div className="flex h-40 w-40 flex-col justify-center rounded-full border-4 border-white bg-gray-200 text-center outline outline-4 outline-info">
					<Typography variant="title" className="text-4xl">
						350+
					</Typography>
					<Typography variant="title">Organic Orchads</Typography>
				</div>
				<div className="flex h-40 w-40 flex-col justify-center rounded-full border-4 border-white bg-gray-200 text-center outline outline-4 outline-info">
					<Typography variant="title" className="text-4xl">
						25+
					</Typography>
					<Typography variant="title">Years of Farming</Typography>
				</div>
			</div>
		</section>
	)
}

export default TestimonialSection
