import { Box, Container } from "@mui/material";
import { useGetData } from "../../Hooks/useGetData";
export const Shopping = () => {
  const { data, isLoading } = useGetData("books?category=quis&minPrice=500&maxPrice=1000&sort=low");


  console.log(data);

  return (
    <Box sx={{}}>
      <Container maxWidth="lg">shopping</Container>
    </Box>
  );
};
