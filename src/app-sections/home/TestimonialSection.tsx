"use client"

import Carousel from "@/components/Carousel/Carousel"
import Rating from "@/components/Rating"
import Typography from "@/components/Typography"
import { useMembersQuery } from "@/shopify/generated"
import Image from "next/image"
import { FC } from "react"

const TestimonialSection: FC = () => {
	const { data } = useMembersQuery({
		variables: {
			first: 5
		}
	})
	console.log(data?.metaobjects.nodes[0])
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
				{data?.metaobjects.nodes ? (
					<Carousel
						autoScroll
						slideTime={2500}
						slideId="testimonial_carousel"
						data={data?.metaobjects.nodes.map((object) => object.member)}
						template={(member) =>
							member && (
								<div className="mx-auto flex max-w-[500px] flex-col items-center gap-y-4">
									<Image
										alt={member.name || ""}
										width={100}
										height={100}
										className="h-20 w-20 rounded-full object-cover"
										src={member?.avatar || ""}
									/>
									<Rating
										name="testimonial_rating"
										stars={5}
										disabled
										grade={member?.rating?.value ? +member.rating.value : 5}
									/>
									<Typography className="text-center" variant="description">
										{member.description}
										<br />
										<br />
										<Typography
											variant="title"
											className="text-xl"
											component="span">
											{member.name}
										</Typography>
										<br />
										{member.position}
									</Typography>
								</div>
							)
						}
					/>
				) : (
					<span>Team loading...</span>
				)}
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
