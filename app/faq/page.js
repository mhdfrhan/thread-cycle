"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "Umum",
      items: [
        {
          question: "Apa itu ThreadCycle?",
          answer: "ThreadCycle adalah platform yang memungkinkan Anda untuk menukar pakaian bekas berkualitas dengan pengguna lain. Kami mendorong fashion berkelanjutan dan mengurangi limbah tekstil."
        },
        {
          question: "Bagaimana cara bergabung dengan ThreadCycle?",
          answer: "Anda dapat mendaftar secara gratis melalui halaman registrasi. Setelah verifikasi email, Anda dapat mulai menjelajahi dan menukar pakaian."
        },
      ]
    },
    {
      category: "Penukaran",
      items: [
        {
          question: "Bagaimana sistem poin bekerja?",
          answer: "Setiap pakaian yang Anda tukarkan akan diberikan nilai poin berdasarkan kualitas, merek, dan kondisi. Poin ini dapat Anda gunakan untuk menukar dengan pakaian lain."
        },
        {
          question: "Bagaimana proses pengiriman pakaian?",
          answer: "Setelah pertukaran disetujui, Anda akan mendapatkan label pengiriman. Kami bekerja sama dengan berbagai jasa kurir untuk memastikan pakaian sampai dengan aman."
        },
      ]
    },
    {
      category: "Kualitas & Keamanan",
      items: [
        {
          question: "Bagaimana ThreadCycle menjamin kualitas pakaian?",
          answer: "Setiap pakaian melalui proses verifikasi ketat. Kami memeriksa keaslian, kondisi, dan kebersihan sebelum diizinkan untuk ditukar."
        },
        {
          question: "Apa yang terjadi jika saya menerima pakaian yang rusak?",
          answer: "Kami memiliki garansi 24 jam. Jika Anda menerima pakaian yang tidak sesuai deskripsi, kami akan mengembalikan poin Anda."
        },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg">
            Temukan jawaban untuk pertanyaan umum seputar ThreadCycle
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div key={category.category} className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.items.map((faq, index) => {
                  const isOpen = openIndex === `${categoryIndex}-${index}`;
                  
                  return (
                    <div key={index} className="border-b border-neutral-200 dark:border-neutral-700 last:border-0">
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : `${categoryIndex}-${index}`)}
                        className="w-full flex items-center justify-between py-4 text-left focus:outline-none"
                      >
                        <span className="text-lg font-medium text-neutral-900 dark:text-white">
                          {faq.question}
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          className="flex-shrink-0 ml-4 text-neutral-500 dark:text-neutral-400"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <p className="pb-4 text-neutral-600 dark:text-neutral-400">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            Masih punya pertanyaan?
          </p>
          <button className="inline-flex items-center px-6 py-3 text-base font-medium rounded-full text-white bg-orange-500 hover:bg-orange-600 transition-colors">
            Hubungi Kami
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;