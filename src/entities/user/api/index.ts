import axios from "axios";

export const loginUserApi = (userData) => {
  return axios.post(`/api/users/login`, { ...userData });
};

export const createUserApi = (userData) => {
  return axios.post(`/api/users`, { ...userData });
};

export const updateUserApi = (userId, userData, token) => {
  return axios.put(`/api/users/${userId}`, { ...userData }, { headers: { authorization: `Bearer ${token}` } });
};

// admin only
export const getUserApi = (userId, token) => {
  return axios.get(`/api/users/${userId}`, { headers: { authorization: `Bearer ${token}` } });
};

// admin only
export const getUsersApi = (token) => {
  return axios.get(`/api/users`, { headers: { authorization: `Bearer ${token}` } });
};

// admin only
export const deleteUserApi = (userId, token) => {
  return axios.delete(`/api/users/${userId}`, { headers: { authorization: `Bearer ${token}` } });
};
