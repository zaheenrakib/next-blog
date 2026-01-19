"use client";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/redux/store";
import { setSearchQuery, loadMore } from "@/redux/features/blogs/blogSlice";

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
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          placeholder="Search by title or category"
          className="w-full border rounded px-4 py-2"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="border rounded-lg overflow-hidden hover:shadow-md transition"
          >
            <div className="h-40 bg-gray-100">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <div className="text-sm text-gray-500">{post.category}</div>
              <h2 className="text-lg font-semibold">{post.title}</h2>
              <p className="text-sm text-gray-600">{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={() => dispatch(loadMore(15))}
          disabled={visible.length >= filtered.length}
          className="px-6 py-2 rounded bg-blue-600 text-white disabled:bg-gray-400"
        >
          Load More
        </button>
      </div>
    </main>
  );
};

export default Blog