import { useTheme } from "@emotion/react";
import {
  Box,
  Container,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useAuthorizedGetData } from "../../Hooks/useAuthorizedGetData";
import { CartList, CartPayment, IfIsEmpty, IsLoading } from "../../Components";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
export const Cart = () => {
  const theme = useTheme();
  const { data: cartData, isLoading } = useAuthorizedGetData("cart");

  if (cartData?.data.length == 0 || cartData?.data.length == undefined) {
    return (
      <IfIsEmpty
        icon={<RemoveShoppingCartOutlinedIcon sx={{ fontSize: "50px" }} />}
        text={"Cart list is empty"}
      />
    );
  }
  if (isLoading) {
    return <IsLoading />;
  }

  return (
    <Box>
      <Container maxWidth="lg">
        <Box>
          <>
            <Box sx={{ py: theme.palette.sectionPaddingY.main }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  mb: "20px",
                  color: theme.palette.secondTextColor.main,
                }}
              >
                <Typography sx={{ fontSize: "30px" }}>Cart Page </Typography>
                <LocalMallOutlinedIcon sx={{ fontSize: "30px" }} />
              </Box>
              <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{
                          color: theme.palette.mainColor.main,
                          fontSize: "16px",
                        }}
                        align="center"
                      >
                        Book Id
                      </TableCell>
                      <TableCell
                        sx={{
                          color: theme.palette.mainColor.main,
                          fontSize: "16px",
                        }}
                        align="center"
                      >
                        Book Price
                      </TableCell>
                      <TableCell
                        sx={{
                          color: theme.palette.mainColor.main,
                          fontSize: "16px",
                        }}
                        align="center"
                      >
                        Book Quantity
                      </TableCell>
                      <TableCell
                        sx={{
                          color: theme.palette.mainColor.main,
                          fontSize: "16px",
                        }}
                        align="center"
                      >
                        Show book
                      </TableCell>
                      <TableCell
                        sx={{
                          color: theme.palette.mainColor.main,
                          fontSize: "16px",
                        }}
                        align="center"
                      >
                        Deletion control
                      </TableCell>
                      <TableCell
                        sx={{
                          color: theme.palette.mainColor.main,
                          fontSize: "16px",
                        }}
                        align="center"
                      >
                        Total Price
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <CartList cartList={cartData?.data || null} />
                </Table>
              </TableContainer>
            </Box>

            <Box sx={{ py: "20px", borderTop: "1px solid #ddd" }}>
              <PayPalScriptProvider
                options={{
                  "client-id":
                    "ATt2NUQAHAcFGUxV6pyLnq9ZTrZkAnjYf5tFAkor98oSh4nSj2lWEl-b-WbUld6vPpG7bQN3d2jZ4sBZ",
                }}
              >
                <CartPayment />
              </PayPalScriptProvider>
            </Box>
          </>
        </Box>
      </Container>
    </Box>
  );
};
