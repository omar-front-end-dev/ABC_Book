import { baseURL } from "../../config";

import { useMutation } from "react-query";
import axios from "axios";

const postData = async (url, data) => {
  const response = await axios.post(url, data);
  return response.data;
};

export const usePostData = (endpoint) => {
  const mutation = useMutation((data) =>
    postData(`${baseURL}/${endpoint}`, data)
  );

  return {
    mutate: mutation.mutate,
    isLoading: mutation.isLoading,
    error: mutation.error,
    data: mutation.data,
    isSuccess: mutation.isSuccess,
  };
};
