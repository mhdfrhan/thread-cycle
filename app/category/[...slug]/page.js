"use client";

import { useState, useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Category = () => {
	const { slug } = useParams();
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [products, setProducts] = useState([]);
	const [filters, setFilters] = useState({
		priceRange: "all",
		condition: "all",
		size: "all",
	});

	const categoryNames = useMemo(() => ({
		"all": "Semua Kategori",
		"women": "Pakaian Wanita",
		"men": "Pakaian Pria",
		"vintage": "Vintage",
		"streetwear": "Streetwear",
		"sustainable": "Sustainable",
	}), []);

	const conditions = useMemo(() => [
		{ id: "all", name: "Semua Kondisi" },
		{ id: "new", name: "Baru" },
		{ id: "like-new", name: "Seperti Baru" },
		{ id: "good", name: "Baik" },
		{ id: "fair", name: "Cukup Baik" },
	], []);

	const sizes = useMemo(() => [
		{ id: "all", name: "Semua Ukuran" },
		{ id: "xs", name: "XS" },
		{ id: "s", name: "S" },
		{ id: "m", name: "M" },
		{ id: "l", name: "L" },
		{ id: "xl", name: "XL" },
	], []);

	const priceRanges = [
		{ id: "all", name: "Semua Harga" },
		{ id: "0-50", name: "Dibawah 50K" },
		{ id: "50-100", name: "50K - 100K" },
		{ id: "100-200", name: "100K - 200K" },
		{ id: "200-plus", name: "200K+" },
	];

	useEffect(() => {
		const generateProducts = () => {
			return Array.from({ length: 12 }, (_, i) => ({
				id: i + 1,
				name: `${categoryNames[slug] || "Produk"} ${i + 1}`,
				price: Math.floor(Math.random() * 300000) + 50000,
				condition: conditions[Math.floor(Math.random() * conditions.length)].id,
				size: sizes[Math.floor(Math.random() * sizes.length)].id,
				image: `/img/products/${Math.floor(Math.random() * 13) + 1}.png`,
				brand: ["Nike", "Adidas", "Uniqlo", "H&M", "Zara"][Math.floor(Math.random() * 5)],
			}));
		};

		setProducts(generateProducts());
	}, [slug, categoryNames, conditions, sizes]);


	const FilterButton = () => (
		<button
			onClick={() => setIsFilterOpen(true)}
			className="lg:hidden fixed left-4 bottom-4 z-50 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300"
		>
			<svg
				className="w-6 h-6"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
				/>
			</svg>
		</button>
	);

	const FilterSection = ({ title, options, currentValue, filterType }) => (
		<div className="mb-8">
			<h3 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-white">
				{title}
			</h3>
			<div className="grid grid-cols-2 gap-2">
				{options.map((option) => (
					<button
						key={option.id}
						onClick={() => setFilters(prev => ({ ...prev, [filterType]: option.id }))}
						className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${currentValue === option.id
							? "bg-orange-500 text-white"
							: "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700"
							}`}
					>
						{option.name}
					</button>
				))}
			</div>
		</div>
	);

	return (
		<div className="min-h-screen bg-white dark:bg-neutral-900 py-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
						{categoryNames[slug] || "Kategori Tidak Ditemukan"}
					</h1>
					<p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
						Temukan {categoryNames[slug]?.toLowerCase() || "produk"} berkualitas dengan harga terjangkau
					</p>
				</div>

				<div className="flex flex-col lg:flex-row gap-8">
					<FilterButton />

					<AnimatePresence>
						{isFilterOpen && (
							<>
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									onClick={() => setIsFilterOpen(false)}
									className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
								/>

								<motion.div
									initial={{ x: "-100%" }}
									animate={{ x: 0 }}
									exit={{ x: "-100%" }}
									transition={{ type: "spring", damping: 15 }}
									className="fixed inset-y-0 left-0 w-[300px] bg-white dark:bg-neutral-900 z-50 lg:hidden overflow-y-auto"
								>
									<div className="p-4">
										<div className="flex justify-between items-center mb-6">
											<h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
												Filter
											</h2>
											<button
												onClick={() => setIsFilterOpen(false)}
												className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full"
											>
												<svg
													className="w-6 h-6"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M6 18L18 6M6 6l12 12"
													/>
												</svg>
											</button>
										</div>

										<div className="space-y-6">
											<FilterSection
												title="Rentang Harga"
												options={priceRanges}
												currentValue={filters.priceRange}
												filterType="priceRange"
											/>
											<FilterSection
												title="Kondisi"
												options={conditions}
												currentValue={filters.condition}
												filterType="condition"
											/>
											<FilterSection
												title="Ukuran"
												options={sizes}
												currentValue={filters.size}
												filterType="size"
											/>
										</div>
									</div>
								</motion.div>
							</>
						)}
					</AnimatePresence>

					<div className="hidden lg:block w-64 flex-shrink-0">
						<div className="sticky top-24 bg-white dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800">
							<div className="flex justify-between items-center mb-6">
								<h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
									Filter
								</h2>
								<button
									onClick={() => setFilters({
										priceRange: "all",
										condition: "all",
										size: "all",
									})}
									className="text-sm text-orange-500 hover:text-orange-600"
								>
									Reset
								</button>
							</div>

							<div className="space-y-6">
								<FilterSection
									title="Rentang Harga"
									options={priceRanges}
									currentValue={filters.priceRange}
									filterType="priceRange"
								/>
								<FilterSection
									title="Kondisi"
									options={conditions}
									currentValue={filters.condition}
									filterType="condition"
								/>
								<FilterSection
									title="Ukuran"
									options={sizes}
									currentValue={filters.size}
									filterType="size"
								/>
							</div>
						</div>
					</div>

					<div className="flex-1">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
						>
							{products.map((product) => (
								<motion.div
									key={product.id}
									layout
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition-all duration-300"
								>
									<div className="relative aspect-square">
										<Image
											src={product.image}
											alt={product.name}
											fill
											className="object-cover"
										/>
										<div className="absolute top-2 right-2">
											<span className="bg-black/60 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm">
												{product.condition}
											</span>
										</div>
									</div>
									<div className="p-4">
										<h3 className="font-semibold text-neutral-900 dark:text-white mb-1">
											{product.name}
										</h3>
										<p className="text-orange-500 font-medium mb-2">
											Rp {product.price.toLocaleString('id-ID')}
										</p>
										<div className="flex items-center justify-between">
											<span className="text-sm text-neutral-600 dark:text-neutral-400">
												{product.brand}
											</span>
											<span className="text-sm text-neutral-600 dark:text-neutral-400 uppercase">
												{product.size}
											</span>
										</div>
									</div>
								</motion.div>
							))}
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Category;