import useAxiosPrivate from "@/shared/hooks/useAxiosPrivate";
import { AxiosResponse } from "axios";

// customer
export const useGetCartCustomerApi = () => {
  const axiosPrivate = useAxiosPrivate();
  return async () => {
    const resp = await axiosPrivate.get(`/cust-api/carts`);
    return resp.data;
  };
};
export const useUpdateCartCustomerApi = () => {
  const axiosPrivate = useAxiosPrivate();
  return async (items: CartItemsData) => {
    const resp = await axiosPrivate.put(`/cust-api/carts`, { items });
    return resp.data;
  };
};

// admin
export const useGetCartsAdminApi = () => {
  const axiosPrivate = useAxiosPrivate();
  return async () => {
    const resp = await axiosPrivate.get(`/adm-api/carts`);
    return resp.data;
  };
};
export const useGetCartAdminApi = () => {
  const axiosPrivate = useAxiosPrivate();
  return async (userId: string) => {
    const resp = await axiosPrivate.get(`/adm-api/carts/${userId}`);
    return resp.data;
  };
};
export const useUpdateCartAdminApi = () => {
  const axiosPrivate = useAxiosPrivate();
  return async (userId: string, items: CartItemsData) => {
    const resp = await axiosPrivate.put(`/adm-api/carts/${userId}`, { items });
    return resp.data;
  };
};
export const useDeleteCartAdminApi = () => {
  const axiosPrivate = useAxiosPrivate();
  return async (userId: string) => {
    const resp = await axiosPrivate.delete(`/adm-api/carts/${userId}`);
    return resp.data;
  };
};
