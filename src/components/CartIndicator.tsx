import type { FC } from "react"
import { GrCart } from "react-icons/gr"
import Typography from "./Typography"

const CartIndicator: FC = () => {
  return (
    <div className="flex gap-x-3 items-center border-2 border-gray-200 rounded-full p-1.5">
      <div className="w-14 h-14 grid place-content-center text-white bg-[#274C5B] rounded-full">
        <GrCart size={20} />
      </div>
      <Typography className="text-lg" variant="title">
        Cart (0)
      </Typography>
    </div>
  )
}
export default CartIndicator
