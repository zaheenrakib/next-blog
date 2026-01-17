"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

const Navbar = () => {
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Hydration fix for dark mode
  useEffect(() => {
    setIsMounted(true);
    const isDark =
      localStorage.getItem("darkMode") === "true" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkMode", String(newDarkMode));

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => pathname === href;

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
      },
    }),
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  if (!isMounted) {
    return null;
  }

  return (
    <Disclosure>
      {({ open }) => (
        <nav
          className={`sticky top-0 z-50 transition-all duration-300 ${
            isDarkMode
              ? "bg-gray-900 border-gray-800"
              : "bg-white border-gray-200"
          } border-b backdrop-blur-lg bg-opacity-95 dark:bg-opacity-95`}
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo/Site Name */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="shrink-0"
              >
                <Link
                  href="/"
                  className={`text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-300`}
                  aria-label="Next Blog Home"
                >
                  NextBlog
                </Link>
              </motion.div>

              {/* Desktop Navigation */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="hidden md:flex items-center space-x-1"
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={navItemVariants}
                  >
                    <Link
                      href={link.href}
                      className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                        isActive(link.href)
                          ? isDarkMode
                            ? "text-blue-400"
                            : "text-blue-600"
                          : isDarkMode
                            ? "text-gray-300 hover:text-white"
                            : "text-gray-700 hover:text-gray-900"
                      }`}
                      aria-current={isActive(link.href) ? "page" : undefined}
                    >
                      {link.label}
                      {isActive(link.href) && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                            isDarkMode
                              ? "bg-linear-to-r from-blue-400 to-purple-400"
                              : "bg-linear-to-r from-blue-600 to-purple-600"
                          }`}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Right Actions - Desktop */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="hidden md:flex items-center space-x-4"
              >
                {/* Dark Mode Toggle */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleDarkMode}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    isDarkMode
                      ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
                  type="button"
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </motion.button>

                {/* Primary Action Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/dashboard"
                    className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                      isDarkMode
                        ? "bg-linear-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/30"
                        : "bg-linear-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/30"
                    }`}
                  >
                    Write
                  </Link>
                </motion.div>
              </motion.div>

              {/* Mobile Menu Button & Theme Toggle */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="md:hidden flex items-center space-x-2"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleDarkMode}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    isDarkMode
                      ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
                  type="button"
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </motion.button>

                <DisclosureButton
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    isDarkMode
                      ? "bg-gray-800 hover:bg-gray-700 text-gray-300"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                  aria-label={open ? "Close menu" : "Open menu"}
                >
                  {open ? <X size={24} /> : <Menu size={24} />}
                </DisclosureButton>
              </motion.div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {open && (
              <DisclosurePanel
                as={motion.div}
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.div
                  className={`md:hidden px-2 pt-2 pb-3 space-y-1 ${
                    isDarkMode ? "bg-gray-800" : "bg-gray-50"
                  }`}
                >
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      custom={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                          isActive(link.href)
                            ? isDarkMode
                              ? "bg-gray-900 text-blue-400"
                              : "bg-gray-200 text-blue-600"
                            : isDarkMode
                              ? "text-gray-300 hover:bg-gray-700"
                              : "text-gray-700 hover:bg-gray-100"
                        }`}
                        aria-current={isActive(link.href) ? "page" : undefined}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}

                  {/* Mobile CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: navLinks.length * 0.05 }}
                    className="pt-2"
                  >
                    <Link
                      href="/dashboard"
                      className={`block w-full text-center px-3 py-2 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700`}
                    >
                      Write
                    </Link>
                  </motion.div>
                </motion.div>
              </DisclosurePanel>
            )}
          </AnimatePresence>
        </nav>
      )}
    </Disclosure>
  );
};

export default Navbar;
