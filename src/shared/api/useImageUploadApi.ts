import { axiosPrivate } from "@/shared/api/axios";

// admin
export const useImageUploadApi = () => {
  return async (image: FormData) => {
    console.log(image);
    const resp = await axiosPrivate.post(`/adm-api/upload/`, image);
    return resp.data;
  };
};
