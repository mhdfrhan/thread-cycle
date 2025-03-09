'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceholdersAndVanishInput } from './placeholders-and-vanish-input';
import { useTheme } from './theme-provider';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { theme, toggleTheme } = useTheme();
  const [activeIndicator, setActiveIndicator] = useState({ left: 0, width: 0 });
  const menuRef = useRef(null);
  const [activeMobileIndicator, setActiveMobileIndicator] = useState({ top: 0, height: 0 });
  const mobilMenuRef = useRef(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const notificationRef = useRef(null);
  const [notificationIconPos, setNotificationIconPos] = useState({ top: 0, right: 0 });
  const notificationButtonRef = useRef(null);
  const [activeCategoryIndicator, setActiveCategoryIndicator] = useState({ left: 0, width: 0 });
  const categoryMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateIndicator = () => {
      const activeItem = menuRef.current?.querySelector(`[href="${pathname}"]`);
      if (activeItem) {
        const menuLeft = menuRef.current.getBoundingClientRect().left;
        const { left, width } = activeItem.getBoundingClientRect();
        setActiveIndicator({
          left: left - menuLeft,
          width: width,
        });
      } else {
        setActiveIndicator({ left: 0, width: 0 });
      }
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [pathname]);

  useEffect(() => {
    const updateCategoryIndicator = () => {
      const activeCategory = categoryMenuRef.current?.querySelector(`[href="${pathname}"]`);
      if (activeCategory) {
        const menuLeft = categoryMenuRef.current.getBoundingClientRect().left;
        const { left, width } = activeCategory.getBoundingClientRect();
        setActiveCategoryIndicator({
          left: left - menuLeft,
          width: width,
        });
      } else {
        setActiveCategoryIndicator({ left: 0, width: 0 });
      }
    };

    updateCategoryIndicator();
    window.addEventListener('resize', updateCategoryIndicator);
    return () => window.removeEventListener('resize', updateCategoryIndicator);
  }, [pathname]);

  useEffect(() => {
    const updateMobileIndicator = () => {
      const activeItem = mobilMenuRef.current?.querySelector(`[href="${pathname}"]`);
      if (activeItem) {
        const menuTop = mobilMenuRef.current.getBoundingClientRect().top;
        const { top, height } = activeItem.getBoundingClientRect();
        setActiveMobileIndicator({
          top: top - menuTop,
          height: height,
        });
      } else {
        setActiveMobileIndicator({ top: 0, height: 0 });
      }
    };

    if (isOpen) {
      updateMobileIndicator();
    }
  }, [pathname, isOpen]);

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

  const notifications = [
    {
      id: 1,
      title: "Pesanan Berhasil",
      message: "Pesanan #123456 telah berhasil diproses",
      time: "2 menit yang lalu",
      type: "success",
      isRead: false
    },
    {
      id: 2,
      title: "Promo Spesial",
      message: "Dapatkan diskon 50% untuk produk pilihan",
      time: "1 jam yang lalu",
      type: "promo",
      isRead: true
    },
    {
      id: 3,
      title: "Stok Tersedia",
      message: "Produk yang Anda tunggu sudah tersedia",
      time: "3 jam yang lalu",
      type: "info",
      isRead: false
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsNotificationOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const updatePosition = () => {
      if (notificationButtonRef.current) {
        const rect = notificationButtonRef.current.getBoundingClientRect();
        setNotificationIconPos({
          top: rect.bottom + window.scrollY,
          right: window.innerWidth - rect.right,
        });
      }
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, []);

  const menuItems = [
    { name: 'Beranda', href: '/' },
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'Tukar Pakaian', href: '/exchange' },
    { name: 'Edukasi', href: '/education' },
    { name: 'Komunitas', href: '/community' },
  ];

  const categories = [
    { name: 'Semua', href: '/category/all', icon: '🏷️' },
    { name: 'Pakaian Wanita', href: '/category/women', icon: '👚' },
    { name: 'Pakaian Pria', href: '/category/men', icon: '👔' },
    { name: 'Vintage', href: '/category/vintage', icon: '🕰️' },
    { name: 'Streetwear', href: '/category/streetwear', icon: '🛹' },
    { name: 'Sustainable', href: '/category/sustainable', icon: '♻️' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const placeholders = [
    "Cari pakaian wanita...",
    "Cari pakaian pria...",
    "Cari vintage...",
    "Cari streetwear...",
    "Cari sustainable...",
    "Ketik apapun disini...",
  ];

  return (
    <div className="w-full z-[1000] ">
      <nav className={`w-full transition-all duration-300 py-2 fixed top-0 z-[1000] bg-white dark:bg-neutral-900 border-b border-transparent  ${scrolled
        ? 'bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm  border-neutral-200 dark:border-neutral-800'
        : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/img/logo.svg"
                  alt="ThreadCycle"
                  width={40}
                  height={40}
                  className="w-auto h-14 sm:h-16 hidden dark:block"
                />
                <Image
                  src="/img/logo-dark.svg"
                  alt="ThreadCycle"
                  width={40}
                  height={40}
                  className="w-auto h-14 sm:h-16 dark:hidden"
                />
              </Link>
            </div>

            <div
              ref={menuRef}
              className="hidden lg:flex items-center space-x-1 border border-neutral-200 dark:border-neutral-800 rounded-full py-1 px-2 relative"
            >
              <div
                className={`absolute h-[calc(100%-8px)] transition-all duration-300 ease-out ${!menuItems.some(item => item.href === pathname) ? 'opacity-0' : 'opacity-100'}`}
                style={{
                  left: `${activeIndicator.left}px`,
                  width: `${activeIndicator.width}px`,
                }}
              >
                <div className="h-full w-full bg-orange-500 rounded-full" />
              </div>

              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 relative z-10 ${pathname === item.href
                    ? 'text-white'
                    : 'text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200/70 dark:hover:bg-neutral-800/70'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-2.5">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-neutral-700 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all duration-300"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>

              {/* notification icon */}
              <button ref={notificationButtonRef}
                onClick={() => setIsNotificationOpen(true)} className="p-2 rounded-full text-neutral-700 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>

              <button className="p-2 rounded-full text-neutral-700 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>

              <button onClick={() => setIsCartOpen(true)} className="p-2 rounded-full text-neutral-700 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all duration-300 relative">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>

                <span className='absolute top-0 right-0 w-4 h-4 bg-orange-500 rounded-full text-[10px] text-white flex items-center justify-center'>2</span>
              </button>

              <Link
                href="/auth/login"
                className="inline-flex items-center px-6 py-2 text-sm font-medium rounded-full text-white bg-orange-500 hover:bg-orange-600 transition-all duration-300"
              >
                Login/Register
              </Link>
            </div>

            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-neutral-700 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all duration-300"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>

              <button onClick={() => setIsCartOpen(true)} className="relative p-2 rounded-full text-neutral-700 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className='absolute top-0 right-0 w-4 h-4 bg-orange-500 rounded-full text-[10px] text-white flex items-center justify-center'>2</span>
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-neutral-700 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all duration-300 relative"
              >
                <div className="relative w-6 h-6 flex items-center justify-center">
                  <span className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45' : '-translate-y-2'
                    }`} />
                  <span className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'
                    }`} />
                  <span className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45' : 'translate-y-2'
                    }`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[1010]"
              onClick={() => setIsCartOpen(false)}
            />
            <motion.div
              ref={cartRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed right-0 sm:right-4 top-20 w-full max-w-sm bg-white dark:bg-neutral-900 rounded-2xl shadow-xl z-[1020] border border-neutral-200 dark:border-neutral-800"
            >
              <div className="p-4 border-b border-neutral-200 dark:border-neutral-800">
                <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">Shopping Cart</h2>
              </div>

              <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
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
                      <h3 className="font-medium text-neutral-900 dark:text-white">{item.name}</h3>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">Size: {item.size}</p>
                      <div className="flex items-center justify-between mt-2">
                        <p className="font-medium text-orange-500">
                          Rp. {item.price.toLocaleString('id-ID')}
                        </p>
                        <div className="flex items-center gap-2">
                          <button className="w-6 h-6 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400">-</button>
                          <span className="text-sm text-neutral-900 dark:text-white">{item.quantity}</span>
                          <button className="w-6 h-6 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400">+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-neutral-200 dark:border-neutral-800">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-neutral-600 dark:text-neutral-400">Total</span>
                  <span className="text-lg font-semibold text-neutral-900 dark:text-white">
                    Rp {cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toLocaleString('id-ID')}
                  </span>
                </div>
                <Link
                  href="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="block w-full py-3 px-4 bg-orange-500 hover:bg-orange-600 text-white text-center font-medium rounded-full transition-colors"
                >
                  Checkout
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isNotificationOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[1010]"
              onClick={() => setIsNotificationOpen(false)}
            />
            <motion.div
              ref={notificationRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed w-full max-w-sm bg-white dark:bg-neutral-900 rounded-2xl shadow-xl z-[1020] border border-neutral-200 dark:border-neutral-800"
              style={{
                top: `${notificationIconPos.top + 10}px`,
                right: `${notificationIconPos.right}px`,
                ['@media (maxWidth: 640px)']: {
                  right: '1rem',
                  left: '1rem',
                  width: 'auto',
                }
              }}
            >
              <div className="p-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">Notifikasi</h2>
                <button
                  className="text-sm text-orange-500 hover:text-orange-600"
                  onClick={() => {}}
                >
                  Tandai Sudah Dibaca
                </button>
              </div>

              <div className="divide-y divide-neutral-200 dark:divide-neutral-800 max-h-[60vh] overflow-y-auto">
                {notifications.length > 0 ? (
                  notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors ${!notification.isRead ? 'bg-orange-50/50 dark:bg-orange-900/10' : ''
                        }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${notification.type === 'success' ? 'bg-green-500' :
                          notification.type === 'promo' ? 'bg-orange-500' : 'bg-blue-500'
                          }`} />
                        <div className="flex-1">
                          <h3 className="text-sm font-medium text-neutral-900 dark:text-white">
                            {notification.title}
                          </h3>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                            {notification.message}
                          </p>
                          <span className="text-xs text-neutral-500 dark:text-neutral-500 mt-2 block">
                            {notification.time}
                          </span>
                        </div>
                        {!notification.isRead && (
                          <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0" />
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-4 text-center text-neutral-600 dark:text-neutral-400">
                    Tidak ada notifikasi
                  </div>
                )}
              </div>

              {notifications.length > 0 && (
                <div className="p-4 border-t border-neutral-200 dark:border-neutral-800">
                  <button className="block w-full py-2 px-4 text-sm text-center text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                    Lihat Semua Notifikasi
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className={`w-full bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 transition-all duration-300 mt-20 ${scrolled ? 'py-2' : 'py-3'
        }`}>
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4">
          <div className="hidden lg:flex justify-between w-full space-x-4">
            <div
              ref={categoryMenuRef}
              className="flex items-center space-x-2 border border-neutral-200 dark:border-neutral-800 rounded-full py-1 px-2 relative"
            >
              <div
                className={`absolute h-[calc(100%-8px)] transition-all duration-300 ease-out ${!categories.some(category => category.href === pathname) ? 'opacity-0' : 'opacity-100'
                  }`}
                style={{
                  left: `${activeCategoryIndicator.left}px`,
                  width: `${activeCategoryIndicator.width}px`,
                  top: '4px',
                }}
              >
                <div className="h-full w-full bg-orange-500 rounded-full" />
              </div>

              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 flex items-center space-x-1 relative z-10 ${pathname === category.href
                    ? 'text-white'
                    : 'text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200/70 dark:hover:bg-neutral-800/70'
                    }`}
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex flex-1 w-full max-w-xs ml-auto">
              <PlaceholdersAndVanishInput placeholders={placeholders} />
            </div>
          </div>

          <div className="lg:hidden flex overflow-x-auto space-x-2 py-1 no-scrollbar">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className={`flex-shrink-0 px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 flex items-center space-x-1 whitespace-nowrap ${pathname === category.href
                  ? 'bg-orange-500 text-white'
                  : 'text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800'
                  }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className={`lg:hidden fixed top-16 left-0 w-full transition-all duration-300 ease-in-out z-50 ${isOpen ? 'opacity-100 translate-y-0 mt-4' : 'opacity-0 -translate-y-5 pointer-events-none'
        }`}>
        <div
          ref={mobilMenuRef}
          className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 relative"
        >
          <div
            className={`absolute left-2 right-2 transition-all duration-300 ease-out ${!menuItems.some(item => item.href === pathname) ? 'opacity-0' : 'opacity-100'}`}
            style={{
              top: `${activeMobileIndicator.top}px`,
              height: `${activeMobileIndicator.height}px`,
            }}
          >
            <div className="h-full w-full bg-orange-500 rounded-full" />
          </div>

          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block px-3 py-2 text-base font-medium rounded-full transition-all duration-300 relative z-10 ${pathname === item.href
                ? 'text-white'
                : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/auth/login"
            className="block w-full text-center px-3 py-2 text-base font-medium text-white bg-neutral-900 dark:bg-orange-600 hover:bg-neutral-800 dark:hover:bg-orange-700 rounded-full transition-all duration-300"
          >
            Login/Register
          </Link>

          <div className='mt-3'>
            <PlaceholdersAndVanishInput placeholders={placeholders} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;