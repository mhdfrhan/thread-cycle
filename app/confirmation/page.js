"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const OrderConfirmation = () => {
  const orderDetails = {
    orderNumber: "TC-2024032501",
    orderDate: new Date().toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    paymentMethod: "Transfer BCA",
    paymentStatus: "Menunggu Pembayaran",
    totalAmount: 420000,
    expireTime: "23:59:59",
    bankDetails: {
      accountNumber: "1234567890",
      accountName: "PT THREAD CYCLE INDONESIA",
      bankName: "BCA",
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 py-24">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-20 h-20 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg 
              className="w-10 h-10 text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
            Pesanan Berhasil Dibuat!
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
            Silakan lakukan pembayaran sesuai dengan metode yang dipilih sebelum batas waktu pembayaran berakhir
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden"
        >
          {/* Order Status */}
          <div className="bg-orange-500 p-6 text-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-orange-100 text-sm">Nomor Pesanan</p>
                <p className="font-medium">{orderDetails.orderNumber}</p>
              </div>
              <div className="flex items-center gap-2 bg-orange-600/50 px-4 py-2 rounded-lg">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
                <span className="font-medium">{orderDetails.paymentStatus}</span>
              </div>
            </div>
          </div>

          {/* Payment Details */}
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">Tanggal Pesanan</h3>
                <p className="font-medium text-neutral-900 dark:text-white">{orderDetails.orderDate}</p>
              </div>
              <div>
                <h3 className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">Metode Pembayaran</h3>
                <p className="font-medium text-neutral-900 dark:text-white">{orderDetails.paymentMethod}</p>
              </div>
              <div>
                <h3 className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">Total Pembayaran</h3>
                <p className="font-medium text-neutral-900 dark:text-white">
                  Rp {orderDetails.totalAmount.toLocaleString('id-ID')}
                </p>
              </div>
              <div>
                <h3 className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">Batas Waktu Pembayaran</h3>
                <p className="font-medium text-neutral-900 dark:text-white">{orderDetails.expireTime}</p>
              </div>
            </div>

            <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6">
              <h3 className="font-medium text-neutral-900 dark:text-white mb-4">Instruksi Pembayaran</h3>
              <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 relative">
                      <Image
                        src="/img/payment/bca.svg"
                        alt="BCA"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="font-medium text-neutral-900 dark:text-white">
                      {orderDetails.bankDetails.bankName}
                    </span>
                  </div>
                  <button 
                    onClick={() => navigator.clipboard.writeText(orderDetails.bankDetails.accountNumber)}
                    className="text-orange-500 hover:text-orange-600 text-sm font-medium"
                  >
                    Salin
                  </button>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">Nomor Rekening</span>
                    <span className="font-medium text-neutral-900 dark:text-white">{orderDetails.bankDetails.accountNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">Nama Penerima</span>
                    <span className="font-medium text-neutral-900 dark:text-white">{orderDetails.bankDetails.accountName}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <Link
            href="/"
            className="flex-1 px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors text-center"
          >
            Kembali ke Beranda
          </Link>
          <Link
            href="/account/orders"
            className="flex-1 px-6 py-3 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 font-medium rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors text-center"
          >
            Lihat Pesanan Saya
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderConfirmation;