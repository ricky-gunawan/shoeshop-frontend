import { ChangeEvent, useState } from "react";

type AdminEditProductProps = {};

const AdminEditProduct = ({}: AdminEditProductProps) => {
  const [product, setProduct] = useState(productDummyList[0]);

  const handleFormChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const elemName = e.target.name;
    const value = elemName === "price" ? currencyNumberToString(currencyStringToNumber(e.target.value)) : e.target.value;
    setProduct((prev) => ({ ...prev, [elemName]: value }));
  };

  return (
    <form className="mx-auto max-w-2xl">
      <div>
        <label className="ml-1 block">id</label>
        <input
          value={product.id}
          onChange={handleFormChange}
          disabled
          type="text"
          name="id"
          id="admin_product_id"
          className="mb-4 w-full rounded-sm border border-slate-300 focus:border-green-700 focus:ring-green-700 disabled:bg-slate-200"
        />
      </div>
      <div>
        <label className="ml-1 block">image</label>
        <input onChange={handleFormChange} required={product.img ? false : true} type="file" accept=".jpg,.jpeg,.png,.webp" name="image" id="admin_product_image" className="mb-4 block" />
      </div>
      <div>
        <label className="ml-1 block">name</label>
        <input value={product.name} onChange={handleFormChange} required type="text" name="name" id="admin_product_name" className="mb-4 w-full rounded-sm border border-slate-300 focus:border-green-700 focus:ring-green-700" />
      </div>
      <div>
        <label className="ml-1 block">price</label>
        <input value={product.price} onChange={handleFormChange} required type="text" name="price" id="admin_product_price" className="mb-4 w-full rounded-sm border border-slate-300 focus:border-green-700 focus:ring-green-700" />
      </div>
      <div>
        <label className="ml-1 block">brand</label>
        <input value={product.brand} onChange={handleFormChange} required type="text" name="brand" id="admin_product_brand" className="mb-4 w-full rounded-sm border border-slate-300 focus:border-green-700 focus:ring-green-700" />
      </div>
      <div>
        <label className="ml-1 block">color</label>
        <input value={product.color} onChange={handleFormChange} required type="text" name="color" id="admin_product_color" className="mb-4 w-full rounded-sm border border-slate-300 focus:border-green-700 focus:ring-green-700" />
      </div>
      <div>
        <label className="ml-1 block">description</label>
        <textarea value={product.description} onChange={handleFormChange} required name="description" id="admin_product_description" className="h-20 w-full rounded-sm border border-slate-300 focus:border-green-700 focus:ring-green-700" />
      </div>
      <input type="submit" value="save" className="mx-auto mt-8 block w-40 cursor-pointer rounded-md bg-green-500 py-1 text-center font-semibold uppercase text-neutral-50 hover:bg-green-600" />
    </form>
  );
};

export default AdminEditProduct;
