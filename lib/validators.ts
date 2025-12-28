import { z } from "zod";
import { formatNumberWithDecimal } from "./utils/utils";

const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
    "Price must have exactly two decimal places"
  );

const zDateString = z
  .string()
  .refine((dateStr) => !isNaN(Date.parse(dateStr)), {
    message: "Invalid date format",
  });

// Schema for inserting products
export const insertProductSchema = z.object({
  name: z.string().min(3, "Name must contain at least 3 characters"),
  slug: z.string().min(3, "Slug must contain at least 3 characters"),
  category: z.string().min(3, "Category must contain at least 3 characters"),
  brand: z.string().min(3, "Brand must contain at least 3 characters"),
  description: z
    .string()
    .min(3, "Description must contain at least 3 characters"),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, "Product must have at least one image"),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency,
  numReviews: z.coerce.number(),
});

//Schema for reading product
export const readProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  category: z.string(),
  brand: z.string(),
  description: z.string(),
  stock: z.coerce.number(),
  images: z.array(z.string()),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency,
  numReviews: z.coerce.number(),
  rating: z.number(),
  createdAt: zDateString,
});

//Schema for signing users in
export const signInFormSchema = z.object({
  email: z.string().email("Invalid email address."),
  password: z.string().min(6, "Pasword must have at least 6 characters."),
});

//Schema for signing up users
export const signUpFormSchema = z
  .object({
    name: z.string().min(3, "Name must contain at least 3 characters."),
    email: z.string().email("Invalid email address."),
    password: z.string().min(6, "Pasword must have at least 6 characters."),
    confirmPassword: z.string().min(6, "Confirm password must match password."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });
