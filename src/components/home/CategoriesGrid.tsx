"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code, Palette, Cpu, Globe, Zap, Search, Layout, Database } from "lucide-react";

const categories = [
    { name: "Web Development", icon: <Code size={24} />, color: "bg-blue-500", count: 12, slug: "web-dev" },
    { name: "Design", icon: <Palette size={24} />, color: "bg-pink-500", count: 8, slug: "design" },
    { name: "AI & ML", icon: <Cpu size={24} />, color: "bg-purple-500", count: 15, slug: "ai-ml" },
    { name: "Technology", icon: <Globe size={24} />, color: "bg-green-500", count: 24, slug: "tech" },
    { name: "Performance", icon: <Zap size={24} />, color: "bg-orange-500", count: 6, slug: "performance" },
    { name: "UI/UX", icon: <Layout size={24} />, color: "bg-indigo-500", count: 10, slug: "ui-ux" },
    { name: "Database", icon: <Database size={24} />, color: "bg-cyan-500", count: 7, slug: "database" },
    { name: "SEO", icon: <Search size={24} />, color: "bg-yellow-500", count: 5, slug: "seo" },
];

const CategoriesGrid = () => {
    return (
        <section className="py-24 bg-gray-50 dark:bg-white/5 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl font-black text-gray-900 dark:text-white mb-4"
                    >
                        Browse by Topic
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        Discover articles across a wide range of topics. From deep technical dives to creative design insights.
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {categories.map((category, idx) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ y: -5 }}
                        >
                            <Link
                                href={`/category/${category.slug}`}
                                className="group block p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all text-center"
                            >
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${category.color} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                                    {category.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{category.name}</h3>
                                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                                    {category.count} Articles
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoriesGrid;
