// Example: src/app/admin/blogs/page.tsx
import { prisma } from "@/lib/prisma";
import BlogTable from "@/components/BlogTable";

export default async function BlogsPage({ searchParams }: { searchParams: { q?: string; page?: string } }) {
  const q = searchParams.q?.trim() ?? "";
  const page = Number(searchParams.page ?? 1);
  const take = 20, skip = (page - 1) * take;

  const where = q
    ? { OR: [{ title: { contains: q, mode: "insensitive" } }, { categories: { some: { name: { contains: q, mode: "insensitive" } } } }] }
    : {};

  const [items, total] = await Promise.all([
    prisma.blog.findMany({ where, take, skip, include: { categories: true, author: true } }),
    prisma.blog.count({ where }),
  ]);

  return <BlogTable items={items} total={total} page={page} perPage={take} />;
}