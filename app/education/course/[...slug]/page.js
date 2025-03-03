"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Course = () => {
  const { slug } = useParams();
  const [course, setCourse] = useState(null);
  const [activeModule, setActiveModule] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching course data
    const generateCourse = () => {
      return {
        title: "Kelas Fashion Berkelanjutan",
        description: "Pelajari dasar-dasar fashion berkelanjutan dan cara menerapkannya dalam kehidupan sehari-hari",
        image: "https://images.unsplash.com/photo-1585914924626-15adac1e6402?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        instructor: {
          name: "Muhammad Farhan",
          role: "Fashion Sustainability Expert",
          image: "/img/me.jpg"
        },
        duration: "4 Minggu",
        level: "Pemula",
        enrolled: 156,
        rating: 4.8,
        reviews: 42,
        price: "Gratis",
        modules: [
          {
            title: "Pengantar Fashion Berkelanjutan",
            duration: "45 menit",
            lessons: [
              { title: "Apa itu Fashion Berkelanjutan?", duration: "15 menit", type: "video" },
              { title: "Dampak Fast Fashion", duration: "20 menit", type: "video" },
              { title: "Quiz Module 1", duration: "10 menit", type: "quiz" }
            ]
          },
          {
            title: "Memilih Pakaian Berkelanjutan",
            duration: "60 menit",
            lessons: [
              { title: "Material Berkelanjutan", duration: "20 menit", type: "video" },
              { title: "Panduan Membeli Pakaian Second", duration: "25 menit", type: "video" },
              { title: "Praktik: Evaluasi Pakaian", duration: "15 menit", type: "practice" }
            ]
          },
          {
            title: "Merawat Pakaian",
            duration: "50 menit",
            lessons: [
              { title: "Teknik Mencuci yang Benar", duration: "20 menit", type: "video" },
              { title: "Memperpanjang Umur Pakaian", duration: "20 menit", type: "video" },
              { title: "Quiz Final", duration: "10 menit", type: "quiz" }
            ]
          }
        ]
      };
    };

    setCourse(generateCourse());
    setIsLoading(false);
  }, [slug]);

  if (isLoading || !course) {
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
        {/* Course Header */}
        <div className="mb-12">
          <Link 
            href="/education"
            className="inline-flex items-center text-orange-500 hover:text-orange-600 mb-6"
          >
            <svg 
              className="w-4 h-4 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 19l-7-7 7-7" 
              />
            </svg>
            Kembali ke Edukasi
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                  {course.title}
                </h1>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {course.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-xl">
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">Durasi</span>
                  <p className="font-medium text-neutral-900 dark:text-white">{course.duration}</p>
                </div>
                <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-xl">
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">Level</span>
                  <p className="font-medium text-neutral-900 dark:text-white">{course.level}</p>
                </div>
                <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-xl">
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">Peserta</span>
                  <p className="font-medium text-neutral-900 dark:text-white">{course.enrolled}+</p>
                </div>
                <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-xl">
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">Rating</span>
                  <p className="font-medium text-neutral-900 dark:text-white">⭐ {course.rating}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-neutral-50 dark:bg-neutral-800 rounded-xl">
                <div className="w-12 h-12 relative rounded-full overflow-hidden">
                  <Image
                    src={course.instructor.image}
                    alt={course.instructor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-neutral-900 dark:text-white">
                    {course.instructor.name}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {course.instructor.role}
                  </p>
                </div>
              </div>

              <button className="w-full py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors">
                Mulai Belajar Sekarang
              </button>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
              Materi Pembelajaran
            </h2>
            <div className="space-y-4">
              {course.modules.map((module, moduleIndex) => (
                <motion.div
                  key={moduleIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setActiveModule(moduleIndex === activeModule ? -1 : moduleIndex)}
                    className="w-full flex items-center justify-between p-4 bg-white dark:bg-neutral-800"
                  >
                    <div className="flex items-center gap-4">
                      <span className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-500">
                        {moduleIndex + 1}
                      </span>
                      <div className="text-left">
                        <h3 className="font-medium text-neutral-900 dark:text-white">
                          {module.title}
                        </h3>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                          {module.duration}
                        </p>
                      </div>
                    </div>
                    <svg
                      className={`w-5 h-5 transition-transform ${
                        activeModule === moduleIndex ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {activeModule === moduleIndex && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="border-t border-neutral-200 dark:border-neutral-800"
                    >
                      {module.lessons.map((lesson, lessonIndex) => (
                        <div
                          key={lessonIndex}
                          className="flex items-center justify-between p-4 hover:bg-neutral-50 dark:hover:bg-neutral-700"
                        >
                          <div className="flex items-center gap-3">
                            {lesson.type === "video" && (
                              <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24">
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M21 12l-8-4.5v9M13 7.5L5 3v18l8-4.5"
                                />
                              </svg>
                            )}
                            {lesson.type === "quiz" && (
                              <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24">
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                              </svg>
                            )}
                            {lesson.type === "practice" && (
                              <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24">
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                />
                              </svg>
                            )}
                            <span className="text-neutral-900 dark:text-white">
                              {lesson.title}
                            </span>
                          </div>
                          <span className="text-sm text-neutral-500 dark:text-neutral-400">
                            {lesson.duration}
                          </span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Course Info Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white dark:bg-neutral-800 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                Informasi Kelas
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-neutral-200 dark:border-neutral-700">
                  <span className="text-neutral-600 dark:text-neutral-400">Harga</span>
                  <span className="font-medium text-neutral-900 dark:text-white">{course.price}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-neutral-200 dark:border-neutral-700">
                  <span className="text-neutral-600 dark:text-neutral-400">Total Modul</span>
                  <span className="font-medium text-neutral-900 dark:text-white">{course.modules.length}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-neutral-200 dark:border-neutral-700">
                  <span className="text-neutral-600 dark:text-neutral-400">Total Materi</span>
                  <span className="font-medium text-neutral-900 dark:text-white">
                    {course.modules.reduce((acc, module) => acc + module.lessons.length, 0)}
                  </span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-neutral-600 dark:text-neutral-400">Sertifikat</span>
                  <span className="font-medium text-neutral-900 dark:text-white">Ya</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;