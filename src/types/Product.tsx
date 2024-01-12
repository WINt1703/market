export default interface Product {
	id: number
	description: string
	image: string
	name: string
	tag: string
	price: number
	rating?: number
	discount?: number
}
