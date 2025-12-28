import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getProductBySlug } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";
import ProductPrice from "@/components/shared/product/product-price";
import { mapReadProduct } from "@/lib/utils/mapper/read-product";
import ProductImages from "@/components/shared/product/product-image";

const ProductDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await props.params).slug;
  const productFromDb = await getProductBySlug(slug);
  if (!productFromDb) notFound();
  const mappedProduct = mapReadProduct(productFromDb);

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-5">
        <ProductImages images={mappedProduct.images} />
        <div className="col-span-2">Images component</div>
        {/* {Details Column} */}
        <div className="col-span-2 p-5">
          <div className="flex flex-col gap-6">
            <p>
              {mappedProduct.brand} {mappedProduct.category}
            </p>
            <h1 className="h3-bold">{mappedProduct.name}</h1>
            <p>
              {mappedProduct.rating} of {mappedProduct.numReviews}
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <ProductPrice
                value={Number(mappedProduct.price)}
                className="w-24 rounded-full bg-green-100 text-green-700 px-5 py-2"
              />
            </div>
          </div>
          <div className="mt-10">
            <p className="font-semibold">Description</p>
            <p> {mappedProduct.description} </p>
          </div>
        </div>
        <div>
          <Card>
            <CardContent className="p-4">
              <div className="mb-2 flex justify-between">
                <div>Price</div>
                <div>
                  <ProductPrice value={Number(mappedProduct.price)} />
                </div>
              </div>
              <div className="mb-2 flex justify-between">
                <div>Status</div>
                {mappedProduct.stock > 0 ? (
                  <Badge variant="outline"> In Stock</Badge>
                ) : (
                  <Badge variant="destructive"> Out Of Stock</Badge>
                )}
              </div>
              {mappedProduct.stock > 0 && (
                <div className="flex-center">
                  <Button className="w-full">Add To Cart</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
