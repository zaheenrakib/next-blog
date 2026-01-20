// Example: src/app/admin/page.tsx
import { prisma } from "@/lib/prisma";

export default async function Overview() {
  const [blogs, users, categories, comments] = await Promise.all([
    prisma.blog.count(),
    prisma.user.count(),
    prisma.category.count(),
    prisma.comment.count(),
  ]);
  return (
    <section>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      {/* StatsCards component */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* ...cards for blogs/users/categories/comments */}
      </div>
    </section>
  );
}