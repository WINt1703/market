import { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
	schema: "https://shopify.dev/storefront-graphql-direct-proxy/2024-01",
	documents: ["src/gql/*.gql"],
	generates: {
		"./src/shopify/schema.json": {
			plugins: ["introspection"],
			config: { minify: true }
		},
		"./src/shopify/generated.ts": {
			presetConfig: { apiType: "Storefront" },
			plugins: [
				"typescript",
				"typescript-operations",
				"typescript-apollo-client-helpers",
				"typescript-react-apollo"
			]
		}
	},
	overwrite: true,
	hooks: {
		afterOneFileWrite: ["prettier --write"]
	},
	ignoreNoDocuments: true
}

export default config
