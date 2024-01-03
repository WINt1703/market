import { CustomFlowbiteTheme, Button as FlowbiteButton } from "flowbite-react"
import { ButtonHTMLAttributes, FC } from "react"
import { FaArrowRight } from "react-icons/fa6"

type ButtonProps = {
  variant?: "primary" | "secondary" | "outline"
  withoutArrow?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const customTheme: CustomFlowbiteTheme["button"] = {
  base: "font-bold !ring-0 hover:opacity-95 active:outline outline-2",
  color: {
    primary: "bg-[#274C5B] text-white outline-cyan-500",
    secondary: "bg-[#EFD372] text-[#274C5B] outline-amber-400",
    outline:
      "bg-white text-[#274C5B] border-2 border-[#274C5B] outline-gray-300",
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
        <span className="ml-2 h-4 w-4 grid place-content-center rounded-full text-white bg-[#335B6B] ">
          <FaArrowRight size={10} />
        </span>
      )}
    </FlowbiteButton>
  )
}

export default Button
