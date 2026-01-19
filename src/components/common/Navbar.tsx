"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, Moon, Sun, 
  Search, ChevronDown, Flame, 
  Edit3, User, LogOut, Settings 
} from "lucide-react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu as HeadlessMenu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";

const Navbar = () => {
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hydration fix for dark mode
  useEffect(() => {
    setIsMounted(true);
    const isDark =
      localStorage.getItem("darkMode") === "true" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(isDark);
    if (isDark) document.documentElement.classList.add("dark");
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkMode", String(newDarkMode));
    document.documentElement.classList.toggle("dark");
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { 
      label: "Categories", 
      children: [
        { href: "/category/tech", label: "Technology" },
        { href: "/category/design", label: "Design" },
        { href: "/category/lifestyle", label: "Lifestyle" },
      ] 
    },
    { href: "/trending", label: "Trending", icon: <Flame size={14} className="mr-1 text-orange-500" /> },
    { href: "/about", label: "About" },
  ];

  const isActive = (href: string) => pathname === href;

  if (!isMounted) return null;

  return (
    <Disclosure as="nav" className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm border-b dark:border-gray-800" 
        : "bg-transparent py-2"
    }`}>
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              
              {/* Logo Area */}
              <div className="flex items-center gap-8">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="shrink-0">
                  <Link href="/" className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-linear-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <Edit3 className="text-white" size={18} />
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent">
                      NextBlog
                    </span>
                  </Link>
                </motion.div>

                {/* Desktop Nav Links */}
                <div className="hidden lg:flex items-center space-x-1">
                  {navLinks.map((link) => (
                    link.children ? (
                      <HeadlessMenu as="div" key={link.label} className="relative">
                        <MenuButton className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                          {link.label} <ChevronDown size={14} className="ml-1" />
                        </MenuButton>
                        <MenuItems className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl shadow-lg focus:outline-none overflow-hidden">
                          {link.children.map((child) => (
                            <MenuItem key={child.href}>
                              {({ active }) => (
                                <Link href={child.href} className={`${active ? 'bg-gray-100 dark:bg-gray-700' : ''} block px-4 py-2 text-sm dark:text-gray-200`}>
                                  {child.label}
                                </Link>
                              )}
                            </MenuItem>
                          ))}
                        </MenuItems>
                      </HeadlessMenu>
                    ) : (
                      <Link
                        key={link.href}
                        href={link.href!}
                        className={`px-3 py-2 text-sm font-medium transition-colors flex items-center ${
                          isActive(link.href!) ? "text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300 hover:text-blue-600"
                        }`}
                      >
                        {link.icon}{link.label}
                      </Link>
                    )
                  ))}
                </div>
              </div>

              {/* Right Side Actions */}
              <div className="flex items-center space-x-2 md:space-x-4">
                {/* Search - Desktop */}
                <div className="hidden sm:flex relative items-center">
                  <Search className="absolute left-3 text-gray-400" size={16} />
                  <input 
                    type="text" 
                    placeholder="Search posts..."
                    className="pl-10 pr-4 py-1.5 bg-gray-100 dark:bg-gray-800 border-none rounded-full text-sm w-40 lg:w-60 focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>

                <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors">
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                {/* User Dropdown / Profile */}
                <div className="hidden md:block">
                  <HeadlessMenu as="div" className="relative">
                    <MenuButton className="w-9 h-9 rounded-full bg-linear-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white shadow-md">
                      <User size={20} />
                    </MenuButton>
                    <MenuItems className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-2xl shadow-xl focus:outline-none p-1">
                       <MenuItem>
                        <Link href="/profile" className="flex items-center gap-3 px-4 py-2 text-sm rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200">
                          <User size={16} /> My Profile
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link href="/settings" className="flex items-center gap-3 px-4 py-2 text-sm rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200">
                          <Settings size={16} /> Settings
                        </Link>
                      </MenuItem>
                      <div className="h-px bg-gray-100 dark:bg-gray-700 my-1" />
                      <MenuItem>
                        <button className="flex w-full items-center gap-3 px-4 py-2 text-sm rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600">
                          <LogOut size={16} /> Logout
                        </button>
                      </MenuItem>
                    </MenuItems>
                  </HeadlessMenu>
                </div>

                {/* Mobile Menu Toggle */}
                <DisclosureButton className="lg:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                  {open ? <X size={24} /> : <Menu size={24} />}
                </DisclosureButton>
              </div>
            </div>
          </div>

          {/* Mobile Menu Panel */}
          <AnimatePresence>
            {open && (
              <DisclosurePanel 
                static
                as={motion.div}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden bg-white dark:bg-gray-900 border-b dark:border-gray-800 overflow-hidden"
              >
                <div className="px-4 pt-2 pb-6 space-y-1">
                  <div className="mb-4 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      type="text" 
                      placeholder="Search posts..."
                      className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border-none rounded-xl text-base"
                    />
                  </div>
                  {navLinks.map((link) => (
                    <div key={link.label}>
                      {link.children ? (
                        <div className="py-2">
                          <span className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                            {link.label}
                          </span>
                          <div className="mt-1 space-y-1">
                            {link.children.map((child) => (
                              <Link key={child.href} href={child.href} className="block px-6 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg">
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={link.href!}
                          className={`block px-3 py-3 rounded-xl text-base font-medium ${
                            isActive(link.href!) ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300"
                          }`}
                        >
                          <div className="flex items-center">
                            {link.icon} {link.label}
                          </div>
                        </Link>
                      )}
                    </div>
                  ))}
                  <div className="pt-4 mt-4 border-t dark:border-gray-800">
                    <Link href="/create" className="flex items-center justify-center w-full gap-2 bg-blue-600 text-white py-3 rounded-xl font-bold shadow-lg shadow-blue-500/30">
                      <Edit3 size={18} /> Write a Post
                    </Link>
                  </div>
                </div>
              </DisclosurePanel>
            )}
          </AnimatePresence>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;