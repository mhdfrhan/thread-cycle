"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Community = () => {
  const communityStats = [
    { label: "Anggota Aktif", value: "5,234+" },
    { label: "Pakaian Tertukar", value: "12,500+" },
    { label: "Event Terlaksana", value: "150+" },
    { label: "Artikel Dibagikan", value: "300+" },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Workshop Sustainable Fashion",
      date: "15 April 2024",
      time: "14:00 WIB",
      location: "Riau Creative Hub",
      image: "https://images.pexels.com/photos/6461517/pexels-photo-6461517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      attendees: 42,
      maxAttendees: 50,
    },
    {
      id: 2,
      title: "Clothes Swap Party",
      date: "20 April 2024",
      time: "10:00 WIB",
      location: "Co-working Space XYZ",
      image: "https://images.pexels.com/photos/7679455/pexels-photo-7679455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      attendees: 28,
      maxAttendees: 30,
    },
  ];

  const forumTopics = [
    {
      id: 1,
      title: "Tips Merawat Pakaian Denim",
      author: {
        name: "Muhammad Farhan",
        avatar: "https://images.unsplash.com/photo-1560243563-062bfc001d68?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      replies: 24,
      views: 156,
      lastActivity: "2 jam yang lalu",
      tags: ["tips", "perawatan"],
    },
    // Add more topics...
  ];

  const activeMembers = [
    {
      id: 1,
      name: "Sarah Wilson",
      avatar: "/img/avatars/sarah.jpg",
      role: "Fashion Enthusiast",
      contributions: 156,
      joinDate: "Feb 2024",
    },
    // Add more members...
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white mb-6">
            Komunitas ThreadCycle
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto mb-8">
            Bergabunglah dengan komunitas fashion berkelanjutan terbesar di Indonesia. 
            Berbagi pengalaman, bertukar pakaian, dan ciptakan perubahan positif bersama.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
              Gabung Sekarang
            </button>
            <button className="px-8 py-3 border border-orange-500 text-orange-500 rounded-full hover:bg-orange-50 dark:hover:bg-neutral-800 transition-colors">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-neutral-800 p-6 rounded-xl text-center"
            >
              <h3 className="text-3xl font-bold text-orange-500 mb-2">{stat.value}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Upcoming Events */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
              Event Mendatang
            </h2>
            <Link 
              href="/community/events"
              className="text-orange-500 hover:text-orange-600 transition-colors"
            >
              Lihat Semua
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden"
              >
                <div className="relative aspect-video">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {event.date}
                    </span>
                    <span className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </span>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                      <span>Peserta</span>
                      <span>{event.attendees}/{event.maxAttendees}</span>
                    </div>
                    <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                      <div 
                        className="bg-orange-500 h-2 rounded-full"
                        style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                      />
                    </div>
                  </div>
                  <button className="w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                    Daftar Event
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Forum Section */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
              Forum Diskusi
            </h2>
            <Link 
              href="/community/forum"
              className="text-orange-500 hover:text-orange-600 transition-colors"
            >
              Lihat Semua
            </Link>
          </div>
          <div className="space-y-4">
            {forumTopics.map((topic) => (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white dark:bg-neutral-800 p-6 rounded-xl"
              >
                <div className="flex items-start gap-4">
                  <Image
                    src={topic.author.avatar}
                    alt={topic.author.name}
                    width={100}
                    height={100}
                    className="rounded-lg shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                      {topic.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {topic.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                      <span>{topic.replies} balasan</span>
                      <span>{topic.views} dilihat</span>
                      <span>Aktivitas terakhir {topic.lastActivity}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Siap Bergabung Dengan Komunitas Kami?
              </h2>
              <p className="text-orange-100 mb-8">
                Jadilah bagian dari perubahan menuju fashion yang lebih berkelanjutan
              </p>
              <button className="px-8 py-3 bg-white text-orange-500 rounded-full hover:bg-orange-50 transition-colors">
                Gabung Sekarang
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Community;