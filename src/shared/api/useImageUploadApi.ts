import { axiosPrivate } from "@/shared/api/axios";

import { AxiosError } from "axios";

// admin
export const useImageUploadApi = (image: File) => {
  return async () => {
    const resp = await axiosPrivate.post(`/api/upload/`, { image });
    return resp.data;
  };
};
