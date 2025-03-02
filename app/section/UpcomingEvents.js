"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function UpcomingEvents() {
	return (
		<div className="py-16 bg-neutral-100 dark:bg-neutral-950">
			<div className="max-w-7xl mx-auto px-4">
				<div className="mb-8 ">
				<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-800 dark:text-white flex justify-center items-center mb-4">
					<span className="text-orange-500 mr-4">
						<svg className="size-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
							<rect width="256" height="256" fill="none" />
							<line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
							<line x1="48" y1="80" x2="208" y2="176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
							<line x1="48" y1="176" x2="208" y2="80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
						</svg>
					</span>
					Upcoming Events
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

	useEffect(() => {
		function onKeyDown(event) {
			if (event.key === "Escape") {
				setActive(null);
			}
		}

		if (active) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [active]);

	useOutsideClick(ref, () => setActive(null));

	return (<>
		<AnimatePresence>
			{active && typeof active === "object" && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 bg-black/20 h-full w-full z-10" />
			)}
		</AnimatePresence>
		<AnimatePresence>
			{active && typeof active === "object" ? (
				<div className="fixed inset-0  grid place-items-center z-[100]">
					<motion.button
						key={`button-${active.title}-${id}`}
						layout
						initial={{
							opacity: 0,
						}}
						animate={{
							opacity: 1,
						}}
						exit={{
							opacity: 0,
							transition: {
								duration: 0.05,
							},
						}}
						className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
						onClick={() => setActive(null)}>
						<CloseIcon />
					</motion.button>
					<motion.div
						layoutId={`card-${active.title}-${id}`}
						ref={ref}
						className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden">
						<motion.div layoutId={`image-${active.title}-${id}`}>
							<Image
								priority
								width={200}
								height={200}
								src={active.src}
								alt={active.title}
								className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top" />
						</motion.div>

						<div>
							<div className="flex justify-between items-start p-4">
								<div className="">
									<motion.h3
										layoutId={`title-${active.title}-${id}`}
										className="font-medium text-neutral-700 dark:text-neutral-200 text-base">
										{active.title}
									</motion.h3>
									<motion.p
										layoutId={`description-${active.description}-${id}`}
										className="text-neutral-600 dark:text-neutral-400 text-base">
										{active.description}
									</motion.p>
								</div>

								<motion.a
									layout
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									href={active.ctaLink}
									target="_blank"
									className="px-8 py-3 text-sm rounded-full font-bold bg-orange-500 text-white">
									{active.ctaText}
								</motion.a>
							</div>
							<div className="pt-4 relative px-4">
								<motion.div
									layout
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
									{typeof active.content === "function"
										? active.content()
										: active.content}
								</motion.div>
							</div>
						</div>
					</motion.div>
				</div>
			) : null}
		</AnimatePresence>
		<ul
			className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-4">
			{cards.map((card, index) => (
				<motion.div
					layoutId={`card-${card.title}-${id}`}
					key={card.title}
					onClick={() => setActive(card)}
					className="p-4 flex flex-col  hover:bg-white dark:hover:bg-neutral-800 rounded-xl cursor-pointer">
					<div className="flex gap-4 flex-col  w-full">
						<motion.div layoutId={`image-${card.title}-${id}`}>
							<Image
								width={100}
								height={100}
								src={card.src}
								alt={card.title}
								className="h-60 w-full  rounded-lg object-cover object-top" />
						</motion.div>
						<div className="flex justify-center items-center flex-col">
							<motion.h3
								layoutId={`title-${card.title}-${id}`}
								className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base">
								{card.title}
							</motion.h3>
							<motion.p
								layoutId={`description-${card.description}-${id}`}
								className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base">
								{card.description}
							</motion.p>
						</div>
					</div>
				</motion.div>
			))}
		</ul>
	</>);
}

export const CloseIcon = () => {
	return (
		(<motion.svg
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
			}}
			exit={{
				opacity: 0,
				transition: {
					duration: 0.05,
				},
			}}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="h-4 w-4 text-black">
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M18 6l-12 12" />
			<path d="M6 6l12 12" />
		</motion.svg>)
	);
};

const cards = [
	{
	  description: "10 April 2025",
	  title: "Seminar Pemanfaatan Baju Bekas",
	  src: "https://images.unsplash.com/photo-1542060748-10c28b62716f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	  ctaText: "Daftar Sekarang",
	  ctaLink: "#",
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
	  ctaLink: "#",
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
	  ctaLink: "#",
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
 
