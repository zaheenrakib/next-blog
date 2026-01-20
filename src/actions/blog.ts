// Example: src/actions/blogs.ts
"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { getCurrentUser } from "@/lib/auth";
import { requireRole } from "@/lib/rbac";

export async function createBlog(formData: FormData) {
  const user = await getCurrentUser();
  requireRole(user?.role, ["ADMIN", "EDITOR"]);

  const title = String(formData.get("title") ?? "");
  const slug = String(formData.get("slug") ?? "");
  const content = String(formData.get("content") ?? "");
  const status = (formData.get("status") as "PUBLISHED" | "DRAFT") ?? "DRAFT";
  const categoryIds = String(formData.get("categoryIds") ?? ""); // comma-separated

  await prisma.blog.create({
    data: {
      title, slug, content, status,
      authorId: user!.id,
      categories: {
        connect: categoryIds.split(",").filter(Boolean).map((id) => ({ id })),
      },
    },
  });

  revalidatePath("/admin/blogs");
}

export async function updateBlog(id: string, formData: FormData) {
  const user = await getCurrentUser();
  requireRole(user?.role, ["ADMIN", "EDITOR"]);

  const title = String(formData.get("title") ?? "");
  const content = String(formData.get("content") ?? "");
  const status = (formData.get("status") as "PUBLISHED" | "DRAFT") ?? "DRAFT";
  const categoryIds = String(formData.get("categoryIds") ?? "");

  await prisma.blog.update({
    where: { id },
    data: {
      title, content, status,
      categories: {
        set: [], // reset categories
        connect: categoryIds.split(",").filter(Boolean).map((cid) => ({ id: cid })),
      },
    },
  });

  revalidatePath("/admin/blogs");
}

export async function deleteBlog(id: string) {
  const user = await getCurrentUser();
  requireRole(user?.role, ["ADMIN", "EDITOR"]);
  await prisma.blog.delete({ where: { id } });
  revalidatePath("/admin/blogs");
}

export async function togglePublish(id: string, publish: boolean) {
  const user = await getCurrentUser();
  requireRole(user?.role, ["ADMIN", "EDITOR"]);
  await prisma.blog.update({ where: { id }, data: { status: publish ? "PUBLISHED" : "DRAFT" } });
  revalidatePath("/admin/blogs");
}