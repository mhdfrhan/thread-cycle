"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Footer = () => {
  const footerSections = [
    {
      title: "ThreadCycle",
      links: [
        { name: "Tentang Kami", href: "/about" },
        { name: "Karir", href: "/careers" },
        { name: "Blog", href: "/blog" },
        { name: "Partner", href: "/partners" },
      ],
    },
    {
      title: "Layanan",
      links: [
        { name: "Marketplace", href: "/marketplace" },
        { name: "Tukar Pakaian", href: "/exchange" },
        { name: "Pickup Service", href: "/pickup" },
        { name: "Drop Point", href: "/droppoint" },
      ],
    },
    {
      title: "Bantuan",
      links: [
        { name: "FAQ", href: "/faq" },
        { name: "Kebijakan Privasi", href: "/privacy" },
        { name: "Syarat & Ketentuan", href: "/terms" },
        { name: "Hubungi Kami", href: "/contact" },
      ],
    },
  ];

  const socialLinks = [
    { name: "Instagram", href: "#", icon: "📸" },
    { name: "Twitter", href: "#", icon: "🐦" },
    { name: "Facebook", href: "#", icon: "👥" },
    { name: "YouTube", href: "#", icon: "📺" },
  ];

  return (
    <footer className="bg-neutral-100 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 pt-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
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
            <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-sm">
              Platform fashion berkelanjutan yang menghubungkan para pecinta fashion untuk membeli, menjual, dan menukar pakaian bekas berkualitas.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-2xl hover:scale-110 transition-transform"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-white uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              © {new Date().getFullYear()} ThreadCycle. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="/download"
                className="inline-flex items-center space-x-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                <span>📱</span>
                <span>Download App</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                <span>💌</span>
                <span>Newsletter</span>
              </Link>
            </div>
          </div>
        </motion.div>

		  <div className="mt-14">
			<Image width={800} height={400} src="/img/footer-brand.svg" className="w-full h-full dark:invert" alt="Footer Brand" />
		  </div>
      </div>
    </footer>
  );
};

export default Footer;