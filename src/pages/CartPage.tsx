import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { LoadingAndErrorHandler } from "../components/LoadingAndErrorHandler";
import { CartItemList } from "../features/cart";
import { editCartQuery } from "../redux/cart/asyncThunks/editCart";
import { getCartQuery } from "../redux/cart/asyncThunks/getCart";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

type CartPageProps = {};

export const CartPage = ({}: CartPageProps) => {
  const { isLoading, failed, cart } = useAppSelector((store) => store.cart.userCart);
  const user = useAppSelector((store) => store.user.login.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    user && dispatch(getCartQuery());
    return () => {
      dispatch(editCartQuery({ cartItem: undefined }));
    };
  }, []);
  return (
    <>
      {user ? (
        <LoadingAndErrorHandler isLoading={isLoading} failed={failed} data={cart?.items}>
          {cart ? <CartItemList itemList={cart.items} /> : ""}
        </LoadingAndErrorHandler>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};
