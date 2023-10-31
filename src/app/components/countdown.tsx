"use client"
import { useEffect, useState } from "react"

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
	const calculateTimeLeft = () => {
		const difference = +new Date(targetDate) - +new Date()
		let timeLeft = {} as {
			days: number
			hours: number
			minutes: number
			seconds: number
		}

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			}
		}

		return timeLeft
	}

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft())
		}, 1000)
		return () => clearTimeout(timer)
	})

	const formattedTimeLeft = `${timeLeft.hours}:${timeLeft.minutes}:${timeLeft.seconds}`

	return <>{formattedTimeLeft}</>
}

export default CountdownTimer
