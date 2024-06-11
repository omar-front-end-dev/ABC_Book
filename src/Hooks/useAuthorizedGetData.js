import { useQuery } from 'react-query';
import axios from 'axios';
import { baseURL } from "../../config"

const fetchDataItems = async (endpoint) => {
  const token = localStorage.getItem('user_data');
  
  const response = await axios.get(`${baseURL}/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const useAuthorizedGetData = (endpoint) => {
  return useQuery(['data', endpoint], () => fetchDataItems(endpoint));
};