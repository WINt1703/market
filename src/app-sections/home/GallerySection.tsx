import { FC } from "react"

const GallerySection: FC = () => {
	return (
		<section className="flex h-[850px] items-center justify-evenly bg-info-100">
			<div className="grid h-96 w-96 place-content-center bg-organic-juice bg-cover">
				<p className="w-fit rounded-xl bg-white p-5 text-lg font-bold">
					Organic Juice
				</p>
			</div>
			<div className="grid h-96 w-96 place-content-center bg-organic-food bg-cover">
				<p className="w-fit rounded-xl bg-white p-5 text-lg font-medium">
					Organic Food
				</p>
			</div>
			<div className="grid h-96 w-96 place-content-center bg-nuts-cookies bg-cover">
				<p className="w-fit rounded-xl bg-white p-5 text-lg font-bold">
					Nuts Cookies
				</p>
			</div>
		</section>
	)
}

export default GallerySection
