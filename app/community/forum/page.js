"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Forum = () => {
  const [topics, setTopics] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'Semua Topik' },
    { id: 'tips', name: 'Tips & Tutorial' },
    { id: 'diskusi', name: 'Diskusi' },
    { id: 'review', name: 'Review' },
    { id: 'sharing', name: 'Sharing' }
  ];

  useEffect(() => {
    // Simulate fetching forum topics
    const generateTopics = () => {
      return [
        {
          id: 1,
          title: "Tips Merawat Pakaian Denim",
          content: "Bagikan tips dan trik merawat pakaian denim agar lebih tahan lama dan tetap stylish.",
          author: {
            name: "Muhammad Farhan",
            avatar: "https://images.unsplash.com/photo-1560243563-062bfc001d68",
            role: "Fashion Enthusiast"
          },
          replies: 24,
          views: 156,
          lastActivity: "2 jam yang lalu",
          tags: ["tips", "perawatan"],
          isPinned: true
        },
        {
          id: 2,
          title: "Review: Pengalaman Menukar Pakaian di ThreadCycle",
          content: "Saya baru saja mencoba sistem penukaran pakaian di ThreadCycle. Ini pengalaman lengkap saya...",
          author: {
            name: "Sarah Wilson",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
            role: "Active Member"
          },
          replies: 18,
          views: 203,
          lastActivity: "5 jam yang lalu",
          tags: ["review", "pengalaman"]
        },
        // Add more topics here
      ];
    };

    setTopics(generateTopics());
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Forum Komunitas ThreadCycle
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Diskusikan berbagai topik seputar fashion berkelanjutan dengan komunitas kami
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>

          {/* Create Topic Button */}
          <button className="w-full md:w-auto px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
            Buat Topik Baru
          </button>
        </div>

        {/* Topics List */}
        <div className="space-y-6">
          {/* Pinned Topics */}
          {topics.filter(topic => topic.isPinned).map(topic => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 relative rounded-full overflow-hidden">
                  <Image
                    src={topic.author.avatar}
                    alt={topic.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-orange-200 dark:bg-orange-900/40 text-orange-600 text-xs rounded-full">
                      Pinned
                    </span>
                    {topic.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
                    {topic.content}
                  </p>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400">
                      <span>{topic.author.name}</span>
                      <span>•</span>
                      <span>{topic.author.role}</span>
                    </div>
                    <div className="flex items-center gap-4 text-neutral-500 dark:text-neutral-400">
                      <span>{topic.replies} balasan</span>
                      <span>{topic.views} dilihat</span>
                      <span>Aktivitas terakhir {topic.lastActivity}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Regular Topics */}
          {topics.filter(topic => !topic.isPinned).map(topic => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white dark:bg-neutral-800 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 relative rounded-full overflow-hidden">
                  <Image
                    src={topic.author.avatar}
                    alt={topic.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {topic.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
                    {topic.content}
                  </p>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400">
                      <span>{topic.author.name}</span>
                      <span>•</span>
                      <span>{topic.author.role}</span>
                    </div>
                    <div className="flex items-center gap-4 text-neutral-500 dark:text-neutral-400">
                      <span>{topic.replies} balasan</span>
                      <span>{topic.views} dilihat</span>
                      <span>Aktivitas terakhir {topic.lastActivity}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forum;