import { ChangeEvent, useState } from "react";

type profileProps = {};

export const Profile = ({}: profileProps) => {
  const [editProfile, setEditProfile] = useState(false);
  const [form, setForm] = useState({
    name: "name",
    email: "email",
    password_1: "",
    password_2: "",
    address: "address",
  });

  const handleFormChanges = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <form className="mx-auto max-w-2xl">
      <div className="mb-2">
        <label className="ml-1 block">name</label>
        <input
          value={form.name}
          onChange={handleFormChanges}
          disabled={!editProfile}
          type="text"
          name="name"
          id="edit_name"
          className="w-full rounded-sm border border-slate-300 focus:border-green-700 focus:ring-green-700 disabled:bg-slate-200"
        />
      </div>
      <div className="mb-2">
        <label className="ml-1 block">email</label>
        <input
          value={form.email}
          onChange={handleFormChanges}
          disabled={!editProfile}
          type="email"
          name="email"
          id="edit_email"
          className="w-full rounded-sm border border-slate-300 focus:border-green-700 focus:ring-green-700 disabled:bg-slate-200"
        />
      </div>
      <div className="mb-2">
        <label className="ml-1 block">address</label>
        <textarea
          value={form.address}
          onChange={handleFormChanges}
          disabled={!editProfile}
          name="address"
          id="edit_address"
          className="h-20 w-full rounded-sm border border-slate-300 focus:border-green-700 focus:ring-green-700 disabled:bg-slate-200"
        />
      </div>
      <div className="mb-2">
        <label className="ml-1 block">password</label>
        <input
          value={form.password_1}
          onChange={handleFormChanges}
          disabled={!editProfile}
          type="password"
          name="password_1"
          id="edit_password_1"
          className="w-full rounded-sm border border-slate-300 placeholder:text-white focus:border-green-700 focus:ring-green-700 disabled:bg-slate-200 disabled:placeholder:text-black"
          placeholder="*********"
        />
      </div>
      <div className="mb-2">
        <label className="ml-1 block">confirm password</label>
        <input
          value={form.password_2}
          onChange={handleFormChanges}
          disabled={!editProfile}
          type="password"
          name="password_2"
          id="edit_password_2"
          className="w-full rounded-sm border border-slate-300 focus:border-green-700 focus:ring-green-700 disabled:bg-slate-200"
        />
      </div>
      <button className="mx-auto mt-8 block w-32 cursor-pointer rounded-md bg-green-700 py-1 text-center font-semibold uppercase text-neutral-50 hover:bg-green-800">Edit</button>
      <div className="hidden justify-evenly">
        <button className="mt-8 block w-32 cursor-pointer rounded-md bg-red-700 py-1 text-center font-semibold uppercase text-neutral-50 hover:bg-red-800">Cancel</button>
        <button className="mt-8 block w-32 cursor-pointer rounded-md bg-green-700 py-1 text-center font-semibold uppercase text-neutral-50 hover:bg-green-800">Save</button>
      </div>
    </form>
  );
};
