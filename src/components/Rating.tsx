"use client"

import { FC, useState } from "react"
import { twJoin } from "tailwind-merge"

type RatingProps = {
	stars: number
	name: string
	grade?: number
	disabled?: boolean
	color?: string
	onChange?: (newGrade: number) => void
}

function roundGrade(x: number): number {
	const integerPart = Math.floor(x)
	const decimalPart = x - integerPart
	if (decimalPart < 0.5) return integerPart
	else if (decimalPart === 0.5) return x
	else return Math.ceil(x)
}

const Rating: FC<RatingProps> = ({
	grade: rawGrade,
	stars,
	color = "bg-amber-400",
	onChange,
	...rest
}) => {
	const [grade, setGrade] = useState(roundGrade(rawGrade ?? 0))
	const [hover, setHover] = useState<number | undefined>()
	const handler = (newGrade: number): void => {
		if (onChange) onChange(newGrade)
		setGrade(newGrade)
	}

	return (
		<div
			className={twJoin(
				"rating rating-half rating-sm",
				!grade && "opacity-20"
			)}>
			{Array.from({ length: stars * 2 }).map((s, i) => (
				<input
					key={i}
					checked={grade * 2 === i + 1 || hover === i}
					type="radio"
					className={twJoin(
						"mask mask-star",
						i % 2 ? "mask-half-2" : "mask-half-1",
						color,
						rest.disabled && "cursor-default"
					)}
					onMouseEnter={() => setHover(i)}
					onMouseLeave={() => setHover(undefined)}
					onChange={() => handler((i + 1) / 2)}
					{...rest}
				/>
			))}
		</div>
	)
}
export default Rating
