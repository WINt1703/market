"use client"

import Button from "./Button"
import Typography from "./Typography"
import News from "@/types/News"
import Image from "next/image"
import { FC, useRef } from "react"
import { FaUser } from "react-icons/fa"

type NewsCard = News

const NewsCard: FC<NewsCard> = ({
	author,
	background,
	date,
	description,
	id,
	title
}) => {
	const newsDate = useRef(
		((): string => {
			const parsedDate = new Date(date)
			return parsedDate.toLocaleString("en-GB", {
				day: "2-digit",
				month: "short"
			})
		})()
	)

	return (
		<div className="relative h-[400px] w-[450px]">
			<Image
				className="!h-[90%] rounded-xl bg-cover"
				fill
				alt={title}
				src={background}
			/>
			<Typography
				variant="title"
				className="absolute left-4 top-4 w-12 rounded-full bg-white py-1 text-center leading-5">
				{newsDate.current}
			</Typography>
			<div className="absolute inset-x-6 bottom-0 rounded-xl bg-white px-8 py-10 shadow-lg">
				<span className="flex items-center gap-x-2 text-sm font-light">
					<FaUser size={18} className="text-secondary" />
					By {author}
				</span>
				<Typography variant="title" className="text-xl">
					{title}
					<br />
					<Typography
						variant="description"
						className="line-clamp-2"
						component="span">
						{description}
					</Typography>
				</Typography>

				<Button variant="secondary" className="mt-3">
					Read More
				</Button>
			</div>
		</div>
	)
}

export default NewsCard
