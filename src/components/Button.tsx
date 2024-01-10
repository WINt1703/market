import { ButtonHTMLAttributes, FC } from "react"
import { FaArrowRight } from "react-icons/fa6"
import { twMerge } from "tailwind-merge"

type ButtonProps = {
	variant?: "primary" | "secondary" | "outline"
	withoutArrow?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

type ButtonTheme = {
	base: string
	color: {
		primary: string
		secondary: string
		outline: string
	}
}

const theme: ButtonTheme = {
	base: "flex items-center font-bold ring-0 hover:opacity-95 py-3 px-6 rounded-xl active:outline outline-2",
	color: {
		primary: "bg-primary text-white outline-cyan-500",
		secondary: "bg-secondary text-primary outline-amber-400",
		outline: "bg-white text-primary border-2 border-primary outline-gray-300"
	}
}

const Button: FC<ButtonProps> = ({
	children,
	withoutArrow,
	variant,
	className,
	...rest
}) => {
	return (
		<button
			className={twMerge(
				theme.base,
				variant && theme.color[variant],
				className
			)}
			{...rest}>
			{children}
			{!withoutArrow && (
				<span className="ml-2 grid h-4 w-4 place-content-center rounded-full bg-[#335B6B] text-white ">
					<FaArrowRight size={10} />
				</span>
			)}
		</button>
	)
}

export default Button
