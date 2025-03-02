"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Exchange = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [userPoints, setUserPoints] = useState(1500); 
  const [myClothes, setMyClothes] = useState([]);
  const [availableClothes, setAvailableClothes] = useState([]);
  const [filters, setFilters] = useState({
    category: "all",
    pointRange: "all",
    condition: "all",
    size: "all",
  });

  const categories = [
    { id: "all", name: "Semua Kategori" },
    { id: "tops", name: "Atasan", points: 100 },
    { id: "bottoms", name: "Bawahan", points: 120 },
    { id: "dresses", name: "Dress", points: 150 },
    { id: "outerwear", name: "Outerwear", points: 200 },
    { id: "accessories", name: "Aksesoris", points: 50 },
  ];

  const pointRanges = [
    { id: "all", name: "Semua Poin" },
    { id: "0-100", name: "0 - 100 Poin" },
    { id: "101-200", name: "101 - 200 Poin" },
    { id: "201-300", name: "201 - 300 Poin" },
    { id: "301-plus", name: "300+ Poin" },
  ];

  const conditions = [
    { id: "all", name: "Semua Kondisi" },
    { id: "new", name: "Baru", multiplier: 1.5 },
    { id: "like-new", name: "Seperti Baru", multiplier: 1.2 },
    { id: "good", name: "Baik", multiplier: 1.0 },
    { id: "fair", name: "Cukup Baik", multiplier: 0.8 },
  ];

  useEffect(() => {
	const generateClothes = () => {
	  return Array.from({ length: 24 }, (_, i) => ({
		 id: i + 1,
		 name: `Pakaian ${i + 1}`,
		 points: Math.floor(Math.random() * 200) + 50,
		 category: categories[Math.floor(Math.random() * categories.length)].id,
		 condition: conditions[Math.floor(Math.random() * conditions.length)].id,
		 image: `/img/products/${Math.floor(Math.random() * 13) + 1}.png`, // Pilih angka dari 1-13
		 owner: `User${Math.floor(Math.random() * 100)}`,
		 description: "Pakaian dalam kondisi baik, jarang dipakai.",
	  }));
	};
 
	setAvailableClothes(generateClothes());
	setMyClothes(generateClothes().slice(0, 4));
 }, []);
 

  const FilterSection = ({ title, options, currentValue, filterType }) => (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-white">
        {title}
      </h3>
      <div className="grid grid-cols-2 gap-2">
        {options.map((option) => (
          <button
            key={option.id}
            className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 cursor-pointer ${
              currentValue === option.id
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

  const ExchangeCard = ({ item, type }) => (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition-all duration-300"
    >
      <div className="relative aspect-square">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2">
          <span className="bg-black/60 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm">
            {item.points} Poin
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">
          {item.name}
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
          {item.description}
        </p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-neutral-500 dark:text-neutral-400">
            Oleh: {item.owner}
          </span>
          <span className="text-sm text-orange-500 font-medium uppercase">
            {item.condition}
          </span>
        </div>
        {type === "available" ? (
          <button
            disabled={userPoints < item.points}
            className={`w-full py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
              userPoints < item.points
                ? "bg-neutral-200 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400 cursor-not-allowed"
                : "bg-orange-500 text-white hover:bg-orange-600"
            }`}
          >
            {userPoints < item.points ? "Poin Tidak Cukup" : "Tukar Sekarang"}
          </button>
        ) : (
          <button className="w-full py-2 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 rounded-lg text-sm font-medium hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-all duration-300">
            Batalkan Penukaran
          </button>
        )}
      </div>
    </motion.div>
  );

  // Loading state
  if (availableClothes.length === 0) {
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
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-neutral-800 dark:text-white mb-4 flex justify-center items-center text-center">
            <span className="text-orange-500">
              <svg className="size-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><line x1="48" y1="80" x2="208" y2="176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><line x1="48" y1="176" x2="208" y2="80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /></svg>
            </span>
            <span>Tukar Pakaian</span>
            <span className="text-orange-500">
              <svg className="size-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><line x1="48" y1="80" x2="208" y2="176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><line x1="48" y1="176" x2="208" y2="80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /></svg>
            </span>
          </h1>
          <p className="text-sm sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Punya pakaian bekas dengan kondisi baik? Tukarkan dengan pakaian lain yang kamu inginkan!
          </p>
        </div>

        {/* Points Display */}
        <div className="bg-orange-500 text-white rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">Poin Anda</h2>
              <p className="text-3xl font-bold">{userPoints}</p>
            </div>
            <button className="px-4 py-2 bg-white text-orange-500 rounded-lg text-sm font-medium hover:bg-orange-50 transition-all duration-300">
              Dapatkan Poin
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="sticky top-24 bg-white dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800">
              <FilterSection
                title="Kategori"
                options={categories}
                currentValue={filters.category}
                filterType="category"
              />
              <FilterSection
                title="Rentang Poin"
                options={pointRanges}
                currentValue={filters.pointRange}
                filterType="pointRange"
              />
              <FilterSection
                title="Kondisi"
                options={conditions}
                currentValue={filters.condition}
                filterType="condition"
              />
            </div>
          </div>

          {/* Exchange Content */}
          <div className="flex-1">
            {/* My Clothes Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">
                Pakaian Saya
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {myClothes.map((item) => (
                  <ExchangeCard key={item.id} item={item} type="my" />
                ))}
              </div>
            </div>

            {/* Available Clothes Section */}
            <div>
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">
                Pakaian Tersedia
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {availableClothes.map((item) => (
                  <ExchangeCard key={item.id} item={item} type="available" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exchange;