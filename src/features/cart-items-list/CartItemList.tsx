import { useGetCustomerCartApi, useUpdateCustomerCartApi } from "@/entities/cart/api";
import CartItem from "@/entities/cart/components/CartItem";
import { decreaseItemQty, deleteCartItem, increaseItemQty, setCartData } from "@/entities/cart/models/customerCartSlice";
import Loader from "@/shared/components/Loader";
import useAppDispatch from "@/shared/hooks/useAppDispatch";
import useAppSelector from "@/shared/hooks/useAppSelector";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const CartItemList = () => {
  const dispatch = useAppDispatch();
  const handleIncreaseItemQty = (productId: string) => {
    dispatch(increaseItemQty(productId));
  };
  const handleDecreaseItemQty = (productId: string) => {
    dispatch(decreaseItemQty(productId));
  };
  const handleDeleteItem = (productId: string) => {
    dispatch(deleteCartItem(productId));
  };

  const getCustomerCartApi = useGetCustomerCartApi();
  const updateCustomerCartApi = useUpdateCustomerCartApi();
  const customerCart = useAppSelector((store) => store.customerCart);
  const updatedCartItems: CartItemsData = customerCart.map((cartItem) => {
    return {
      product: cartItem.product,
      name: cartItem.name,
      img: cartItem.img,
      price: cartItem.price,
      brand: cartItem.brand,
      color: cartItem.color,
      quantity: cartItem.quantity,
    };
  });

  const [isDataReady, setIsDataReady] = useState(false);
  const [isFirstMounted, setIsFirstMounted] = useState(true);

  const { refetch, isLoading, isPaused } = useQuery({
    queryKey: ["customerCart"],
    queryFn: getCustomerCartApi,
    enabled: false,
    onSuccess: (data) => {
      dispatch(setCartData(data));
      setIsDataReady(true);
    },
  });

  const { mutate } = useMutation({
    mutationFn: updateCustomerCartApi,
  });

  useEffect(() => {
    isFirstMounted && refetch();
    isDataReady && mutate(updatedCartItems);
    setIsFirstMounted(false);
  }, [customerCart]);

  return (
    <div className="max-w-lg md:w-1/2">
      {Array.isArray(customerCart) && customerCart.length ? (
        <>
          {customerCart.map(({ product, name, img, price, brand, color, quantity }) => (
            <CartItem
              key={product}
              product={product}
              name={name}
              img={img}
              price={price}
              brand={brand}
              color={color}
              quantity={quantity}
              handleIncreaseItemQty={handleIncreaseItemQty}
              handleDecreaseItemQty={handleDecreaseItemQty}
              handleDeleteItem={handleDeleteItem}
            />
          ))}
        </>
      ) : isLoading && !isPaused ? (
        <div className="mt-48">
          <Loader />
        </div>
      ) : (
        <div className="mt-48 text-center">Cart is empty</div>
      )}
    </div>
  );
};

export default CartItemList;
