"use client";

import { motion } from "framer-motion";

const InfiniteText = () => {
  const items = [
    "✨ Gratis Ongkir Seluruh Indonesia",
    "🎉 Diskon Hingga 70%",
    "♻️ Daur Ulang Pakaian Dapat Rewards",
    "🎁 Cashback 20% Pengguna Baru",
    "💫 Program Referral Berhadiah",
    "🌟 Flash Sale Setiap Hari"
  ];

  return (
    <div className="relative overflow-hidden bg-orange-500 py-3">
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
        className="whitespace-nowrap"
      >
        
        <span className="mx-4 text-white">
          {items.map((item, i) => (
            <span key={i} className="mx-8 text-sm font-medium">
              {item}
            </span>
          ))}
        </span>
      </motion.div>

      <div className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-orange-500 to-transparent w-40"></div>

      <div className="absolute top-0 bottom-0 bg-gradient-to-l from-orange-500 to-transparent w-40 right-0"></div>
    </div>
  );
};

export default InfiniteText;