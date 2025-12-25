import { z } from "zod";
import { insertProductSchema, readProductSchema } from "@/lib/validators";

export type ProductType = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: number;
  createdAt: Date;
};

export type ProductUI = z.infer<typeof readProductSchema>;
