import { FC } from "react"

const GallerySection: FC = () => {
	return (
		<section className="flex h-[850px] items-center justify-evenly bg-info-100">
			<div className="bg-organic-juice grid h-96 w-96 place-content-center bg-cover">
				<p className="w-fit rounded-xl bg-white p-5 text-lg font-extrabold">
					Organic Juice
				</p>
			</div>
			<div className="bg-organic-food grid h-96 w-96 place-content-center bg-cover">
				<p className="w-fit rounded-xl bg-white p-5 text-lg font-extrabold">
					Organic Food
				</p>
			</div>
			<div className="bg-nuts-cookies grid h-96 w-96 place-content-center bg-cover">
				<p className="w-fit rounded-xl bg-white p-5 text-lg font-extrabold">
					Nuts Cookies
				</p>
			</div>
		</section>
	)
}

export default GallerySection
