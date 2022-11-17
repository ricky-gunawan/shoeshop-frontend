const AdminOrderPage = () => {
  return (
    <>
      <DataList data={orderDummyList} title1="id" title2="user" field1="_id" field2="user" keyStr="_id" />;
    </>
  );
};

export default AdminOrderPage;
