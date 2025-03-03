"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Koleksi = () => {
  const { slug } = useParams();
  const [collection, setCollection] = useState(null);
  const [products, setProducts] = useState([]);

  const formatProductName = (slug) => {
    return slug.toString()
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  useEffect(() => {
    const generateCollection = () => {
      return {
        id: 1,
        name: formatProductName(slug),
        description: "Koleksi pakaian terbaik yang dipilih khusus untuk Anda",
        image: "/img/products/1.png",
        category: "Limited Edition",
      };
    };

    const generateProducts = () => {
      return Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        name: `${formatProductName(slug)} Item ${i + 1}`,
        price: Math.floor(Math.random() * 300000) + 50000,
        description: "Pakaian berkualitas dengan desain yang unik dan nyaman digunakan",
        image: `/img/products/${(i % 13) + 1}.png`,
        category: ["New Arrival", "Best Seller", "Limited Edition"][Math.floor(Math.random() * 3)],
      }));
    };

    setCollection(generateCollection());
    setProducts(generateProducts());
  }, [slug]);

  if (!collection) {
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
        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-12">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
          <Image
            src={collection.image}
            alt={collection.name}
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
            <span className="inline-flex items-center rounded-full bg-orange-600/20 px-3 py-1 text-sm text-orange-400 backdrop-blur-sm w-fit mb-3">
              {collection.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {collection.name}
            </h1>
            <p className="text-neutral-200 text-lg max-w-2xl mb-6">
              {collection.description}
            </p>
          </div>
        </div>

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="group bg-white dark:bg-neutral-800 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-square">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="bg-black/60 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-orange-500 font-medium">
                      Rp {product.price.toLocaleString('id-ID')}
                    </span>
                    <Link
                      href={`/product/${product.name.toLowerCase().replace(/\s/g, '-')}`}
                      className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-orange-500 dark:hover:text-orange-500 transition-colors"
                    >
                      Lihat Detail →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Koleksi;