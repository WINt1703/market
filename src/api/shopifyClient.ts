import { MediaImage, Member, Metaobject } from "@/shopify/generated"
import { ApolloClient, InMemoryCache } from "@apollo/client"

const shopify = new ApolloClient({
	uri: "https://organick-store.myshopify.com/api/2024-01/graphql.json",
	headers: {
		"X-Shopify-Storefront-Access-Token": "f5c9aa0a85c4a27eca1d38362320cdd1"
	},
	cache: new InMemoryCache({
		possibleTypes: {
			Metaobject: ["Member"]
		},
		typePolicies: {
			Metaobject: {
				fields: {
					member(_, { readField }): Member {
						const fields = readField<Metaobject["fields"]>("fields")
						const member: Member = {
							avatar: (
								fields?.find((f) => f.key === "avatar")?.reference as MediaImage
							).image?.url,
							description: fields?.find((f) => f.key === "description")?.value,
							name: fields?.find((f) => f.key === "name")?.value,
							position: fields?.find((f) => f.key === "position")?.value,
							rating: JSON.parse(
								fields?.find((f) => f.key === "rating")?.value || ""
							)
						}

						return member
					}
				}
			}
		}
	})
})

export default shopify
