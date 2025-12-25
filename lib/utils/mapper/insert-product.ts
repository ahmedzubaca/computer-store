import { Product as PrismaProduct } from "@prisma/client";
import { ProductType } from "@/types";
import { insertProductSchema } from "@/lib/validators";
import { number, z } from "zod";

export function mapInsertProduct(product: PrismaProduct): ProductType {
  const mapped = {
    id: product.id,
    name: product.name,
    slug: product.slug,
    category: product.category,
    brand: product.brand,
    description: product.description,
    stock: product.stock,
    images: product.images,
    isFeatured: product.isFeatured,
    banner: product.banner,
    price: product.price,
    rating: product.rating.toNumber(),
    numReviews: number,
    createdAt: product.createdAt,
  };

  // Runtime validation + typing
  return insertProductSchema
    .extend({
      id: z.string(),
      rating: z.number(),
      createdAt: z.date(),
    })
    .parse(mapped);
}
