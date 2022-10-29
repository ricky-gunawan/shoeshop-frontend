import { cartDummyList } from "../data/cartDummyList";
import { DataList } from "../features/admin-dashboard";

type AdminCartPageProps = {};

export const AdminCartPage = ({}: AdminCartPageProps) => {
  return (
    <>
      <DataList data={cartDummyList} title1="id" title2="user" field1="_id" field2="user" keyStr="_id" />
    </>
  );
};
