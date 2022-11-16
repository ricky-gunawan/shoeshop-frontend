import { useState } from "react";
import { Order } from "./Order";
import { PaymentModal } from "./PaymentModal";

type OrderListProps = {};

const userOrders = [
  {
    _id: "1",
    date: "date",
    items: [
      {
        product: "1",
        name: "product 1 ini product ini ini",
        img: "/dummy_image.webp",
        price: "1000000",
        brand: "nike",
        color: "red",
        quantity: 1,
      },
      {
        product: "2",
        name: "product 2",
        img: "/dummy_image.webp",
        price: "1000000",
        brand: "nike",
        color: "red",
        quantity: 1,
      },
      {
        product: "3",
        name: "product 3",
        img: "/dummy_image.webp",
        price: "1000000",
        brand: "nike",
        color: "red",
        quantity: 1,
      },
    ],
    totalItems: 4,
    totalPrice: "4.000.000",
    address: "address",
    payment: "paypal",
    isPaid: false,
  },
];

const OrderList = ({}: OrderListProps) => {
  const [paymentModal, setPaymentModal] = useState(false);

  return (
    <div>
      <PaymentModal paymentModal={paymentModal} setPaymentModal={setPaymentModal} />
      {Array.isArray(userOrders) && userOrders.length ? (
        userOrders.map((order) => (
          <Order key={order._id} date={order.date} items={order.items} totalItems={order.totalItems} totalPrice={order.totalPrice} address={order.address} payment={order.payment} isPaid={order.isPaid} setPaymentModal={setPaymentModal} />
        ))
      ) : (
        <div className="text-center text-lg">No Order Yet</div>
      )}
    </div>
  );
};

export default OrderList;
