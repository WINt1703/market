import Typography from "./Typography"
import Image from "next/image"
import type { FC } from "react"

const Logo: FC = () => {
	return (
		<div className="flex items-center justify-center gap-x-1.5">
			<Image src="/logo.svg" width={30} height={45} alt="logo" />
			<Typography variant="title" className="text-3xl font-bold">
				Organick
			</Typography>
		</div>
	)
}
export default Logo
