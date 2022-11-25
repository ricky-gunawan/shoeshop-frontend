import axios from "axios";

// admin
export const useImageUploadApi = () => {
  return async (image: FormData) => {
    console.log(image);
    const resp = await axios.post(`https://api.cloudinary.com/v1_1/ricky-assets/upload`, image);
    return resp.data;
  };
};
