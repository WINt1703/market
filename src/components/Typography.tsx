import { Open_Sans, Yellowtail } from "next/font/google"
import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type Variant = "title" | "description" | "section" | "theme"

type TypographyProps = {
	variant: Variant
	component?: "span" | "p"
} & DetailedHTMLProps<
	HTMLAttributes<HTMLParagraphElement>,
	HTMLParagraphElement
>

type FontStyle = {
	fontFamily: string
	fontWeight?: number
	fontStyle?: string
}

const descriptionFont = Open_Sans({
	weight: "400",
	subsets: ["latin"]
})

const sectionFont = Yellowtail({
	weight: "400",
	subsets: ["latin"],
	fallback: []
})

const getStyleByVariant = (variant: Variant): string => {
	switch (variant) {
		case "title":
			return "text-primary font-semibold"
		case "description":
			return "text-gray-500 leading-7 text-sm"
		case "section":
			return "text-info text-2xl"
		case "theme":
			return "text-primary font-extrabold text-5xl"
	}
}

const getFontByVariant = (variant: Variant): FontStyle | undefined => {
	switch (variant) {
		case "description":
			return descriptionFont.style
		case "section":
			return sectionFont.style
	}

	return undefined
}

const Typography: FC<TypographyProps> = ({
	variant,
	children,
	component: TypographyTag = "p",
	className,
	...rest
}) => {
	return (
		<TypographyTag
			{...rest}
			style={getFontByVariant(variant)}
			className={twMerge(getStyleByVariant(variant), className)}>
			{children}
		</TypographyTag>
	)
}

export default Typography
