const AdminProductPage = () => {
  return (
    <>
      <DataList data={productDummyList} title1="id" title2="name" field1="id" field2="name" keyStr="id" />;
    </>
  );
};

export default AdminProductPage;
