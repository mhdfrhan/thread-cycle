"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Education = () => {
  const articles = [
    {
      id: 1,
      title: "Mengenal Fashion Berkelanjutan",
      slug: "mengenal-fashion-berkelanjutan",
      description: "Pelajari pentingnya fashion berkelanjutan dan dampaknya terhadap lingkungan",
      image: "https://images.unsplash.com/photo-1585914924626-15adac1e6402?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Dasar",
      readTime: "5 min read",
      featured: true,
    },
    {
      id: 2,
      title: "Tips Merawat Pakaian Agar Tahan Lama",
      slug: "tips-merawat-pakaian-agar-tahan-lama",
      description: "Panduan lengkap cara merawat berbagai jenis pakaian dengan benar",
      image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Perawatan",
      readTime: "8 min read",
    },
  ];

  const courses = [
    {
      id: 1,
      title: "Kelas Fashion Berkelanjutan",
      slug: "kelas-fashion-berkelanjutan",
      description: "Pelajari dasar-dasar fashion berkelanjutan dan cara menerapkannya",
      image: "https://images.unsplash.com/photo-1676278746104-a31a9ab267d9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      level: "Pemula",
      duration: "4 Minggu",
      price: "Gratis",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            Pusat Edukasi ThreadCycle
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Pelajari lebih dalam tentang fashion berkelanjutan dan cara berkontribusi
            dalam menciptakan industri fashion yang lebih ramah lingkungan
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <div className="aspect-video relative">
              <Image
                src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Education Hero"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <span className="px-3 py-1 bg-orange-500 text-white text-sm rounded-full mb-4 inline-block">
                  Featured
                </span>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Memulai Perjalanan Fashion Berkelanjutan Anda
                </h2>
                <p className="text-neutral-200 mb-6 max-w-2xl">
                  Panduan lengkap untuk memahami dan menerapkan gaya hidup fashion yang berkelanjutan
                </p>
                <Link
                  href="/education/article/getting-started"
                  className="inline-flex items-center px-6 py-3 bg-white text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors duration-300"
                >
                  Baca Selengkapnya
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">
            Artikel Terbaru
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-video">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-200 text-sm rounded-full">
                      {article.category}
                    </span>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                    {article.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                    {article.description}
                  </p>
                  <Link
                    href={`/education/article/${article.slug}`}
                    className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center"
                  >
                    Baca Selengkapnya
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">
            Kelas Online
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-video">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/60 text-white text-sm rounded-full backdrop-blur-sm">
                      {course.level}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                    {course.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">
                      {course.duration}
                    </span>
                    <span className="text-orange-500 font-semibold">
                      {course.price}
                    </span>
                  </div>
                  <Link href={`/education/course/${course.slug}`} className="w-full">
                    <button className="w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300">
                      Mulai Belajar
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-orange-500 rounded-2xl p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Dapatkan Update Terbaru
            </h2>
            <p className="text-orange-100 mb-8">
              Berlangganan newsletter kami untuk mendapatkan artikel dan tips terbaru
              seputar fashion berkelanjutan
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-3 bg-white text-orange-500 rounded-lg hover:bg-orange-50 transition-colors duration-300">
                Berlangganan
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Education;