"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function UpcomingEvents() {
	return (
		<div className="py-16 bg-neutral-100 dark:bg-neutral-950">
			<div className="max-w-7xl mx-auto px-4">
				<div className="mb-8 text-center">
					<h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-neutral-800 dark:text-white mb-4 flex justify-center items-center text-center">
						<span className="text-orange-500 mr-4">
							<svg className="size-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
								<rect width="256" height="256" fill="none" />
								<line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
								<line x1="48" y1="80" x2="208" y2="176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
								<line x1="48" y1="176" x2="208" y2="80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
							</svg>
						</span>
						Acara Yang Akan Datang
						<span className="text-orange-500 ml-4">
							<svg className="size-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
								<rect width="256" height="256" fill="none" />
								<line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
								<line x1="48" y1="80" x2="208" y2="176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
								<line x1="48" y1="176" x2="208" y2="80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
							</svg>
						</span>
					</h2>
					<p className="text-lg text-neutral-400 max-w-2xl mx-auto text-center mb-8">
						Ikuti acara-acara menarik yang akan datang seperti Seminar dan Event Lainnya di ThreadCycle. Jangan sampai ketinggalan!
					</p>
				</div>
				<ExpandableCardDemo />
			</div>
		</div>
	);
}

function ExpandableCardDemo() {
	const [active, setActive] = useState(null);
	const id = useId();
	const ref = useRef(null);

	// Lock scroll when modal is open
	useEffect(() => {
		if (active) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		function onKeyDown(event) {
			if (event.key === "Escape") {
				setActive(null);
			}
		}

		window.addEventListener("keydown", onKeyDown);
		return () => {
			window.removeEventListener("keydown", onKeyDown);
			document.body.style.overflow = "auto";
		};
	}, [active]);

	useOutsideClick(ref, () => setActive(null));

	return (
		<>
			{/* Backdrop */}
			<AnimatePresence>
				{active && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-black/60 backdrop-blur-sm w-full h-full z-[60]"
					/>
				)}
			</AnimatePresence>

			{/* Modal */}
			<AnimatePresence>
				{active && (
					<div className="fixed inset-0 flex items-center justify-center z-[70] px-4 py-16">

						{/* Modal Content */}
						<motion.div
							layoutId={`card-${active.title}-${id}`}
							ref={ref}
							className="w-full max-w-2xl bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl"
						>
							<motion.div layoutId={`image-${active.title}-${id}`}>
								<Image
									priority
									width={600}
									height={400}
									src={active.src}
									alt={active.title}
									className="w-full h-72 object-cover object-center"
								/>
							</motion.div>

							<div className="flex flex-col max-h-[calc(100vh-400px)] overflow-hidden">
								<div className="flex justify-between items-start p-6 border-b border-neutral-200 dark:border-neutral-800">
									<div className="flex-1">
										<motion.h3
											layoutId={`title-${active.title}-${id}`}
											className="text-xl font-semibold text-neutral-900 dark:text-white mb-2"
										>
											{active.title}
										</motion.h3>
										<motion.p
											layoutId={`description-${active.description}-${id}`}
											className="text-neutral-600 dark:text-neutral-400"
										>
											{active.description}
										</motion.p>
									</div>

									<motion.a
										layout
										href={active.ctaLink}
										target="_blank"
										className="ml-4 px-6 py-2 text-sm font-medium rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors"
									>
										{active.ctaText}
									</motion.a>
								</div>

								<div className="p-6 overflow-y-auto">
									<motion.div
										layout
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										className="prose dark:prose-invert max-w-none"
									>
										{typeof active.content === "function" ? active.content() : active.content}
									</motion.div>
								</div>
							</div>
						</motion.div>
					</div>
				)}
			</AnimatePresence>

			{/* Grid of Cards */}
			<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{cards.map((card) => (
					<motion.li
						layoutId={`card-${card.title}-${id}`}
						key={card.title}
						onClick={() => setActive(card)}
						className="group bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md cursor-pointer"
					>
						<motion.div layoutId={`image-${card.title}-${id}`} className="relative h-48">
							<Image
								width={400}
								height={300}
								src={card.src}
								alt={card.title}
								className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform"
							/>
						</motion.div>
						<div className="p-4">
							<motion.h3
								layoutId={`title-${card.title}-${id}`}
								className="font-semibold text-neutral-900 dark:text-white mb-2"
							>
								{card.title}
							</motion.h3>
							<motion.p
								layoutId={`description-${card.description}-${id}`}
								className="text-neutral-600 dark:text-neutral-400 text-sm"
							>
								{card.description}
							</motion.p>
						</div>
					</motion.li>
				))}
			</ul>
		</>
	);
}

const cards = [
	{
		description: "10 April 2025",
		title: "Seminar Pemanfaatan Baju Bekas",
		src: "https://images.unsplash.com/photo-1542060748-10c28b62716f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		ctaText: "Daftar Sekarang",
		ctaLink: "/education/article/seminar-pemanfaatan-baju-bekas",
		content: () => {
			return (
				<p>
					Bergabunglah dalam seminar eksklusif tentang pemanfaatan pakaian bekas yang akan membahas cara mengubah pakaian lama menjadi barang yang memiliki nilai baru.
					Seminar ini akan menghadirkan para pakar fashion berkelanjutan yang akan memberikan wawasan tentang upcycling, daur ulang tekstil, dan tren fashion eco-friendly.
					<br /> <br />
					Acara ini cocok untuk siapa saja yang ingin mengurangi limbah tekstil, mulai dari individu yang ingin lebih peduli terhadap lingkungan hingga pelaku bisnis yang ingin berkontribusi dalam fashion berkelanjutan.
				</p>
			);
		},
	},
	{
		description: "12 April 2025",
		title: "Cara Membuat Baju Bekas Menjadi Cuan",
		src: "https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		ctaText: "Lihat Artikel",
		ctaLink: "/education/article/cara-membuat-baju-bekas-menjadi-cuan",
		content: () => {
			return (
				<p>
					Banyak orang tidak menyadari bahwa pakaian bekas yang sudah tidak terpakai masih memiliki nilai ekonomi tinggi.
					Dalam artikel ini, kami akan membahas berbagai cara untuk mengubah pakaian bekas menjadi sumber penghasilan.
					<br /> <br />
					Dari menjual pakaian preloved di platform seperti ThreadCycle, hingga mengubahnya menjadi produk baru melalui teknik upcycling – temukan berbagai strategi yang bisa kamu gunakan untuk memaksimalkan keuntungan dari pakaian lama.
				</p>
			);
		},
	},
	{
		description: "15 April 2025",
		title: "Mulai Bisnis Dari Baju Bekas",
		src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		ctaText: "Lihat Artikel",
		ctaLink: "/education/article/mulai-bisnis-dari-baju-bekas",
		content: () => {
			return (
				<p>
					Industri fashion berkelanjutan semakin berkembang, dan bisnis pakaian bekas kini menjadi peluang usaha yang menjanjikan.
					Artikel ini akan membahas langkah-langkah memulai bisnis dari pakaian bekas, mulai dari memilih pakaian yang bernilai jual, memasarkan dengan strategi digital, hingga cara membangun brand fashion sustainable yang menarik pelanggan.
					<br /> <br />
					Jika kamu ingin memiliki bisnis yang ramah lingkungan dan tetap menghasilkan keuntungan, artikel ini akan memberikan panduan lengkap untuk memulai.
				</p>
			);
		},
	},
];

