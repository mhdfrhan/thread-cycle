"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 flex items-center justify-center px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-64 md:h-80 mb-8"
        >
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl lg:text-[250px] font-bold text-neutral-200 dark:text-neutral-800">404</h1>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg mb-8 max-w-lg mx-auto">
            Maaf, halaman yang Anda cari tidak ditemukan. Mungkin halaman telah dipindahkan atau dihapus.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link 
            href="/"
            className="w-full sm:w-auto px-8 py-3 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-2"
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Kembali ke Beranda
          </Link>
          <Link 
            href="/marketplace"
            className="w-full sm:w-auto px-8 py-3 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 font-medium rounded-full hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-300 flex items-center justify-center gap-2"
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Jelajahi Marketplace
          </Link>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 border-t border-neutral-200 dark:border-neutral-800 pt-8"
        >
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
            Atau kunjungi halaman populer:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Link
              href="/exchange"
              className="px-4 py-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-orange-500 dark:hover:text-orange-400"
            >
              Tukar Pakaian
            </Link>
            <Link
              href="/community"
              className="px-4 py-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-orange-500 dark:hover:text-orange-400"
            >
              Komunitas
            </Link>
            <Link
              href="/education"
              className="px-4 py-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-orange-500 dark:hover:text-orange-400"
            >
              Edukasi
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}