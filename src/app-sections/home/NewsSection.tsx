import data from "../../../data.json"
import Button from "@/components/Button"
import NewsCard from "@/components/NewsCard"
import Typography from "@/components/Typography"
import { FC } from "react"

const NewsSection: FC = () => {
	return (
		<section className="mx-auto w-fit space-y-5 py-32">
			<div className="flex items-end justify-between	">
				<Typography variant="theme">
					<Typography variant="section" component="span">
						News
					</Typography>
					<br />
					Discover weekly content about
					<br /> organic food, & more
				</Typography>
				<Button variant="outline">More News</Button>
			</div>
			<div className="flex justify-center gap-5">
				<NewsCard {...data.news[0]} />
				<NewsCard {...data.news[1]} />
			</div>
		</section>
	)
}

export default NewsSection
