import { Box } from "@mui/material";
import { IsLoading, ShoppingByCategoryContent } from "../../Components/index";
import { useGetData } from "../../Hooks/useGetData";

export const ShoppingByCategory = () => {
  const { data, isLoading } = useGetData("categories");

  return (
    <Box>
      {isLoading ? (
        <IsLoading />
      ) : (
        <ShoppingByCategoryContent categories={data?.data} />
      )}
    </Box>
  );
};
