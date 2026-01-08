import { z } from "zod";
import {
  insertProductSchema,
  readProductSchema,
  cartItemSchema,
  insertCartSchema,
  shippingAddressSchema,
} from "@/lib/validators";

export type ProductType = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: number;
  createdAt: Date;
};

export type ProductUI = z.infer<typeof readProductSchema>;

export type Cart = z.infer<typeof insertCartSchema>;
export type CartItem = z.infer<typeof cartItemSchema>;
export type ShippingAddress = z.infer<typeof shippingAddressSchema>;
