import { Products } from "../../../redux/product/asyncThunks/getProducts";
import { ProductCard } from "./ProductCard";

type ProductListProps = {
  products: Products | undefined;
};

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <>
      {products?.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </>
  );
};
