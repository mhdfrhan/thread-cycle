"use client";

import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const DetailEdukasi = () => {
	const { slug } = useParams();
	const [article, setArticle] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const articleRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: articleRef,
		offset: ["start start", "end end"]
	});

	const scaleY = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001
	});

	const formatTitle = (slug) => {
		return slug.toString()
			.split('-')
			.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
			.join(' ');
	};

	useEffect(() => {
		const generateArticle = () => {
			return {
				title: formatTitle(slug),
				author: "Tim ThreadCycle",
				date: "15 Maret 2024",
				readTime: "5 min read",
				category: "Fashion Berkelanjutan",
				coverImage: "https://images.unsplash.com/photo-1518838439236-2b73ceb4638a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
				content: [
					{
						type: "paragraph",
						content: "Fashion berkelanjutan bukan sekadar tren, tetapi gerakan yang semakin penting di era modern ini. Dengan meningkatnya kesadaran akan dampak industri fashion terhadap lingkungan, lebih banyak orang yang mulai mencari alternatif fashion yang lebih ramah lingkungan.",
					},
					{
						type: "subheading",
						content: "Mengapa Fashion Berkelanjutan Penting?",
					},
					{
						type: "paragraph",
						content: "Industri fashion adalah salah satu penyumbang terbesar polusi lingkungan. Setiap tahun, jutaan pakaian berakhir di tempat pembuangan sampah, menciptakan masalah lingkungan yang serius.",
					},
					{
						type: "image",
						url: "https://images.unsplash.com/photo-1606053929013-311c13f97b5f?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
						caption: "Limbah tekstil yang menumpuk di tempat pembuangan",
					},
					{
						type: "subheading",
						content: "Solusi Melalui ThreadCycle",
					},
					{
						type: "paragraph",
						content: "ThreadCycle hadir sebagai solusi untuk mengurangi limbah fashion melalui sistem tukar-menukar pakaian yang inovatif. Platform ini memungkinkan pengguna untuk memberikan kehidupan baru pada pakaian yang tidak lagi mereka gunakan.",
					},
				],
				relatedArticles: [
					{
						title: "Tips Merawat Pakaian Agar Tahan Lama",
						slug: "tips-merawat-pakaian",
						image: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
					},
					{
						title: "Panduan Memulai Bisnis Fashion Berkelanjutan",
						slug: "panduan-bisnis-fashion",
						image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
					},
				]
			};
		};

		setArticle(generateArticle());
		setIsLoading(false);
	}, [slug]);

	if (isLoading || !article) {
		return (
			<div className="min-h-screen bg-white dark:bg-neutral-900 py-24">
				<div className="max-w-3xl mx-auto px-4">
					<div className="flex items-center justify-center h-[60vh]">
						<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-white dark:bg-neutral-900 py-24">
			<article ref={articleRef} className="relative max-w-3xl mx-auto px-4">
				{/* Tracing Beam */}
				<div className="absolute left-[-50px] top-0 h-full">
					<div className="sticky top-[100px] w-10 h-[80vh]">
						<motion.div
							className="h-full w-[2px] origin-top"
							style={{
								scaleY,
								background: `linear-gradient(
                  to bottom,
                  transparent 0%,
                  rgb(249 115 22) 10%,
                  rgb(249 115 22) 90%,
                  transparent 100%
                )`
							}}
						/>

						{/* Glowing Dot */}
						<motion.div
							className="absolute top-0 left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-orange-500"
							style={{
								top: "calc(var(--scroll-progress, 0) * 100%)",
								boxShadow: "0 0 20px 2px rgb(249 115 22)"
							}}
						/>
					</div>
				</div>

				{/* Your existing content */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="mb-8"
				>
					<Link
						href="/education"
						className="inline-flex items-center text-orange-500 hover:text-orange-600 mb-6"
					>
						<svg
							className="w-4 h-4 mr-2"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15 19l-7-7 7-7"
							/>
						</svg>
						Kembali ke Edukasi
					</Link>

					<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
						{article.title}
					</h1>

					<div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400 mb-6">
						<span>{article.author}</span>
						<span>•</span>
						<span>{article.date}</span>
						<span>•</span>
						<span>{article.readTime}</span>
					</div>

					<div className="relative aspect-[2/1] rounded-2xl overflow-hidden mb-8">
						<Image
							src={article.coverImage}
							alt={article.title}
							fill
							className="object-cover"
						/>
					</div>
				</motion.div>

				{/* Content sections with dots on timeline */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className="prose prose-lg dark:prose-invert max-w-none"
				>
					{article.content.map((block, index) => {
						switch (block.type) {
							case "paragraph":
								return (
									<div key={index} className="relative">
										<p className="text-neutral-700 dark:text-neutral-300 mb-6">
											{block.content}
										</p>
									</div>
								);
							case "subheading":
								return (
									<div key={index} className="relative">
										<h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mt-8 mb-4">
											{block.content}
										</h2>
									</div>
								);
							case "image":
								return (
									<figure key={index} className="relative my-8">
										<div className="relative aspect-video rounded-xl overflow-hidden">
											<Image
												src={block.url}
												alt={block.caption}
												fill
												className="object-cover"
											/>
										</div>
										<figcaption className="text-sm text-neutral-600 dark:text-neutral-400 text-center mt-2">
											{block.caption}
										</figcaption>
									</figure>
								);
							default:
								return null;
						}
					})}
				</motion.div>

				{/* Related Articles section */}
				<div className="mt-16 border-t border-neutral-200 dark:border-neutral-800 pt-8">
					<h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">
						Artikel Terkait
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{article.relatedArticles.map((related, index) => (
							<Link
								key={index}
								href={`/education/article/${related.slug}`}
								className="group block"
							>
								<div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3">
									<Image
										src={related.image}
										alt={related.title}
										fill
										className="object-cover transform group-hover:scale-105 transition-transform duration-300"
									/>
								</div>
								<h4 className="text-lg font-medium text-neutral-900 dark:text-white group-hover:text-orange-500 transition-colors">
									{related.title}
								</h4>
							</Link>
						))}
					</div>
				</div>
			</article>
		</div>
	);
};

export default DetailEdukasi;