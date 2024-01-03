import type { FC } from "react"
import { GrCart } from "react-icons/gr"
import Typography from "./Typography"

const CartIndicator: FC = () => {
  return (
    <div className="flex items-center gap-x-3 rounded-full border-2 border-gray-200 p-1">
      <div className="grid h-11 w-11 place-content-center rounded-full bg-[#274C5B] text-white">
        <GrCart size={20} />
      </div>
      <Typography className="text-lg" variant="title">
        Cart (0)
      </Typography>
    </div>
  )
}
export default CartIndicator
