export const ROLES = {
  SUPER_ADMIN: "super_admin",

  ADMIN: "admin",

  MANAGER: "manager",

  OPERATOR: "operator",

  EMPLOYEE: "employee",

  CUSTOMER: "customer",
} as const;

export type UserRole =
  (typeof ROLES)[keyof typeof ROLES];