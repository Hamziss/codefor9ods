"use client"
import { Modal, useModal } from "@geist-ui/core"

export default function Rules() {
	const { visible, setVisible, bindings } = useModal()
	return (
		<>
			<button
				onClick={() => setVisible(true)}
				className="relative mt-2 ml-auto w-24 text-white inline-flex h-10  items-center justify-center rounded-md bg-[#007C38] px-6 font-medium  transition-colors focus:outline-none focus:ring-2 focus:ring-[#81ff20] focus:ring-offset-2 focus:ring-offset-slate-50"
			>
				<div className="absolute  -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#fff] to-[#81ff20] opacity-75 blur" />
				Rules
			</button>{" "}
			<Modal {...bindings}>
				<Modal.Title>Rules</Modal.Title>
				<Modal.Subtitle>code for 6:ods</Modal.Subtitle>
				<Modal.Content>
					While everyone here supports the Palestinian cause, our main goal is
					to provide aid to the people suffering in Gaza. To ensure our
					solutions can reach these people with minimal obstacles, they should
					contain no political content and primarily focus on humanitarian
					assistance.
					<ul className="list-disc list-inside">
						<li className="my-3">
							Teams consisting of 1-5 people can be formed.
						</li>
						<li className="my-3">
							Teams can choose from the presented tracks and develop solutions
							aligned with them.
						</li>
						<li className="my-3">
							Individuals can join predefined projects and immediately begin
							making a difference.
						</li>
						<li className="my-3">
							After the 3-day event concludes, the ideas with the most potential
							to make an impact will be selected and implemented, allowing us to
							start helping Palestinians in need as soon as possible.
						</li>
					</ul>
				</Modal.Content>
			</Modal>
		</>
	)
}
