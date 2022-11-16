import useAxiosPrivate from "@/shared/hooks/useAxiosPrivate";
import { AxiosResponse } from "axios";

// customer
export const useGetOrdersCustomerApi = () => {
  const axiosPrivate = useAxiosPrivate();
  return async () => {
    const resp = await axiosPrivate.get(`/cust-api/orders`);
    return resp.data;
  };
};
export const useCreateOrderCustomerApi = () => {
  const axiosPrivate = useAxiosPrivate();
  return async (orderData: OrderData) => {
    const resp = await axiosPrivate.post(`/cust-api/orders`, { ...orderData });
    return resp.data;
  };
};

// admin
export const useGetOrdersAdminApi = () => {
  const axiosPrivate = useAxiosPrivate();
  return async () => {
    const resp = await axiosPrivate.get(`/adm-api/orders`);
    return resp.data;
  };
};
export const useGetOrderAdminApi = () => {
  const axiosPrivate = useAxiosPrivate();
  return async (orderId: string) => {
    const resp = await axiosPrivate.get(`/adm-api/orders/${orderId}`);
    return resp.data;
  };
};
export const useUpdateOrderAdminApi = () => {
  const axiosPrivate = useAxiosPrivate();
  return async (orderId: string, orderData: OrderData) => {
    const resp = await axiosPrivate.put(`/adm-api/orders/${orderId}`, { ...orderData });
    return resp.data;
  };
};
export const useDeleteOrderAdminApi = () => {
  const axiosPrivate = useAxiosPrivate();
  return async (orderId: string) => {
    const resp = await axiosPrivate.delete(`/adm-api/orders/${orderId}`);
    return resp.data;
  };
};
