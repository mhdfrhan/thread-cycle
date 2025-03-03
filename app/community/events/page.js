"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const tabsRef = useRef(null);
  const [tabIndicator, setTabIndicator] = useState({ left: 0, width: 0 });

  // Add this useEffect for tab indicator
  useEffect(() => {
    const updateIndicator = () => {
      const activeElement = tabsRef.current?.querySelector(`[data-tab="${activeTab}"]`);
      if (activeElement) {
        const tabsLeft = tabsRef.current.getBoundingClientRect().left;
        const { left, width } = activeElement.getBoundingClientRect();
        setTabIndicator({
          left: left - tabsLeft,
          width: width,
        });
      }
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeTab]);

  // Function to generate dates for the next few days
  const getUpcomingDates = (days) => {
    const dates = [];
    for (let i = 0; i < days; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const upcomingEvents = [
    {
      id: 1,
      title: "Workshop Sustainable Fashion",
      date: getUpcomingDates(3)[0].toLocaleDateString('id-ID', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      time: "14:00 WIB",
      location: "Riau Creative Hub",
      image: "https://images.pexels.com/photos/6461517/pexels-photo-6461517.jpeg",
      attendees: 42,
      maxAttendees: 50,
      description: "Pelajari dasar-dasar fashion berkelanjutan dan cara menerapkannya dalam kehidupan sehari-hari.",
      price: "Gratis",
      organizer: "Tim ThreadCycle",
    },
    {
      id: 2,
      title: "Clothes Swap Party",
      date: getUpcomingDates(3)[1].toLocaleDateString('id-ID', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      time: "10:00 WIB",
      location: "Co-working Space XYZ",
      image: "https://images.pexels.com/photos/7679455/pexels-photo-7679455.jpeg",
      attendees: 28,
      maxAttendees: 30,
      description: "Acara tukar menukar pakaian seru dengan komunitas fashion berkelanjutan.",
      price: "50K/orang",
      organizer: "Community Fashion ID",
    },
    {
      id: 3,
      title: "Upcycling Workshop",
      date: getUpcomingDates(3)[2].toLocaleDateString('id-ID', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      time: "15:00 WIB",
      location: "Studio Kreatif ABC",
      image: "https://images.pexels.com/photos/4620617/pexels-photo-4620617.jpeg",
      attendees: 15,
      maxAttendees: 20,
      description: "Workshop kreasi ulang pakaian bekas menjadi fashion item baru yang trendy.",
      price: "150K/orang",
      organizer: "Creative Fashion Lab",
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Fashion Sustainability Talk",
      date: "Minggu, 10 Maret 2024",
      time: "13:00 WIB",
      location: "Online via Zoom",
      image: "https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg",
      attendees: 150,
      maxAttendees: 150,
      description: "Diskusi mengenai masa depan fashion berkelanjutan di Indonesia.",
      price: "Gratis",
      organizer: "ThreadCycle x Sustainable Fashion ID",
      highlights: [
        "3 pembicara ahli",
        "150+ peserta",
        "Sertifikat digital",
      ]
    },
    {
      id: 5,
      title: "Community Meetup",
      date: "Sabtu, 2 Maret 2024",
      time: "15:00 WIB",
      location: "Taman Kota",
      image: "https://images.pexels.com/photos/7148429/pexels-photo-7148429.jpeg",
      attendees: 45,
      maxAttendees: 50,
      description: "Pertemuan rutin komunitas fashion berkelanjutan.",
      price: "Gratis",
      organizer: "ThreadCycle Community",
      highlights: [
        "Sharing session",
        "Games seru",
        "Doorprize",
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Event ThreadCycle
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Bergabung dalam berbagai event menarik seputar fashion berkelanjutan bersama komunitas kami
          </p>
        </div>

        {/* Tabs with Sliding Indicator */}
        <div className="flex justify-center mb-8">
          <div 
            ref={tabsRef}
            className="relative inline-flex bg-neutral-100 dark:bg-neutral-800 rounded-full p-1"
          >
            {/* Sliding Indicator */}
            <motion.div
              className="absolute h-full top-0 rounded-full bg-orange-500"
              initial={false}
              animate={{
                left: tabIndicator.left,
                width: tabIndicator.width,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
              }}
            />

            {/* Tab Buttons */}
            <button
              data-tab="upcoming"
              onClick={() => setActiveTab('upcoming')}
              className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors z-10 ${
                activeTab === 'upcoming'
                  ? 'text-white'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Event Mendatang
            </button>
            <button
              data-tab="past"
              onClick={() => setActiveTab('past')}
              className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors z-10 ${
                activeTab === 'past'
                  ? 'text-white'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Event Selesai
            </button>
          </div>
        </div>

        {/* Event Grid with Animation */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={false}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {(activeTab === 'upcoming' ? upcomingEvents : pastEvents).map((event) => (
            <motion.div
              key={event.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-video">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2">
                  <span className="bg-black/60 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm">
                    {event.price}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  {event.description}
                </p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {event.date} - {event.time}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {event.organizer}
                  </div>
                </div>

                {activeTab === 'upcoming' ? (
                  <>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                        <span>Peserta</span>
                        <span>{event.attendees}/{event.maxAttendees}</span>
                      </div>
                      <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                        <div 
                          className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                        />
                      </div>
                    </div>
                    <button 
                      disabled={event.attendees >= event.maxAttendees}
                      className={`w-full py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        event.attendees >= event.maxAttendees
                          ? 'bg-neutral-200 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400 cursor-not-allowed'
                          : 'bg-orange-500 text-white hover:bg-orange-600'
                      }`}
                    >
                      {event.attendees >= event.maxAttendees ? 'Kuota Penuh' : 'Daftar Event'}
                    </button>
                  </>
                ) : (
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-neutral-900 dark:text-white mb-2">
                      Highlights:
                    </div>
                    {event.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                        <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {highlight}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Events;