"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const OrdersPage = () => {
  const [activeTab, setActiveTab] = useState("active");
  
  const orders = {
    active: [
      {
        id: "TC-2024032501",
        date: "25 Maret 2024",
        total: 420000,
        status: "Menunggu Pembayaran",
        items: [
          {
            name: "Vintage Denim Jacket",
            size: "L",
            price: 250000,
            image: "/img/products/1.png"
          },
          {
            name: "Cotton T-Shirt",
            size: "M",
            price: 170000,
            image: "/img/products/2.png"
          }
        ]
      }
    ],
    completed: [
      {
        id: "TC-2024032401",
        date: "24 Maret 2024",
        total: 350000,
        status: "Selesai",
        items: [
          {
            name: "Casual Shirt",
            size: "M",
            price: 350000,
            image: "/img/products/3.png"
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">
            Pesanan Saya
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            Kelola dan pantau status pesanan Anda
          </p>
        </div>
        

        <div className="flex gap-4 border-b border-neutral-200 dark:border-neutral-700 mb-8">
          <button
            onClick={() => setActiveTab("active")}
            className={`pb-4 px-4 text-sm font-medium transition-colors relative ${
              activeTab === "active"
                ? "text-orange-500"
                : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
            }`}
          >
            Pesanan Aktif
            {activeTab === "active" && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab("completed")}
            className={`pb-4 px-4 text-sm font-medium transition-colors relative ${
              activeTab === "completed"
                ? "text-orange-500"
                : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
            }`}
          >
            Riwayat Pesanan
            {activeTab === "completed" && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"
              />
            )}
          </button>
        </div>

        <div className="space-y-6">
          {orders[activeTab].map((order) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden"
            >
              <div className="p-6 border-b border-neutral-200 dark:border-neutral-700">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      ID Pesanan
                    </p>
                    <p className="font-medium text-neutral-900 dark:text-white">
                      {order.id}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        Total Pesanan
                      </p>
                      <p className="font-medium text-neutral-900 dark:text-white">
                        Rp {order.total.toLocaleString("id-ID")}
                      </p>
                    </div>
                    <div
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        order.status === "Menunggu Pembayaran"
                          ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-500"
                          : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-500"
                      }`}
                    >
                      {order.status}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  {order.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4"
                    >
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-neutral-900 dark:text-white">
                          {item.name}
                        </h3>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                          Size: {item.size}
                        </p>
                        <p className="text-sm font-medium text-orange-500 mt-1">
                          Rp {item.price.toLocaleString("id-ID")}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {order.status === "Menunggu Pembayaran" && (
                  <div className="mt-6 flex flex-col sm:flex-row gap-4">
                    <button
                      className="flex-1 px-6 py-3 bg-orange-500 text-white text-sm font-medium rounded-lg hover:bg-orange-600 transition-colors text-center"
                    >
                      Lanjutkan Pembayaran
                    </button>
                    <button className="flex-1 px-6 py-3 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm font-medium rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors">
                      Batalkan Pesanan
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}

          {orders[activeTab].length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-neutral-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-1">
                Tidak ada pesanan
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                {activeTab === "active"
                  ? "Anda belum memiliki pesanan aktif"
                  : "Anda belum memiliki riwayat pesanan"}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;