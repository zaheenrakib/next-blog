// Example: src/app/admin/layout.tsx
import { getCurrentUser } from "@/lib/auth";
import { requireRole } from "@/lib/rbac";
import AdminSidebar from "@/components/Sidebar";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser(); // server function
  requireRole(user?.role, ["ADMIN", "EDITOR"]);
  return (
    <div className="min-h-screen grid grid-cols-[260px_1fr]">
      <AdminSidebar />
      <main className="p-6">{children}</main>
    </div>
  );
}