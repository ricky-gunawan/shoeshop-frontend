const AdminUserPage = () => {
  return (
    <>
      <DataList data={userDummyList} title1="id" title2="name" field1="_id" field2="name" keyStr="_id" />;
    </>
  );
};

export default AdminUserPage;
