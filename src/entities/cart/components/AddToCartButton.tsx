import { CheckCircleIcon } from "@heroicons/react/outline";
import { MouseEvent, useEffect, useState } from "react";
import { Spinner } from "../../../components/Spinner";
import { editCartQuery } from "../../../redux/cart/asyncThunks/editCart";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { Product } from "../../../redux/product/asyncThunks/getProduct";

type AddToCartButtonProps = {
  product: Product;
};

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const items = useAppSelector((store) => store.cart.userCart.cart?.items);
  const user = useAppSelector((store) => store.user.login.user);
  const { isLoading, failed } = useAppSelector((store) => store.cart.editCart);
  const dispatch = useAppDispatch();

  const [added, setAdded] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleAddToCart = (e: MouseEvent) => {
    e.preventDefault();
    setClicked(true);
    if (user) {
      dispatch(editCartQuery({ cartItem: { product: product._id, name: product.name, img: product.img, price: product.price, brand: product.brand, color: product.color, quantity: 1 } }));
    } else {
      alert("To add product, you need to login.");
    }
  };

  useEffect(() => {
    items?.forEach((item) => {
      if (item.product === product._id) {
        setAdded(true);
      }
    });
    setClicked(false);
  }, [items, clicked]);

  return (
    <>
      {added ? (
        <div onClick={(e) => e.preventDefault()} className="w-28 rounded-md bg-green-700 p-2 font-semibold uppercase text-neutral-50">
          <CheckCircleIcon className="mx-auto h-6 w-6" />
        </div>
      ) : isLoading && clicked ? (
        <div className="w-28 rounded-md bg-green-700 p-2 font-semibold uppercase text-neutral-50 hover:bg-green-800">
          <Spinner />
        </div>
      ) : (
        <button onClick={handleAddToCart} className="rounded-md bg-green-700 p-2 font-semibold uppercase text-neutral-50 hover:bg-green-800">
          add to cart
        </button>
      )}
    </>
  );
}
