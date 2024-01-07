import { ImageLoaderProps } from "next/image"

export default function sirvLoader({
	src,
	width,
	quality
}: ImageLoaderProps): string {
	const url = new URL(`https://example.com${src}`)
	const parameters = url.searchParams
	parameters.set("format", parameters.getAll("format").join(",") || "optimal")
	parameters.set("w", parameters.get("w") || width.toString())
	parameters.set("q", (quality || 85).toString())
	return url.href
}
