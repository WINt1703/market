"use client"

import "./globals.css"
import shopify from "@/api/shopifyClient"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Newsletter from "@/components/Newsletter"
import { ApolloProvider } from "@apollo/client"
import { Roboto } from "next/font/google"
import Head from "next/head"
import { FC, PropsWithChildren } from "react"

const defaultFont = Roboto({
	weight: ["100", "300", "400", "500", "700", "900"],
	subsets: ["latin"]
})

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<html lang="en">
			<Head>
				<title>Organick</title>
				<meta name="description" content="Best organic market" />
			</Head>
			<body className={defaultFont.className}>
				<ApolloProvider client={shopify}>
					<div className="mx-[120px] my-[50px]">
						<Header />
					</div>
					{children}
					<div className="my-20 flex justify-center">
						<Newsletter />
					</div>
					<Footer />
				</ApolloProvider>
			</body>
		</html>
	)
}

export default RootLayout
