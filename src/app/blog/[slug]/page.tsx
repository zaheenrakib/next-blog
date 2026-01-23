"use client";

import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, User, Share2, Bookmark, MessageSquare } from "lucide-react";

export default function BlogDetails() {
  const { slug } = useParams() as { slug: string };
  const items = useSelector((s: RootState) => s.blog.items);
  const post = items.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Post Not Found</h1>
          <p className="text-gray-500 mb-8">The article you're looking for doesn't exist.</p>
          <Link href="/blog" className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold">
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pb-24">
      {/* Article Hero */}
      <div className="relative w-full h-[60vh] md:h-[70vh] min-h-[400px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="max-w-4xl mx-auto px-4 w-full pb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 group"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span className="font-bold">Back to Blog</span>
              </Link>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-4 py-1.5 bg-blue-600 text-white rounded-xl text-xs font-black uppercase tracking-widest">
                  {post.category}
                </span>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <Clock size={16} />
                  <span>8 min read</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                {post.title}
              </h1>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full border-2 border-white/20 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${post.author}`} alt={post.author} />
                  </div>
                  <div>
                    <span className="block text-white font-bold">{post.author}</span>
                    <span className="block text-white/60 text-xs">Technical Writer</span>
                  </div>
                </div>
                <div className="h-8 w-px bg-white/20" />
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Calendar size={18} />
                  <span>{post.publishedAt}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-7xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-8 md:p-12 border border-gray-100 dark:border-white/5 shadow-xl">
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium mb-10 italic border-l-4 border-blue-600 pl-6">
                {post.description}
              </p>

              <div className="text-gray-800 dark:text-gray-200 leading-relaxed space-y-6 text-lg">
                {/* Simulated long content since data only has a short 'content' string */}
                <p>{post.content}</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <div className="my-12 relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop"
                    alt="Code"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="text-3xl font-black mt-12 mb-6">Deep Dive into the Topic</h2>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                  eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <ul className="list-disc pl-6 space-y-4 my-8">
                  <li>Understanding the core foundation of modern architectures.</li>
                  <li>Implementing scalable patterns for large-scale applications.</li>
                  <li>Optimizing performance using the latest industry standards.</li>
                </ul>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                  qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                  adipisci velit.
                </p>
              </div>

              {/* Tags */}
              <div className="mt-16 pt-8 border-t border-gray-100 dark:border-white/5 flex flex-wrap gap-2">
                {["#Technology", "#Design", "#Webdev", "#NextJS"].map(tag => (
                  <span key={tag} className="px-4 py-2 bg-gray-100 dark:bg-white/5 rounded-full text-sm font-medium text-gray-600 dark:text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* Engagement Section */}
          <div className="mt-12 flex items-center justify-between p-8 bg-blue-50 dark:bg-blue-900/10 rounded-3xl">
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 font-bold transition-colors">
                <MessageSquare size={20} />
                <span>24 Comments</span>
              </button>
              <button className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 font-bold transition-colors">
                <Share2 size={20} />
                <span>Share</span>
              </button>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 font-bold text-gray-700 dark:text-gray-300 hover:shadow-md transition-all">
              <Bookmark size={20} />
              <span>Save Article</span>
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-12">
          {/* Author Card */}
          <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-8 border border-gray-100 dark:border-white/5 shadow-xl">
            <h3 className="text-xl font-black mb-6">About the Author</h3>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl border-2 border-gray-100 dark:border-white/10 overflow-hidden">
                <img src={`https://i.pravatar.cc/100?u=${post.author}`} alt={post.author} />
              </div>
              <div>
                <span className="block font-black text-lg">{post.author}</span>
                <span className="text-blue-600 dark:text-blue-400 text-sm font-bold">@the_author</span>
              </div>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
              Senior software engineer specializing in frontend architectures and modern web technologies.
              Passionate about sharing knowledge and building community.
            </p>
            <button className="w-full py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-bold hover:scale-105 transition-transform">
              Follow Author
            </button>
          </div>

          {/* Related Posts Sidebar Mock */}
          <div className="space-y-6">
            <h3 className="text-xl font-black px-2">Related Articles</h3>
            {items.filter(item => item.slug !== post.slug).slice(0, 3).map(item => (
              <Link key={item.slug} href={`/blog/${item.slug}`} className="group flex gap-4 p-2 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                <div className="w-24 h-24 shrink-0 relative rounded-xl overflow-hidden shadow-md">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-tighter">{item.category}</span>
                  <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}