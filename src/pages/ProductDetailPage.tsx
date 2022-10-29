import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../components/Loader";
import { LoadingAndErrorHandler } from "../components/LoadingAndErrorHandler";
import { ProductDetails } from "../features/product";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getProductQuery } from "../redux/product/asyncThunks/getProduct";

type ProductDetailPageProps = {};

export const ProductDetailPage = ({}: ProductDetailPageProps) => {
  const { productId } = useParams<{ productId: string }>();
  const { isLoading, product, failed } = useAppSelector((store) => store.product.getProduct);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(getProductQuery({ productId }));
    }
  }, [productId]);
  return (
    <LoadingAndErrorHandler isLoading={isLoading} failed={failed} data={product}>
      {product ? <ProductDetails product={product} /> : ""}
    </LoadingAndErrorHandler>
  );
};
