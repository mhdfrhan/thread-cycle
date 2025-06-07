"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Timeline } from "@/components/ui/timeline";

const Tentang = () => {
  const statistics = [
    { number: "10K+", label: "Pengguna Aktif" },
    { number: "25K+", label: "Pakaian Berhasil Ditukar" },
    { number: "5K+", label: "Kg Limbah Tekstil Terselamatkan" },
    { number: "15+", label: "Kota di Indonesia" }
  ];

  const teamMembers = [
    {
      name: "Muhammad Farhan",
      role: "Founder & CEO",
      image: "/img/me.jpg",
      quote: "Mari bersama menciptakan masa depan fashion yang berkelanjutan."
    },
    {
      name: "Sarah Wilson",
      role: "Head of Sustainability",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      quote: "Setiap pakaian memiliki cerita dan nilai untuk dilestarikan."
    },
    {
      name: "David Chen",
      role: "Tech Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      quote: "Teknologi adalah kunci untuk membuat fashion berkelanjutan lebih aksesibel."
    }
  ];

  const milestones = [
    {
      year: "2022",
      title: "Awal Mula",
      description: "ThreadCycle didirikan dengan visi mengubah cara masyarakat memandang pakaian bekas."
    },
    {
      year: "2023",
      title: "Pertumbuhan Pesat",
      description: "Mencapai 10,000 pengguna aktif dan mengembangkan layanan ke 15 kota di Indonesia."
    },
    {
      year: "2024",
      title: "Inovasi Berkelanjutan",
      description: "Meluncurkan sistem poin dan program edukasi untuk mendorong gaya hidup berkelanjutan."
    }
  ];

  const data = [
    {
      title: "2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200  font-normal mb-8">
            ThreadCycle didirikan dengan visi mengubah cara masyarakat memandang fashion berkelanjutan.
            Dimulai dari sebuah komunitas kecil yang peduli terhadap limbah tekstil.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1546213290-e1b492ab3eee?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Pendirian ThreadCycle"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?q=80&w=2716&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Komunitas Awal"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200  font-normal mb-8">
            Tahun pertumbuhan yang luar biasa bagi ThreadCycle. Platform kami berkembang pesat
            dan berhasil mencapai beberapa milestone penting.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 ">
              ✅ Mencapai 10,000+ pengguna aktif
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 ">
              ✅ Ekspansi ke 15 kota di Indonesia
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 ">
              ✅ Menyelamatkan 5,000+ kg limbah tekstil
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 ">
              ✅ Peluncuran sistem poin penukaran
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1573152143286-0c422b4d2175?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Pertumbuhan Platform"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://images.unsplash.com/photo-1555043722-4523972f07ee?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Ekspansi Kota"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200  font-normal mb-4">
            Inovasi dan pengembangan berkelanjutan menjadi fokus utama kami di tahun 2024
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 ">
              ✅ Peluncuran platform edukasi
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 ">
              ✅ Forum komunitas yang lebih interaktif
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 ">
              ✅ Program kemitraan dengan brand lokal
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 ">
              ✅ Mobile app ThreadCycle
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Platform Edukasi"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Mobile App"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white mb-6"
          >
            Tentang ThreadCycle
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto"
          >
            Platform fashion berkelanjutan yang menghubungkan para pecinta fashion untuk membeli,
            menjual, dan menukar pakaian bekas berkualitas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-orange-50 dark:bg-orange-800/20 p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">Visi Kami</h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              Menjadi platform terdepan dalam mendorong perubahan menuju industri fashion yang
              lebih berkelanjutan di Indonesia melalui ekonomi sirkular.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-orange-50 dark:bg-orange-800/20 p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">Misi Kami</h2>
            <ul className="space-y-3 text-neutral-700 dark:text-neutral-300">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Mengurangi limbah tekstil melalui sistem tukar-menukar pakaian yang inovatif
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Mendidik masyarakat tentang pentingnya fashion berkelanjutan
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Membangun komunitas yang peduli terhadap lingkungan
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-lg"
              >
                <h3 className="text-3xl font-bold text-orange-500 mb-2">{stat.number}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-16 overflow-hidden">
          <div className="w-full">
            <Timeline data={data} />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white text-center mb-8">
            Tim Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-lg"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-orange-500 text-sm mb-4">{member.role}</p>
                  <p className="text-neutral-600 dark:text-neutral-400 italic">
                    &ldquo;{member.quote}&rdquo;
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-16 px-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Bergabung dengan Komunitas Kami
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Jadilah bagian dari perubahan menuju fashion yang lebih berkelanjutan.
            Mulai menukar, menjual, atau membeli pakaian bekas berkualitas sekarang.
          </p>
          <Link
            href="/auth/register"
            className="inline-block px-8 py-3 bg-white text-orange-600 font-medium rounded-full hover:bg-orange-50 transition-colors duration-300"
          >
            Daftar Sekarang
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Tentang;