import useCartToOrder from "@/entities/cart/hooks/useCartToOrder";
import useAppSelector from "@/shared/hooks/useAppSelector";

const CartToOrder = () => {
  const customerCart = useAppSelector((store) => store.customerCart);
  const address = useAppSelector((store) => store.auth.address);
  const { totalItems, totalPriceString } = useCartToOrder(customerCart);

  return (
    <div className="h-fit max-h-full w-full rounded-lg bg-neutral-50 p-1 shadow-md">
      <form>
        <div className="mx-auto w-fit border-b-4 text-lg font-semibold">Order Details</div>
        <table className="">
          <tbody>
            <tr className="">
              <td className="p-2 align-top">Items</td>
              <td className="w-4 p-2 align-top">:</td>
              <td className="flex max-h-[30vh] flex-wrap gap-2 overflow-auto p-2 align-top">
                {customerCart.map((product) => (
                  <div key={product.product} className="flex w-fit justify-center gap-2 border p-1">
                    <div className="mt-1 grow sm:ml-2">
                      <h2 className="text-xs font-bold uppercase">{product.name}</h2>
                      <h2 className="my-1 text-xs underline">Rp. {product.price}</h2>
                      <h3 className="text-xs">Quantity: {product.quantity}</h3>
                    </div>
                  </div>
                ))}
              </td>
            </tr>
            <tr className="">
              <td className="p-2 align-top">Total Items</td>
              <td className="p-2 align-top">:</td>
              <td className="p-2 align-top">Rp. {totalItems}</td>
            </tr>
            <tr className="">
              <td className="p-2 align-top">Total Price</td>
              <td className="p-2 align-top">:</td>
              <td className="p-2 align-top">Rp. {totalPriceString}</td>
            </tr>
            <tr className="">
              <td className="p-2 align-top">Address</td>
              <td className="p-2 align-top">:</td>
              <td className="p-2 align-top">{address}</td>
            </tr>
            <tr className="">
              <td className="p-2">Payment</td>
              <td className="p-2">:</td>
              <td className="p-2">
                <select className="rounded-sm py-1" name="payment" id="payment">
                  <option value="paypal">Paypal</option>
                  <option value="stripe">Stripe</option>
                  <option value="bitcoin">Bitcoin</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-end">
          <input type="submit" value="place an order" className="m-2 cursor-pointer rounded-lg bg-green-700 p-2 text-sm font-semibold uppercase text-white hover:bg-green-800" />
        </div>
      </form>
    </div>
  );
};

export default CartToOrder;
