import { FC } from "react"

const GallerySection: FC = () => {
	return (
		<section className="flex h-[850px] items-center justify-evenly bg-info-100">
			<div className="grid h-96 w-96 place-content-center bg-[url(/sections/home/organic-juice.png)] bg-cover">
				<p className="w-fit rounded-xl bg-white p-5 text-lg font-medium">
					Organic Juice
				</p>
			</div>
			<div className="grid h-96 w-96 place-content-center bg-[url(/sections/home/organic-food.jpg)] bg-cover">
				<p className="w-fit rounded-xl bg-white p-5 text-lg font-medium">
					Organic Food
				</p>
			</div>
			<div className="grid h-96 w-96 place-content-center bg-[url(/sections/home/nuts-cookie.jpg)] bg-cover">
				<p className="w-fit rounded-xl bg-white p-5 text-lg font-medium">
					Nuts Cookies
				</p>
			</div>
		</section>
	)
}

export default GallerySection
