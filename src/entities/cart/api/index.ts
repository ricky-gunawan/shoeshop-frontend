import axios from "axios";

export const getCartApi = (userId, token) => {
  return axios.get(`/api/carts/${userId}`, { headers: { authorization: `Bearer ${token}` } });
};

export const updateCartApi = (user, items, token) => {
  return axios.put(`/api/carts`, { user, items }, { headers: { authorization: `Bearer ${token}` } });
};

// admin only
export const deleteCartApi = (userId: string, token: string) => {
  return axios.delete(`/api/carts/${userId}`, { headers: { authorization: `Bearer ${token}` } });
};

// admin only
export const getCartsApi = (token) => {
  return axios.get(`/api/carts`, { headers: { authorization: `Bearer ${token}` } });
};
