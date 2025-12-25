import { Product as PrismaProduct } from "@prisma/client";
import { readProductSchema } from "@/lib/validators";
import { ProductUI } from "@/types";

export function mapReadProduct(product: PrismaProduct): ProductUI {
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
    price: product.price.toString(),
    rating: product.rating.toNumber(),
    numReviews: product.numReviews,
    createdAt: product.createdAt.toISOString(),
  };

  return readProductSchema.parse(mapped);
}

export function mapReadProducts(products: PrismaProduct[]): ProductUI[] {
  return products.map(mapReadProduct);
}
