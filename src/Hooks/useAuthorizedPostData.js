import axios from 'axios';
import { baseURL } from '../../config';
import { useMutation } from 'react-query';


const postData = async ({ endpoint, data }) => {
  const token = localStorage.getItem('user_data');
  

  const response = await axios.post(
    `${baseURL}/${endpoint}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const useAuthorizedPostData = (endpoint) => {
  return useMutation((data) => postData({ endpoint, data }));
};