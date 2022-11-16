import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const CartPage = () => {
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
      <CartItemList itemList={cart.items} />
    </>
  );
};

export default CartPage;
