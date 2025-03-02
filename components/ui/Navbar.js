'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceholdersAndVanishInput } from './placeholders-and-vanish-input';
import { useTheme } from './theme-provider';
import { usePathname } from 'next/navigation';

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
      }
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
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
      }
    };

    if (isOpen) {
      updateMobileIndicator();
    }
  }, [pathname, isOpen]);

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
      <nav className={`w-full transition-all duration-300 py-2 fixed top-0 z-[1000] bg-white dark:bg-neutral-900 border-b border-transparent  ${scrolled
        ? 'bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm  border-neutral-200 dark:border-neutral-800'
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
            <div
              ref={menuRef}
              className="hidden lg:flex items-center space-x-1 border border-neutral-200 dark:border-neutral-800 rounded-full py-1 px-2 bg-neutral-50/80 dark:bg-neutral-900/80 relative"
            >
              {/* Active Indicator */}
              <div
                className="absolute h-[calc(100%-8px)] transition-all duration-300 ease-out"
                style={{
                  left: `${activeIndicator.left}px`,
                  width: `${activeIndicator.width}px`,
                }}
              >
                <div className="h-full w-full bg-orange-500 rounded-full" />
              </div>

              {/* Menu Items */}
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
            <div className="lg:hidden flex items-center space-x-4">
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

      {/* Categories Bar */}
      <div className={`w-full bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 transition-all duration-300 mt-20 ${scrolled ? 'py-2' : 'py-3'
        }`}>
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4">
          <div className="hidden lg:flex justify-between w-full space-x-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 flex items-center space-x-1 ${
                  pathname === category.href
                    ? 'bg-orange-500 text-white'
                    : 'text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </Link>
            ))}

            {/* Search Bar - unchanged */}
            <div className="hidden lg:flex flex-1 w-full max-w-xs ml-auto">
              <PlaceholdersAndVanishInput placeholders={placeholders} />
            </div>
          </div>

          {/* Mobile Categories - unchanged */}
          <div className="lg:hidden flex overflow-x-auto space-x-2 py-1 no-scrollbar">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className={`flex-shrink-0 px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 flex items-center space-x-1 whitespace-nowrap ${
                  pathname === category.href
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

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-16 left-0 w-full transition-all duration-300 ease-in-out z-50 ${isOpen ? 'opacity-100 translate-y-0 mt-4' : 'opacity-0 -translate-y-5 pointer-events-none'
        }`}>
        <div
          ref={mobilMenuRef}
          className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 relative"
        >
          {/* Mobile Active Indicator */}
          <div
            className="absolute left-2 right-2 transition-all duration-300 ease-out"
            style={{
              top: `${activeMobileIndicator.top}px`,
              height: `${activeMobileIndicator.height}px`,
            }}
          >
            <div className="h-full w-full bg-orange-500 rounded-full" />
          </div>

          {/* Mobile Menu Items */}
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
            href="/get-started"
            className="block w-full text-center px-3 py-2 text-base font-medium text-white bg-neutral-900 dark:bg-orange-600 hover:bg-neutral-800 dark:hover:bg-orange-700 rounded-full transition-all duration-300"
          >
            Mulai Sekarang
          </Link>

          {/* search bar */}
          <div className='mt-3'>
            <PlaceholdersAndVanishInput placeholders={placeholders} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;