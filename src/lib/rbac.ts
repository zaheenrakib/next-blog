// Example: src/lib/rbac.ts
export type Role = "ADMIN" | "EDITOR" | "USER";

export function requireRole(userRole: Role | undefined, allowed: Role[]) {
  if (!userRole || !allowed.includes(userRole)) {
    throw new Error("FORBIDDEN");
  }
}