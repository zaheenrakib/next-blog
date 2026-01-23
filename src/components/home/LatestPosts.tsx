"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Bookmark, MessageSquare, Share2 } from "lucide-react";
import { blogs } from "@/types/blogs";

const LatestPosts = () => {
    // Use posts from 3 to 9
    const latest = blogs.slice(3, 9);

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
            <div className="flex items-center justify-between mb-16">
                <div>
                    <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-2">Latest Insights</h2>
                    <p className="text-gray-500 dark:text-gray-400">Freshly baked articles from our talented authors.</p>
                </div>
                <Link
                    href="/blog"
                    className="hidden sm:flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-white/5 rounded-2xl font-bold text-gray-900 dark:text-white hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all"
                >
                    View All <ArrowRight size={18} />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {latest.map((post, idx) => (
                    <motion.article
                        key={post.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="group flex flex-col h-full bg-white dark:bg-gray-900 rounded-[2rem] overflow-hidden border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-2xl transition-all duration-500"
                    >
                        <Link href={`/blog/${post.slug}`} className="relative aspect-16/10 overflow-hidden">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute top-4 left-4">
                                <span className="px-4 py-1.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-xl text-xs font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 shadow-sm">
                                    {post.category}
                                </span>
                            </div>
                        </Link>

                        <div className="p-8 flex flex-col grow">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?u=${post.author}`} alt={post.author} />
                                </div>
                                <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{post.author}</span>
                                <span className="text-gray-300 dark:text-gray-700">•</span>
                                <span className="text-xs text-gray-500">{post.publishedAt}</span>
                            </div>

                            <Link href={`/blog/${post.slug}`} className="grow">
                                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed mb-6">
                                    {post.description}
                                </p>
                            </Link>

                            <div className="pt-6 border-t border-gray-50 dark:border-white/5 flex items-center justify-between mt-auto">
                                <div className="flex items-center gap-4 text-gray-400">
                                    <button className="hover:text-blue-600 transition-colors flex items-center gap-1.5">
                                        <MessageSquare size={16} />
                                        <span className="text-xs font-medium">12</span>
                                    </button>
                                    <button className="hover:text-blue-600 transition-colors">
                                        <Share2 size={16} />
                                    </button>
                                </div>
                                <button className="text-gray-400 hover:text-blue-600 transition-colors">
                                    <Bookmark size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>

            <div className="mt-16 text-center sm:hidden">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-black transition-all"
                >
                    View All Posts <ArrowRight size={18} />
                </Link>
            </div>
        </section>
    );
};

export default LatestPosts;
