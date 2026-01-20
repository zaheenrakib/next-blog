"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/blogs", label: "Blogs" },
  { href: "/admin/categories", label: "Categories" },
  { href: "/admin/comments", label: "Comments" },
  { href: "/admin/users", label: "Users" },
  { href: "/admin/settings", label: "Settings" },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="h-screen border-r p-4">
      <div className="text-xl font-bold mb-6">Admin</div>
      <nav className="space-y-2">
        {items.map((i) => {
          const active = pathname === i.href;
          return (
            <Link
              key={i.href}
              href={i.href}
              className={`block px-3 py-2 rounded ${active ? "bg-blue-600 text-white" : "hover:bg-gray-100"}`}
            >
              {i.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}