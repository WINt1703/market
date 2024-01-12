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

	const handler = (newGrade: number): void => {
		if (onChange) onChange(newGrade)
		setGrade(newGrade)
	}

	return (
		<div className="rating rating-half rating-sm">
			{Array.from({ length: stars * 2 }).map((s, i) => (
				<input
					key={i}
					checked={grade > 0 && grade * 2 === i + 1}
					type="radio"
					className={twJoin(
						"mask mask-star cursor-default",
						`mask-half-${i % 2 ? "2" : "1"}`,
						color
					)}
					onChange={() => handler((i + 1) / 2)}
					{...rest}
				/>
			))}
		</div>
	)
}
export default Rating
