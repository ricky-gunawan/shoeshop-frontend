import { ChangeEvent, useState } from "react";
import { userDummyList } from "../../../data/userDummyList";

type AdminEditUserProps = {};

const AdminEditUser = ({}: AdminEditUserProps) => {
  const [user, setUser] = useState(userDummyList[0]);

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const elemName = e.target.name;
    const value = e.target.value;
    setUser((prev) => ({ ...prev, [elemName]: value }));
  };

  return (
    <form className="mx-auto max-w-2xl">
      <div>
        <label className="ml-1 block">name</label>
        <input value={user.name} onChange={handleFormChange} disabled type="text" name="name" id="admin_user_name" className="mb-4 w-full rounded-sm border border-slate-300 focus:border-green-700 focus:ring-green-700" />
      </div>
      <div>
        <label className="ml-1 block">email</label>
        <input value={user.email} onChange={handleFormChange} required type="text" name="email" id="admin_user_email" className="mb-4 w-full rounded-sm border border-slate-300 focus:border-green-700 focus:ring-green-700" />
      </div>
      <div>
        <label className="ml-1 block">password</label>
        <input value={user.password} onChange={handleFormChange} required type="text" name="password" id="admin_user_password" className="mb-4 w-full rounded-sm border border-slate-300 focus:border-green-700 focus:ring-green-700" />
      </div>
      <div>
        <label className="ml-1 block">address</label>
        <input value={user.address} onChange={handleFormChange} required type="text" name="address" id="admin_user_address" className="mb-4 w-full rounded-sm border border-slate-300 focus:border-green-700 focus:ring-green-700" />
      </div>
      <input type="submit" value="save" className="mx-auto mt-8 block w-40 cursor-pointer rounded-md bg-green-500 py-1 text-center font-semibold uppercase text-neutral-50 hover:bg-green-600" />
    </form>
  );
};

export default AdminEditUser;
