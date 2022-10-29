import axios from "axios";

export const getProductApi = (productId: string) => {
  return axios.get(`/api/products/${productId}`);
};
export const getProductsApi = async () => {
  const resp = await axios.get(`/api/products`);
  return resp.data;
};

// admin only
export const createProductApi = (productData: ProductData, token: string) => {
  return axios.post(`/adm-api/products`, { ...productData }, { headers: { authorization: `Bearer ${token}` } });
};
export const updateProductApi = (productId: string, productData: ProductData, token: string) => {
  return axios.put(`/adm-api/products/${productId}`, { ...productData }, { headers: { authorization: `Bearer ${token}` } });
};
export const deleteProductApi = (productId: string, token: string) => {
  return axios.delete(`/adm-api/products/${productId}`, { headers: { authorization: `Bearer ${token}` } });
};
