import { CustomFlowbiteTheme, Button as FlowbiteButton } from "flowbite-react"
import { ButtonHTMLAttributes, FC } from "react"
import { FaArrowRight } from "react-icons/fa6"

type ButtonProps = {
  variant?: "primary" | "secondary" | "outline"
  withoutArrow?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const customTheme: CustomFlowbiteTheme["button"] = {
  base: "font-bold !ring-0 hover:opacity-95 py-2 px-3 active:outline outline-2",
  color: {
    primary: "bg-primary text-white outline-cyan-500",
    secondary: "bg-secondary text-primary outline-amber-400",
    outline: "bg-white text-primary border-2 border-primary outline-gray-300",
  },
}

const Button: FC<ButtonProps> = ({
  children,
  withoutArrow,
  variant,
  ...rest
}) => {
  return (
    <FlowbiteButton theme={customTheme} color={variant ?? "primary"} {...rest}>
      {children}
      {!withoutArrow && (
        <span className="ml-2 grid h-4 w-4 place-content-center rounded-full bg-[#335B6B] text-white ">
          <FaArrowRight size={10} />
        </span>
      )}
    </FlowbiteButton>
  )
}

export default Button
