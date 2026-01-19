"use client";
import { useSelector } from "react-redux";
import type { RootState } from "@/lib/store/store";
import Link from "next/link";

export default function Blog_Slug({ params }: { params: { slug: string } }) {
  const items = useSelector((s: RootState) => s.blog.items);
  const post = items.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Not found</h1>
        <Link href="/blog" className="text-blue-600">Back to Blog</Link>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/blog" className="text-blue-600">Back to Blog</Link>
      </div>
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <div className="text-sm text-gray-500 mb-4">
        {post.category} • {post.author} • {post.publishedAt}
      </div>
      <div className="mb-6 h-64 bg-gray-100">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
      </div>
      <p className="text-lg">{post.content}</p>
    </main>
  );
}