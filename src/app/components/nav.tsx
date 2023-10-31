"use client"
import { cn } from "@/utils/cn"
import Image from "next/image"
import Link from "next/link"
import logonav from "public/logonav.svg"
import { ReactNode, useEffect, useState } from "react"
type NavProps = {
	url?: string
	items?: string[]
	links?: string[]
	enableSidebar?: boolean
	collapsibleSidebar?: boolean

	children?: ReactNode
}

export function Nav({
	url = "/",
	items,
	enableSidebar = true,
	collapsibleSidebar = true,
	children,
}: NavProps) {
	const [isDown, setDown] = useState(true)

	useEffect(() => {
		const listener = () => {
			setDown(window.document.scrollingElement!.scrollTop < 30)
		}

		listener()
		window.addEventListener("scroll", listener)
		return () => window.removeEventListener("scroll", listener)
	}, [])
	return (
		<header
			className={cn(
				"sticky top-0 h-16 z-50 border-b transition-colors w-full",
				isDown ? "border-transparent" : "border-[#fff]/10 backdrop-blur-lg",
			)}
		>
			<nav className="flex relative flex-row items-center justify-center h-16  gap-4 px-7 w-full">
				<Link
					href={url}
					className="inline-flex items-center font-medium mr-auto"
				>
					<Image src={logonav} alt="logo of code for 6:ods"></Image>
				</Link>
				{children}

				<div className="flex flex-row absolute  items-center max-md:hidden gap-5 font-bold text-[#575757]">
					<Link href={"/"} className="hover:text-white">
						Home
					</Link>
					<Link href="/#aboutus" className="hover:text-white">
						Description
					</Link>
					<Link href="/#tracks" className="hover:text-white">
						Tracks
					</Link>
				</div>
				<div className="ml-auto flex items-center gap-3">
					<Link
						href="https://docs.google.com/forms/d/e/1FAIpQLScclc1mDyzHPMotuRnWeQT1x3Adsq8fEM13H_2K2V_JSoXj1g/viewform?fbzx=6791889018575505979"
						target="_blank"
						className="inline-flex h-10 animate-background-shine items-center justify-center rounded-md border border-[#5865F2] bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium transition-colors focus:outline-none focus:ring-2 text-[#5865F2] focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
					>
						Discord
					</Link>
					<Link
						href="https://docs.google.com/forms/d/e/1FAIpQLScclc1mDyzHPMotuRnWeQT1x3Adsq8fEM13H_2K2V_JSoXj1g/viewform?fbzx=6791889018575505979"
						target="_blank"
						className="relative text-[#C1272D] inline-flex h-10 w-full items-center justify-center rounded-md bg-white px-6 font-medium  transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
					>
						<div className="absolute  -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#C1272D] opacity-75 blur" />
						Register
					</Link>
				</div>
			</nav>
		</header>
	)
}
