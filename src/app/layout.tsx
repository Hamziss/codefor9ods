import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
	weight: ["400", "500", "900", "800", "700"],
	subsets: ["devanagari"],
})

export const metadata: Metadata = {
	title: "Code for 6:ods",
	description:
		"Code for 6:ods is an online hackthon which aims to provide practical solutions to help Palestinians",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={poppins.className}>{children}</body>
		</html>
	)
}
