import { ChangeEvent, useState } from "react";
import { cartDummyList } from "../../../data/cartDummyList";
import { ShoeColor } from "../../product";

type AdminEditCartProps = {};

export const AdminEditCart = ({}: AdminEditCartProps) => {
  const [cart, setCart] = useState(cartDummyList[0]);

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const elemName = e.target.name;
    const value = e.target.value;
    setCart((prev) => ({ ...prev, [elemName]: value }));
  };
  return (
    <form className="mx-auto max-w-2xl">
      <div>
        <label className="ml-1 block">id</label>
        <input value={cart._id} onChange={handleFormChange} disabled type="text" name="id" id="admin_cart_id" className="my-2 w-full rounded-sm border border-slate-300 focus:border-green-700 focus:ring-green-700 disabled:bg-slate-200" />
      </div>
      <div>
        <label className="ml-1 block">user</label>
        <input
          value={cart.user}
          onChange={handleFormChange}
          disabled
          type="text"
          name="user"
          id="admin_cart_user"
          className="my-2 w-full rounded-sm border border-slate-300 focus:border-green-700 focus:ring-green-700 disabled:bg-slate-200"
        />
      </div>
      <div>
        <label className="ml-1 block">items</label>
        <div className="flex max-h-[30vh] flex-wrap gap-2 overflow-auto p-2 align-top">
          {cart.items.map((product) => (
            <div key={product.product} className="flex w-fit justify-center gap-2 border p-1">
              <div className="mt-1 grow sm:ml-2">
                <h2 className="text-xs font-bold uppercase">{product.name}</h2>
                <h3 className="text-xs">
                  Brand: <span className="uppercase">{product.brand}</span>
                </h3>
                <h3 className="text-xs">
                  Color: <ShoeColor color={product.color} />
                </h3>
                <h2 className="my-1 text-xs underline">Rp. {product.price}</h2>
                <h3 className="text-xs">Quantity: {product.quantity}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </form>
  );
};
