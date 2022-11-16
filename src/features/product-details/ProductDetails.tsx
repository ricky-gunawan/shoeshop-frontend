import { useGetProductsApi } from "@/entities/product/api";
import Product from "@/entities/product/components/Product";
import LoadingAndErrorHandler from "@/shared/components/LoadingAndErrorHandler";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const getProductsApi = useGetProductsApi();
  const { productId } = useParams<{ productId: string }>();
  const { data, isLoading, isError, isPaused } = useQuery({ queryKey: ["customerProducts"], queryFn: getProductsApi, select: (data) => data.filter((product) => product._id === productId) });

  if (isLoading || isError || isPaused) {
    return <LoadingAndErrorHandler isLoading={isLoading} isError={isError} isPaused={isPaused} />;
  }
  return (
    <>
      <Product product={data[0]} />
    </>
  );
};

export default ProductDetails;
