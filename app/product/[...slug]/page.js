"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const ProductDetail = () => {
	const { slug } = useParams();
	const [product, setProduct] = useState(null);
	const [selectedImage, setSelectedImage] = useState(0);
	const [isLoading, setIsLoading] = useState(true);
	const [isAddingToCart, setIsAddingToCart] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);

	const formatProductName = (slug) => {
		return slug.toString()
			.split('-')
			.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
			.join(' ');
	};

	
	useEffect(() => {
		const generateProduct = () => {
			return {
				id: 1,
				name: formatProductName(slug),
				price: Math.floor(Math.random() * 300000) + 50000,
				description: "Pakaian dalam kondisi sangat baik, jarang dipakai. Material premium dan nyaman digunakan.",
				condition: "Seperti Baru",
				brand: "Nike",
				size: "L",
				category: "Outerwear",
				seller: {
					name: "Muhammad Farhan",
					rating: 4.8,
					totalSales: 156,
					joinDate: "Feb 2024"
				},
				images: [
					`/img/products/${(Math.floor(Math.random() * 13) + 1)}.png`,
					`/img/products/${(Math.floor(Math.random() * 13) + 1)}.png`,
					`/img/products/${(Math.floor(Math.random() * 13) + 1)}.png`,
					`/img/products/${(Math.floor(Math.random() * 13) + 1)}.png`
				]
			};
		};

		setProduct(generateProduct());
		setIsLoading(false);
	}, [slug]);

	const handleAddToCart = () => {
		setIsAddingToCart(true);
		setTimeout(() => {
			setShowSuccess(true);
			setIsAddingToCart(false);
			setTimeout(() => {
				setShowSuccess(false);
			}, 2000);
		}, 1000);
	};

	if (isLoading || !product) {
		return (
			<div className="min-h-screen bg-white dark:bg-neutral-900 pt-24">
				<div className="max-w-7xl mx-auto px-4">
					<div className="flex items-center justify-center h-[60vh]">
						<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-white dark:bg-neutral-900 py-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col lg:flex-row gap-8">
					<div className="w-full lg:w-3/5">
						<div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
							<Image
								src={product.images[selectedImage]}
								alt={product.name}
								fill
								className="object-cover"
							/>
						</div>
						<div className="grid grid-cols-4 gap-4">
							{product.images.map((image, index) => (
								<button
									key={index}
									onClick={() => setSelectedImage(index)}
									className={`relative aspect-square rounded-lg overflow-hidden ${selectedImage === index
										? "ring-2 ring-orange-500"
										: "opacity-70 hover:opacity-100"
										}`}
								>
									<Image
										src={image}
										alt={`${product.name} view ${index + 1}`}
										fill
										className="object-cover"
									/>
								</button>
							))}
						</div>
					</div>

					<div className="w-full lg:w-2/5">
						<div className="sticky top-24">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								className="space-y-6"
							>
								<div>
									<h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">
										{product.name}
									</h1>
									<p className="text-2xl font-semibold text-orange-500">
										Rp. {product.price.toLocaleString('id-ID')}
									</p>
								</div>

								<div className="space-y-4">
									<div className="flex items-center gap-4">
										<div className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm rounded-full">
											{product.condition}
										</div>
										<div className="text-sm text-neutral-600 dark:text-neutral-400">
											{product.category}
										</div>
									</div>

									<p className="text-neutral-600 dark:text-neutral-400">
										{product.description}
									</p>

									<div className="grid grid-cols-2 gap-4">
										<div>
											<span className="text-sm text-neutral-500 dark:text-neutral-400">Brand</span>
											<p className="font-medium text-neutral-900 dark:text-white">{product.brand}</p>
										</div>
										<div>
											<span className="text-sm text-neutral-500 dark:text-neutral-400">Ukuran</span>
											<p className="font-medium text-neutral-900 dark:text-white">{product.size}</p>
										</div>
									</div>
								</div>

								<div className="border-t border-neutral-200 dark:border-neutral-800 pt-6">
									<div className="flex items-center gap-4 mb-6">
										<div className="w-12 h-12 bg-neutral-200 dark:bg-neutral-800 rounded-full flex items-center justify-center">
											<span className="text-xl">👤</span>
										</div>
										<div>
											<h3 className="font-medium text-neutral-900 dark:text-white">
												{product.seller.name}
											</h3>
											<div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
												<span>⭐ {product.seller.rating}</span>
												<span>•</span>
												<span>{product.seller.totalSales} produk terjual</span>
											</div>
										</div>
									</div>
								</div>

								<div className="flex flex-wrap gap-4">
									<button className="bg-orange-500 text-white py-2 px-5 md:px-6 md:py-3 rounded-xl hover:bg-orange-600 transition-colors w-full">
										Beli Sekarang
									</button>
									<div className="relative w-full">
										<motion.button
											onClick={handleAddToCart}
											disabled={isAddingToCart}
											className={`w-full border border-orange-500 text-orange-500 py-2 px-5 md:px-6 md:py-3 rounded-xl hover:bg-orange-50 dark:hover:bg-neutral-800 transition-colors ${isAddingToCart && "cursor-not-allowed opacity-50"
												}`}
										>
											<div className="flex items-center justify-center gap-2">
												<AnimatePresence mode="wait">
													{isAddingToCart ? (
														<motion.svg
															key="loading"
															className="w-5 h-5 animate-spin"
															initial={{ opacity: 0, rotate: 0 }}
															animate={{ opacity: 1, rotate: 360 }}
															transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
															fill="none"
															stroke="currentColor"
															viewBox="0 0 24 24"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
															/>
														</motion.svg>
													) : (
														<motion.svg
															key="cart"
															className="w-5 h-5"
															initial={{ scale: 0.5, opacity: 0 }}
															animate={{ scale: 1, opacity: 1 }}
															exit={{ scale: 0.5, opacity: 0 }}
															fill="none"
															stroke="currentColor"
															viewBox="0 0 24 24"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
															/>
														</motion.svg>
													)}
												</AnimatePresence>
												<span>Tambah ke Keranjang</span>
											</div>
										</motion.button>

										<AnimatePresence>
											{showSuccess && (
												<motion.div
													initial={{ opacity: 0, y: 10 }}
													animate={{ opacity: 1, y: 0 }}
													exit={{ opacity: 0, y: -10 }}
													transition={{ duration: 0.2 }}
													className="absolute top-full left-0 right-0 mt-2 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl"
												>
													<div className="flex items-center gap-2 text-green-600 dark:text-green-400">
														<motion.div
															initial={{ scale: 0 }}
															animate={{ scale: 1 }}
															transition={{
																type: "spring",
																stiffness: 300,
																damping: 20
															}}
														>
															<svg
																className="w-5 h-5"
																fill="none"
																stroke="currentColor"
																viewBox="0 0 24 24"
															>
																<path
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	strokeWidth={2}
																	d="M5 13l4 4L19 7"
																/>
															</svg>
														</motion.div>
														<span className="text-sm font-medium">
															Produk berhasil ditambahkan
														</span>
													</div>
												</motion.div>
											)}
										</AnimatePresence>
									</div>
								</div>

								<div className="space-y-4 border-t border-neutral-200 dark:border-neutral-800 pt-6">
									<h3 className="font-medium text-neutral-900 dark:text-white">
										Fitur Produk
									</h3>
									<div className="space-y-2">
										{[
											"Garansi 7 hari pengembalian",
											"Pengiriman aman dan terpercaya",
											"Sudah dicek dan dibersihkan",
											"Kondisi sesuai deskripsi"
										].map((feature, index) => (
											<div key={index} className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
												<svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
												</svg>
												<span>{feature}</span>
											</div>
										))}
									</div>
								</div>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;