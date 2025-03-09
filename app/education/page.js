"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

const Education = () => {
  const [activeCourse, setActiveCourse] = useState(null);

  useEffect(() => {
    if (activeCourse) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeCourse]);

  const articles = [
    {
      id: 1,
      title: "Mengenal Fashion Berkelanjutan",
      slug: "mengenal-fashion-berkelanjutan",
      description:
        "Pelajari pentingnya fashion berkelanjutan dan dampaknya terhadap lingkungan",
      image:
        "https://images.unsplash.com/photo-1585914924626-15adac1e6402?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Dasar",
      readTime: "5 min read",
      featured: true,
    },
    {
      id: 2,
      title: "Tips Merawat Pakaian Agar Tahan Lama",
      slug: "tips-merawat-pakaian-agar-tahan-lama",
      description:
        "Panduan lengkap cara merawat berbagai jenis pakaian dengan benar",
      image:
        "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Perawatan",
      readTime: "8 min read",
    },
    {
      id: 3,
      title: "Cara Membuat Baju Bekas Menjadi Cuan",
      slug: "cara-membuat-baju-bekas-menjadi-cuan",
      description:
        "Pelajari cara membuat baju bekas menjadi cuan dan menjualnya secara online",
      image:
        "https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Fashion",
      readTime: "6 min read",
    },
  ];

  const courses = [
    {
      id: 1,
      title: "Kelas Fashion Berkelanjutan",
      slug: "kelas-fashion-berkelanjutan",
      description:
        "Pelajari dasar-dasar fashion berkelanjutan dan cara menerapkannya",
      image:
        "https://images.unsplash.com/photo-1676278746104-a31a9ab267d9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      level: "Pemula",
      duration: "4 Minggu",
      price: "Gratis",
      modules: [
        {
          title: "Pengenalan Fashion Berkelanjutan",
          duration: "60 menit",
          lessons: [
            {
              title: "Apa itu Fashion Berkelanjutan?",
              duration: "15 menit",
              type: "video",
            },
            {
              title: "Dampak Industri Fashion",
              duration: "20 menit",
              type: "video",
            },
            { title: "Quiz Module 1", duration: "10 menit", type: "quiz" },
          ],
        },
        {
          title: "Praktik Berkelanjutan",
          duration: "90 menit",
          lessons: [
            {
              title: "Memilih Pakaian Berkelanjutan",
              duration: "20 menit",
              type: "video",
            },
            { title: "Merawat Pakaian", duration: "25 menit", type: "video" },
            {
              title: "Praktik: Evaluasi Pakaian",
              duration: "30 menit",
              type: "practice",
            },
          ],
        },
      ],
      instructor: {
        name: "Muhammad Farhan",
        role: "CEO & Founder ThreadCycle",
        image: "/img/me.jpg",
      },
    },
    {
      id: 2,
      title: "Upcycling: Transformasi Pakaian Bekas",
      slug: "upcycling-transformasi-pakaian-bekas",
      description:
        "Teknik kreatif untuk memberikan kehidupan baru pada pakaian lama dengan nilai estetik dan fungsional yang lebih tinggi",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      level: "Menengah",
      duration: "6 Minggu",
      price: "Rp 250.000",
      modules: [
        {
          title: "Dasar-Dasar Upcycling",
          duration: "120 menit",
          lessons: [
            {
              title: "Prinsip Dasar Upcycling vs Recycling",
              duration: "25 menit",
              type: "video",
            },
            {
              title: "Peralatan dan Bahan yang Dibutuhkan",
              duration: "30 menit",
              type: "video",
            },
            {
              title: "Menilai Potensi Pakaian Bekas",
              duration: "35 menit",
              type: "practice",
            },
            {
              title: "Quiz: Identifikasi Peluang Upcycling",
              duration: "15 menit",
              type: "quiz",
            },
          ],
        },
        {
          title: "Teknik Transformasi Dasar",
          duration: "150 menit",
          lessons: [
            {
              title: "Teknik Jahit Tangan Dasar",
              duration: "40 menit",
              type: "video",
            },
            {
              title: "Modifikasi Potongan dan Pola",
              duration: "35 menit",
              type: "video",
            },
            {
              title: "Praktik: Transformasi T-shirt",
              duration: "60 menit",
              type: "practice",
            },
          ],
        },
        {
          title: "Proyek Akhir",
          duration: "180 menit",
          lessons: [
            {
              title: "Merancang Koleksi Mini",
              duration: "45 menit",
              type: "video",
            },
            {
              title: "Dokumentasi Proses Kreatif",
              duration: "35 menit",
              type: "video",
            },
            {
              title: "Presentasi Hasil Karya",
              duration: "60 menit",
              type: "practice",
            },
          ],
        },
      ],
      instructor: {
        name: "Ratna Dewi",
        role: "Sustainable Fashion Designer",
        image:
          "https://images.unsplash.com/photo-1564564360647-684f24ae3e1c?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    },

    {
      id: 3,
      title: "Bisnis Fashion Sirkuler",
      slug: "bisnis-fashion-sirkuler",
      description:
        "Pelajari bagaimana membangun dan mengelola bisnis fashion yang mengadopsi prinsip ekonomi sirkuler",
      image:
        "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      level: "Lanjutan",
      duration: "8 Minggu",
      price: "Rp 500.000",
      modules: [
        {
          title: "Konsep Ekonomi Sirkuler dalam Fashion",
          duration: "120 menit",
          lessons: [
            {
              title: "Pengantar Ekonomi Sirkuler",
              duration: "30 menit",
              type: "video",
            },
            {
              title: "Studi Kasus: Brand Fashion Sirkuler Sukses",
              duration: "40 menit",
              type: "video",
            },
            {
              title: "Analisis Model Bisnis",
              duration: "35 menit",
              type: "practice",
            },
            {
              title: "Quiz: Prinsip Ekonomi Sirkuler",
              duration: "15 menit",
              type: "quiz",
            },
          ],
        },
        {
          title: "Rantai Pasok Berkelanjutan",
          duration: "150 menit",
          lessons: [
            {
              title: "Transparansi dan Traceability",
              duration: "35 menit",
              type: "video",
            },
            {
              title: "Kolaborasi dengan Supplier",
              duration: "30 menit",
              type: "video",
            },
            {
              title: "Manajemen Inventori dan Waste",
              duration: "35 menit",
              type: "video",
            },
            {
              title: "Praktik: Evaluasi Rantai Pasok",
              duration: "50 menit",
              type: "practice",
            },
          ],
        },
        {
          title: "Marketing Bisnis Berkelanjutan",
          duration: "130 menit",
          lessons: [
            {
              title: "Storytelling untuk Brand Berkelanjutan",
              duration: "35 menit",
              type: "video",
            },
            {
              title: "Menghindari Greenwashing",
              duration: "25 menit",
              type: "video",
            },
            {
              title: "Media Sosial dan Komunitas",
              duration: "30 menit",
              type: "video",
            },
            {
              title: "Praktik: Membuat Rencana Marketing",
              duration: "40 menit",
              type: "practice",
            },
          ],
        },
        {
          title: "Rencana Bisnis dan Implementasi",
          duration: "180 menit",
          lessons: [
            {
              title: "Menyusun Business Model Canvas",
              duration: "45 menit",
              type: "video",
            },
            {
              title: "Financial Planning",
              duration: "40 menit",
              type: "video",
            },
            {
              title: "Proyek Akhir: Presentasi Bisnis Plan",
              duration: "60 menit",
              type: "practice",
            },
          ],
        },
      ],
      instructor: {
        name: "Budi Santoso",
        role: "Sustainable Business Consultant",
        image:
          "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 py-24">
      <div className="max-w-7xl mx-auto px-4">
        <section className="overflow-hidden bg-white dark:bg-neutral-900 pb-16">
          <div className="relative">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-neutral-900 dark:text-white mb-4">
                Dampak Fashion terhadap Bumi Kita
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
                Industri fashion adalah salah satu kontributor terbesar
                pencemaran lingkungan. Mari kita ubah ini bersama!
              </p>
            </div>

            <div>
              <div
                className="relative order-2 lg:order-1"
                data-aos="fade-right"
              >
                <Image
                  className="rounded-2xl w-full max-h-[300px] object-cover object-center"
                  src="https://images.unsplash.com/photo-1560036039-801e62d634b5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={1000}
                  height={300}
                  alt="Dampak Fashion"
                />
              </div>

              <div className="order-1 lg:order-2 mt-10" data-aos="fade-left">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <div className="flex flex-wrap lg:flex-nowrap items-center gap-4 p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-800">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-orange-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-1">
                          85% Pakaian Terbuang
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-400">
                          Setiap tahun, jutaan ton pakaian berakhir di tempat
                          pembuangan sampah, mencemari tanah dan air.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="flex flex-wrap lg:flex-nowrap items-center gap-4 p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-800">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-orange-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                            />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-1">
                          Krisis Air Global
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-400">
                          Satu kaos katun membutuhkan 2.700 liter air untuk
                          diproduksi, setara dengan kebutuhan air minum 2,5
                          tahun.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="flex flex-wrap lg:flex-nowrap items-center gap-4 p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-800">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-orange-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-1">
                          Emisi Karbon Masif
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-400">
                          Industri fashion menyumbang 10% emisi karbon global,
                          lebih besar dari penerbangan dan pelayaran
                          internasional.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="flex flex-wrap lg:flex-nowrap items-center gap-4 p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-800">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-orange-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-1">
                          92 Juta Ton Limbah
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-400">
                          Industri fashion menghasilkan 92 juta ton limbah
                          tekstil setiap tahun, setara dengan satu truk sampah
                          penuh setiap detik.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
              <div className="lg:absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 hidden lg:block">
                <span className="px-3 py-1 bg-orange-500 text-white text-sm rounded-full mb-4 inline-block">
                  Featured
                </span>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Memulai Perjalanan Fashion Berkelanjutan Anda
                </h2>
                <p className="text-neutral-200 mb-6 max-w-2xl">
                  Panduan lengkap untuk memahami dan menerapkan gaya hidup
                  fashion yang berkelanjutan
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

          <div className="lg:hidden mt-4">
            <span className="px-3 py-1 bg-orange-500 text-white text-sm rounded-full mb-4 inline-block">
              Featured
            </span>
            <h2 className="text-3xl font-bold mb-4">
              Memulai Perjalanan Fashion Berkelanjutan Anda
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 mb-6 max-w-2xl">
              Panduan lengkap untuk memahami dan menerapkan gaya hidup fashion
              yang berkelanjutan
            </p>
            <Link
              href="/education/article/getting-started"
              className="inline-flex items-center px-5 py-2.5 bg-orange-500 dark:bg-white text-white dark:text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors duration-300 text-sm"
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
                  <button
                    onClick={() => setActiveCourse(course)}
                    className="w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300"
                  >
                    Lihat Detail
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <AnimatePresence>
          {activeCourse && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveCourse(null)}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[1999]"
              />
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                className="fixed left-4 right-4 top-[5%] max-h-[90vh] md:left-1/2 md:right-auto md:w-full md:max-w-2xl md:-translate-x-1/2 bg-white dark:bg-neutral-800 rounded-2xl shadow-xl z-[2000] overflow-hidden flex flex-col"
              >
                <div className="relative aspect-video flex-shrink-0">
                  <Image
                    src={activeCourse.image}
                    alt={activeCourse.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  <button
                    onClick={() => setActiveCourse(null)}
                    className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
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

                <div className="overflow-y-auto flex-1">
                  <div className="p-6">
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm rounded-full">
                          {activeCourse.level}
                        </span>
                        <span className="text-sm text-neutral-600 dark:text-neutral-400">
                          {activeCourse.duration}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                        {activeCourse.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        {activeCourse.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-neutral-50 dark:bg-neutral-900 rounded-xl mb-6">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={activeCourse.instructor.image}
                          alt={activeCourse.instructor.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-neutral-900 dark:text-white">
                          {activeCourse.instructor.name}
                        </h4>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                          {activeCourse.instructor.role}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-neutral-900 dark:text-white">
                        Materi Pembelajaran
                      </h4>
                      <div className="space-y-4 max-h-[300px] overflow-y-auto">
                        {activeCourse.modules.map((module, index) => (
                          <div
                            key={index}
                            className="border border-neutral-200 dark:border-neutral-700 rounded-xl overflow-hidden"
                          >
                            <div className="p-4 bg-neutral-50 dark:bg-neutral-900">
                              <div className="flex items-center justify-between">
                                <h5 className="font-medium text-neutral-900 dark:text-white">
                                  {module.title}
                                </h5>
                                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                                  {module.duration}
                                </span>
                              </div>
                            </div>
                            <div className="divide-y divide-neutral-200 dark:divide-neutral-700">
                              {module.lessons.map((lesson, lessonIndex) => (
                                <div
                                  key={lessonIndex}
                                  className="p-4 flex items-center justify-between"
                                >
                                  <div className="flex items-center gap-3">
                                    <span className="text-orange-500">
                                      {lesson.type === "video" && (
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
                                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                          />
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                          />
                                        </svg>
                                      )}
                                      {lesson.type === "quiz" && (
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
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                          />
                                        </svg>
                                      )}
                                      {lesson.type === "practice" && (
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
                                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                          />
                                        </svg>
                                      )}
                                    </span>
                                    <span className="text-neutral-900 dark:text-white">
                                      {lesson.title}
                                    </span>
                                  </div>
                                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                                    {lesson.duration}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-700 flex-shrink-0">
                  <button className="w-full py-3 px-6 bg-orange-500 text-white font-medium rounded-xl hover:bg-orange-600 transition-colors">
                    Mulai Belajar
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <section className="bg-orange-500 rounded-2xl p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Dapatkan Update Terbaru
            </h2>
            <p className="text-orange-100 mb-8">
              Berlangganan newsletter kami untuk mendapatkan artikel dan tips
              terbaru seputar fashion berkelanjutan
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ketikkan email Anda disini..."
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none border border-transparent placeholder:!text-orange-200 bg-transparent focus:border-orange-300 focus:ring-2 focus:ring-orange-500 text-orange-200"
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
