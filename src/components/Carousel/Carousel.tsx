"use client"

import "./index.css"
import { ReactElement, useEffect, useRef, useState } from "react"
import { useInterval } from "react-timing-hooks"
import { twJoin } from "tailwind-merge"

type CarouselProps<T> = {
	data: Array<T>
	slideId: string
	template: (data: T) => ReactElement
	slideTime?: number
	autoScroll?: boolean
	className?: string
}

const Carousel = <T,>({
	data,
	slideId,
	template,
	slideTime = 1000,
	autoScroll,
	className
}: CarouselProps<T>): ReactElement => {
	const carouselRef = useRef<HTMLDivElement>(null)
	const slideRefs = useRef<Array<HTMLDivElement | null>>([])
	const [slide, setSlide] = useState(0)
	const { isStopped, start, stop } = useInterval(() => {
		scrollSlide(slide === slideRefs.current.length - 1 ? 0 : slide + 1)
	}, slideTime)

	const scrollSlide = (index: number): void => {
		const scrollOffset = index * slideRefs.current[index]!.clientWidth

		if (
			carouselRef.current &&
			carouselRef.current.scrollLeft !== scrollOffset
		) {
			carouselRef.current.scrollTo({
				left: scrollOffset
			})
			setSlide(index)
		}
	}

	const onSelectedSlide = (index: number): void => {
		if (autoScroll) stop()
		scrollSlide(index)
	}

	useEffect(() => {
		if (slideRefs.current.length > 1 && autoScroll) {
			start()
		}
	}, [slideRefs, autoScroll, start])

	return (
		<div
			className={twJoin("group space-y-5", className)}
			onMouseOver={autoScroll ? stop : undefined}
			onMouseOut={autoScroll ? start : undefined}>
			<div ref={carouselRef} className="carousel w-full">
				{data.map((item, index) => (
					<div
						key={index}
						ref={(ref) => (slideRefs.current[index] = ref)}
						id={slideId}
						className="carousel-item w-full">
						{template(item)}
					</div>
				))}
			</div>
			<div className="flex justify-center gap-x-3">
				{data.map((item, index) => (
					<div
						key={index}
						style={
							{
								"--slide-animation": isStopped
									? undefined
									: `maxOff ${slideTime}ms ease-in alternate`
							} as React.CSSProperties
						}
						onClick={() => onSelectedSlide(index)}
						className={twJoin(
							"max-auto h-3 min-w-3 rounded-full",
							slide === index ? "progress-slide" : "bg-gray-300"
						)}
					/>
				))}
			</div>
		</div>
	)
}
export default Carousel