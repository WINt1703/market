import Logo from "./Logo"
import Typography from "./Typography"
import Link from "next/link"
import type { FC } from "react"
import {
	FaFacebook,
	FaInstagram,
	FaPinterest,
	FaXTwitter
} from "react-icons/fa6"

const Footer: FC = () => {
	return (
		<div className="flex h-72 justify-center gap-x-12">
			<div className="space-y-8 text-end">
				<Typography variant="title" className="text-xl">
					Contact Us
				</Typography>

				<div className="text-end">
					<span className="block text-lg font-black text-gray-600">Email</span>
					<Typography variant="description">
						info@organickcompany.com
					</Typography>
				</div>

				<div className="text-end">
					<span className="block text-lg font-black text-gray-600">Phone</span>
					<Typography variant="description">+1 (555) 123-4567</Typography>
				</div>

				<div className="text-end">
					<span className="block text-lg font-black text-gray-600">
						Address
					</span>
					<Typography variant="description">
						123 Main Street, NY, 12345, USA
					</Typography>
				</div>
			</div>

			<hr className="mt-3 h-full w-0.5 bg-neutral-100" />

			<div className="max-w-[500px] space-y-7 text-center">
				<Logo />
				<Typography variant="description" className="text-center">
					Organick offers pure, organic goodness – a store dedicated to natural,
					wholesome food choices.
				</Typography>
				<div className="flex justify-center gap-x-4">
					<Link
						target="_blank"
						href="https://facebook.com"
						className="group grid h-14 w-14 place-content-center rounded-full bg-info-100 hover:bg-info-300">
						<FaInstagram className="h-6 w-6 fill-primary group-hover:fill-primary-100" />
					</Link>
					<Link
						target="_blank"
						href="https://facebook.com"
						className="group grid h-14 w-14 place-content-center rounded-full bg-info-100 hover:bg-info-300">
						<FaFacebook className="h-6 w-6 fill-primary group-hover:fill-primary-100" />
					</Link>
					<Link
						target="_blank"
						href="https://facebook.com"
						className="group grid h-14 w-14 place-content-center rounded-full bg-info-100 hover:bg-info-300">
						<FaXTwitter className="h-6 w-6 fill-primary group-hover:fill-primary-100" />
					</Link>
					<Link
						target="_blank"
						href="https://facebook.com"
						className="group grid h-14 w-14 place-content-center rounded-full bg-info-100 hover:bg-info-300">
						<FaPinterest className="h-6 w-6 fill-primary group-hover:fill-primary-100" />
					</Link>
				</div>
			</div>

			<hr className="mt-3 h-full w-0.5 bg-neutral-100" />

			<div className="space-y-7">
				<Typography variant="title" className="text-xl">
					Utility Pages
				</Typography>

				<div className="flex flex-col space-y-6 text-gray-500">
					<Link className="link" href="/">
						Style Guide
					</Link>
					<Link className="link" href="/">
						404 Not Found
					</Link>
					<Link className="link" href="/">
						Password Protected
					</Link>
					<Link className="link" href="/">
						License
					</Link>
					<Link className="link" href="/">
						Changelog
					</Link>
				</div>
			</div>
		</div>
	)
}
export default Footer
