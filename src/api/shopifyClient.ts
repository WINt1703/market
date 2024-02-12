import { ApolloClient, InMemoryCache } from "@apollo/client"

const shopify = new ApolloClient({
	uri: "https://organick-store.myshopify.com/api/2024-01/graphql.json",
	headers: {
		"X-Shopify-Storefront-Access-Token": "f5c9aa0a85c4a27eca1d38362320cdd1"
	},
	cache: new InMemoryCache()
})

export default shopify
