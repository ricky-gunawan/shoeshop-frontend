import { LoadingAndErrorHandler } from "../../../components/LoadingAndErrorHandler";
import { useAppSelector } from "../../../redux/hooks";
import { CartItem } from "./CartItem";
import { CartToOrder } from "./CartToOrder";

type CartItemListProps = {
  itemList:
    | {
        product: string;
        name: string;
        img: string;
        price: string;
        brand: string;
        color: string;
        quantity: number;
      }[]
    | [];
};

const CartItemList = ({ itemList }: CartItemListProps) => {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:gap-4">
      <div className="max-w-lg md:w-1/2">
        {itemList.map((product) => (
          <CartItem key={product.product} product={product.product} name={product.name} img={product.img} price={product.price} brand={product.brand} color={product.color} quantity={product.quantity} />
        ))}
      </div>
      <div className="left-1/2 mx-auto max-w-screen-sm md:fixed md:mx-4 md:max-h-[80vh]">
        <CartToOrder items={itemList} />
      </div>
    </div>
  );
};

export default CartItemList;
