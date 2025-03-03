"use client";

import { ParallaxBanner } from "react-scroll-parallax";
import { ParallaxProvider } from "react-scroll-parallax";
import { FlipWords } from "./flip-words";
import Link from "next/link";

const HomeBanner = () => {
	const words = ["Berarti", "Bernilai", "Berkesan", "Bermanfaat"];

	return (
		<ParallaxProvider>
			<ParallaxBanner
				layers={[
					{
						image: "/img/bg.jpg",
						speed: -20,
					},
				]}
				className="aspect-[2/1] relative h-screen"
			/>

			<div className="absolute inset-0 flex flex-col items-center justify-center text-center w-full px-4 overflow-hidden">
				<h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold text-white max-w-4xl mx-auto">Ubah Pakaian Lama Kamu Jadi <FlipWords words={words} /></h1>
				<p className="sm:text-lg text-neutral-200 mt-4 max-w-2xl mx-auto">
					ThreadCycle adalah platform untuk membeli dan menjual pakaian bekas dengan harga yang terjangkau.
				</p>

				<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
					<Link
						href="/exchange"
						className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition-all duration-300 flex items-center gap-2"
					>
						Mulai Menukar
						<svg
							className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</Link>
					<Link
						href="/marketplace"
						className="group px-6 py-3 sm:px-8 sm:py-4 bg-transparent text-white font-medium rounded-full border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
					>
						Belanja Sekarang
						<svg
							className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
						</svg>
					</Link>
				</div>

				<div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
					{[
						{ label: 'Pengguna Aktif', value: '10K+' },
						{ label: 'Pakaian Tersedia', value: '50K+' },
						{ label: 'Transaksi Sukses', value: '25K+' },
						{ label: 'Rating Positif', value: '4.8/5' },
					].map((stat, index) => (
						<div key={index} className="text-center">
							<div className="text-3xl font-bold text-orange-500">{stat.value}</div>
							<div className="text-sm text-neutral-300 mt-1">{stat.label}</div>
						</div>
					))}
				</div>
			</div>

		</ParallaxProvider>
	);
};

export default HomeBanner;