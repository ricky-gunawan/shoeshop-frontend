import axiosPublic from "@/shared/api/axios";
import useAxiosPrivate from "@/shared/hooks/useAxiosPrivate";
import { AxiosResponse } from "axios";

// public
export const useGetProductsDisplayApi = () => {
  return async () => {
    const resp = await axiosPublic.get<Product[]>(`/api/products-display`);
    return resp.data;
  };
};

export const useGetSingleProductDisplayApi = () => {
  return async (productId: string) => {
    const resp = await axiosPublic.get<Product>(`/api/products-display/${productId}`);
    return resp.data;
  };
};

// customer
export const useGetProductsApi = () => {
  const axiosPrivate = useAxiosPrivate();
  return async () => {
    const resp = await axiosPrivate.get<Product[]>(`/cust-api/products`);
    return resp.data;
  };
};
export const useGetProductApi = () => {
  const axiosPrivate = useAxiosPrivate();
  return async (productId: string) => {
    const resp = await axiosPrivate.get<Product>(`/cust-api/products/${productId}`);
    return resp.data;
  };
};

// admin only
export const useCreateProductAdminApi = () => {
  const axiosPrivate = useAxiosPrivate();
  return async (productData: ProductData) => {
    const resp = await axiosPrivate.post(`/adm-api/products`, { ...productData });
    return resp.data;
  };
};
export const useUpdateProductAdminApi = () => {
  const axiosPrivate = useAxiosPrivate();
  return async (productId: string, productData: ProductData) => {
    const resp = await axiosPrivate.put(`/adm-api/products/${productId}`, { ...productData });
    return resp.data;
  };
};
export const useDeleteProductAdminApi = () => {
  const axiosPrivate = useAxiosPrivate();
  return async (productId: string) => {
    const resp = await axiosPrivate.delete(`/adm-api/products/${productId}`);
    return resp.data;
  };
};
