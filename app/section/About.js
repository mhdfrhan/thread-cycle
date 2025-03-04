"use client";

import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="flex flex-wrap -mx-4 items-center">
      <div className="w-full md:w-1/2 px-4">
        <Image
          src="https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Hero Image"
          width={600}
          height={600}
          className="rounded-xl shadow-xl hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="w-full md:w-1/2 px-4 mt-8 md:mt-0">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-neutral-800 dark:text-white">
          Yuk, Kenalan dengan ThreadCycle! 👋
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8">
          Hai! Kami adalah teman baru kamu dalam mewujudkan gaya fashion yang keren sekaligus ramah lingkungan.
          ThreadCycle hadir sebagai wadah untuk kita semua yang peduli dengan fashion berkelanjutan.
          Bersama-sama, kita bisa tampil stylish sambil menjaga bumi kita tetap cantik! ✨
        </p>

        <div className="space-y-4 mb-8">
          {[
            "Koleksi Pilihan Berkualitas Tinggi ⭐",
            "Harga Bersahabat, No Hidden Fees! 💯",
            "Pengiriman Aman dan Cepat 🚚",
            "Komunitas Seru & Inspiratif 🤝",
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span className="text-neutral-700 dark:text-neutral-300">{item}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/about"
            className="inline-flex items-center justify-center text-sm px-5 py-2 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition-all duration-300 group"
          >
            Kenalan Lebih Dekat
            <svg
              className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
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
          <Link
            href="/community"
            className="inline-flex items-center justify-center text-sm px-5 py-2 border border-neutral-200 dark:border-neutral-800 text-orange-500 dark:text-white font-medium rounded-full hover:bg-neutral-100/80 hover:border-neutral-200 dark:hover:bg-neutral-800/70 dark:hover:border-neutral-700 dark:hover:text-white transition-all duration-300"
          >
            Bergabung dengan Kami
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;