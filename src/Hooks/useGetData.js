import axios from "axios";
import { useQuery } from "react-query";
import { baseURL } from "../../config"


const fetchData = async (dataName) => {
  const response = await axios.get(`${baseURL}/${dataName}`);
  return response.data;
};

export const useGetData = (dataName) => {
  const { isLoading, error, data } = useQuery(
    ["getData", dataName],
    () => fetchData(dataName),
    {
      onError: (error) => {
        console.error("Error fetching data: ", error.message);
      }
    }
  );

  return { isLoading, error, data };
};