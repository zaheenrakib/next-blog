"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Github, Twitter, Linkedin, Youtube, 
  Send, Edit3, ArrowUpRight, Heart 
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: "Latest Stories", href: "/blog" },
      { name: "Trending", href: "/trending" },
      { name: "Categories", href: "/categories" },
      { name: "Newsletter", href: "/newsletter" },
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
    Social: [
      { name: "Twitter", href: "#", icon: <Twitter size={16} /> },
      { name: "GitHub", href: "#", icon: <Github size={16} /> },
      { name: "LinkedIn", href: "#", icon: <Linkedin size={16} /> },
    ],
  };

  return (
    <footer className="bg-white dark:bg-[#0B0F1A] border-t border-gray-100 dark:border-white/5 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Section - The "Action Card" */}
        <div className="relative mb-16 overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-blue-600 to-purple-700 px-8 py-12 text-center shadow-2xl shadow-blue-500/20">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Don't miss a single story.
            </h3>
            <p className="text-blue-100 mb-8">
              Join 20,000+ developers getting high-quality technical content delivered straight to their inbox every Tuesday.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow rounded-2xl border-none px-6 py-4 text-gray-900 focus:ring-2 focus:ring-purple-400 outline-none transition-all"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-900 px-8 py-4 font-bold text-white transition-all hover:bg-black active:scale-95"
              >
                Join Now <Send size={18} />
              </button>
            </form>
          </div>
          {/* Decorative background circles for the card */}
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-purple-400/20 blur-3xl" />
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Edit3 className="text-white" size={22} />
              </div>
              <span className="text-2xl font-bold dark:text-white">NextBlog</span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 max-w-xs leading-relaxed">
              Elevating the art of technical writing. We provide a space for developers to share thoughts that change the web.
            </p>
            <div className="flex gap-4">
              {footerLinks.Social.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Dynamic Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            title !== "Social" && (
              <div key={title} className="col-span-1">
                <h4 className="font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-widest text-xs">
                  {title}
                </h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="group flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {link.name}
                        <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} NextBlog Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
            <span>Made with</span>
            <Heart size={14} className="text-red-500 fill-red-500 mx-1" />
            <span>using Next.js & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;