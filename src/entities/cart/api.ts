import useAxiosPrivate from "@/shared/hooks/useAxiosPrivate";

// customer
export const useGetCustomerCartApi = () => {
  const axiosPrivate = useAxiosPrivate();
  return async () => {
    const resp = await axiosPrivate.get<CartItems>(`/cust-api/carts`);
    return resp.data;
  };
};
export const useUpdateCustomerCartApi = () => {
  const axiosPrivate = useAxiosPrivate();
  return async (items: CartItemsData) => {
    const resp = await axiosPrivate.put(`/cust-api/carts`, { items });
    return resp.data;
  };
};

// admin
export const useGetAdminCartsApi = () => {
  const axiosPrivate = useAxiosPrivate();
  return async () => {
    const resp = await axiosPrivate.get(`/adm-api/carts`);
    return resp.data;
  };
};
export const useGetAdminCartApi = () => {
  const axiosPrivate = useAxiosPrivate();
  return async (userId: string) => {
    const resp = await axiosPrivate.get(`/adm-api/carts/${userId}`);
    return resp.data;
  };
};
export const useUpdateAdminCartApi = () => {
  const axiosPrivate = useAxiosPrivate();
  return async (userId: string, items: CartItemsData) => {
    const resp = await axiosPrivate.put(`/adm-api/carts/${userId}`, { items });
    return resp.data;
  };
};
export const useDeleteAdminCartApi = () => {
  const axiosPrivate = useAxiosPrivate();
  return async (userId: string) => {
    const resp = await axiosPrivate.delete(`/adm-api/carts/${userId}`);
    return resp.data;
  };
};
