import { orderDummyList } from "../data/orderDummyList";
import { DataList } from "../features/admin-dashboard";

type AdminOrderPageProps = {};

export const AdminOrderPage = ({}: AdminOrderPageProps) => {
  return (
    <>
      <DataList data={orderDummyList} title1="id" title2="user" field1="_id" field2="user" keyStr="_id" />;
    </>
  );
};
