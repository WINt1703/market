import Button from "./Button"
import Typography from "./Typography"
import News from "@/types/News"
import Image from "next/image"
import { FC } from "react"
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
	return (
		<div className="relative h-[400px] w-[450px]">
			<Image
				className="!h-[90%] rounded-xl bg-cover"
				fill
				alt={title}
				src={background}
			/>
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
