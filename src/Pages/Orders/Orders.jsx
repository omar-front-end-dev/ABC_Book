import { Box, Container } from "@mui/material"
import { useAuthorizedGetData } from "../../Hooks/useAuthorizedGetData"

export const Orders = () => {
  const { data: orderList } = useAuthorizedGetData("orders");
  console.log(orderList);
  return (
    <Box>
      <Container maxWidth="lg">
        
      </Container>
    </Box>
  )
}

