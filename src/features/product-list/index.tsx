import ProductCard from "../../entities/product/components/ProductCard";
import customerProducts from "../../entities/product/models/customerProductsQuery";

const ProductList = () => {
  const { isLoading, data } = customerProducts();

  const handleAddToCart = () => {};
  return (
    <>
      {data?.map((product) => (
        <ProductCard key={product._id} product={product} handleAddToCart={handleAddToCart} />
      ))}
    </>
  );
};

export default ProductList;
