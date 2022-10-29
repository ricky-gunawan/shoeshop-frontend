import { useEffect } from "react";
import { Drawer } from "../components/Drawer";
import { Loader } from "../components/Loader";
import { LoadingAndErrorHandler } from "../components/LoadingAndErrorHandler";
import { Filter, ProductList } from "../features/product";
import { getCartQuery } from "../redux/cart/asyncThunks/getCart";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getProductsQuery } from "../redux/product/asyncThunks/getProducts";

type HomePageProps = {};

export const HomePage = ({}: HomePageProps) => {
  const { isLoading, products, failed } = useAppSelector((store) => store.product.getProducts);
  const user = useAppSelector((store) => store.user.login.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductsQuery());
    user && dispatch(getCartQuery());
  }, []);

  return (
    <>
      <Drawer>
        <Filter />
      </Drawer>
      <LoadingAndErrorHandler isLoading={isLoading} failed={failed} data={products}>
        <div className="grid grid-cols-2 gap-x-2 gap-y-4 md:grid-cols-3 lg:ml-40 lg:grid-cols-4">
          <ProductList products={products} />
        </div>
      </LoadingAndErrorHandler>
    </>
  );
};
