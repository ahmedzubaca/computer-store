import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";
import { mapReadProducts } from "@/lib/utils/mapper/read-product";

const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  const mappedProducts = mapReadProducts(latestProducts);

  return (
    <>
      <ProductList data={mappedProducts} title="Newest Arrivals" />
    </>
  );
};

export default Homepage;
