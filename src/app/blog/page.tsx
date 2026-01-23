"use client";

import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/redux/store";
import { setSearchQuery, loadMore } from "@/redux/features/blogs/blogSlice";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Calendar, User, ArrowRight, Filter, ChevronDown } from "lucide-react";

const Blog = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchQuery = useSelector((s: RootState) => s.blog.searchQuery);
  const items = useSelector((s: RootState) => s.blog.items);
  const visibleCount = useSelector((s: RootState) => s.blog.visibleCount);

  const q = searchQuery.trim().toLowerCase();
  const filtered = q
    ? items.filter(
      (b) =>
        b.title.toLowerCase().includes(q) ||
        b.category.toLowerCase().includes(q)
    )
    : items;
  const visible = filtered.slice(0, visibleCount);

  return (
    <main className="min-h-screen pt-32 pb-24 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6"
          >
            Our <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">Journal</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Insights, tutorials, and stories from the leading edges of technology and design.
          </motion.p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-grow group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => dispatch(setSearchQuery(e.target.value))}
              placeholder="Search articles by title, category, or author..."
              className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/5 rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-400"
            />
          </div>
          <button className="flex items-center justify-center gap-2 px-6 py-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/5 rounded-2xl font-bold text-gray-700 dark:text-gray-300 hover:shadow-md transition-all">
            <Filter size={20} />
            Filters
            <ChevronDown size={16} />
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {visible.map((post, idx) => (
              <motion.article
                key={post.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="group bg-white dark:bg-gray-900 rounded-[2rem] overflow-hidden border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                <Link href={`/blog/${post.slug}`} className="relative aspect-16/10 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-xl text-xs font-black uppercase tracking-widest text-blue-600 dark:text-blue-400">
                      {post.category}
                    </span>
                  </div>
                </Link>

                <div className="p-8 flex flex-col grow">
                  <div className="flex items-center gap-3 mb-4 text-xs text-gray-500 font-bold uppercase tracking-wider">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} className="text-blue-500" />
                      <span>{post.publishedAt}</span>
                    </div>
                    <span className="text-gray-300">•</span>
                    <div className="flex items-center gap-1">
                      <User size={14} className="text-blue-500" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <Link href={`/blog/${post.slug}`} className="grow">
                    <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed mb-6 italic">
                      {post.description}
                    </p>
                  </Link>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-auto pt-6 border-t border-gray-50 dark:border-white/5 flex items-center justify-between group/link"
                  >
                    <span className="font-black text-sm uppercase tracking-widest text-gray-900 dark:text-white group-hover/link:text-blue-600 transition-colors">
                      Read Article
                    </span>
                    <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-900 dark:text-white group-hover/link:bg-blue-600 group-hover/link:text-white transition-all">
                      <ArrowRight size={18} />
                    </div>
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {visible.length === 0 && (
          <div className="text-center py-24">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 dark:bg-white/5 text-gray-400 mb-6">
              <Search size={40} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No matching articles</h3>
            <p className="text-gray-500">Try adjusting your search terms or filters.</p>
          </div>
        )}

        {/* Load More */}
        {visible.length < filtered.length && (
          <div className="flex justify-center mt-20">
            <button
              onClick={() => dispatch(loadMore(6))}
              className="px-10 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-black shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
              Load More Stories
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Blog;