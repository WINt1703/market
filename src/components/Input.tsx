import { DetailedHTMLProps, FC, InputHTMLAttributes, forwardRef } from "react"

type InputProps = Omit<
	DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
	"ref"
>

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
	({ className, ...rest }, ref) => (
		<input
			ref={ref}
			{...rest}
			className={`rounded-md p-3 placeholder:italic ${className ?? ""}`}
		/>
	)
)
export default Input
