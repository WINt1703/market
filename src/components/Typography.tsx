import { Open_Sans, Yellowtail } from "next/font/google"
import { DetailedHTMLProps, FC, HTMLAttributes } from "react"

type Variant = "title" | "description" | "section"

type TypographyProps = {
  variant: Variant
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
  subsets: ["latin"],
})

const sectionFont = Yellowtail({
  weight: "400",
  subsets: ["latin"],
  fallback: [],
})

const getStyleByVariant = (variant: Variant): string => {
  switch (variant) {
    case "title":
      return "text-[#274C5B] font-semibold"
    case "description":
      return "text-gray-500 leading-7"
    case "section":
      return "text-[#7EB693]"
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
  className,
  ...rest
}) => {
  return (
    <p
      {...rest}
      style={getFontByVariant(variant)}
      className={`${getStyleByVariant(variant)} ${className ?? ""}`}
    >
      {children}
    </p>
  )
}

export default Typography
