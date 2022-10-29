import axios from "axios";

export const createOrderApi = (orderData, token) => {
  return axios.post(`/api/orders`, { ...orderData }, { headers: { authorization: `Bearer ${token}` } });
};

export const getOrdersUserApi = (token) => {
  return axios.get(`/api/orders`, { headers: { authorization: `Bearer ${token}` } });
};

// admin only
export const getOrderApi = (orderId, token) => {
  return axios.get(`/api/orders/${orderId}`, { headers: { authorization: `Bearer ${token}` } });
};

// admin only
export const getOrdersAdminApi = (token) => {
  return axios.get(`/api/orders/admin`, { headers: { authorization: `Bearer ${token}` } });
};

// admin only
export const updateOrderApi = (orderId, orderData, token) => {
  return axios.put(`/api/orders/${orderId}`, { ...orderData }, { headers: { authorization: `Bearer ${token}` } });
};

// admin only
export const deleteOrderApi = (orderId, token) => {
  return axios.delete(`/api/orders/${orderId}`, { headers: { authorization: `Bearer ${token}` } });
};
