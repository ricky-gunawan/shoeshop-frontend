import { productDummyList } from "../data/productDummyList";
import { DataList } from "../features/admin-dashboard";

type AdminProductPageProps = {};

export const AdminProductPage = ({}: AdminProductPageProps) => {
  return (
    <>
      <DataList data={productDummyList} title1="id" title2="name" field1="id" field2="name" keyStr="id" />;
    </>
  );
};
