"use client"

import Button from "@/components/Button"
import NewsCard from "@/components/NewsCard"
import Typography from "@/components/Typography"
import { useArticlesQuery } from "@/shopify/generated"
import { FC } from "react"

const NewsSection: FC = () => {
	const { data } = useArticlesQuery({
		variables: {
			first: 2
		}
	})
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
				{data?.articles.nodes.map(
					// eslint-disable-next-line @typescript-eslint/no-unused-vars
					({ contentHtml, __typename, seo, ...rest }) => (
						<NewsCard key={rest.id} {...rest} />
					)
				)}
			</div>
		</section>
	)
}

export default NewsSection
