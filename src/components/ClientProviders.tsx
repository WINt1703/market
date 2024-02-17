"use client"

import shopify from "@/api/shopifyClient"
import { ApolloProvider } from "@apollo/client"
import { FC, PropsWithChildren } from "react"

const ClientProviders: FC<PropsWithChildren> = ({ children }) => {
	return <ApolloProvider client={shopify}>{children}</ApolloProvider>
}

export default ClientProviders
