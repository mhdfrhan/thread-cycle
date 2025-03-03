"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Modal from "@/components/ui/modal";

const Exchange = () => {
  const categories = useMemo(() => [
    { id: "all", name: "Semua Kategori" },
    { id: "tops", name: "Atasan", points: 100 },
    { id: "bottoms", name: "Bawahan", points: 120 },
    { id: "dresses", name: "Dress", points: 150 },
    { id: "outerwear", name: "Outerwear", points: 200 },
    { id: "accessories", name: "Aksesoris", points: 50 },
  ], []);

  const conditions = useMemo(() => [
    { id: "all", name: "Semua Kondisi" },
    { id: "new", name: "Baru", multiplier: 1.5 },
    { id: "like-new", name: "Seperti Baru", multiplier: 1.2 },
    { id: "good", name: "Baik", multiplier: 1.0 },
    { id: "fair", name: "Cukup Baik", multiplier: 0.8 },
  ], []);

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
  const [modal, setModal] = useState({
    isOpen: false,
    type: "",
    message: "",
    title: "",
    onConfirm: null,
    onCancel: null
  });

  const pointRanges = [
    { id: "all", name: "Semua Poin" },
    { id: "0-100", name: "0 - 100 Poin" },
    { id: "101-200", name: "101 - 200 Poin" },
    { id: "201-300", name: "201 - 300 Poin" },
    { id: "301-plus", name: "300+ Poin" },
  ];

  useEffect(() => {
    const generateClothes = () => {
      return Array.from({ length: 24 }, (_, i) => ({
        id: `available-${i + 1}`,
        name: `Pakaian ${i + 1}`,
        points: Math.floor(Math.random() * 200) + 50,
        category: categories[Math.floor(Math.random() * categories.length)].id,
        condition: conditions[Math.floor(Math.random() * conditions.length)].id,
        image: `/img/products/${Math.floor(Math.random() * 13) + 1}.png`,
        owner: `User${Math.floor(Math.random() * 100)}`,
        description: "Pakaian dalam kondisi baik, jarang dipakai.",
      }));
    };

    const available = generateClothes();
    setAvailableClothes(available);

    const myItems = available.slice(0, 4).map(item => ({
      ...item,
      id: `my-${item.id}`,
    }));
    setMyClothes(myItems);
  }, [categories, conditions]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));

    const filteredClothes = availableClothes.filter(cloth => {
      if (filters.category !== 'all' && cloth.category !== filters.category) return false;

      if (filters.condition !== 'all' && cloth.condition !== filters.condition) return false;

      if (filters.pointRange !== 'all') {
        const [min, max] = filters.pointRange.split('-').map(Number);
        if (max) {
          if (cloth.points < min || cloth.points > max) return false;
        } else {
          if (cloth.points <= min) return false;
        }
      }

      return true;
    });

    setAvailableClothes(filteredClothes);
  };

  const handleExchange = (item) => {
    if (userPoints < item.points) {
      setModal({
        isOpen: true,
        type: "warning",
        title: "Poin Tidak Cukup",
        message: "Poin Anda tidak mencukupi untuk menukar pakaian ini",
        onConfirm: null,
        onCancel: () => setModal(prev => ({ ...prev, isOpen: false }))
      });
      return;
    }

    setModal({
      isOpen: true,
      type: "warning",
      title: "Konfirmasi Penukaran",
      message: `Apakah Anda yakin ingin menukar pakaian ini dengan ${item.points} poin?`,
      onConfirm: () => {
        setMyClothes(prev => [...prev, { ...item, id: `my-${Date.now()}` }]);
        setAvailableClothes(prev => prev.filter(cloth => cloth.id !== item.id));
        setUserPoints(prev => prev - item.points);
        setModal({
          isOpen: true,
          type: "success",
          title: "Berhasil",
          message: "Penukaran pakaian berhasil!",
          onConfirm: null,
          onCancel: () => setModal(prev => ({ ...prev, isOpen: false }))
        });
      },
      onCancel: () => setModal(prev => ({ ...prev, isOpen: false }))
    });
  };

  const handleCancelExchange = (item) => {
    setModal({
      isOpen: true,
      type: "warning",
      title: "Konfirmasi Pembatalan",
      message: "Apakah Anda yakin ingin membatalkan penukaran ini?",
      onConfirm: () => {
        setMyClothes(prev => prev.filter(cloth => cloth.id !== item.id));
        setAvailableClothes(prev => [...prev, { ...item, id: `available-${Date.now()}` }]);
        setUserPoints(prev => prev + item.points);
        setModal({
          isOpen: true,
          type: "success",
          title: "Berhasil",
          message: "Pembatalan penukaran berhasil!",
          onConfirm: null,
          onCancel: () => setModal(prev => ({ ...prev, isOpen: false }))
        });
      },
      onCancel: () => setModal(prev => ({ ...prev, isOpen: false }))
    });
  };

  const handleGetPoints = () => {
    const earnedPoints = Math.floor(Math.random() * 100) + 50;
    setUserPoints(prev => prev + earnedPoints);
    setModal({
      isOpen: true,
      type: "success",
      title: "Poin Bertambah",
      message: `Selamat! Anda mendapatkan ${earnedPoints} poin!`,
      onConfirm: null,
      onCancel: () => setModal(prev => ({ ...prev, isOpen: false }))
    });
  };

  const FilterButton = () => (
    <button
      onClick={() => setIsFilterOpen(true)}
      className="lg:hidden fixed left-4 bottom-4 z-50 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300"
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
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
        />
      </svg>
    </button>
  );

  const FilterSection = ({ title, options, currentValue, filterType }) => (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-white">
        {title}
      </h3>
      <div className="grid grid-cols-2 gap-2">
        {options.map((option) => (
          <button
            key={option.id}
            className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 cursor-pointer ${currentValue === option.id
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
        <div className="flex flex-wrap gap-1 items-center justify-between mb-4">
          <span className="text-sm text-neutral-500 dark:text-neutral-400">
            Oleh: {item.owner}
          </span>
          <span className="text-sm text-orange-500 font-medium uppercase">
            {item.condition}
          </span>
        </div>

        {type === "available" ? (
          <button
            onClick={() => handleExchange(item)}
            disabled={userPoints < item.points}
            className={`w-full py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${userPoints < item.points
              ? "bg-neutral-200 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400 cursor-not-allowed"
              : "bg-orange-500 text-white hover:bg-orange-600"
              }`}
          >
            {userPoints < item.points ? "Poin Tidak Cukup" : "Tukar Sekarang"}
          </button>
        ) : (
          <button
            onClick={() => handleCancelExchange(item)}
            className="w-full py-2 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 rounded-lg sm:text-sm font-medium hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-all duration-300 px-2 text-xs"
          >
            Batalkan Penukaran
          </button>
        )}
      </div>
    </motion.div>
  );

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
    <>
      <Modal
        isOpen={modal.isOpen}
        onClose={modal.onCancel}
        onConfirm={modal.onConfirm}
        title={modal.title}
        type={modal.type}
      >
        {modal.message}
      </Modal>

      <div className="min-h-screen bg-white dark:bg-neutral-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <div className="bg-orange-500 text-white rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2">Poin Anda</h2>
                <p className="text-3xl font-bold">{userPoints}</p>
              </div>
              <button
                onClick={handleGetPoints}
                className="px-4 py-2 bg-white text-orange-500 rounded-lg text-sm font-medium hover:bg-orange-50 transition-all duration-300"
              >
                Dapatkan Poin
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <FilterButton />

            <AnimatePresence>
              {isFilterOpen && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsFilterOpen(false)}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                  />

                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ type: "spring", damping: 15 }}
                    className="fixed inset-y-0 left-0 w-[300px] bg-white dark:bg-neutral-900 z-50 lg:hidden overflow-y-auto"
                  >
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
                          Filter
                        </h2>
                        <button
                          onClick={() => setIsFilterOpen(false)}
                          className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full"
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

                      <div className="space-y-6">
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
                        <button
                          onClick={() => {
                            setFilters({
                              category: "all",
                              pointRange: "all",
                              condition: "all",
                              size: "all",
                            });
                            setIsFilterOpen(false);
                          }}
                          className="w-full py-3 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                        >
                          Reset Filter
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>

            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24 bg-white dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
                    Filter
                  </h2>
                  <button
                    onClick={() => setFilters({
                      category: "all",
                      pointRange: "all",
                      condition: "all",
                      size: "all",
                    })}
                    className="text-sm text-orange-500 hover:text-orange-600"
                  >
                    Reset
                  </button>
                </div>

                <div className="space-y-6">
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
            </div>

            <div className="flex-1">
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">
                  Pakaian Saya
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 md:gap-6">
                  {myClothes.map((item) => (
                    <ExchangeCard key={item.id} item={item} type="my" />
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">
                  Pakaian Tersedia
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 md:gap-6">
                  {availableClothes.map((item) => (
                    <ExchangeCard key={item.id} item={item} type="available" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exchange;