import Image from "next/image"
import angel from "public/angel.svg"
import boy from "public/boy.svg"
import card1 from "public/card1.svg"
import card1flip from "public/card1flip.svg"
import card2 from "public/card2.svg"
import card2flip from "public/card2flip.svg"
import card3 from "public/card3.svg"
import card3flip from "public/card3flip.svg"
import footer from "public/footer.svg"
import logo from "public/logo.svg"
import slogan from "public/slogan.svg"
import CountdownTimer from "./components/countdown"
import { Nav } from "./components/nav"
import Rules from "./components/rules"

export default function Home() {
	return (
		<div className="bg-white">
			<main className="flex min-h-screen flex-col items-center bg-white">
				<Nav />
				<section className="absolute  w-full h-screen bg-no-repeat bg-cover">
					<video
						className="absolute object-cover w-full h-full"
						autoPlay
						muted
						loop
					>
						<source src="/laser.mp4" type="video/mp4" />
					</video>
					<div className="absolute z-10 w-full h-full bg-[#000000bf]"></div>
					<div className="relative z-30 h-full pt-32 w-full flex flex-col items-center">
						<Image src={logo} width="400" alt="fds"></Image>
						<Image src={slogan} width="1000" alt="fds"></Image>
						<div className="px-14 top-[450px] max-sm:top-96 timer absolute py-10 backdrop-blur-lg rounded-[27.19px] bg-white/5 ">
							<h2 className="text-7xl tracking-wider font-medium max-xl:text-2xl">
								<CountdownTimer targetDate="November 1, 2023 00:00:00" />
							</h2>
						</div>
						<div className="absolute bottom-0 right-7 max-lg:w-52 max-sm:w-20">
							<Image src={angel} alt="fds"></Image>
						</div>
						<div className="absolute bottom-0 left-7 max-lg:w-52 max-sm:w-20">
							<Image src={boy} alt="fds"></Image>
						</div>
					</div>
				</section>
				<section
					id="aboutus"
					className="mt-[110vh] max-w-[1200px] mx-5  xl:mx-11 flex flex-col"
				>
					<h1 className="text-4xl font-bold text-[#9B0A1B] mb-4">About Us</h1>
					<p className="text-black font-semibold text-2xl">
						Code for 6:ods is an online hackthon which aims to provide practical
						solutions to help Palestinians regain trust in the wider world.
						While they receive support through social media, we can offer
						assistance through software by connecting Palestinians with their
						supporters. This connection will serve as a source of comfort and a
						solution to some of their challenges.
					</p>
					<Rules />
				</section>
				<section
					id="tracks"
					className=" flex flex-col mx-5 items-center mt-16 xl:mx-11 "
				>
					<h1 className="text-4xl font-extrabold text-black ">
						Hackthon Tracks
					</h1>
					<ul className="mt-5 flex flex-wrap items-center max-lg:flex-col gap-5">
						<li className="card">
							<div className="front">
								<Image src={card1} alt="card1" />
							</div>
							<div className="back">
								<Image src={card1flip} alt="card1" />
							</div>
						</li>
						<li className="card">
							<div className="front">
								<Image src={card2} alt="card1" />
							</div>
							<div className="back">
								<Image src={card2flip} alt="card1" />
							</div>
						</li>
						<li className="card">
							<div className="front">
								<Image src={card3} alt="card1" />
							</div>
							<div className="back">
								<Image src={card3flip} alt="card1" />
							</div>
						</li>
					</ul>
				</section>
			</main>
			<footer className="w-full">
				<Image className="w-full" src={footer} alt="footer of the page"></Image>
			</footer>
		</div>
	)
}
