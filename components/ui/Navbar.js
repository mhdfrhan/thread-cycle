'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceholdersAndVanishInput } from './placeholders-and-vanish-input';
import { useTheme } from './theme-provider';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    // Implement search functionality here
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
      {/* Main Navigation */}
      <nav className={`w-full transition-all duration-300 py-2 fixed top-0 z-[1000] bg-white dark:bg-neutral-900  ${scrolled
          ? 'bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800'
          : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - unchanged */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/img/logo.svg"
                  alt="ThreadCycle"
                  width={40}
                  height={40}
                  className="w-auto h-16 hidden dark:block"
                />
                <Image
                  src="/img/logo-dark.svg"
                  alt="ThreadCycle"
                  width={40}
                  height={40}
                  className="w-auto h-16 dark:hidden"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1 border border-neutral-200 dark:border-neutral-800 rounded-full py-1 px-2 bg-neutral-50/80 dark:bg-neutral-900/80">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-1.5 text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200/70 dark:hover:bg-neutral-800/70 rounded-full transition-all duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Theme Toggle + CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
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
              <Link
                href="/get-started"
                className="inline-flex items-center px-6 py-2 text-sm font-medium rounded-full text-white bg-orange-500 hover:bg-orange-600 transition-all duration-300"
              >
                Mulai Sekarang
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-neutral-700 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all duration-300"
              >
                <div className="relative w-6 h-6">
                  <span className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                    }`} />
                  <span className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'
                    }`} />
                  <span className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                    }`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Categories Bar */}
      <div className={`w-full bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 transition-all duration-300 mt-20 ${scrolled ? 'py-2' : 'py-3'
        }`}>
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4">
          <div className="hidden lg:flex justify-between w-full space-x-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="px-4 py-1.5 text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-all duration-300 flex items-center space-x-1"
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </Link>
            ))}

            {/* Search Bar - unchanged */}
            <div className="hidden lg:flex flex-1">
              <PlaceholdersAndVanishInput placeholders={placeholders} />
            </div>
          </div>

          {/* Mobile Categories - unchanged */}
          <div className="lg:hidden flex overflow-x-auto space-x-2 py-1 no-scrollbar">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="flex-shrink-0 px-4 py-1.5 text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-all duration-300 flex items-center space-x-1 whitespace-nowrap"
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-16 left-0 w-full transition-all duration-300 ease-in-out z-50 ${isOpen ? 'opacity-100 translate-y-0 mt-4' : 'opacity-0 -translate-y-5 pointer-events-none'
        }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-3 py-2 text-base font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-all duration-300"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/get-started"
            className="block w-full text-center px-3 py-2 text-base font-medium text-white bg-neutral-900 dark:bg-orange-600 hover:bg-neutral-800 dark:hover:bg-orange-700 rounded-full transition-all duration-300"
          >
            Mulai Sekarang
          </Link>
          <form onSubmit={handleSearch} className="w-full px-2 pt-2 pb-3">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari pakaian..."
                className="w-full py-2 px-4 pl-10 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full text-sm text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-500 transition-all"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg className="h-5 w-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;