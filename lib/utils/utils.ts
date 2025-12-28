import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Prisma } from "@prisma/client";
import { ZodError } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//Convert prisma object into a regular JS object
export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

// Format number with decimal places
export function formatNumberWithDecimal(num: number): string {
  const [int, decimal] = num.toString().split(".");
  return decimal ? `${int}.${decimal.padEnd(2, "0")}` : `${int}.00`;
}

// Format errors
export function formatError(error: unknown) {
  if (error instanceof ZodError) {
    return error.issues.map((issue) => `${issue.message}`).join(" ");
  } else if (
    error instanceof Prisma.PrismaClientKnownRequestError &&
    error.code === "P2002"
  ) {
    const regex = /\(`(.+?)`\)/g;
    const match = regex.exec(error.message);
    const field: string = match ? match[1] : "";
    return `${field.charAt(0).toUpperCase() + field.slice(1)} already exists.`;
  } else {
    return error instanceof Error
      ? error.message
      : "An unexpected error occurred. Please try again.";
  }
}
