"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import { blogs } from "@/types/blogs";

const FeaturedPosts = () => {
    // Get the first 3 blogs as featured
    const featured = blogs.slice(0, 3);

    if (featured.length === 0) return null;

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-2 text-blue-600 font-bold tracking-wider uppercase text-sm mb-4"
                    >
                        <div className="w-10 h-[2px] bg-blue-600" />
                        Curated Content
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white"
                    >
                        Featured Stories
                    </motion.h2>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Link
                        href="/blog"
                        className="group inline-flex items-center gap-2 font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        Explore all articles
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Main Featured Post */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-7 group relative"
                >
                    <Link href={`/blog/${featured[0].slug}`} className="block h-full">
                        <div className="relative aspect-16/10 lg:aspect-auto lg:h-full min-h-[400px] overflow-hidden rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-white/5">
                            <Image
                                src={featured[0].image}
                                alt={featured[0].title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

                            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                                <div className="flex flex-wrap items-center gap-4 text-blue-400 text-sm font-bold mb-4">
                                    <span className="px-3 py-1 bg-blue-600/20 backdrop-blur-md rounded-lg uppercase tracking-wider border border-blue-500/30">
                                        {featured[0].category}
                                    </span>
                                    <div className="flex items-center gap-2 text-white/70">
                                        <Clock size={16} />
                                        <span>5 min read</span>
                                    </div>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight group-hover:text-blue-400 transition-colors">
                                    {featured[0].title}
                                </h3>
                                <p className="text-gray-300 text-lg mb-8 line-clamp-2 max-w-2xl">
                                    {featured[0].description}
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full border-2 border-white/20 bg-gray-800 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?u=${featured[0].author}`} alt={featured[0].author} />
                                    </div>
                                    <div>
                                        <span className="block text-white font-bold">{featured[0].author}</span>
                                        <span className="block text-white/50 text-sm">{featured[0].publishedAt}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </motion.div>

                {/* Side Featured Posts */}
                <div className="lg:col-span-5 flex flex-col gap-8">
                    {featured.slice(1).map((post, idx) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group"
                        >
                            <Link href={`/blog/${post.slug}`} className="flex flex-col sm:flex-row gap-6 h-full">
                                <div className="sm:w-2/5 shrink-0 relative aspect-video sm:aspect-square overflow-hidden rounded-3xl shadow-lg border border-gray-100 dark:border-white/5">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="flex flex-col justify-center py-2">
                                    <span className="text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-widest mb-2">
                                        {post.category}
                                    </span>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-xs">
                                        <div className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            <span>{post.publishedAt}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <User size={14} />
                                            <span>{post.author}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedPosts;
