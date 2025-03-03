"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

export const AnimatedTestimonials = ({
	testimonials,
	autoplay = false
}) => {
	const [isClient, setIsClient] = useState(false);
	const [active, setActive] = useState(0);

	const handleNext = useCallback(() => {
		setActive((prev) => (prev + 1) % testimonials.length);
	}, [testimonials.length]);

	const handlePrev = useCallback(() => {
		setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
	}, [testimonials.length]);

	useEffect(() => {
		setIsClient(true);
	}, []);

	useEffect(() => {
		if (autoplay && isClient) {
			const interval = setInterval(handleNext, 5000);
			return () => clearInterval(interval);
		}
	}, [autoplay, isClient, handleNext]); 

	const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

	if (!isClient) {
		return null;
	}

	return (
		<div className="border rounded-2xl border-neutral-300 dark:border-neutral-800 antialiased font-sans px-4 md:px-8 lg:px-12 py-20">
			<div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
				<div>
					<div className="relative h-80 w-full">
						<AnimatePresence mode="wait">
							{testimonials.map((testimonial, index) => (
								<motion.div
									key={testimonial.src}
									initial={{
										opacity: 0,
										scale: 0.9,
										z: -100,
										rotate: randomRotateY(),
									}}
									animate={{
										opacity: index === active ? 1 : 0.7,
										scale: index === active ? 1 : 0.95,
										z: index === active ? 0 : -100,
										rotate: index === active ? 0 : randomRotateY(),
										zIndex: index === active ? 999 : testimonials.length + 2 - index,
										y: index === active ? [0, -80, 0] : 0,
									}}
									exit={{
										opacity: 0,
										scale: 0.9,
										z: -100,
										rotate: randomRotateY(),
									}}
									transition={{
										duration: 0.4,
										ease: "easeInOut",
									}}
									className="absolute inset-0 origin-bottom"
								>
									<Image
										src={testimonial.src}
										alt={testimonial.name}
										width={500}
										height={500}
										priority={index === active}
										className="h-full w-full rounded-3xl object-cover object-center"
									/>
								</motion.div>
							))}
						</AnimatePresence>
					</div>
				</div>

				<div className="flex justify-between flex-col py-4">
					<AnimatePresence mode="wait">
						<motion.div
							key={active}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.3 }}
						>
							<h3 className="text-2xl font-bold text-neutral-800 dark:text-white">
								{testimonials[active].name}
							</h3>
							<p className="text-sm text-neutral-500">
								{testimonials[active].designation}
							</p>
							<motion.p className="text-sm sm:text-lg text-neutral-600 dark:text-neutral-300 mt-8">
								{testimonials[active].quote.split(" ").map((word, index) => (
									<motion.span
										key={index}
										initial={{ opacity: 0, y: 5, filter: "blur(10px)" }}
										animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
										transition={{
											duration: 0.2,
											delay: index * 0.02,
										}}
										className="inline-block"
									>
										{word}&nbsp;
									</motion.span>
								))}
							</motion.p>
						</motion.div>
					</AnimatePresence>

					<div className="flex gap-4 mt-6">
						<button
							onClick={handlePrev}
							className="h-7 w-7 rounded-full bg-neutral-800 cursor-pointer flex items-center justify-center group hover:bg-neutral-700 transition-colors"
						>
							<IconArrowLeft className="h-5 w-5 text-neutral-400 group-hover:rotate-12 transition-transform duration-300" />
						</button>
						<button
							onClick={handleNext}
							className="h-7 w-7 rounded-full bg-neutral-800 cursor-pointer flex items-center justify-center group hover:bg-neutral-700 transition-colors"
						>
							<IconArrowRight className="h-5 w-5 text-neutral-400 group-hover:-rotate-12 transition-transform duration-300" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
