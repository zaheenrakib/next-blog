export type Role = "ADMIN" | "EDITOR" | "USER";

export type SessionUser = {
  id: string;
  name: string;
  email: string;
  role: Role;
} | null;

export async function getCurrentUser(): Promise<SessionUser> {
  return { id: "dev-user", name: "Dev Admin", email: "admin@example.com", role: "ADMIN" };
}