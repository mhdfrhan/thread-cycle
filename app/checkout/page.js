"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("bca");

  const cartItems = [
    {
      id: 1,
      name: "Vintage Denim Jacket",
      price: 250000,
      image: "/img/products/1.png",
      size: "L",
      quantity: 1
    },
    {
      id: 2,
      name: "Cotton T-Shirt",
      price: 150000,
      image: "/img/products/2.png",
      size: "M",
      quantity: 1
    }
  ];

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  
  const shippingCost = 20000;
  const subtotal = calculateSubtotal();
  const total = subtotal + shippingCost;

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">
            Checkout
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            Lengkapi informasi pengiriman dan pembayaran Anda
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form Section */}
          <div className="flex-1">
            <form className="space-y-8">
              {/* Shipping Information */}
              <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700">
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
                  Informasi Pengiriman
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                      placeholder="08123456789"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Kota
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                      placeholder="Jakarta"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Alamat Lengkap
                    </label>
                    <textarea
                      required
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Masukkan alamat lengkap Anda"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Catatan (Opsional)
                    </label>
                    <textarea
                      rows={2}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Tambahkan catatan untuk pesanan Anda"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700">
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
                  Metode Pembayaran
                </h2>
                <div className="space-y-4">
                  {[
                    { id: "bca", name: "Transfer BCA", logo: "/img/payment/bca.svg" },
                    { id: "mandiri", name: "Transfer Mandiri", logo: "/img/payment/mandiri.svg" },
                    { id: "bni", name: "Transfer BNI", logo: "/img/payment/bni.svg" },
                  ].map((method) => (
                    <div
                      key={method.id}
                      className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition-colors ${
                        paymentMethod === method.id
                          ? "border-orange-500 bg-orange-50 dark:bg-orange-900/20"
                          : "border-neutral-200 dark:border-neutral-700 hover:border-orange-500"
                      }`}
                      onClick={() => setPaymentMethod(method.id)}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={method.id}
                        checked={paymentMethod === method.id}
                        onChange={() => setPaymentMethod(method.id)}
                        className="text-orange-500 focus:ring-orange-500"
                      />
                      <div className="h-8 w-12 relative">
                        <Image
                          src={method.logo}
                          alt={method.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="font-medium text-neutral-900 dark:text-white">
                        {method.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-96">
            <div className="sticky top-24">
              <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700">
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
                  Ringkasan Pesanan
                </h2>
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-neutral-900 dark:text-white mb-1">
                          {item.name}
                        </h3>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                          Size: {item.size}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <p className="font-medium text-orange-500">
                            Rp {item.price.toLocaleString('id-ID')}
                          </p>
                          <p className="text-sm text-neutral-500 dark:text-neutral-400">
                            x{item.quantity}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-neutral-200 dark:border-neutral-700 pt-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-600 dark:text-neutral-400">Subtotal</span>
                    <span className="text-neutral-900 dark:text-white font-medium">
                      Rp {subtotal.toLocaleString('id-ID')}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-600 dark:text-neutral-400">Pengiriman</span>
                    <span className="text-neutral-900 dark:text-white font-medium">
                      Rp {shippingCost.toLocaleString('id-ID')}
                    </span>
                  </div>
                  <div className="flex justify-between text-base font-semibold pt-2">
                    <span className="text-neutral-900 dark:text-white">Total</span>
                    <span className="text-orange-500">
                      Rp {total.toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>

                <Link href="/confirmation"
                  className="block text-center w-full mt-6 px-6 py-3 bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors rounded-full"
                >
                  Bayar Sekarang
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;