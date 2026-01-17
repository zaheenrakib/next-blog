"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";

interface HeroBannerProps {
  isDarkMode?: boolean;
}

const HeroBanner = ({ isDarkMode = false }: HeroBannerProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  if (!isMounted) {
    return null;
  }

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
      role="region"
      aria-label="Hero section"
    >
      {/* Background Gradient with animated pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Gradient Background */}
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900"
              : "bg-gradient-to-br from-white via-blue-50 to-white"
          }`}
        />

        {/* Animated gradient blobs */}
        <motion.div
          className={`absolute top-0 right-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 ${
            isDarkMode
              ? "bg-gradient-to-r from-blue-500 to-purple-500"
              : "bg-gradient-to-r from-blue-300 to-purple-300"
          }`}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -40, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className={`absolute bottom-0 left-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 ${
            isDarkMode
              ? "bg-gradient-to-r from-purple-500 to-blue-500"
              : "bg-gradient-to-r from-purple-300 to-blue-300"
          }`}
          animate={{
            x: [0, -30, 30, 0],
            y: [0, 40, -40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${
              isDarkMode ? "334155" : "e2e8f0"
            }' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span
                className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${
                  isDarkMode
                    ? "bg-blue-500/10 text-blue-300 border border-blue-500/20"
                    : "bg-blue-50 text-blue-600 border border-blue-200"
                } backdrop-blur-sm transition-all duration-300 hover:shadow-lg`}
              >
                <BookOpen size={16} />
                <span className="text-sm font-medium">Welcome to NextBlog</span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Share Your{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Stories
                </span>
                <motion.span
                  className={`absolute inset-0 rounded-lg blur-lg opacity-50 ${
                    isDarkMode
                      ? "bg-gradient-to-r from-blue-500 to-purple-500"
                      : "bg-gradient-to-r from-blue-400 to-purple-400"
                  }`}
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className={`text-lg md:text-xl leading-relaxed mb-8 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              } max-w-xl`}
            >
              Discover inspiring articles, expert insights, and creative
              stories. Join our community of writers and readers exploring ideas
              that matter.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              {/* Primary Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/blog"
                  className={`group relative inline-flex items-center justify-center px-8 py-4 font-semibold rounded-lg transition-all duration-300 overflow-hidden ${
                    isDarkMode
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50"
                      : "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50"
                  }`}
                  aria-label="Read Blog Articles"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Read Blog
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      <ArrowRight size={20} />
                    </motion.span>
                  </span>
                </Link>
              </motion.div>

              {/* Secondary Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#subscribe"
                  className={`inline-flex items-center justify-center px-8 py-4 font-semibold rounded-lg transition-all duration-300 border-2 ${
                    isDarkMode
                      ? "border-gray-600 text-gray-100 hover:bg-gray-800 hover:border-gray-500"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                  }`}
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe Now
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="flex gap-6 sm:gap-8 pt-12 border-t border-opacity-10 border-gray-400 mt-12"
            >
              <div>
                <div
                  className={`text-2xl md:text-3xl font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  1.2K+
                </div>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Articles Published
                </p>
              </div>
              <div>
                <div
                  className={`text-2xl md:text-3xl font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  50K+
                </div>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Readers
                </p>
              </div>
              <div>
                <div
                  className={`text-2xl md:text-3xl font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  500+
                </div>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Contributors
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Illustration/Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex justify-center items-center relative"
          >
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative w-full aspect-square max-w-md"
            >
              {/* Decorative circles */}
              <div
                className={`absolute inset-0 rounded-full blur-2xl opacity-30 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-blue-500 to-purple-500"
                    : "bg-gradient-to-r from-blue-300 to-purple-300"
                }`}
              />

              {/* SVG Illustration */}
              <svg
                className="w-full h-full"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background book shape */}
                <motion.rect
                  x="80"
                  y="100"
                  width="240"
                  height="200"
                  rx="16"
                  fill={isDarkMode ? "#1e293b" : "#f0f4f8"}
                  stroke={isDarkMode ? "#64748b" : "#cbd5e1"}
                  strokeWidth="2"
                  animate={{
                    boxShadow: isDarkMode
                      ? [
                          "0 0 20px rgba(59, 130, 246, 0.3)",
                          "0 0 40px rgba(139, 92, 246, 0.3)",
                          "0 0 20px rgba(59, 130, 246, 0.3)",
                        ]
                      : [
                          "0 0 20px rgba(59, 130, 246, 0.2)",
                          "0 0 40px rgba(139, 92, 246, 0.2)",
                          "0 0 20px rgba(59, 130, 246, 0.2)",
                        ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />

                {/* Page lines */}
                <line
                  x1="110"
                  y1="130"
                  x2="290"
                  y2="130"
                  stroke={isDarkMode ? "#475569" : "#cbd5e1"}
                  strokeWidth="2"
                />
                <line
                  x1="110"
                  y1="160"
                  x2="290"
                  y2="160"
                  stroke={isDarkMode ? "#475569" : "#cbd5e1"}
                  strokeWidth="2"
                />
                <line
                  x1="110"
                  y1="190"
                  x2="290"
                  y2="190"
                  stroke={isDarkMode ? "#475569" : "#cbd5e1"}
                  strokeWidth="2"
                />
                <line
                  x1="110"
                  y1="220"
                  x2="260"
                  y2="220"
                  stroke={isDarkMode ? "#475569" : "#cbd5e1"}
                  strokeWidth="2"
                />

                {/* Pen/Writing indicator */}
                <motion.circle
                  cx="300"
                  cy="120"
                  r="12"
                  fill="#3b82f6"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <div
          className={`flex flex-col items-center space-y-2 ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          <span className="text-sm font-medium">Scroll to explore</span>
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
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroBanner;
