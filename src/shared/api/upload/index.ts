import axios from "axios";

export const imageUploadApi = (image, token) => {
  return axios.post(`/api/upload/`, { image }, { headers: { authorization: `Bearer ${token}` } });
};
