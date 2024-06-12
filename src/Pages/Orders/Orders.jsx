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
import { useParams } from "react-router-dom";
import { IfIsEmpty, IsLoading, OrderList, ShowOrder } from "../../Components";
import { useTheme } from "@emotion/react";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import { useSelector } from "react-redux";

export const Orders = () => {
  const theme = useTheme();
  const { data: orderList, isLoading } = useAuthorizedGetData("orders");
  const { orderPage } = useParams();
  const { isAuth } = useSelector(state => state.authReducer)
  

  return (
    <Box>
      <Container maxWidth="lg">
        <Box>
          {orderList?.data.length == 0 || !isAuth ? (
            <IfIsEmpty
              icon={<ChecklistRtlIcon sx={{ fontSize: "50px" }} />}
              text={"Wishlist list is empty"}
            />
          ) : (
            <>
              {isLoading ? (
                <IsLoading />
              ) : (
                <>
                  {orderPage !== "order-page" ? (
                    <ShowOrder/>
                  ) : (
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
                        <Typography sx={{ fontSize: "30px" }}>
                          Order Last Page
                        </Typography>
                        <ChecklistRtlIcon sx={{ fontSize: "30px" }} />
                      </Box>
                      <TableContainer>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                          <TableHead>
                            <TableRow>
                              <TableCell
                                sx={{
                                  color: theme.palette.mainColor.main,
                                  fontSize: "16px",
                                  minWidth: "160px",
                                }}
                                align="center"
                              >
                                Name
                              </TableCell>
                              <TableCell
                                sx={{
                                  color: theme.palette.mainColor.main,
                                  fontSize: "16px",
                                  minWidth: "160px",
                                }}
                                align="center"
                              >
                                Email
                              </TableCell>
                              <TableCell
                                sx={{
                                  color: theme.palette.mainColor.main,
                                  fontSize: "16px",
                                  minWidth: "160px",
                                }}
                                align="center"
                              >
                                Address
                              </TableCell>
                              <TableCell
                                sx={{
                                  color: theme.palette.mainColor.main,
                                  fontSize: "16px",
                                  minWidth: "160px",
                                }}
                                align="center"
                              >
                                Phone
                              </TableCell>
                              <TableCell
                                sx={{
                                  color: theme.palette.mainColor.main,
                                  fontSize: "16px",
                                  minWidth: "160px",
                                }}
                                align="center"
                              >
                                Total Price
                              </TableCell>
                              <TableCell
                                sx={{
                                  color: theme.palette.mainColor.main,
                                  fontSize: "16px",
                                  minWidth: "160px",
                                }}
                                align="center"
                              >
                                View the order
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <OrderList orders={orderList?.data} />
                        </Table>
                      </TableContainer>
                    </Box>
                  )}
                </>
              )}
            </>
          )}
        </Box>
      </Container>
    </Box>
  );
};
