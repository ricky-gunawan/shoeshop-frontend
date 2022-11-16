import useAxiosPrivate from "@/shared/hooks/useAxiosPrivate";
import { AxiosResponse } from "axios";

// customer
export const useUpdateUserCustomerApi = () => {
  const axiosPrivate = useAxiosPrivate();
  return async (userData: UserUpdateData) => {
    const resp = await axiosPrivate.put(`/cust-api/users`, { ...userData });
    return resp.data;
  };
};

// admin
export const useGetUsersAdminApi = () => {
  const axiosPrivate = useAxiosPrivate();
  return async () => {
    const resp = await axiosPrivate.get(`/adm-api/users`);
    return resp.data;
  };
};
export const useGetUserAdminApi = () => {
  const axiosPrivate = useAxiosPrivate();
  return async (userId: string) => {
    const resp = await axiosPrivate.get(`/adm-api/users/${userId}`);
    return resp.data;
  };
};
export const useUpdateUserAdminApi = () => {
  const axiosPrivate = useAxiosPrivate();
  return async (userId: string, userData: UserUpdateData) => {
    const resp = await axiosPrivate.put(`/adm-api/users/${userId}`, { ...userData });
    return resp.data;
  };
};
export const useDeleteUserAdminApi = () => {
  const axiosPrivate = useAxiosPrivate();
  return async (userId: string) => {
    const resp = await axiosPrivate.delete(`/adm-api/users/${userId}`);
    return resp.data;
  };
};
