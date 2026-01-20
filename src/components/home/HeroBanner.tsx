"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, BookOpen, Sparkles, TrendingUp, Users } from "lucide-react";

const HeroBanner = ({ isDarkMode = false }: { isDarkMode?: boolean }) => {
  const [isMounted, setIsMounted] = useState(false);
  const { scrollY } = useScroll();
  
  // Parallax effect for the main image
  const y1 = useTransform(scrollY, [0, 500], [0, -50]);
  const y2 = useTransform(scrollY, [0, 500], [0, 50]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section className={`relative min-h-[90vh] flex items-center overflow-hidden pt-20 ${
      isDarkMode ? "bg-[#0B0F1A]" : "bg-white"
    }`}>
      
      {/* Background Polish */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute top-0 left-1/4 w-96 h-96 blur-[120px] rounded-full opacity-30 ${
          isDarkMode ? "bg-blue-600" : "bg-blue-200"
        }`} />
        <div className={`absolute bottom-0 right-1/4 w-96 h-96 blur-[120px] rounded-full opacity-20 ${
          isDarkMode ? "bg-purple-600" : "bg-purple-200"
        }`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content Area */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 border ${
                isDarkMode ? "bg-white/5 border-white/10 text-blue-400" : "bg-blue-50 border-blue-100 text-blue-600"
              }`}
            >
              <Sparkles size={14} />
              <span className="text-xs font-bold uppercase tracking-widest">New Era of Blogging</span>
            </motion.div>

            <h1 className={`text-5xl md:text-7xl font-black leading-[1.1] mb-6 tracking-tight ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}>
              Where Ideas <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-purple-500 to-pink-500">
                Find Their Voice.
              </span>
            </h1>

            <p className={`text-lg md:text-xl mb-10 max-w-lg leading-relaxed ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}>
              Join 50,000+ readers exploring the intersection of technology, 
              creativity, and modern web development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/blog" 
                className="group relative flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-2xl shadow-blue-500/30 hover:bg-blue-700 transition-all hover:-translate-y-1"
              >
                Start Reading
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/newsletter" 
                className={`flex items-center justify-center px-8 py-4 rounded-2xl font-bold border transition-all ${
                  isDarkMode 
                  ? "border-white/10 text-white hover:bg-white/5" 
                  : "border-gray-200 text-gray-900 hover:bg-gray-50"
                }`}
              >
                Join Newsletter
              </Link>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-gray-100 dark:border-white/5">
              {[
                { label: "Articles", value: "1.2K+", icon: <BookOpen size={16}/> },
                { label: "Readers", value: "50K+", icon: <Users size={16}/> },
                { label: "Trending", value: "Top 10", icon: <TrendingUp size={16}/> },
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex items-center gap-2 text-blue-500">
                    {stat.icon}
                    <span className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>{stat.value}</span>
                  </div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual Experience */}
          <div className="relative lg:block hidden">
            <motion.div style={{ y: y1 }} className="relative z-10">
              <div className="relative w-full aspect-4/5 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white dark:border-gray-800">
                <Image 
                  src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop"
                  alt="Modern workspace"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="text-blue-400 font-bold text-sm mb-2">Editor's Choice</p>
                  <h3 className="text-2xl font-bold leading-tight">Mastering Next.js 15 for Enterprise Applications</h3>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 1 */}
            <motion.div 
              style={{ y: y2 }}
              className={`absolute -top-10 -right-10 p-5 rounded-3xl shadow-2xl z-20 backdrop-blur-xl border ${
                isDarkMode ? "bg-white/10 border-white/10" : "bg-white/80 border-gray-100"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-linear-to-tr from-orange-400 to-red-500 flex items-center justify-center text-white shadow-lg">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <p className={`text-sm font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Trending Now</p>
                  <p className="text-xs text-gray-500">Artificial Intelligence in 2026</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div 
              initial={{ x: 20 }}
              whileInView={{ x: 0 }}
              className={`absolute -bottom-6 -left-12 p-4 rounded-2xl shadow-2xl z-20 backdrop-blur-xl border ${
                isDarkMode ? "bg-white/5 border-white/10" : "bg-white/90 border-gray-200"
              }`}
            >
              <div className="flex -space-x-3 mb-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-[10px] text-white font-bold border-2 border-white">
                  +12
                </div>
              </div>
              <p className={`text-xs font-bold ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>Readers currently active</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroBanner;