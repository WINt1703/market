import "./globals.css"
import ClientProviders from "@/components/ClientProviders"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Newsletter from "@/components/Newsletter"
import { Metadata } from "next"
import { Roboto } from "next/font/google"
import { FC, PropsWithChildren } from "react"

export const metadata: Metadata = {
	title: "Organick",
	description: "Best organic market"
}

const defaultFont = Roboto({
	weight: ["100", "300", "400", "500", "700", "900"],
	subsets: ["latin"]
})

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<html lang="en">
			<body className={defaultFont.className}>
				<ClientProviders>
					<div className="mx-[120px] my-[50px]">
						<Header />
					</div>
					{children}
					<div className="my-20 flex justify-center">
						<Newsletter />
					</div>
					<Footer />
				</ClientProviders>
			</body>
		</html>
	)
}

export default RootLayout
