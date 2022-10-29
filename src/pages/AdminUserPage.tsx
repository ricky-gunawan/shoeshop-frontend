import { userDummyList } from "../data/userDummyList";
import { DataList } from "../features/admin-dashboard";

type AdminUserPageProps = {};

export const AdminUserPage = ({}: AdminUserPageProps) => {
  return (
    <>
      <DataList data={userDummyList} title1="id" title2="name" field1="_id" field2="name" keyStr="_id" />;
    </>
  );
};
