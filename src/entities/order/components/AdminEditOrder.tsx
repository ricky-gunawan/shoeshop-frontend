import { ChangeEvent, useState } from "react";
import { orderDummyList } from "../../../data/orderDummyList";
import { ShoeColor } from "../../product";

type AdminEditOrderProps = {};

const AdminEditOrder = ({}: AdminEditOrderProps) => {
  const [order, setOrder] = useState(orderDummyList[0]);

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const elemName = e.target.name;
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setOrder((prev) => ({ ...prev, [elemName]: value }));
  };

  return (
    <form className="mx-auto max-w-2xl">
      <div>
        <label className="ml-1 block">id</label>
        <input value={order._id} onChange={handleFormChange} disabled type="text" name="id" id="admin_order_id" className="my-2 w-full rounded-sm border border-slate-300 focus:border-green-700 focus:ring-green-700 disabled:bg-slate-200" />
      </div>
      <div>
        <label className="ml-1 block">user</label>
        <input
          value={order.user}
          onChange={handleFormChange}
          disabled
          type="text"
          name="user"
          id="admin_order_user"
          className="my-2 w-full rounded-sm border border-slate-300 focus:border-green-700 focus:ring-green-700 disabled:bg-slate-200"
        />
      </div>
      <div>
        <label className="ml-1 block">date</label>
        <input
          value={order.date}
          onChange={handleFormChange}
          disabled
          type="text"
          name="date"
          id="admin_order_date"
          className="my-2 w-full rounded-sm border border-slate-300 focus:border-green-700 focus:ring-green-700 disabled:bg-slate-200"
        />
      </div>
      <div>
        <label className="ml-1 block">items</label>
        <div className="flex max-h-[30vh] flex-wrap gap-2 overflow-auto p-2 align-top">
          {order.items.map((product) => (
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
      <div>
        <label className="ml-1 block">total items</label>
        <input
          value={order.totalItems}
          onChange={handleFormChange}
          disabled
          type="text"
          name="totalItems"
          id="admin_order_totalItems"
          className="my-2 w-full rounded-sm border border-slate-300 focus:border-green-700 focus:ring-green-700 disabled:bg-slate-200"
        />
      </div>
      <div>
        <label className="ml-1 block">total price</label>
        <input
          value={order.totalPrice}
          onChange={handleFormChange}
          disabled
          type="text"
          name="totalPrice"
          id="admin_order_totalPrice"
          className="my-2 w-full rounded-sm border border-slate-300 focus:border-green-700 focus:ring-green-700 disabled:bg-slate-200"
        />
      </div>
      <div>
        <label className="ml-1 block">address</label>
        <input
          value={order.address}
          onChange={handleFormChange}
          disabled
          type="text"
          name="address"
          id="admin_order_address"
          className="my-2 w-full rounded-sm border border-slate-300 focus:border-green-700 focus:ring-green-700 disabled:bg-slate-200"
        />
      </div>
      <div>
        <label className="ml-1 block">payment</label>
        <input
          value={order.payment}
          onChange={handleFormChange}
          disabled
          type="text"
          name="payment"
          id="admin_order_payment"
          className="my-2 w-full rounded-sm border border-slate-300 focus:border-green-700 focus:ring-green-700 disabled:bg-slate-200"
        />
      </div>
      <div>
        <label className="ml-1 block">payment status</label>
        <input checked={order.isPaid} onChange={handleFormChange} type="checkbox" name="isPaid" id="admin_order_isPaid" className="rounded-sm border border-slate-300 align-middle focus:border-green-700 focus:ring-green-700" />
        <span className="ml-2 align-middle">Set Already Paid</span>
      </div>
      <input type="submit" value="save" className="mx-auto mt-8 block w-40 cursor-pointer rounded-md bg-green-500 py-1 text-center font-semibold uppercase text-neutral-50 hover:bg-green-600" />
    </form>
  );
};

export default AdminEditOrder;
