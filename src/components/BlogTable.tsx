import Link from "next/link";

type BlogItem = {
  id: string;
  title: string;
  slug: string;
  status: "PUBLISHED" | "DRAFT";
  createdAt: Date | string;
  author?: { name?: string | null };
  categories?: { name: string }[];
};

export default function BlogTable({
  items,
  total,
  page,
  perPage,
}: {
  items: BlogItem[];
  total: number;
  page: number;
  perPage: number;
}) {
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  return (
    <section className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Blogs</h2>
        <Link href="/admin/blogs/new" className="px-4 py-2 rounded bg-blue-600 text-white">
          New Blog
        </Link>
      </div>

      <div className="overflow-x-auto border rounded">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-3 py-2">Title</th>
              <th className="text-left px-3 py-2">Status</th>
              <th className="text-left px-3 py-2">Author</th>
              <th className="text-left px-3 py-2">Categories</th>
              <th className="text-left px-3 py-2">Created</th>
              <th className="text-left px-3 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((b) => (
              <tr key={b.id} className="border-t">
                <td className="px-3 py-2">{b.title}</td>
                <td className="px-3 py-2">{b.status}</td>
                <td className="px-3 py-2">{b.author?.name ?? "-"}</td>
                <td className="px-3 py-2">{b.categories?.map((c) => c.name).join(", ")}</td>
                <td className="px-3 py-2">{new Date(b.createdAt).toLocaleDateString()}</td>
                <td className="px-3 py-2">
                  <div className="flex gap-2">
                    <Link href={`/admin/blogs/${b.id}`} className="px-3 py-1 rounded bg-gray-200">
                      Edit
                    </Link>
                    <Link href={`/blog/${b.slug}`} className="px-3 py-1 rounded bg-gray-200">
                      View
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between">
        <div>Page {page} of {totalPages}</div>
        <div className="flex gap-2">
          <Link
            href={`/admin/blogs?page=${Math.max(1, page - 1)}`}
            className="px-3 py-1 rounded bg-gray-200"
          >
            Prev
          </Link>
          <Link
            href={`/admin/blogs?page=${Math.min(totalPages, page + 1)}`}
            className="px-3 py-1 rounded bg-gray-200"
          >
            Next
          </Link>
        </div>
      </div>
    </section>
  );
}